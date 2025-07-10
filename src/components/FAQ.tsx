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
      answer: "The R&D Tax Incentive is an Australian Government program designed to encourage businesses to invest in research and development. It offers tax offsets for eligible R&D activities, helping to reduce your company's tax liability or generate a refundable cash rebate. The program is jointly administered by Department of Industry, Science and Resources (DISR) and the ATO."
    },
    {
      question: "What types of activities qualify as eligible R&D?",
      answer: "Eligible R&D activities typically involve experimental work undertaken to generate new knowledge, improve products, processes, or services. This includes developing prototypes, solving technical problems, or testing different solutions. To qualify, your activities must involve a level of technical uncertainty and follow a systematic approach."
    },
    {
      question: "How much can we claim and what's the potential benefit?",
      answer: "Eligible businesses with an aggregated turnover of under $20 million can claim a refundable tax offset of 18.5% above the corporate tax rate, potentially resulting in a 43.5% cash rebate. Larger businesses receive a non-refundable tax offset based on R&D intensity. The actual benefit depends on your R&D spend and tax position."
    },
    {
      question: "What expenditure can be included in an R&D claim?",
      answer: "Common eligible expenses include:\n• Salaries and wages of staff involved in R&D\n• Contractor and consultant fees\n• Prototype and testing costs\n• R&D-related software and hardware\n• Overheads proportionally related to R&D work\nWe'll help you identify and justify all eligible costs as part of your claim."
    },
    {
      question: "How long does the R&D claim process take?",
      answer: "From initial assessment to submission, the process generally takes 4 to 6 weeks, depending on the complexity of your activities and how quickly supporting documentation is provided. We manage the entire process and keep you informed at every step."
    },
    {
      question: "Do we need to register with Department of Industry, Science and Resources (DISR) before starting R&D?",
      answer: "No, but to claim the tax incentive, you must register your R&D activities with Department of Industry, Science and Resources (DISR) each year, after the end of the financial year in which the R&D occurred. BoostRD can handle the registration process and ensure your application is fully compliant and on time."
    },
    {
      question: "What documentation do we need to provide?",
      answer: "Documentation requirements vary, but typically include:\n• Project plans or technical documentation\n• Timesheets or staff allocation records\n• Experimentation records and test results\n• Invoices and financial records related to R&D spend\nWe'll guide you through what's needed and help you compile everything efficiently."
    },
    {
      question: "How do you ensure compliance with ATO requirements?",
      answer: "We follow a detailed methodology aligned with the latest guidance from the ATO and the Department of Industry, Science and Resources (DISR). Every claim is prepared and reviewed by experienced R&D tax specialists to ensure it meets all eligibility, substantiation, and compliance requirements.\n\nOur goal is to get it right the first time. We focus on building robust, defensible claims that stand up to scrutiny, helping you avoid unnecessary audits and delays. By taking a proactive, thorough approach, we reduce your risk and maximise your entitlement with confidence."
    },
    {
      question: "What are your fees and when do we pay?",
      answer: "Our fees are based on the size and complexity of your R&D activities. As a general guide:\n• We charge the greater of $5,000 or 3% of your eligible R&D expenditure\n• A $3,000 commencement fee is payable when we start work on your claim\n• The balance is due upon lodgement of your R&D application\n\nWe're outcome-focused — you only pay when we deliver. We guarantee our total fee will never exceed the benefit you receive, ensuring a positive return on your claim.\n\nWe also offer a free initial eligibility assessment and will always be upfront if we don't believe there's a worthwhile claim to pursue.\n\nNo hidden fees. No surprises. Just results."
    },
    {
      question: "How do we get started with BoostRD?",
      answer: "Getting started is easy. Simply book a free consultation or contact us through our website. We'll assess your eligibility, walk you through the process, and get everything moving quickly — with no obligation to proceed."
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