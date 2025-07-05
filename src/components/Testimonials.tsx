import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "BoostRD transformed our approach to R&D tax incentives. Their expertise helped us claim $1.2M we didn't even know we were entitled to. The team's attention to detail and deep understanding of ATO requirements gave us complete confidence throughout the process.",
      author: "Sarah Chen",
      position: "Chief Technology Officer",
      company: "InnovateTech Solutions",
      industry: "Software Development",
      rating: 5,
      result: "$1.2M claimed"
    },
    {
      quote: "Working with BoostRD was a game-changer for our manufacturing business. They identified R&D activities we'd overlooked and handled all the complex documentation. Their professional approach and timely delivery exceeded our expectations.",
      author: "Michael Thompson",
      position: "R&D Director",
      company: "Advanced Manufacturing Co.",
      industry: "Manufacturing",
      rating: 5,
      result: "$2.4M claimed"
    },
    {
      quote: "The team at BoostRD made the entire R&D tax incentive process seamless. Their clear communication and expertise in biotech R&D helped us navigate complex regulations and secure substantial benefits for our research programs.",
      author: "Dr. Jennifer Walsh",
      position: "Head of Research",
      company: "BioInnovate Labs",
      industry: "Biotechnology",
      rating: 5,
      result: "$850K claimed"
    },
    {
      quote: "BoostRD's comprehensive approach and attention to detail impressed us from day one. They not only maximised our claim but also provided valuable insights for future R&D planning. Highly recommended for any serious business.",
      author: "David Park",
      position: "CEO",
      company: "GreenTech Innovations",
      industry: "Clean Technology",
      rating: 5,
      result: "$1.8M claimed"
    },
    {
      quote: "Outstanding service and results. BoostRD's team understood our complex automotive R&D projects and delivered a claim that far exceeded our expectations. Their expertise saved us months of internal work.",
      author: "Lisa Rodriguez",
      position: "Innovation Manager",
      company: "AutoTech Dynamics",
      industry: "Automotive",
      rating: 5,
      result: "$3.2M claimed"
    },
    {
      quote: "Professional, knowledgeable, and results-driven. BoostRD helped us establish a systematic approach to R&D documentation that will benefit us for years to come. Their service is worth every dollar.",
      author: "James Wilson",
      position: "Finance Director",
      company: "MedDevice Solutions",
      industry: "Medical Devices",
      rating: 5,
      result: "$950K claimed"
    }
  ];

  return (
    <section id="testimonials" className="section-premium">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading text-gradient mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what businesses across Australia 
            say about their experience working with BoostRD.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-premium card-hover p-8 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-12 w-12" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-border pt-6">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm font-medium">{testimonial.company}</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.industry}
                  </Badge>
                  <div className="text-sm font-semibold text-primary">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-[var(--gradient-section)] rounded-3xl p-8 md:p-12 text-center">
          <h3 className="subsection-heading mb-8">Client Satisfaction</h3>
          
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-2xl font-bold mb-1">4.9/5</div>
              <div className="text-muted-foreground text-sm">Average Client Rating</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Retention Rate</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/50 rounded-xl">
            <p className="text-muted-foreground italic">
              "BoostRD consistently delivers exceptional results. Their client-first approach 
              and deep expertise make them the clear choice for R&D tax incentives."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;