import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageSquare, Clock, User, Building } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const Contact = () => {
  return (
    <section id="contact" className="section-premium bg-[var(--gradient-hero)] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-light rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-primary-light/50 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading mb-6">Get In Touch</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Ready to unlock your R&D tax benefits? Contact us today to start your journey towards maximizing your business innovation potential.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Email Contact */}
            <Card className="card-premium p-8 bg-white/10 border-white/20 group hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Email Us</h3>
                  <p className="text-foreground/70">Get expert advice via email</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-2xl font-semibold text-primary-light">info@boostrd.com.au</div>
                <p className="text-foreground/80 leading-relaxed">
                  Send us your R&D queries and we'll provide detailed guidance on your eligibility and potential benefits.
                </p>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <Clock className="h-4 w-4" />
                  <span>Response within 2 hours</span>
                </div>

                {/* 🔘 Button + Popup */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-white/20 border border-white/30 hover:bg-white/30 text-white font-semibold py-3">
                      Open Form
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl p-6 bg-white rounded-xl shadow-lg">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold text-gray-900 mb-4">Free R&D Assessment</DialogTitle>
                    </DialogHeader>
                    {/* Google Form Embed */}
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSeUb74eTTPBjpjV--OUg4lNv-FmTN_Y2nZ-wLSvF7YCJeQ6Cw/viewform?embedded=true"
                      width="100%"
                      height="600"
                      frameBorder="0"
                      marginHeight="0"
                      marginWidth="0"
                      className="rounded-lg"
                      title="R&D Assessment Form"
                    >
                      Loading…
                    </iframe>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>

            {/* Phone Contact */}
            <Card className="card-premium p-8 bg-white/10 border-white/20 group hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Call Us</h3>
                  <p className="text-foreground/70">Speak directly with our experts</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-2xl font-semibold text-primary-light">0435754757</div>
                <p className="text-foreground/80 leading-relaxed">
                  Get immediate answers to your R&D tax questions and discuss your specific business needs.
                </p>
                <div className="flex items-center gap-2 text-sm text-foreground/70">
                  <Clock className="h-4 w-4" />
                  <span>Mon-Fri 9AM-6PM AEST</span>
                </div>
                <Button
                  className="w-full bg-white/20 border border-white/30 hover:bg-white/30 text-white font-semibold py-3"
                  onClick={() => (window.location.href = 'tel:0435754757')}
                >
                  Call Now
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

export default Contact;

