import { Heart, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import logoTrazo from '@/assets/logo-trazo.png';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/lovable-uploads/4558bdc9-a56f-4c09-89fd-77050f7d5905.png" alt="Trazo.digital" className="h-32 w-32" />
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                Trazo.digital
              </span>
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
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com/trazo.digital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/trazo-digital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com/@trazodigital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contacto
                </button>
              </li>
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