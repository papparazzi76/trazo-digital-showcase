import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle, ArrowLeft, MessageCircle } from "lucide-react";

export default function PaymentCanceled() {
  return (
    <>
      <Helmet>
        <title>Pago Cancelado - Trazo Digital</title>
        <meta name="description" content="Tu pago ha sido cancelado. Puedes intentarlo de nuevo cuando quieras." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-2 border-orange-200 bg-orange-50/50">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <XCircle className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl text-orange-800">
                  Pago cancelado
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Has cancelado el proceso de pago. No se ha realizado ningún cargo a tu cuenta.
                  Puedes intentarlo de nuevo cuando quieras.
                </p>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">¿Necesitas ayuda?</h3>
                  <p className="text-muted-foreground">
                    Si has tenido algún problema durante el proceso de pago o tienes dudas sobre nuestros servicios, 
                    no dudes en contactarnos. Estamos aquí para ayudarte.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    onClick={() => window.location.href = '/#servicios'}
                    className="flex-1"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Volver a servicios
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={() => window.open('https://wa.me/34639877578?text=Hola, he tenido problemas con el proceso de pago y necesito ayuda', '_blank')}
                    className="flex-1"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contactar por WhatsApp
                  </Button>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    También puedes{' '}
                    <a 
                      href="mailto:info@trazodigital.com" 
                      className="text-primary hover:underline"
                    >
                      enviarnos un email
                    </a>
                    {' '}o llamarnos al{' '}
                    <a 
                      href="tel:+34639877578" 
                      className="text-primary hover:underline"
                    >
                      639 877 578
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}