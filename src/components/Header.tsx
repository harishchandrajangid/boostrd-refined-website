import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import boostrdLogo from '@/assets/boostrd-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full bg-background border-b border-border/30 shadow-[var(--shadow-card)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 hover-lift">
            <img 
              src={boostrdLogo} 
              alt="BoostRD" 
              className="h-10 md:h-12 w-auto transition-all duration-300 hover:scale-110"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/services"
              className={`transition-all duration-300 font-semibold relative group ${
                isActive('/services') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/about"
              className={`transition-all duration-300 font-semibold relative group ${
                isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/case-studies"
              className={`transition-all duration-300 font-semibold relative group ${
                isActive('/case-studies') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Case Studies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/testimonials"
              className={`transition-all duration-300 font-semibold relative group ${
                isActive('/testimonials') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/faq"
              className={`transition-all duration-300 font-semibold relative group ${
                isActive('/faq') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link to="/contact">
              <Button className="btn-premium hover-glow">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/services"
                onClick={closeMenu}
                className={`text-left transition-colors font-medium ${
                  isActive('/services') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/about"
                onClick={closeMenu}
                className={`text-left transition-colors font-medium ${
                  isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/case-studies"
                onClick={closeMenu}
                className={`text-left transition-colors font-medium ${
                  isActive('/case-studies') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Case Studies
              </Link>
              <Link 
                to="/testimonials"
                onClick={closeMenu}
                className={`text-left transition-colors font-medium ${
                  isActive('/testimonials') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                Testimonials
              </Link>
              <Link 
                to="/faq"
                onClick={closeMenu}
                className={`text-left transition-colors font-medium ${
                  isActive('/faq') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                FAQ
              </Link>
              <Link to="/contact" onClick={closeMenu}>
                <Button className="btn-premium mt-4 w-full">
                  Get Started
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;