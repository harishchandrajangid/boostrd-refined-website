import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MessageSquare, CheckCircle, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: '',
    rdSpend: '',
    urgency: 'standard'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll contact you within 24 hours to discuss your R&D tax incentive potential.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      industry: '',
      message: '',
      rdSpend: '',
      urgency: 'standard'
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    'Free R&D eligibility assessment',
    'Estimate of potential claim value',
    'Clear explanation of our process',
    'No obligation consultation'
  ];

  return (
    <section id="contact" className="section-premium bg-[var(--gradient-hero)] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading mb-6">
            Get Your Free R&D Assessment
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Ready to unlock your R&D tax benefits? Get started with a free consultation 
            and discover how much your business could claim.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="card-premium p-8 md:p-10 bg-white text-foreground">
            <h3 className="subsection-heading text-foreground mb-6">
              Start Your R&D Journey
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="name">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="company">
                    Company Name *
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="industry">
                    Industry
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="">Select your industry</option>
                    <option value="software">Software & Technology</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="biotechnology">Biotechnology</option>
                    <option value="medical">Medical Devices</option>
                    <option value="automotive">Automotive</option>
                    <option value="aerospace">Aerospace</option>
                    <option value="energy">Energy & Resources</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="rdSpend">
                    Annual R&D Spend (Estimate)
                  </label>
                  <select
                    id="rdSpend"
                    name="rdSpend"
                    value={formData.rdSpend}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="">Select range</option>
                    <option value="under-100k">Under $100K</option>
                    <option value="100k-500k">$100K - $500K</option>
                    <option value="500k-1m">$500K - $1M</option>
                    <option value="1m-5m">$1M - $5M</option>
                    <option value="over-5m">Over $5M</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">
                  Tell us about your R&D activities
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe your research and development activities, innovation projects, or specific challenges you're working on..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="urgency">
                  How urgent is your enquiry?
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="standard">Standard (within 48 hours)</option>
                  <option value="urgent">Urgent (within 24 hours)</option>
                  <option value="asap">ASAP (same day)</option>
                </select>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-premium text-lg py-6"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                    Sending...
                  </>
                ) : (
                  'Get Free Assessment'
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info & Benefits */}
          <div className="space-y-8">
            {/* What You'll Get */}
            <Card className="card-premium p-8 bg-white/10 border-white/20">
              <h3 className="text-xl font-semibold mb-6">What You'll Get</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary-light flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Contact Methods */}
            <Card className="card-premium p-8 bg-white/10 border-white/20">
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Call Us</div>
                    <div className="text-gray-200">0435754757</div>
                    <div className="text-sm text-gray-300">Mon-Fri 9AM-6PM AEST</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Email Us</div>
                    <div className="text-gray-200">info@boostrd.com.au</div>
                    <div className="text-sm text-gray-300">Response within 4 hours</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Quick Response</div>
                    <div className="text-gray-200">Same day callback</div>
                    <div className="text-sm text-gray-300">For urgent enquiries</div>
                  </div>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;