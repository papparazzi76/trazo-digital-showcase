import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Helmet } from 'react-helmet-async';
import { useLocation, useParams, Link } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const location = useLocation();
  const post = blogPosts.find((p) => p.slug === slug);
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}${location.pathname}` : '';

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 md:pt-24 lg:pt-48 container mx-auto px-4 py-20">
          <h1 className="text-3xl font-bold mb-4">Artículo no encontrado</h1>
          <p className="text-muted-foreground mb-6">El contenido que buscas no existe o fue movido.</p>
          <Link to="/blog" className="text-primary hover:underline">Volver al blog</Link>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    );
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: [{ '@type': 'Person', name: post.author || 'Trazo.digital' }],
    mainEntityOfPage: canonical,
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{`${post.title} | Trazo.digital`}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>
      <Header />
      <main className="pt-20 md:pt-24 lg:pt-48">
        <article className="container mx-auto px-4 py-20 max-w-3xl">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-3">{post.title}</h1>
            <time className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString('es-ES')}</time>
          </header>
          <section className="prose prose-invert max-w-none space-y-6">
            {post.content.map((para, idx) => (
              <p key={idx} className="text-base leading-7 text-muted-foreground">{para}</p>
            ))}
          </section>
        </article>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default BlogPost;
