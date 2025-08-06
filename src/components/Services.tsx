import { Globe, Share2, Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Globe,
      title: "Diseño y Desarrollo Web",
      description: "Creamos páginas web modernas, responsivas y optimizadas para convertir visitantes en clientes.",
      pricing: [
        { type: "Web básica", price: "desde 250 €" },
        { type: "Web profesional", price: "desde 650 €" },
        { type: "Web con tienda online", price: "desde 990 €" }
      ],
      features: ["Diseño responsive", "Optimización SEO básica", "Panel de administración", "Hosting incluido"]
    },
    {
      icon: Share2,
      title: "Gestión Integral de RRSS",
      description: "Gestionamos todas tus redes sociales con contenido estratégico que conecta con tu audiencia.",
      pricing: [
        { type: "Plan básico", price: "desde 195 €/mes" },
        { type: "Plan avanzado", price: "desde 395 €/mes" },
        { type: "Plan premium", price: "desde 595 €/mes" }
      ],
      features: ["Contenido personalizado", "Programación de posts", "Análisis de métricas", "Gestión de comunidad"]
    },
    {
      icon: Search,
      title: "Optimización SEO",
      description: "Mejoramos el posicionamiento de tu web en Google para que te encuentren más clientes potenciales.",
      pricing: [
        { type: "Auditoría inicial", price: "gratuita" },
        { type: "Plan SEO básico", price: "desde 290 €/mes" },
        { type: "Plan SEO avanzado", price: "desde 590 €/mes" }
      ],
      features: ["Análisis de palabras clave", "Optimización técnica", "Link building", "Informes mensuales"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros 
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"> Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones digitales completas diseñadas para hacer crecer tu negocio en el mundo online
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="service-card h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent className="flex-1">
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

                {/* CTA Button */}
                <Button 
                  className="w-full group"
                  onClick={scrollToContact}
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
            onClick={scrollToContact}
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