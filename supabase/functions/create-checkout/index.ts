import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface CheckoutRequest {
  serviceSlug: string;
  pricingType: string;
  amount: number;
  customerEmail: string;
  customerName?: string;
  customerPhone?: string;
  customerAddress?: {
    line1: string;
    line2?: string;
    city: string;
    state?: string;
    postal_code: string;
    country: string;
  };
}

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : '';
  console.log(`[CREATE-CHECKOUT] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) throw new Error("STRIPE_SECRET_KEY is not set");
    logStep("Stripe key verified");

    const requestData: CheckoutRequest = await req.json();
    const { serviceSlug, pricingType, amount, customerEmail, customerName, customerPhone, customerAddress } = requestData;
    
    logStep("Request data received", { serviceSlug, pricingType, amount, customerEmail });

    if (!serviceSlug || !pricingType || !amount || !customerEmail) {
      throw new Error("Missing required fields: serviceSlug, pricingType, amount, customerEmail");
    }

    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });

    // Check if customer already exists
    const customers = await stripe.customers.list({ email: customerEmail, limit: 1 });
    let customerId;
    
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
      logStep("Found existing customer", { customerId });
    } else {
      // Create new customer
      const customer = await stripe.customers.create({
        email: customerEmail,
        name: customerName,
        phone: customerPhone,
        address: customerAddress,
      });
      customerId = customer.id;
      logStep("Created new customer", { customerId });
    }

    // Determine if it's a one-time payment or subscription based on the service
    const isRecurring = !serviceSlug.includes('diseno-desarrollo-web') && !pricingType.includes('Setup inicial');
    
    let sessionConfig: any = {
      customer: customerId,
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `${serviceSlug} - ${pricingType}`,
              description: `Servicio: ${serviceSlug}, Plan: ${pricingType}`,
            },
            unit_amount: Math.round(amount * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      success_url: `${req.headers.get("origin")}/pago-exitoso?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/pago-cancelado`,
      billing_address_collection: 'required',
      phone_number_collection: {
        enabled: true,
      },
      invoice_creation: {
        enabled: true,
      },
    };

    if (isRecurring) {
      // For recurring payments (annual subscriptions)
      sessionConfig.mode = "subscription";
      sessionConfig.line_items[0].price_data.recurring = {
        interval: "year",
      };
      logStep("Creating subscription checkout", { interval: "year" });
    } else {
      // For one-time payments
      sessionConfig.mode = "payment";
      logStep("Creating one-time payment checkout");
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);
    
    logStep("Checkout session created", { sessionId: session.id, url: session.url });

    return new Response(JSON.stringify({ 
      url: session.url,
      sessionId: session.id 
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in create-checkout", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});