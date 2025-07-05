import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, TrendingUp, Users, Award } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)]">
          <div className="absolute inset-0 bg-black/30"></div>
          <img 
            src={heroBg} 
            alt="Professional team" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <h1 className="hero-text mb-6">
              Maximise Your{' '}
              <span className="text-gradient bg-gradient-to-r from-primary-light to-primary-lighter bg-clip-text text-transparent">
                R&D Tax Benefits
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Australia's leading R&D Tax Incentive specialists. We help innovative businesses 
              unlock millions in government incentives while ensuring full compliance.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-base">
              {[
                'Maximise Your Claim',
                'Expert Compliance',
                'Proven Track Record',
                'Dedicated Support'
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary-light" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button className="btn-premium text-lg px-10 py-5">
                  Get Free Assessment
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-5"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="mt-12 text-gray-300">
              <p className="text-sm mb-4">Trusted by 500+ Australian businesses</p>
              <div className="flex justify-center items-center gap-8 text-2xl font-bold">
                <span>$50M+</span>
                <span className="text-primary-light">•</span>
                <span>In Claims</span>
                <span className="text-primary-light">•</span>
                <span>98% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="section-premium bg-[var(--gradient-section)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading text-gradient mb-6">
              Why Choose BoostRD?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're Australia's most trusted R&D tax specialists with a proven track record of success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-premium p-8 text-center">
              <div className="w-16 h-16 bg-[var(--gradient-primary)] rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p className="text-muted-foreground">
                Specialist R&D tax consultants with deep industry knowledge and ATO expertise.
              </p>
            </div>

            <div className="card-premium p-8 text-center">
              <div className="w-16 h-16 bg-[var(--gradient-primary)] rounded-xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
              <p className="text-muted-foreground">
                $50M+ in successful claims with a 98% success rate across all industries.
              </p>
            </div>

            <div className="card-premium p-8 text-center">
              <div className="w-16 h-16 bg-[var(--gradient-primary)] rounded-xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Full Service</h3>
              <p className="text-muted-foreground">
                End-to-end support from initial assessment to final submission and beyond.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/about">
              <Button className="btn-premium">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;