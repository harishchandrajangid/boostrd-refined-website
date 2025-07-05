import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, DollarSign, Clock, CheckCircle } from 'lucide-react';
import growthIllustration from '@/assets/growth-illustration.jpg';

const CaseStudies = () => {
  const cases = [
    {
      title: 'Manufacturing Innovation',
      industry: 'Advanced Manufacturing',
      challenge: 'Complex automation systems development with multiple R&D streams',
      solution: 'Comprehensive technical documentation and expenditure identification across 3 concurrent projects',
      result: '$2.4M',
      timeline: '8 weeks',
      details: [
        'Automated production line development',
        'AI-powered quality control systems',
        'Sustainable manufacturing processes',
        'Staff training and implementation'
      ]
    },
    {
      title: 'Software Development',
      industry: 'Technology',
      challenge: 'SaaS platform with advanced AI/ML components requiring careful R&D classification',
      solution: 'Detailed technical analysis separating eligible R&D activities from routine development',
      result: '$850K',
      timeline: '6 weeks',
      details: [
        'Machine learning algorithm development',
        'Natural language processing features',
        'Predictive analytics engine',
        'Performance optimization research'
      ]
    },
    {
      title: 'Biotech Research',
      industry: 'Biotechnology',
      challenge: 'Multi-year research program with complex clinical trial documentation',
      solution: 'Comprehensive program documentation spanning 3 years of research activities',
      result: '$5.2M',
      timeline: '12 weeks',
      details: [
        'Clinical trial design and execution',
        'Biomarker discovery research',
        'Drug formulation development',
        'Regulatory compliance documentation'
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="case-studies" className="section-premium bg-[var(--gradient-section)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading text-gradient mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real results from real businesses. See how we've helped companies across Australia 
            maximise their R&D tax benefits and accelerate their innovation journey.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12 mb-16">
          {cases.map((caseStudy, index) => (
            <Card key={index} className="card-premium overflow-hidden">
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Content */}
                <div className="lg:col-span-2 p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <Badge variant="secondary" className="px-3 py-1">
                      {caseStudy.industry}
                    </Badge>
                    <h3 className="text-2xl font-bold">{caseStudy.title}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-destructive mb-2">Challenge</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {caseStudy.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Solution</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {caseStudy.solution}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold mb-3">Key R&D Activities:</h4>
                    {caseStudy.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="bg-[var(--gradient-primary)] text-white p-8 md:p-10 flex flex-col justify-center">
                  <h4 className="text-lg font-semibold mb-6 text-center">Results Achieved</h4>
                  
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <DollarSign className="h-5 w-5" />
                        <span className="text-sm opacity-90">Total Claim</span>
                      </div>
                      <div className="text-3xl font-bold">{caseStudy.result}</div>
                    </div>

                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Clock className="h-5 w-5" />
                        <span className="text-sm opacity-90">Completion Time</span>
                      </div>
                      <div className="text-xl font-semibold">{caseStudy.timeline}</div>
                    </div>

                    <div className="text-center pt-4 border-t border-white/20">
                      <div className="flex items-center justify-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        <span className="text-sm">100% Successful Claim</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="bg-white/50 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="subsection-heading mb-8">Collective Impact</h3>
          
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$8.5M+</div>
              <div className="text-muted-foreground">Combined Claims Value</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">26</div>
              <div className="text-muted-foreground">Weeks Average Timeline</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="subsection-heading mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you unlock your R&D potential and achieve similar results for your business.
          </p>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="btn-premium text-lg px-10 py-5"
          >
            Start Your Success Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;