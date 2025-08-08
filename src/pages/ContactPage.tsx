import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const ContactPage = () => {
  const location = useLocation();
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}${location.pathname}` : '';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contacto | Trazo.digital</title>
        <meta name="description" content="Ponte en contacto con Trazo.digital para solicitar presupuesto o asesoría." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <Header />
      <main className="pt-20 md:pt-24 lg:pt-48">
        <h1 className="sr-only">Contacto</h1>
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ContactPage;
