import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, TrendingUp, Shield } from 'lucide-react';
import teamSuccess from '@/assets/team-success.jpg';

const About = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Clients Served', desc: 'Businesses across Australia' },
    { icon: TrendingUp, value: '$50M+', label: 'Claims Processed', desc: 'In R&D tax incentives' },
    { icon: Award, value: '98%', label: 'Success Rate', desc: 'Successful claim submissions' },
    { icon: Shield, value: '15+', label: 'Years Experience', desc: 'In R&D tax consulting' }
  ];

  const values = [
    {
      title: 'Expertise',
      description: 'Deep understanding of R&D tax legislation and ATO requirements ensures optimal outcomes for every client.'
    },
    {
      title: 'Transparency',
      description: 'Clear communication and upfront pricing with no hidden fees or surprises throughout the process.'
    },
    {
      title: 'Results',
      description: 'Proven track record of maximising client benefits while maintaining 100% compliance standards.'
    },
    {
      title: 'Partnership',
      description: 'Long-term relationships built on trust, reliability, and consistent delivery of exceptional service.'
    }
  ];

  return (
    <section id="about" className="section-premium">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading text-gradient mb-6">
            About BoostRD
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Australia's most trusted R&D Tax Incentive specialists, helping innovative businesses 
            unlock their full potential through expert guidance and proven results.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="subsection-heading mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with a mission to democratise access to R&D tax incentives, BoostRD has grown 
                to become Australia's leading specialist in this field. Our team combines deep technical 
                expertise with practical business acumen to deliver exceptional results.
              </p>
              <p>
                We understand that innovation drives Australian business success, and the R&D Tax Incentive 
                is a crucial mechanism for supporting that innovation. Our role is to ensure you capture 
                every dollar you're entitled to while maintaining full compliance with government requirements.
              </p>
              <p>
                With over $50 million in successful claims and a 98% success rate, we've established 
                ourselves as the trusted partner for businesses across all industries.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {['R&D Specialists', 'Tax Experts', 'Industry Leaders', 'Trusted Advisors'].map((badge) => (
                <Badge key={badge} variant="secondary" className="px-3 py-1">
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src={teamSuccess} 
              alt="BoostRD team celebrating success" 
              className="rounded-2xl shadow-[var(--shadow-premium)] w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </div>


        {/* Values */}
        <div className="bg-[var(--gradient-section)] rounded-3xl p-8 md:p-12">
          <h3 className="subsection-heading text-center mb-12">Our Values</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mt-16 bg-white/50 rounded-2xl p-8 md:p-12">
          <h3 className="subsection-heading mb-6">Our Mission</h3>
          <div className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            <p className="mb-4">We guide your claim with expert flair,</p>
            <p className="mb-4">So every dollar gets its share.</p>
            <p className="mb-4">Innovation gets the credit it's due,</p>
            <p>And compliance? We've got that too.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;