import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import SchemaOrg from '@/components/SchemaOrg';

const PrivacyPolicy = () => {
  const location = useLocation();
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}${location.pathname}` : '';

  const schema = {
    name: 'Política de Privacidad | Trazo.digital',
    description:
      'Política de Privacidad de Trazo Studio Digital S.L. (España). Información sobre datos del formulario y cookies.',
    url: canonical,
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Política de Privacidad | Trazo.digital</title>
        <meta
          name="description"
          content="Política de Privacidad de Trazo Studio Digital S.L. (España). Información sobre datos del formulario y cookies."
        />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <SchemaOrg schema={schema} type="PrivacyPolicy" />
      <Header />
      <main className="pt-24 md:pt-32">
        <article className="container mx-auto px-4 py-12 prose prose-invert max-w-4xl">
          <h1>Política de Privacidad</h1>

          <section>
            <h2>1. Responsable del tratamiento</h2>
            <p>
              Responsable: <strong>Trazo Studio Digital S.L.</strong><br />
              País: <strong>España</strong><br />
              Contacto: <a href="mailto:hola@trazo.digital">hola@trazo.digital</a>
            </p>
          </section>

          <section>
            <h2>2. Datos que recogemos</h2>
            <p>
              A través del formulario de contacto solicitamos los siguientes datos personales:
            </p>
            <ul>
              <li>Nombre y apellidos</li>
              <li>Email</li>
              <li>Teléfono</li>
            </ul>
          </section>

          <section>
            <h2>3. Finalidad y base legal</h2>
            <ul>
              <li>Gestionar consultas y solicitudes de información.</li>
              <li>Enviar comunicaciones relacionadas con tu solicitud.</li>
              <li>
                Enviar una <strong>auto‑respuesta inmediata</strong> confirmando la recepción de tu mensaje.
              </li>
            </ul>
            <p>
              La base legal es tu <strong>consentimiento</strong> al enviar el formulario.
            </p>
          </section>

          <section>
            <h2>4. Destinatarios y encargados</h2>
            <p>
              No cedemos tus datos a terceros, salvo obligación legal. Para el alojamiento y envío de
              comunicaciones utilizamos proveedores tecnológicos que actúan como encargados del tratamiento:
            </p>
            <ul>
              <li>Supabase (alojamiento y funciones serverless).</li>
              <li>Resend (plataforma de envío de emails para la auto‑respuesta).</li>
            </ul>
          </section>

          <section>
            <h2>5. Conservación</h2>
            <p>
              Conservaremos tus datos el tiempo necesario para atender tu solicitud y, en su caso,
              mientras puedan derivarse responsabilidades legales.
            </p>
          </section>

          <section>
            <h2>6. Derechos</h2>
            <p>
              Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación del
              tratamiento y portabilidad escribiendo a <a href="mailto:hola@trazo.digital">hola@trazo.digital</a>.
              Si lo consideras, puedes presentar una reclamación ante la autoridad de control competente en España.
            </p>
          </section>

          <section>
            <h2>7. Cookies</h2>
            <p>
              Utilizamos cookies técnicas y, en su caso, analíticas para mejorar la experiencia de usuario y
              medir el rendimiento del sitio. Puedes configurar tu navegador para bloquearlas o eliminarlas.
            </p>
          </section>

          <section>
            <h2>8. Actualizaciones</h2>
            <p>
              Podemos actualizar esta política para reflejar cambios legales o técnicos. Te recomendamos
              revisarla periódicamente.
            </p>
          </section>
        </article>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default PrivacyPolicy;
