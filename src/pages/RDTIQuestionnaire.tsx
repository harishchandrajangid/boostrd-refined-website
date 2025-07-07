import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const RDTIQuestionnaire = () => {
  const questions = [
    "Does the project involve resolving technical uncertainties or challenges that are not easily solved using existing knowledge, tools or technologies?",
    "Is the outcome or the methodology to achieve the result uncertain or unknown at the beginning of the project?",
    "Can the technical challenges or problems being addressed in the project be easily solved by hiring an existing expert or using established solutions without significant experimentation or development?",
    "Is the development or solution being pursued something that requires innovative approaches, experimental work, or systematic investigation beyond what an expert could easily apply using existing methods?",
    "Is the project conducted in a systematic manner, including planning, experimentation and analysis?",
    "Are there detailed records of the project's progress, including objectives, methods, experiments and results?",
    "Does the project involve practical experimentation or the development of prototypes to validate new concepts or technologies?",
    "Is there a structured process for testing and refining prototypes or new technologies?",
    "Are all R&D activities and associated expenditures documented in detail?",
    "Is there clear evidence of the project's aim to resolve technical uncertainties and achieve advancements?",
    "Are the activities involved in developing new knowledge, technology, or significant improvements to existing ones?"
  ];

  return (
    <div className="pt-20">
      <section className="section-premium bg-[var(--gradient-section)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="section-heading text-gradient mb-6">
              RDTI Self Assessment Questionnaire
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                When considering whether a project qualifies as Research and Development (R&D), it's crucial to assess whether it meets the necessary criteria. Use this questionnaire to evaluate your project's potential eligibility for R&D status. Answering "Yes" to most of the questions below suggests that your project could indeed qualify as R&D. However, if you answer "No" to several, it might not meet the requirements set by AusIndustry.
              </p>
            </div>
          </div>

          {/* Questions */}
          <Card className="card-premium p-8 md:p-12 mb-12">
            <h2 className="subsection-heading mb-8">Key Questions to Ask About Your R&D Project:</h2>
            
            <div className="space-y-6">
              {questions.map((question, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white/50 rounded-xl">
                  <div className="w-8 h-8 bg-[var(--gradient-primary)] rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{question}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Important Note */}
          <Card className="card-premium p-8 md:p-10 mb-12 bg-white/80">
            <h3 className="text-xl font-semibold mb-4 text-primary">Important Note:</h3>
            <p className="text-muted-foreground leading-relaxed">
              The above questions are not exhaustive of all the qualifying criteria set by the relevant authorities. It's always a good idea to consult official guidelines or seek expert advice when determining whether your project qualifies as R&D.
            </p>
          </Card>

          {/* Conclusion */}
          <Card className="card-premium p-8 md:p-10 bg-[var(--gradient-primary)] text-white text-center">
            <h3 className="text-2xl font-semibold mb-4">Is Your Project Truly R&D?</h3>
            <p className="leading-relaxed max-w-3xl mx-auto">
              If you find yourself answering "Yes" to most of these questions, it's a good sign that your project may qualify for R&D classification. Remember, R&D activities typically involve systematic investigation, experimentation, and innovation. Whether your goal is to develop new products, technologies, or processes, these essential elements are what distinguish R&D from other types of work.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default RDTIQuestionnaire;