import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactEmailRequest = await req.json();

    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, sans-serif; color: #111;">
        <h1 style="font-size: 20px;">Nueva consulta desde trazo.digital</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
        ${message ? `
          <p><strong>Mensaje:</strong></p>
          <div style="white-space: pre-wrap; background:#f7f7f7; padding:12px; border-radius:8px; margin: 12px 0;">
            ${message}
          </div>
        ` : ''}
        <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
        <p style="font-size:12px; color:#555;">
          Para responder a esta consulta, simplemente responde a este email o contacta directamente a ${email}
        </p>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: "Trazo.digital <onboarding@resend.dev>",
      to: ["carlos@arcasl.es"], // Email del administrador
      subject: `Nueva consulta de ${name} - trazo.digital`,
      html,
      reply_to: email, // Para que al responder se responda directamente al cliente
    });

    console.log("Admin notification sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-admin-notification function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);