import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Send } from 'lucide-react';
import { services } from '@/data/services';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ServiceRequestPage = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "¡Solicitud enviada!",
        description: `Hemos recibido tu interés en ${service?.title}. Nos pondremos en contacto contigo pronto.`,
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 md:pt-24 lg:pt-48 container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Servicio no encontrado</h1>
          <p className="text-muted-foreground mb-6">El servicio que buscas no existe.</p>
          <Link to="/#servicios" className="text-primary hover:underline">Volver a servicios</Link>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Solicitar Información: {service.title} | Trazo.digital</title>
        <meta name="description" content={`Solicita más información sobre nuestro servicio de ${service.title}.`} />
      </Helmet>
      <Header />
      <main className="pt-20 md:pt-24 lg:pt-48">
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Solicitar Información</h1>
              <p className="text-xl text-muted-foreground">Estás a un paso de potenciar tu proyecto con nuestro servicio de <span className="text-primary font-semibold">{service.title}</span>.</p>
            </div>
            
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-2xl">Completa tus datos</CardTitle>
                <p className="text-muted-foreground">
                  Nos pondremos en contacto contigo para darte todos los detalles.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nombre completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="+34 123 456 789"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      ¿Algo más que debamos saber?
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="form-input resize-none"
                      placeholder="Cuéntanos más sobre tu proyecto o tus dudas..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full glow-primary" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Solicitar Información
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ServiceRequestPage;
```tsx
// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ServiceDetail from "./pages/ServiceDetail";
import ServiceRequestPage from "./pages/ServiceRequestPage"; // Import the new page

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servicios" element={<Navigate to="/#servicios" replace />} />
            <Route path="/portfolio" element={<Navigate to="/#portfolio" replace />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/servicios/:slug" element={<ServiceDetail />} />
            <Route path="/solicitud-servicio/:slug" element={<ServiceRequestPage />} /> {/* Add the new route */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
```tsx
// src/components/Services.tsx
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, useNavigate } from 'react-router-dom';
import { services } from '@/data/services';

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros 
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent"> Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones digitales completas diseñadas para hacer crecer tu negocio en el mundo online
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service) => (
            <Card key={service.slug} className="service-card h-full flex flex-col">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3">
                  <Link to={`/servicios/${service.slug}`} className="hover:underline">
                    {service.title}
                  </Link>
                </CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div>
                  {/* Pricing */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-primary">Precios:</h4>
                    <ul className="space-y-2">
                      {service.pricing.map((price, priceIndex) => (
                        <li key={priceIndex} className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">{price.type}</span>
                          <span className="font-semibold text-foreground">{price.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-primary">Incluye:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full group mt-auto"
                  onClick={() => navigate(`/solicitud-servicio/${service.slug}`)}
                >
                  Solicitar información
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-card border border-border mb-6">
            <span className="text-sm text-muted-foreground">💡 ¿Necesitas algo específico? Creamos soluciones personalizadas</span>
          </div>
          <Button 
            size="lg" 
            className="glow-primary"
            onClick={() => navigate('/contacto')}
          >
            Hablemos de tu proyecto
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
