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
                Welcome to BoostRD, your trusted consulting partner for R&D grants in Australia. With a proven record of assisting businesses of all sizes, we pride ourselves on our tailored approach to meet your unique needs.
              </p>
              <p>
                Our dedicated team will work closely with you to your business model and assess your eligibility for successful grant applications.
              </p>
              <p>
                Let us help you navigate the complexities of R&D funding and unlock your business's potential.
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

        {/* Our Team Section */}
        <div className="mb-20">
          <h3 className="subsection-heading text-center mb-8">Our Team</h3>
          <div className="bg-[var(--gradient-section)] rounded-3xl p-8 md:p-12">
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                BoostRD experts bring years of experience to the table, providing insightful and accurate advice throughout the process. Our team is dedicated to guiding you every step of the way, ensuring you have the support you need to navigate the complexities of R&D claims. Trust us to deliver the expertise you require for a successful outcome.
              </p>
              <p>
                Boost R&D Pty Ltd is a Registered Tax Agent that has been approved to assist you with this tax-based program.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20">
          <h3 className="subsection-heading text-center mb-8">Why Choose Us?</h3>
          <div className="bg-white/50 rounded-3xl p-8 md:p-12">
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                At BoostRD, we provide a comprehensive R&D Tax Incentive claim preparation service, managing every step from preparation to submission. Unlike firms that rely on junior staff, we prioritise quality by limiting the number of clients we work with, ensuring each project receives the dedicated attention it deserves.
              </p>
              <p>
                Your claim will be managed by our experienced consultants with deep industry knowledge, providing direct access to senior staff for prompt responses and proactive support. We are committed to optimising your claim, addressing challenges, and minimising risks, ensuring accuracy and maximising your benefits.
              </p>
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