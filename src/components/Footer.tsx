import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">BoostRD</h3>
            <p className="text-white/90 leading-relaxed mb-4">
              Australia's leading R&D Tax Incentive specialists helping innovative businesses unlock their full potential.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-white">0435754757</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-white">info@boostrd.com.au</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              <Link 
                to="/services"
                className="block text-white/90 hover:text-primary transition-colors"
              >
                Our Services
              </Link>
              <Link 
                to="/about"
                className="block text-white/90 hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link 
                to="/faq"
                className="block text-white/90 hover:text-primary transition-colors"
              >
                FAQ
              </Link>
              <Link 
                to="/contact"
                className="block text-white/90 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <div className="space-y-2 text-white/90">
              <div>R&D Technical Reports</div>
              <div>Expenditure Identification</div>
              <div>Registration & Filing</div>
              <div>Compliance Assurance</div>
              <div>Project Management</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6">
          <div className="text-center">
            <div className="text-sm text-white/80">
              © {currentYear} Boost R&D Pty Ltd. All rights reserved. | ABN: 49 680 525 115 | ACN: 680 525 115
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;