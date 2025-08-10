import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { smoothScrollToElement } from '@/lib/smoothScroll';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        smoothScrollToElement(el, { duration: 1100 });
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24 lg:pt-48">
        <Hero />
        <Services />
        <Portfolio />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
