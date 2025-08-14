import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ReplyEmailRequest {
  to: string;
  subject: string;
  message: string;
  clientName?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to, subject, message, clientName }: ReplyEmailRequest = await req.json();

    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, sans-serif; color: #111;">
        <h1 style="font-size: 20px;">Respuesta de Trazo Studio Digital S.L.</h1>
        ${clientName ? `<p>Hola ${clientName},</p>` : '<p>Hola,</p>'}
        <div style="white-space: pre-wrap; line-height: 1.6; margin: 20px 0;">
          ${message}
        </div>
        <p style="margin-top: 24px;">
          Si tienes alguna pregunta adicional, no dudes en responder a este correo.
        </p>
        <p style="margin-top: 24px;">
          Un saludo,<br/>
          El equipo de Trazo.digital
        </p>
        <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
        <p style="font-size:12px; color:#555;">
          Trazo Studio Digital S.L.<br/>
          Web: <a href="https://trazo.digital" style="color: #2563eb;">trazo.digital</a>
        </p>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: "Trazo.digital <onboarding@resend.dev>",
      to: [to],
      subject: subject,
      html,
    });

    console.log("Reply email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-reply function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);