import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import boostrdLogo from '@/assets/boostrd-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full bg-background border-b border-border shadow-sm fixed top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src={boostrdLogo} 
              alt="BoostRD" 
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/services"
              className={`text-sm font-medium transition-colors ${
                isActive('/services') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              About
            </Link>
            <Link 
              to="/faq"
              className={`text-sm font-medium transition-colors ${
                isActive('/faq') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              FAQ
            </Link>
            <Link 
              to="/rdti-questionnaire"
              className={`text-sm font-medium transition-colors ${
                isActive('/rdti-questionnaire') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              RDTI Questionnaire
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  isActive('/services') ? 'text-primary' : 'text-foreground'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  isActive('/about') ? 'text-primary' : 'text-foreground'
                }`}
              >
                About
              </Link>
              <Link 
                to="/faq"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  isActive('/faq') ? 'text-primary' : 'text-foreground'
                }`}
              >
                FAQ
              </Link>
              <Link 
                to="/rdti-questionnaire"
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  isActive('/rdti-questionnaire') ? 'text-primary' : 'text-foreground'
                }`}
              >
                RDTI Questionnaire
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="block"
              >
                <Button className="bg-primary hover:bg-primary/90 text-white w-full">
                  Contact Us
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