import { useState } from 'react';
import { Send, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo muy pronto.",
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("¡Hola! Me gustaría obtener más información sobre sus servicios digitales.");
    window.open(`https://wa.me/34123456789?text=${message}`, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Hablemos de tu</span>
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent"> proyecto</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Listo para llevar tu presencia digital al siguiente nivel? Contáctanos y hagamos realidad tus ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-2xl">Envíanos un mensaje</CardTitle>
              <p className="text-muted-foreground">
                Completa el formulario y te responderemos en menos de 24 horas
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
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="form-input resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
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
                      Enviar mensaje
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-2xl">Otras formas de contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a 
                      href="mailto:hola@trazo.digital" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      hola@trazo.digital
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Teléfono</h4>
                    <a 
                      href="tel:+34123456789" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +34 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">WhatsApp</h4>
                    <button 
                      onClick={openWhatsApp}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Enviar mensaje
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-xl">Preguntas frecuentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-1">¿Cuánto tiempo toma un proyecto?</h4>
                  <p className="text-sm text-muted-foreground">
                    Depende del tipo de proyecto. Una web básica puede estar lista en 1-2 semanas.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">¿Ofrecen soporte post-entrega?</h4>
                  <p className="text-sm text-muted-foreground">
                    Sí, incluimos soporte técnico y mantenimiento en todos nuestros planes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">¿Trabajan con presupuestos ajustados?</h4>
                  <p className="text-sm text-muted-foreground">
                    Tenemos soluciones para diferentes presupuestos. ¡Hablemos!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;