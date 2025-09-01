import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Service } from '@/data/services';

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal = ({ service, isOpen, onClose }: ServiceModalProps) => {
  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center mb-2">
            <span className="text-brand-gradient">{service.title}</span>
          </DialogTitle>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            {service.description}
          </p>
        </DialogHeader>

        <div className="grid gap-6 mt-6">
          {service.pricing.map((option, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">
                  {option.type}
                </CardTitle>
                <div className="text-3xl font-bold text-foreground">
                  {option.price}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Lo que incluye */}
                <div>
                  <h4 className="font-semibold mb-3 text-primary flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    Lo que incluye:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary/60 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lo que no incluye */}
                <div>
                  <h4 className="font-semibold mb-3 text-muted-foreground flex items-center">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full mr-2"></div>
                    No incluye:
                  </h4>
                  <ul className="space-y-2">
                    {service.excludes.map((exclude, excludeIndex) => (
                      <li key={excludeIndex} className="flex items-center text-sm text-muted-foreground/80">
                        <X className="w-3 h-3 mr-3 flex-shrink-0" />
                        {exclude}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botón de compra */}
                <Button 
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold py-3"
                  size="lg"
                >
                  Comprar {option.type}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Nota informativa */}
        <div className="mt-6 p-4 bg-muted/50 rounded-lg text-center">
          <p className="text-sm text-muted-foreground">
            💡 ¿Tienes dudas sobre qué plan elegir? 
            <Button variant="link" className="p-0 ml-1 h-auto text-primary underline">
              Contáctanos para asesoramiento personalizado
            </Button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;