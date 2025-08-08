import Header from '@/components/Header';
import Services from '@/components/Services';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const ServicesPage = () => {
  const location = useLocation();
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}${location.pathname}` : '';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Servicios de Diseño Web y Marketing | Trazo.digital</title>
        <meta name="description" content="Servicios de diseño web, RRSS, SEO y automatización para potenciar tu negocio." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <Header />
      <main>
        <h1 className="sr-only">Servicios de Diseño Web y Marketing</h1>
        <Services />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ServicesPage;
