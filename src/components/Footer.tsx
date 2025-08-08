import { Heart, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Link to="/" aria-label="Ir al inicio">
                <img src="/lovable-uploads/4558bdc9-a56f-4c09-89fd-77050f7d5905.png" alt="Trazo.digital logo" className="h-40 w-40" />
              </Link>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Creamos experiencias digitales únicas que impulsan el crecimiento de tu negocio. 
              Especializados en diseño web, desarrollo y gestión de redes sociales.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/trazo.digital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com/trazo.digital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/trazo-digital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com/@trazodigital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link to="/servicios" className="text-muted-foreground hover:text-primary transition-colors">Servicios</Link></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contacto" className="text-muted-foreground hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground">Diseño Web</span>
              </li>
              <li>
                <span className="text-muted-foreground">Desarrollo Web</span>
              </li>
              <li>
                <span className="text-muted-foreground">Gestión RRSS</span>
              </li>
              <li>
                <span className="text-muted-foreground">Optimización SEO</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} Trazo.digital. Todos los derechos reservados.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 text-red-500 mx-2" />
              <span>para impulsar tu negocio</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
