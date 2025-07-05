import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]">
        <div className="absolute inset-0 bg-black/30"></div>
        <img 
          src={heroBg} 
          alt="Professional team" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Content */}
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

          {/* Key Benefits */}
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

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="btn-premium text-lg px-10 py-5"
            >
              Get Free Assessment
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('services')}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-5"
            >
              Learn More
            </Button>
          </div>

          {/* Social Proof */}
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

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;