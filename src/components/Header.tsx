import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent`}>
      <div className="container mx-auto px-4 py-2 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/4558bdc9-a56f-4c09-89fd-77050f7d5905.png" alt="Trazo.digital logo" className="h-12 w-12 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-40 lg:w-40" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link text-foreground hover:text-primary transition-colors">Inicio</Link>
            <Link to="/#servicios" className="nav-link text-foreground hover:text-primary transition-colors">Servicios</Link>
            <Link to="/portfolio" className="nav-link text-foreground hover:text-primary transition-colors">Portfolio</Link>
            <Link to="/blog" className="nav-link text-foreground hover:text-primary transition-colors">Blog</Link>
            <Link to="/contacto" className="nav-link text-foreground hover:text-primary transition-colors">Contacto</Link>
            <Link to="/contacto">
              <Button className="glow-primary">Comenzar Proyecto</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 mt-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-left text-foreground hover:text-primary transition-colors">Inicio</Link>
              <Link to="/#servicios" onClick={() => setIsMenuOpen(false)} className="text-left text-foreground hover:text-primary transition-colors">Servicios</Link>
              <Link to="/portfolio" onClick={() => setIsMenuOpen(false)} className="text-left text-foreground hover:text-primary transition-colors">Portfolio</Link>
              <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="text-left text-foreground hover:text-primary transition-colors">Blog</Link>
              <Link to="/contacto" onClick={() => setIsMenuOpen(false)} className="text-left text-foreground hover:text-primary transition-colors">Contacto</Link>
              <Link to="/contacto" onClick={() => setIsMenuOpen(false)} className="w-full">
                <Button className="w-full glow-primary mt-4">Comenzar Proyecto</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
