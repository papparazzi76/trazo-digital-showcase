import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoTrazo from '@/assets/logo-trazo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-2 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/lovable-uploads/4558bdc9-a56f-4c09-89fd-77050f7d5905.png" alt="Trazo.digital" className="h-12 w-12 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-40 lg:w-40" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="nav-link text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="nav-link text-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="nav-link text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="nav-link text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
            <Button 
              onClick={() => scrollToSection('contacto')}
              className="glow-primary"
            >
              Comenzar Proyecto
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 mt-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contacto
              </button>
              <Button 
                onClick={() => scrollToSection('contacto')}
                className="w-full glow-primary mt-4"
              >
                Comenzar Proyecto
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;