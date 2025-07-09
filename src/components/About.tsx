import { Card } from '@/components/ui/card';
import { Users, Award, TrendingUp, Shield, CheckCircle, Target, Lightbulb, HandHeart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Clients Served', desc: 'Businesses across Australia' },
    { icon: TrendingUp, value: '$50M+', label: 'Claims Processed', desc: 'In R&D tax incentives' },
    { icon: Award, value: '98%', label: 'Success Rate', desc: 'Successful claim submissions' },
    { icon: Shield, value: '15+', label: 'Years Experience', desc: 'In R&D tax consulting' }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Expertise',
      description: 'Deep understanding of R&D tax legislation and ATO requirements ensures optimal outcomes for every client.'
    },
    {
      icon: CheckCircle,
      title: 'Transparency',
      description: 'Clear communication and upfront pricing with no hidden fees or surprises throughout the process.'
    },
    {
      icon: Target,
      title: 'Results',
      description: 'Proven track record of maximising client benefits while maintaining 100% compliance standards.'
    },
    {
      icon: HandHeart,
      title: 'Partnership',
      description: 'Long-term relationships built on trust, reliability, and consistent delivery of exceptional service.'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About BoostRD
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            Australia's most trusted R&D Tax Incentive specialists, helping innovative businesses 
            unlock their full potential through expert guidance and proven results.
          </p>
        </div>


        {/* Story Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">Our Story</h2>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="space-y-6 text-foreground leading-relaxed">
                <p>
                  Welcome to BoostRD, your trusted consulting partner for R&D grants in Australia. With a proven record of assisting businesses of all sizes, we pride ourselves on our tailored approach to meet your unique needs.
                </p>
                <p>
                  Our dedicated team will work closely with you to understand your business model and assess your eligibility for successful grant applications. We believe in building long-term partnerships that drive innovation and growth.
                </p>
                <p>
                  Let us help you navigate the complexities of R&D funding and unlock your business's potential. Our expertise spans across various industries, ensuring we can provide relevant and effective solutions for your specific requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 border-2 border-primary/10 hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Our Team</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-primary/5 border-2 border-primary/10">
              <div className="text-foreground leading-relaxed space-y-4">
                <p>
                  BoostRD experts bring years of experience to the table, providing insightful and accurate advice throughout the process. Our team is dedicated to guiding you every step of the way, ensuring you have the support you need to navigate the complexities of R&D claims.
                </p>
                <p>
                  Trust us to deliver the expertise you require for a successful outcome. Boost R&D Pty Ltd is a Registered Tax Agent that has been approved to assist you with this tax-based program.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Why Choose Us?</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-white shadow-lg">
              <div className="text-foreground leading-relaxed space-y-4">
                <p>
                  At BoostRD, we provide a comprehensive R&D Tax Incentive claim preparation service, managing every step from preparation to submission. Unlike firms that rely on junior staff, we prioritise quality by limiting the number of clients we work with, ensuring each project receives the dedicated attention it deserves.
                </p>
                <p>
                  Your claim will be managed by our experienced consultants with deep industry knowledge, providing direct access to senior staff for prompt responses and proactive support. We are committed to optimising your claim, addressing challenges, and minimising risks, ensuring accuracy and maximising your benefits.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Our Mission</h2>
          <Card className="max-w-2xl mx-auto p-8 bg-primary/5 border-2 border-primary/10">
            <div className="text-xl text-foreground leading-relaxed space-y-3">
              <p>We guide your claim with expert flair,</p>
              <p>So every dollar gets its share.</p>
              <p>Innovation gets the credit it's due,</p>
              <p>And compliance? We've got that too.</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;