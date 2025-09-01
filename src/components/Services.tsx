import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, useNavigate } from 'react-router-dom';
import { services } from '@/data/services';
import ServiceModal from './ServiceModal';
import { useState } from 'react';
import type { Service } from '@/data/services';

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContractClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };


  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros 
            <span className="text-brand-gradient"> Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones digitales completas diseñadas para hacer crecer tu negocio en el mundo online
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service) => (
            <Card key={service.slug} className="service-card h-full">
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

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold"
                    onClick={() => handleContractClick(service)}
                  >
                    Contratar
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full group"
                    onClick={() => navigate('/contacto')}
                  >
                    Solicitar información
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
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

        {/* Service Modal */}
        <ServiceModal 
          service={selectedService}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};

export default Services;