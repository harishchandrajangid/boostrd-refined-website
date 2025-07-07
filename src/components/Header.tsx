import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import boostrdLogo from '@/assets/boostrd-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full bg-gradient-to-r from-background to-background/95 backdrop-blur-sm border-b border-border/20 shadow-lg">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <div className="relative">
              <img 
                src={boostrdLogo} 
                alt="BoostRD - R&D Tax Specialists" 
                className="h-12 md:h-16 w-auto transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            <Link 
              to="/services"
              className={`relative px-4 py-2 font-semibold text-sm uppercase tracking-wider transition-all duration-300 group ${
                isActive('/services') 
                  ? 'text-primary' 
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              Services
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                isActive('/services') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              to="/about"
              className={`relative px-4 py-2 font-semibold text-sm uppercase tracking-wider transition-all duration-300 group ${
                isActive('/about') 
                  ? 'text-primary' 
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              About Us
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              to="/faq"
              className={`relative px-4 py-2 font-semibold text-sm uppercase tracking-wider transition-all duration-300 group ${
                isActive('/faq') 
                  ? 'text-primary' 
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              FAQ
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                isActive('/faq') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              to="/rdti-questionnaire"
              className={`relative px-4 py-2 font-semibold text-sm uppercase tracking-wider transition-all duration-300 group ${
                isActive('/rdti-questionnaire') 
                  ? 'text-primary' 
                  : 'text-foreground/80 hover:text-foreground'
              }`}
            >
              RDTI Questionnaire
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 ${
                isActive('/rdti-questionnaire') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">Get Free Consultation</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] skew-x-12 transition-transform duration-700 group-hover:translate-x-[100%]"></div>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 text-foreground hover:from-primary/20 hover:to-accent/20 transition-all duration-300"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/20 shadow-xl">
            <nav className="container mx-auto px-6 py-8">
              <div className="flex flex-col space-y-6">
                <Link 
                  to="/services"
                  onClick={closeMenu}
                  className={`text-left transition-all duration-300 font-semibold text-lg pb-2 border-b border-transparent ${
                    isActive('/services') ? 'text-primary border-primary' : 'text-foreground hover:text-primary hover:border-primary/50'
                  }`}
                >
                  Services
                </Link>
                <Link 
                  to="/about"
                  onClick={closeMenu}
                  className={`text-left transition-all duration-300 font-semibold text-lg pb-2 border-b border-transparent ${
                    isActive('/about') ? 'text-primary border-primary' : 'text-foreground hover:text-primary hover:border-primary/50'
                  }`}
                >
                  About Us
                </Link>
                <Link 
                  to="/faq"
                  onClick={closeMenu}
                  className={`text-left transition-all duration-300 font-semibold text-lg pb-2 border-b border-transparent ${
                    isActive('/faq') ? 'text-primary border-primary' : 'text-foreground hover:text-primary hover:border-primary/50'
                  }`}
                >
                  FAQ
                </Link>
                <Link 
                  to="/rdti-questionnaire"
                  onClick={closeMenu}
                  className={`text-left transition-all duration-300 font-semibold text-lg pb-2 border-b border-transparent ${
                    isActive('/rdti-questionnaire') ? 'text-primary border-primary' : 'text-foreground hover:text-primary hover:border-primary/50'
                  }`}
                >
                  RDTI Questionnaire
                </Link>
                <Link to="/contact" onClick={closeMenu} className="pt-4">
                  <Button className="bg-gradient-to-r from-primary to-accent text-white w-full py-4 rounded-xl font-bold text-base uppercase tracking-wider shadow-lg">
                    Get Free Consultation
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;