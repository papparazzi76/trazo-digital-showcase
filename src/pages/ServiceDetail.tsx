// src/pages/ServiceDetail.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useParams } from 'react-router-dom';
import { services } from '@/data/services';
import SchemaOrg from '@/components/SchemaOrg';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const ServiceDetail = () => {
  const { slug } = useParams();
  const location = useLocation();
  const service = services.find((s) => s.slug === slug);
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}${location.pathname}` : '';

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 md:pt-24 lg:pt-48 container mx-auto px-4 py-20">
          <h1 className="text-3xl font-bold mb-4">Servicio no encontrado</h1>
          <p className="text-muted-foreground mb-6">El servicio que buscas no existe o fue movido.</p>
          <Link to="/#servicios" className="text-primary hover:underline">Volver a servicios</Link>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    );
  }

  const serviceSchema = {
    name: service.title,
    description: service.description,
    areaServed: 'ES',
    provider: {
      '@type': 'Organization',
      name: 'Trazo.digital',
      url: canonical,
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`${service.title} | Trazo.digital`}</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <SchemaOrg schema={serviceSchema} type="Service" />
      <Header />
      <main className="pt-20 md:pt-24 lg:pt-48">
        <article className="container mx-auto px-4 py-20 max-w-6xl">
          <nav className="text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
            <ol className="flex gap-2">
              <li><Link to="/" className="hover:underline">Inicio</Link></li>
              <li>/</li>
              <li><Link to="/#servicios" className="hover:underline">Servicios</Link></li>
              <li>/</li>
              <li className="text-foreground" aria-current="page">{service.title}</li>
            </ol>
          </nav>

          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{service.description}</p>
          </header>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Nuestros planes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.pricing.map((option, index) => (
                <Card key={index} className="border-2 hover:border-primary/50 transition-colors h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-primary">
                      {option.type}
                    </CardTitle>
                    <div className="text-3xl font-bold text-foreground">
                      {option.price}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col space-y-6">
                    {/* Lo que incluye */}
                    <div className="flex-1">
                      <h4 className="font-semibold mb-3 text-primary flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        Lo que incluye:
                      </h4>
                      <ul className="space-y-2">
                        {option.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary/60 rounded-full mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Lo que no incluye */}
                    {option.excludes.length > 0 && (
                      <div className="flex-1">
                        <h4 className="font-semibold mb-3 text-muted-foreground flex items-center">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full mr-2"></div>
                          No incluye:
                        </h4>
                        <ul className="space-y-2">
                          {option.excludes.map((exclude, excludeIndex) => (
                            <li key={excludeIndex} className="flex items-center text-sm text-muted-foreground/80">
                              <X className="w-3 h-3 mr-3 flex-shrink-0" />
                              {exclude}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Botón de contacto */}
                    <Button 
                      className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold py-3 mt-auto"
                      size="lg"
                      asChild
                    >
                      <Link to="/contacto">
                        Solicitar {option.type}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-4">¿Listo para empezar?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Cuéntanos tu caso y te proponemos el plan más adecuado para tus necesidades.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="glow-primary">
                <Link to="/contacto">
                  Solicitar información personalizada
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/#servicios">
                  Ver más servicios
                </Link>
              </Button>
            </div>
          </section>
        </article>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ServiceDetail;