import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Helmet } from 'react-helmet-async';
import { useLocation, Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  const location = useLocation();
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}${location.pathname}` : '';

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog de Trazo.digital',
    url: typeof window !== 'undefined' ? `${window.location.origin}/blog` : '',
    description: 'Artículos semanales sobre diseño web, marketing digital y SEO.'
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Blog de Marketing Digital y Diseño | Trazo.digital</title>
        <meta name="description" content="Artículos semanales con consejos de diseño web, SEO, marketing y automatización para hacer crecer tu negocio." />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
      </Helmet>
      <Header />
      <main className="pt-20 md:pt-24 lg:pt-48">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog de Trazo.digital</h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl">Publicamos artículos de valor cada semana: SEO, diseño web, funnels y automatización con consejos accionables.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.slug} className="card-elevated p-6 rounded-2xl border border-border bg-card">
                  <header>
                    <h2 className="text-xl font-semibold mb-2">
                      <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors story-link">{post.title}</Link>
                    </h2>
                    <time className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString('es-ES')}</time>
                  </header>
                  <p className="text-muted-foreground mt-4">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="inline-block mt-4 text-primary hover:underline">Leer más</Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Blog;
