import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, FileText, Calculator, Users, Shield, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: 'R&D Technical Reports',
      description: 'Comprehensive technical documentation that demonstrates compliance with government R&D criteria and maximises your claim potential.',
      features: [
        'Detailed technical analysis',
        'Compliance documentation',
        'Risk assessment',
        'Government liaison'
      ]
    },
    {
      icon: Calculator,
      title: 'Expenditure Identification',
      description: 'Expert identification and documentation of all eligible R&D expenditures to ensure you claim every dollar you\'re entitled to.',
      features: [
        'Staff time analysis',
        'Contractor payments',
        'Materials & consumables',
        'Asset depreciation'
      ]
    },
    {
      icon: Users,
      title: 'Registration & Filing',
      description: 'Complete registration and filing services with AusIndustry and the ATO, ensuring accuracy and timely submission.',
      features: [
        'AusIndustry registration',
        'ATO filing assistance',
        'Deadline management',
        'Compliance monitoring'
      ]
    },
    {
      icon: Shield,
      title: 'Compliance Assurance',
      description: 'Ongoing compliance support and audit preparation to protect your R&D claims and maintain government relationships.',
      features: [
        'Audit preparation',
        'Documentation management',
        'Risk mitigation',
        'Ongoing support'
      ]
    },
    {
      icon: Clock,
      title: 'Project Management',
      description: 'Dedicated project management ensuring your R&D claim is completed efficiently and submitted on time.',
      features: [
        'Dedicated account manager',
        'Timeline management',
        'Regular updates',
        'Quality assurance'
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="section-premium bg-[var(--gradient-section)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading text-gradient mb-6">
            Comprehensive R&D Tax Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From initial assessment to final submission, we provide end-to-end R&D Tax Incentive 
            services that maximise your benefits while ensuring full compliance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="card-premium card-hover p-8 h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[var(--gradient-primary)] rounded-xl flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold ml-4">{service.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-white/50 rounded-3xl p-8 md:p-12">
          <h3 className="subsection-heading text-center mb-12">Our Proven Process</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', desc: 'Free R&D eligibility assessment and potential claim evaluation' },
              { step: '02', title: 'Planning', desc: 'Develop comprehensive strategy and documentation plan' },
              { step: '03', title: 'Execution', desc: 'Prepare technical reports and identify all eligible expenditures' },
              { step: '04', title: 'Submission', desc: 'Register and file with AusIndustry and ATO on time' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[var(--gradient-primary)] rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                  {process.step}
                </div>
                <h4 className="font-semibold mb-2">{process.title}</h4>
                <p className="text-sm text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="btn-premium text-lg px-10 py-5"
          >
            Get Your Free Assessment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;