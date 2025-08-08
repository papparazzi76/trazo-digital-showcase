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
      <div className="container mx-auto px-4 py-1 md:py-2 lg:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/4558bdc9-a56f-4c09-89fd-77050f7d5905.png" alt="Trazo.digital logo" className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link text-foreground hover:text-primary transition-colors">Inicio</Link>
            <button onClick={() => handleSectionClick('servicios')} className="nav-link text-foreground hover:text-primary transition-colors">Servicios</button>
            <button onClick={() => handleSectionClick('portfolio')} className="nav-link text-foreground hover:text-primary transition-colors">Portfolio</button>
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
          <nav className="md:hidden mt-4 pb-4 border border-border bg-background rounded-xl shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4 mt-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-left text-foreground hover:text-primary transition-colors">Inicio</Link>
              <button onClick={() => handleSectionClick('servicios')} className="text-left text-foreground hover:text-primary transition-colors">Servicios</button>
              <button onClick={() => handleSectionClick('portfolio')} className="text-left text-foreground hover:text-primary transition-colors">Portfolio</button>
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
