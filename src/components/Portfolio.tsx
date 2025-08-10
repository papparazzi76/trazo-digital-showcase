import { useState } from 'react';
import { ExternalLink, ArrowRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

// Import portfolio images
import portfolioEcommerce from '@/assets/portfolio-ecommerce.jpg';
import portfolioCorporate from '@/assets/portfolio-corporate.jpg';
import portfolioRestaurant from '@/assets/portfolio-restaurant.jpg';
import portfolioAgency from '@/assets/portfolio-agency.jpg';
import portfolioMedical from '@/assets/portfolio-medical.jpg';
import portfolioRealEstate from '@/assets/portfolio-realestate.jpg';

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Tienda Online Moda",
      description: "E-commerce completo con pasarela de pago y gestión de inventario",
      image: portfolioEcommerce,
      category: "E-commerce",
      link: "https://soloporhoy.es",
      featured: true
    },
    {
      id: 2,
      title: "Web Educativa de IA",
      description: "Sitio web con curso gratuito de Inteligencia Artificial",
      image: portfolioCorporate,
      category: "Corporativo",
      link: "https://iadomus.es",
      featured: true
    },
    {
      id: 3,
      title: "Tulsi Indian Restaurant",
      description: "Web con reservas online y carta digital interactiva",
      image: portfolioRestaurant,
      category: "Restauración",
      link: "https://tulsiindianvalladolid.com",
      featured: true
    },
    {
      id: 4,
      title: "Agencia Creativa",
      description: "Portfolio dinámico con animaciones y efectos visuales",
      image: portfolioAgency,
      category: "Portfolio",
      link: "https://ejemplo-agencia.com",
      featured: false
    },
    {
      id: 5,
      title: "Clínica Médica",
      description: "Sistema de citas online y gestión de pacientes",
      image: portfolioMedical,
      category: "Salud",
      link: "https://ejemplo-clinica.com",
      featured: false
    },
    {
      id: 6,
      title: "Inmobiliaria Premium",
      description: "Portal de propiedades con búsqueda avanzada",
      image: portfolioRealEstate,
      category: "Inmobiliaria",
      link: "https://ejemplo-inmobiliaria.com",
      featured: false
    }
  ];

  const displayedProjects = showAll ? projects : projects.filter(project => project.featured);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestro 
            <span className="text-brand-gradient"> Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proyectos reales que han transformado la presencia digital de nuestros clientes
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project) => (
            <Card key={project.id} className="portfolio-item group overflow-hidden">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-primary text-xs text-white rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Ver proyecto
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <button 
                    onClick={() => window.open(project.link, '_blank')}
                    className="text-primary hover:opacity-80 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && (
          <div className="text-center mb-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setShowAll(true)}
              className="border-border hover:border-primary"
            >
              Mostrar más proyectos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center bg-card p-8 rounded-2xl border border-border">
          <h3 className="text-2xl font-bold mb-4">¿Te gusta lo que ves?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Cada proyecto es único y está diseñado para cumplir los objetivos específicos de nuestros clientes. 
            ¿Listo para crear algo increíble juntos?
          </p>
          <Button 
            size="lg" 
            className="glow-primary"
            onClick={() => navigate('/contacto')}
          >
            Empezar mi proyecto
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
