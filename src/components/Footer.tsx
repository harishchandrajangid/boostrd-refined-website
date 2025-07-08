import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import boostrdLogo from '@/assets/boostrd-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img 
                src={boostrdLogo} 
                alt="BoostRD" 
                className="h-12 w-auto mb-6 filter invert"
              />
            </Link>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Australia's leading R&D Tax Incentive specialists. We help innovative businesses 
              unlock their full potential through expert guidance and proven results.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-light" />
                <span>0435754757</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-light" />
                <span>info@boostrd.com.au</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              <Link 
                to="/services"
                className="block text-gray-300 hover:text-primary-light transition-colors"
              >
                Our Services
              </Link>
              <Link 
                to="/about"
                className="block text-gray-300 hover:text-primary-light transition-colors"
              >
                About Us
              </Link>
              <Link 
                to="/contact"
                className="block text-gray-300 hover:text-primary-light transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6">Services</h4>
            <div className="space-y-3 text-gray-300">
              <div>R&D Technical Reports</div>
              <div>Expenditure Identification</div>
              <div>Registration & Filing</div>
              <div>Compliance Assurance</div>
              <div>Project Management</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} Boost R&D Pty Ltd. All rights reserved. | ABN: 49 680 525 115 | ACN: 680 525 115
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-light rounded-full"></div>
              <span>R&D Tax Specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-light rounded-full"></div>
              <span>ATO Registered Agents</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-light rounded-full"></div>
              <span>Professional Indemnity Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-light rounded-full"></div>
              <span>Australian Owned & Operated</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;