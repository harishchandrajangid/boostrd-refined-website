import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "What is the R&D Tax Incentive and how does it work?",
      answer: "The R&D Tax Incentive is an Australian Government program that provides tax offsets for eligible R&D activities. Companies can receive either a refundable tax offset (for companies with turnover under $20M) or a non-refundable tax offset (for larger companies). The incentive reduces the after-tax cost of R&D by up to 43.5%."
    },
    {
      question: "What types of activities qualify as eligible R&D?",
      answer: "Eligible R&D activities must involve experimentation or investigation to resolve scientific or technological uncertainty. This includes core R&D activities (systematic investigation/experimentation) and supporting R&D activities (directly related to core activities). Examples include software development, engineering design, clinical trials, and process improvements."
    },
    {
      question: "How much can we claim and what's the potential benefit?",
      answer: "There's no cap on R&D expenditure that can be claimed. Companies with turnover under $20M can receive up to 43.5% refundable tax offset, while larger companies receive a 38.5% non-refundable tax offset. The average claim processed by BoostRD is $1.2M, with our largest claims exceeding $10M."
    },
    {
      question: "What expenditures can be included in an R&D claim?",
      answer: "Eligible expenditures include staff salaries (time spent on R&D), contractor costs, materials and consumables, plant and equipment depreciation, clinical trial costs, and other expenses directly related to R&D activities. We help identify and document all eligible costs to maximise your claim."
    },
    {
      question: "How long does the R&D claim process take?",
      answer: "The timeline varies based on project complexity, but typically ranges from 6-12 weeks from engagement to submission. Simple claims can be completed in 6-8 weeks, while complex multi-project claims may take 10-12 weeks. We provide clear timelines and regular progress updates throughout the process."
    },
    {
      question: "Do we need to register with AusIndustry before starting R&D?",
      answer: "No, you can register with AusIndustry up to 10 months after your income year ends. However, we recommend early engagement to ensure proper documentation and maximise your claim potential. We handle all registration and filing requirements with both AusIndustry and the ATO."
    },
    {
      question: "What documentation do we need to provide?",
      answer: "We'll need project documentation, financial records, staff timesheets, contractor agreements, and technical specifications. Don't worry if your documentation isn't perfect – we help clients improve their R&D documentation systems and can work with whatever records you have available."
    },
    {
      question: "How do you ensure compliance with ATO requirements?",
      answer: "Our team stays current with all legislative changes and ATO guidance. We prepare comprehensive technical reports, maintain detailed documentation, and follow established precedents. Our 98% success rate and zero audit failures demonstrate our commitment to compliance excellence."
    },
    {
      question: "What are your fees and when do we pay?",
      answer: "Our fees are typically 20-25% of the R&D benefit received, with no upfront costs. We only succeed when you succeed. Fees are paid only after you receive your R&D benefit from the ATO. We provide transparent pricing with no hidden costs or surprise fees."
    },
    {
      question: "Can you help with R&D claims for previous years?",
      answer: "Yes, we can assist with claims for up to 4 previous financial years (subject to registration deadlines). Many clients discover they've missed significant R&D opportunities in past years. We can review your historical activities and identify potential claims you may have missed."
    },
    {
      question: "What happens if we get audited by the ATO?",
      answer: "While audits are rare (less than 5% of claims), we provide full audit support if selected. Our comprehensive documentation and technical reports are designed to withstand ATO scrutiny. We've successfully supported clients through audits with zero claim reversals in our company history."
    },
    {
      question: "How do we get started with BoostRD?",
      answer: "Simply contact us for a free initial consultation. We'll assess your R&D activities, estimate your potential benefit, and explain our process. If there's a good fit, we'll provide a detailed proposal and timeline. Most clients can get started within a week of initial contact."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="faq" className="section-premium bg-[var(--gradient-section)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading text-gradient mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about R&D tax incentives 
            and how BoostRD can help your business.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-16">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-premium border-0 px-8 py-2"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Resources */}
        <div className="bg-white/50 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="subsection-heading mb-6">Still Have Questions?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our R&D tax specialists are here to help. Get personalized answers 
            to your specific questions about R&D eligibility and claim potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="btn-premium">
                <MessageSquare className="mr-2 h-4 w-4" />
                Ask Our Experts
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Learn About Our Services
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 text-center">
          <h4 className="font-semibold mb-4">Popular Resources</h4>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/rdti-questionnaire" className="text-primary hover:underline">
              R&D Eligibility Check
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/services" className="text-primary hover:underline">
              Our Services
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/about" className="text-primary hover:underline">
              About BoostRD
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/contact" className="text-primary hover:underline">
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;