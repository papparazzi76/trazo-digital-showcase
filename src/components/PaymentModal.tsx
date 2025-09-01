import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Service, PricingOption } from "@/data/services";

interface PaymentModalProps {
  service: Service | null;
  pricingOption: PricingOption | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PaymentModal({ service, pricingOption, isOpen, onClose }: PaymentModalProps) {
  const [customerData, setCustomerData] = useState({
    email: "",
    name: "",
    phone: "",
    company: "",
    address: "",
    city: "",
    postalCode: "",
    country: "España",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setCustomerData(prev => ({ ...prev, [field]: value }));
  };

  const extractPriceFromString = (priceString: string): number => {
    // Extract number from price strings like "desde 250 €", "250 €/año", etc.
    const match = priceString.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  };

  const handlePayment = async () => {
    if (!service || !pricingOption) return;
    
    if (!customerData.email || !customerData.name) {
      toast({
        title: "Datos incompletos",
        description: "Por favor, completa al menos el email y el nombre.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const amount = extractPriceFromString(pricingOption.price);
      
      if (amount === 0) {
        toast({
          title: "Precio no válido",
          description: "No se pudo procesar el precio del servicio.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          serviceSlug: service.slug,
          pricingType: pricingOption.type,
          amount: amount,
          customerEmail: customerData.email,
          customerName: customerData.name,
          customerPhone: customerData.phone || undefined,
          customerAddress: customerData.address ? {
            line1: customerData.address,
            city: customerData.city,
            postal_code: customerData.postalCode,
            country: customerData.country,
          } : undefined,
        }
      });

      if (error) {
        throw error;
      }

      // Open Stripe checkout in a new tab
      window.open(data.url, '_blank');
      
      toast({
        title: "Redirigiendo a Stripe",
        description: "Se ha abierto una nueva pestaña con el formulario de pago.",
      });

      onClose();
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Error en el pago",
        description: "Hubo un problema al procesar el pago. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!service || !pricingOption) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            Contratar {service.title} - {pricingOption.type}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-semibold">{pricingOption.type}</h4>
            <p className="text-lg font-bold text-primary">{pricingOption.price}</p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={customerData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="name">Nombre completo *</Label>
                <Input
                  id="name"
                  value={customerData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Juan Pérez"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  value={customerData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+34 600 123 456"
                />
              </div>
              <div>
                <Label htmlFor="company">Empresa</Label>
                <Input
                  id="company"
                  value={customerData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="Mi Empresa S.L."
                />
              </div>
            </div>

            <div>
              <Label htmlFor="address">Dirección</Label>
              <Textarea
                id="address"
                value={customerData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="Calle Principal, 123"
                rows={2}
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="city">Ciudad</Label>
                <Input
                  id="city"
                  value={customerData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  placeholder="Madrid"
                />
              </div>
              <div>
                <Label htmlFor="postalCode">Código Postal</Label>
                <Input
                  id="postalCode"
                  value={customerData.postalCode}
                  onChange={(e) => handleInputChange("postalCode", e.target.value)}
                  placeholder="28001"
                />
              </div>
              <div>
                <Label htmlFor="country">País</Label>
                <Input
                  id="country"
                  value={customerData.country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                  placeholder="España"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancelar
            </Button>
            <Button 
              onClick={handlePayment} 
              disabled={isLoading}
              className="flex-1"
            >
              {isLoading ? "Procesando..." : "Continuar con el pago"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}