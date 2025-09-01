import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download, Home } from "lucide-react";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    // Track successful payment
    if (sessionId) {
      console.log('Payment successful with session ID:', sessionId);
    }
  }, [sessionId]);

  return (
    <>
      <Helmet>
        <title>Pago Exitoso - Trazo Digital</title>
        <meta name="description" content="Tu pago ha sido procesado exitosamente. Gracias por confiar en Trazo Digital." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-2 border-green-200 bg-green-50/50">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-800">
                  ¡Pago realizado con éxito!
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Hemos recibido tu pago correctamente. En breve recibirás un email de confirmación 
                  con los detalles de tu pedido y la factura correspondiente.
                </p>
                
                {sessionId && (
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      ID de transacción: <code className="font-mono">{sessionId}</code>
                    </p>
                  </div>
                )}

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Próximos pasos:</h3>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                      Recibirás un email de confirmación en los próximos minutos
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                      Nuestro equipo se pondrá en contacto contigo en las próximas 24-48 horas
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                      Te proporcionaremos un cronograma detallado del proyecto
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    onClick={() => window.location.href = '/'}
                    className="flex-1"
                  >
                    <Home className="w-4 h-4 mr-2" />
                    Volver al inicio
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={() => window.open('https://wa.me/34639877578?text=Hola, acabo de realizar un pago y tengo algunas consultas', '_blank')}
                    className="flex-1"
                  >
                    Contactar por WhatsApp
                  </Button>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    ¿Tienes alguna pregunta? No dudes en{' '}
                    <a 
                      href="mailto:info@trazodigital.com" 
                      className="text-primary hover:underline"
                    >
                      contactarnos
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