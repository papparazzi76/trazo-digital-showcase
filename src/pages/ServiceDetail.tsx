import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useParams } from 'react-router-dom';
import { services } from '@/data/services';

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
    '@context': 'https://schema.org',
    '@type': 'Service',
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
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      <Header />
      <main className="pt-20 md:pt-24 lg:pt-48">
        <article className="container mx-auto px-4 py-20 max-w-5xl">
          <nav className="text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
            <ol className="flex gap-2">
              <li><Link to="/" className="hover:underline">Inicio</Link></li>
              <li>/</li>
              <li><Link to="/#servicios" className="hover:underline">Servicios</Link></li>
              <li>/</li>
              <li className="text-foreground" aria-current="page">{service.title}</li>
            </ol>
          </nav>

          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">{service.description}</p>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">Qué incluye</h2>
              <ul className="space-y-2">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-2 w-2 h-2 bg-primary rounded-full" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="md:col-span-1">
              <div className="rounded-lg border border-border p-6 bg-card">
                <h3 className="font-semibold mb-4 text-primary">Precios orientativos</h3>
                <ul className="space-y-3">
                  {service.pricing.map((p, i) => (
                    <li key={i} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{p.type}</span>
                      <span className="font-medium text-foreground">{p.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Qué no incluye</h2>
              <ul className="space-y-2">
                {service.excludes.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-2 w-2 h-2 bg-destructive rounded-full" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">¿Listo para empezar?</h2>
              <p className="text-muted-foreground mb-4">Cuéntanos tu caso y te proponemos el plan más adecuado.</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contacto" className="inline-flex items-center justify-center rounded-md px-5 py-2.5 bg-primary text-primary-foreground transition-colors hover:opacity-90">
                  Solicitar información
                </Link>
                <Link to="/#servicios" className="inline-flex items-center justify-center rounded-md px-5 py-2.5 border border-border bg-card">
                  Ver más servicios
                </Link>
              </div>
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
