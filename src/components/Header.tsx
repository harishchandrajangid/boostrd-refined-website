import { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import boostrdLogo from '@/assets/boostrd-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/50 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={boostrdLogo} 
              alt="BoostRD" 
              className="h-10 md:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('case-studies')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Case Studies
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              FAQ
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="btn-premium"
            >
              Get Started
            </Button>
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
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('case-studies')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Case Studies
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium"
              >
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-premium mt-4"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;