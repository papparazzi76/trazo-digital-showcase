import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (id: string) => {
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate(`/#${id}`);
    }
    setIsMenuOpen(false);
  };

  const showHeader = isMenuOpen || isAtTop;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent ${
      showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
    }`}>
      <div className="container mx-auto px-4 py-2 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/082dcc8a-cda3-4518-9d61-959bcab54707.png" alt="Trazo.digital logo" className="h-12 w-12 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-40 lg:w-40" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link text-primary hover:opacity-80 transition-colors">Inicio</Link>
            <button onClick={() => handleSectionClick('servicios')} className="nav-link text-primary hover:opacity-80 transition-colors">Servicios</button>
            <button onClick={() => handleSectionClick('portfolio')} className="nav-link text-primary hover:opacity-80 transition-colors">Portfolio</button>
            <Link to="/blog" className="nav-link text-primary hover:opacity-80 transition-colors">Blog</Link>
            <Link to="/contacto" className="nav-link text-primary hover:opacity-80 transition-colors">Contacto</Link>
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
          <nav className="md:hidden mt-4 pb-4 border border-border bg-background rounded-xl shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4 mt-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-left text-primary hover:opacity-80 transition-colors">Inicio</Link>
              <button onClick={() => handleSectionClick('servicios')} className="text-left text-primary hover:opacity-80 transition-colors">Servicios</button>
              <button onClick={() => handleSectionClick('portfolio')} className="text-left text-primary hover:opacity-80 transition-colors">Portfolio</button>
              <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="text-left text-primary hover:opacity-80 transition-colors">Blog</Link>
              <Link to="/contacto" onClick={() => setIsMenuOpen(false)} className="text-left text-primary hover:opacity-80 transition-colors">Contacto</Link>
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
