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
        <h1 style="font-size: 20px;">¡Gracias por contactar con Trazo Studio Digital S.L.!</h1>
        <p>Hola ${name || ''}, hemos recibido tu mensaje correctamente.</p>
        <p>En breve te responderemos a <strong>${email}</strong>. Si necesitas añadir algo más, simplemente responde a este correo.</p>
        ${phone ? `<p>Teléfono facilitado: <strong>${phone}</strong></p>` : ''}
        ${message ? `<p style="white-space: pre-wrap; background:#f7f7f7; padding:12px; border-radius:8px;">${message}</p>` : ''}
        <p style="margin-top: 24px;">Un saludo,<br/>El equipo de Trazo.digital</p>
        <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
        <p style="font-size:12px; color:#555;">Has recibido este email porque enviaste el formulario de contacto en trazo.digital.</p>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: "Trazo.digital <onboarding@resend.dev>",
      to: [email],
      subject: "Hemos recibido tu mensaje",
      html,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-confirmation function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
