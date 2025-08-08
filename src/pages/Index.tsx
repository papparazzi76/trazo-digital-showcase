import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24 lg:pt-48">
        <Hero />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
