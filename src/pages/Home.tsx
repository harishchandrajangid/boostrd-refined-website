import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, TrendingUp, Users, Award, ArrowRight, Shield, Calculator, FileText, Briefcase, Factory, Zap, Globe } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
        <div className="absolute inset-0 bg-[var(--gradient-hero)]">
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-primary/20"></div>
          <img 
            src={heroBg} 
            alt="Professional team" 
            className="w-full h-full object-cover opacity-30 parallax-bg"
          />
          {/* Animated Particles */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-light rounded-full animate-float opacity-60"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-primary-light/50 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-5xl mx-auto">
            <div className="animate-fade-up">
              <h1 className="hero-text mb-8">
                Maximise Your{' '}
                <span className="text-gradient relative">
                  R&D Tax Benefits
                  <div className="absolute -inset-2 bg-[var(--gradient-glow)] rounded-lg opacity-30 blur-xl animate-glow"></div>
                </span>
              </h1>
            </div>
            
            <div className="animate-slide-in" style={{animationDelay: '0.3s'}}>
              <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-gray-100 leading-relaxed max-w-4xl mx-auto font-light">
                Australia's leading R&D Tax Incentive specialists. We help innovative businesses 
                unlock <span className="text-primary-light font-semibold">millions</span> in government incentives while ensuring full compliance.
              </p>
            </div>

            <div className="animate-scale-in grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 max-w-3xl mx-auto" style={{animationDelay: '0.6s'}}>
              {[
                { icon: '🎯', text: 'Maximise Claims' },
                { icon: '🛡️', text: 'Expert Compliance' },
                { icon: '🏆', text: 'Proven Results' },
                { icon: '🤝', text: 'Dedicated Support' }
              ].map((benefit, index) => (
                <div key={benefit.text} className="card-premium card-hover p-4 md:p-6 bg-white/10 border-white/20 text-center" style={{animationDelay: `${0.8 + index * 0.1}s`}}>
                  <div className="text-2xl md:text-3xl mb-2">{benefit.icon}</div>
                  <div className="text-sm md:text-base font-medium">{benefit.text}</div>
                </div>
              ))}
            </div>

            <div className="animate-fade-up flex flex-col sm:flex-row gap-6 justify-center items-center" style={{animationDelay: '1s'}}>
              <Link to="/contact">
                <Button className="btn-premium text-xl px-12 py-6 group">
                  <span className="relative z-10">Get Free Assessment</span>
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  variant="outline"
                  className="bg-white/10 border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 px-10 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Explore Services
                </Button>
              </Link>
            </div>

            <div className="animate-fade-up mt-16 text-gray-200" style={{animationDelay: '1.3s'}}>
              <p className="text-lg mb-6 opacity-90">Trusted by 500+ Australian businesses</p>
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-primary-light mb-2 animate-glow">$50M+</div>
                  <div className="text-sm font-medium opacity-80">In Claims</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-primary-light mb-2 animate-glow">98%</div>
                  <div className="text-sm font-medium opacity-80">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-primary-light mb-2 animate-glow">15+</div>
                  <div className="text-sm font-medium opacity-80">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <div className="text-white/60 text-sm mb-2 font-medium">Scroll to explore</div>
            <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center relative">
              <div className="w-1.5 h-4 bg-white/60 rounded-full mt-2 animate-pulse"></div>
              <div className="absolute -bottom-2 w-0.5 h-0.5 bg-white/40 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Overview Section */}
      <section className="section-premium bg-[var(--gradient-section)] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-primary rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-20 w-16 h-16 bg-primary/20 rounded-lg rotate-45 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-primary/30 rounded-lg animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-up">
            <h2 className="section-heading text-gradient mb-8">
              Why Choose BoostRD?
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              We're Australia's most trusted R&D tax specialists with a proven track record of 
              <span className="text-primary font-semibold"> exceptional success</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Specialist R&D tax consultants with deep industry knowledge and ATO expertise.',
                gradient: 'from-blue-500 to-teal-500'
              },
              {
                icon: TrendingUp,
                title: 'Proven Results',
                description: '$50M+ in successful claims with a 98% success rate across all industries.',
                gradient: 'from-teal-500 to-green-500'
              },
              {
                icon: Award,
                title: 'Full Service',
                description: 'End-to-end support from initial assessment to final submission and beyond.',
                gradient: 'from-purple-500 to-pink-500'
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="card-premium card-hover p-10 text-center group animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[var(--shadow-premium)]`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16 animate-fade-up" style={{animationDelay: '0.8s'}}>
            <Link to="/about">
              <Button className="btn-premium text-xl px-12 py-6">
                Discover Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* R&D Services Section */}
      <section className="section-premium bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-up">
            <h2 className="section-heading mb-8">Comprehensive R&D Tax Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From initial eligibility assessment to final claim submission, we provide complete R&D tax incentive services 
              tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Calculator,
                title: 'R&D Tax Calculation',
                description: 'Precise calculation of eligible R&D expenditure with detailed documentation and ATO-compliant methodologies.',
                features: ['Cost allocation analysis', 'Expenditure categorization', 'Benefit optimization']
              },
              {
                icon: FileText,
                title: 'Technical Documentation',
                description: 'Comprehensive technical reports that clearly demonstrate your R&D activities meet ATO requirements.',
                features: ['Technical writing', 'Activity mapping', 'Evidence compilation']
              },
              {
                icon: Shield,
                title: 'Compliance Assurance',
                description: 'Full compliance review and risk mitigation to ensure your claim withstands ATO scrutiny.',
                features: ['Risk assessment', 'ATO liaison', 'Audit support']
              },
              {
                icon: Briefcase,
                title: 'Strategic Advisory',
                description: 'Ongoing strategic advice to maximize your R&D benefits and plan future activities.',
                features: ['Program planning', 'Benefit forecasting', 'Strategic optimization']
              },
              {
                icon: Users,
                title: 'Project Management',
                description: 'Dedicated project management ensuring timely submission and seamless client experience.',
                features: ['Timeline management', 'Stakeholder coordination', 'Progress tracking']
              },
              {
                icon: Globe,
                title: 'Multi-Entity Support',
                description: 'Complex group structures and multi-entity R&D arrangements handled with expertise.',
                features: ['Group consolidation', 'Inter-entity agreements', 'Allocation strategies']
              }
            ].map((service, index) => (
              <div key={service.title} className="card-premium card-hover p-8 group animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[var(--gradient-interactive)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-up">
            <Link to="/services">
              <Button className="btn-premium text-lg px-10 py-5 group">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work Process Section */}
      <section className="section-premium bg-[var(--gradient-section)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-24 h-24 border-2 border-primary rounded-full animate-float"></div>
          <div className="absolute bottom-40 left-20 w-16 h-16 bg-primary/20 rounded-lg rotate-45 animate-float" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 animate-fade-up">
            <h2 className="section-heading text-gradient mb-8">Our Proven Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A systematic approach refined over 15+ years to maximize your R&D tax benefits while ensuring full compliance.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Assessment',
                description: 'Comprehensive review of your R&D activities, technical processes, and eligible expenditure to identify opportunities.',
                duration: '1-2 weeks'
              },
              {
                step: '02', 
                title: 'Strategy Development',
                description: 'Develop a tailored R&D tax strategy that maximizes benefits while maintaining full ATO compliance.',
                duration: '1 week'
              },
              {
                step: '03',
                title: 'Documentation & Calculation',
                description: 'Detailed technical documentation and precise calculation of eligible R&D expenditure and tax benefits.',
                duration: '3-4 weeks'
              },
              {
                step: '04',
                title: 'Submission & Support',
                description: 'Professional submission to ATO with ongoing support, monitoring, and audit assistance if required.',
                duration: 'Ongoing'
              }
            ].map((step, index) => (
              <div key={step.step} className="relative animate-slide-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="card-premium card-hover p-8 text-center group h-full">
                  <div className="text-6xl font-black text-primary/20 mb-4 group-hover:text-primary/40 transition-colors duration-500">{step.step}</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>
                  <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
                    <Zap className="h-4 w-4 mr-2" />
                    {step.duration}
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="section-premium bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-up">
            <h2 className="section-heading mb-8">Industry Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Deep industry knowledge across diverse sectors enables us to identify unique R&D opportunities 
              and maximize your tax benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Manufacturing', icon: Factory, claims: '$12M+', companies: '80+' },
              { name: 'Technology', icon: Zap, claims: '$18M+', companies: '120+' },
              { name: 'Healthcare', icon: Shield, claims: '$8M+', companies: '45+' },
              { name: 'Engineering', icon: TrendingUp, claims: '$15M+', companies: '95+' },
              { name: 'Agriculture', icon: Globe, claims: '$6M+', companies: '35+' },
              { name: 'Professional Services', icon: Briefcase, claims: '$4M+', companies: '60+' }
            ].map((industry, index) => (
              <div key={industry.name} className="card-premium card-hover p-6 group animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[var(--gradient-interactive)] rounded-xl flex items-center justify-center mr-4">
                    <industry.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">{industry.name}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{industry.claims}</div>
                    <div className="text-sm text-muted-foreground">Claims Secured</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{industry.companies}</div>
                    <div className="text-sm text-muted-foreground">Companies Helped</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;