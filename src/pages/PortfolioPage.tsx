import Header from '@/components/Header';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const PortfolioPage = () => {
  const location = useLocation();
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}${location.pathname}` : '';

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Portafolio de Proyectos Web | Trazo.digital</title>
        <meta name="description" content="Explora nuestro portafolio de sitios web, e-commerce y proyectos digitales exitosos." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <Header />
      <main>
        <h1 className="sr-only">Portafolio de Proyectos Web</h1>
        <Portfolio />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default PortfolioPage;
