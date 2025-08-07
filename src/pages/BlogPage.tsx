import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: "Unlocking the R&D Tax Incentive for Software Development: A Treasure Map for Innovation",
      date: "December 2024",
      excerpt: "When we think of research and development (R&D), images of lab coats, test tubes, and rocket science often come to mind. But R&D isn't just for pharmaceutical companies or aerospace engineers...",
      content: `When we think of research and development (R&D), images of lab coats, test tubes, and rocket science often come to mind. But R&D isn't just for pharmaceutical companies or aerospace engineers. If you're a software developer, your next big project could qualify for the R&D Tax Incentive (R&DTI)—a government program designed to support innovation and scientific experimentation, even in the tech world.

But hold on—before you dive into coding and start submitting claims, let's take a closer look at what qualifies as R&D, and how your software development project can unlock this valuable funding.

## What Qualifies as R&D in Software Development?

The first step in claiming the R&D Tax Incentive is understanding what R&D really means in the context of the program. According to the Income Tax Assessment Act (ITAA) 1997, R&D isn't just about trying new things—it's about solving the unknown through systematic experimentation. In the world of software, this means addressing technical uncertainties and pushing boundaries.

For instance, imagine you're developing a software platform that integrates data from various health tracking devices—but none of these devices talk to each other. The integration process isn't a simple task; it involves solving unknowns, like figuring out how to get data from one device to work seamlessly with another. This is the kind of challenge that could qualify for R&D funding.

## Core R&D Activities: Pushing the Boundaries of Knowledge

To be eligible for the R&D Tax Incentive, your software project must involve core R&D activities—the parts of your project where the outcome is uncertain, and you are pushing the boundaries of what's known.

### What Makes Core R&D "Core"?

Core R&D activities are defined by two key ingredients:

**1. The Outcome is Uncertain**

This is the heart of R&D: you're tackling a problem where you can't predict the outcome. It's about navigating through uncertainty. For example, if you're building a unified health dashboard that pulls data from multiple, incompatible devices, the solution isn't obvious. You're experimenting with different methods to find a viable solution, which is core R&D.

**2. The Purpose is to Generate New Knowledge**

This is not about routine coding or tweaking existing software. Core R&D activities are about creating something entirely new or significantly improving existing technology. You're attempting to solve a problem that no one has cracked before—either by developing new technologies, improving processes, or creating new applications.

## What Does Core R&D Look Like for Software Development?

Now that we know what core R&D is, let's look at some concrete examples of how it might appear in a software development context:

**• Building New Algorithms**
Suppose you're trying to create a new algorithm to predict user behaviour, but no one knows if it's even possible to achieve the desired outcome. This kind of work—exploring unknown territory and solving complex technical challenges—is core R&D.

**• Breaking Down Silos in Data**
Let's say you want your app to pull in data from health tracking devices, smart home technology, and weather apps. These devices don't easily talk to each other, and no one's figured out how to integrate them into a cohesive system. That's a perfect example of a software R&D project that could qualify for funding.

**• Developing Next-Gen AI Models**
Imagine you're working on an AI model to provide deeper insights into customer preferences. But unlike existing models, yours needs to work under new, more complex conditions. Building that kind of AI system—especially when it involves new methodologies or breakthroughs—qualifies as core R&D.

## Supporting R&D Activities

In addition to core R&D activities, there are also supporting R&D activities—the tasks that, while not as glamorous as the core work, play a critical role in ensuring the success of the overall project. These activities include:

**• Testing New Code**
You may need to test different iterations of a software module to determine which approach works best. If this testing directly supports your main R&D activities, it qualifies as supporting R&D.

**• Creating Prototypes**
When you're experimenting with new ideas, building prototypes to test your hypotheses is essential. While the prototype itself may not be part of the core R&D, it could qualify as a supporting activity.

## Systematic Progression of Work: Following the Treasure Map

Think of R&D like a treasure hunt—you're on a quest for something new, but you don't just blindly wander in search of treasure. You follow a map, a systematic progression of work that guides you step by step toward your goal. This process is key to qualifying for the R&D Tax Incentive.

Here's how the process typically unfolds in software development:

**1. Hypothesis**
Start with an idea or hypothesis. For example: "We believe we can create a unified platform that integrates health data from devices that don't currently communicate with each other."

**2. Experimentation**
Next comes the fun part—testing different solutions, tweaking algorithms, building prototypes, and experimenting with code to solve the problem.

**3. Observation**
Measure and analyse the results of your experiments. Does your software perform better with a certain algorithm? Does the integration work in different scenarios?

**4. Evaluation**
After testing, step back and evaluate whether the results support your hypothesis or if further experimentation is required. This systematic cycle of testing, adjusting, and learning is essential for core R&D activities.

## Exclusions: What Doesn't Qualify for R&D?

Not every software development activity qualifies for the R&D Tax Incentive. Here are a few exclusions you should be aware of:

**• Developing Software for Internal Use**
If you're building software just for internal business operations (e.g., payroll, invoicing, or inventory management), it doesn't qualify for R&D funding, even if it's related to software development.

**• Routine Software Maintenance**
Activities like upgrading, patching, or performing basic software maintenance are considered routine and not eligible for R&D. However, if maintenance is part of an experimental project aimed at solving a broader challenge, it may still qualify.

## Documenting Your R&D Journey

Remember, the R&D Tax Incentive is a self-assessment process. This means you'll need to document your work carefully to prove that your activities qualify for funding. Here's what you need to keep track of:

**• Your Hypothesis**
What problem are you solving, and how do you plan to solve it? Document the ideas and goals that are driving your experiments.

**• Your Experiments**
What tests or trials did you run? What worked? What didn't? Record the entire process, including any iterations or changes made along the way.

**• The Results**
What did you observe during testing? Did the results match your expectations, or did you discover something new?

**• Your Conclusions**
What did you learn? Did the results support your hypothesis? Did you refine your approach based on what you discovered?

## The Takeaway: Your Treasure Map to Innovation

By demonstrating that your software development activities involve scientific uncertainty and a systematic process of experimentation, you could be on your way to claiming the R&D Tax Incentive for your eligible activities.

So, the next time you're working on a software project that tackles a complex problem—whether it's integrating health data, building a new AI model, or developing the next big app—remember that your journey might just qualify for a reward. Keep detailed records of your experiments, document your progress, and you could find yourself reaping the benefits of the R&D Tax Incentive.`
    },
    {
      id: 2,
      title: "The R&D Tax Incentive in Australia: A Game-Changer for Startups and Established Companies Alike",
      date: "December 2024",
      excerpt: "Innovation isn't just the domain of global tech giants or research-heavy enterprises. In Australia, the R&D Tax Incentive is a powerful program designed to support innovation across the board...",
      content: `Innovation isn't just the domain of global tech giants or research-heavy enterprises. In Australia, the R&D Tax Incentive is a powerful program designed to support innovation across the board, from agile startups tinkering in coworking spaces to large corporations with dedicated research teams. If you're investing time and money into developing new products, processes, or services—or even improving existing ones—this incentive could be for you.

## What is the R&D Tax Incentive?

The Research and Development (R&D) Tax Incentive is an Australian government program aimed at encouraging businesses to engage in R&D that benefits Australia. It provides a tax offset for eligible R&D activities, making innovation more financially viable.

The incentive has two main components:

• A 43.5% refundable tax offset for eligible companies with an aggregated turnover of less than $20 million.
• A non-refundable tax offset (currently 38.5%, but can vary) for larger companies, with any unused offset able to be carried forward into future income years.

## Why It's for Everyone (Not Just the Big Players)

**✅ Startups and Small Businesses**

For startups, especially those pre-revenue or operating at a loss, cash flow is critical. The refundable component of the R&D tax incentive allows eligible businesses to receive a cash refund, not just a tax reduction. That means startups can reinvest straight into their operations, hire talent, or continue developing a minimum viable product (MVP) without diluting equity.

Even early-stage companies conducting trials, developing prototypes, or improving software or tech infrastructure may qualify. The key is to ensure the work meets the criteria around systematic experimentation and scientific or technological uncertainty.

**✅ Established and Larger Companies**

Larger businesses benefit differently. With access to broader resources and teams, they may conduct ongoing R&D across multiple projects and departments. The R&D Tax Incentive allows these businesses to reduce their tax liability while continuing to pursue innovation at scale.

For large companies, the incentive also helps manage risk by offsetting part of the cost of longer-term, high-investment R&D projects.

## Common Misconceptions—Busted

**• "We're not a tech company."**
You don't need to be in tech or science. If you're solving a problem in a new or improved way—whether in agriculture, manufacturing, health, fintech, or even food production—you could qualify.

**• "We didn't succeed."**
Success isn't required. What matters is the effort to generate new knowledge through experimentation. Failed experiments can still be eligible.

**• "It's too complex to apply."**
While the process involves documentation and compliance, many companies successfully apply with the help of R&D tax consultants, who help ensure everything is aligned with program requirements.

## Tips to Maximise Your Claim

1. **Document Everything** – Keep records of hypotheses, experiments, technical challenges, and outcomes.
2. **Consult Early** – Talk to an R&D tax specialist during the project, not just at tax time.
3. **Apply Annually** – The claim period closes 10 months after the end of your financial year—don't miss it!
4. **Review the DISR Guidance** – The official resources are a goldmine of clarity on eligibility.

## Final Thoughts

The R&D Tax Incentive is a critical tool to stimulate innovation across all sectors of the Australian economy. Whether you're a two-person startup trying to solve a niche problem or a major corporation reengineering processes, this program is designed to reward your investment in R&D.

Innovation is hard work—but with the right incentives, it's also a lot more achievable.`
    },
    {
      id: 3,
      title: "Maximising Your R&D Tax Claim: Focus on Activities, Not the Whole Project",
      date: "December 2024",
      excerpt: "If you're looking to claim the R&D Tax Incentive (R&DTI) for your innovative projects, it's important to know that you can't claim the entire project. Instead, the incentive applies only to specific R&D activities...",
      content: `If you're looking to claim the R&D Tax Incentive (R&DTI) for your innovative projects, it's important to know that you can't claim the entire project. Instead, the incentive applies only to specific R&D activities conducted within the project.

Understanding the difference between the various types of R&D activities and how they align with the R&DTI criteria is key to ensuring you maximise the benefits of the incentive.

## Core vs Supporting R&D Activities: What's Eligible?

The first step to claiming the R&DTI is identifying which activities within your project are eligible for the tax offset. The legislation distinguishes between core R&D activities and supporting R&D activities. Only these activities can be registered for the R&DTI.

**• Core R&D Activities:** These are the activities at the heart of your research that involve generating new knowledge. They are defined as activities where the outcome cannot be determined in advance. For example, you might be testing a new material or developing a new manufacturing process where the result is uncertain. Core R&D involves a systematic approach, guided by the scientific method, and aims to create new knowledge in the form of products, services, processes, or technologies.

**• Supporting R&D Activities:** These are activities that directly assist core R&D activities. Supporting activities could include data collection, analysis, or prototyping. However, to qualify for the tax incentive, these activities must be closely related to the core R&D and must support the dominant purpose of your core R&D activities.

## Why You Can't Claim Entire Projects

So why can't you claim an entire project for the R&DTI? Simply put, it's because only the specific R&D activities within the project are eligible. Here's why:

**1. Uncertainty of Outcome:** To be eligible, the outcome of the core R&D activity must not be known or predictable before you start the activity. If your activity involves something with a known outcome, such as routine testing or standard industry practices, it won't qualify as R&D under the R&DTI.

**2. Excluded Activities:** There are specific activities that are excluded from being considered core R&D, even if they are part of a broader project. For instance, activities like market research, business process improvements, or routine testing don't qualify. However, some of these excluded activities may still qualify as supporting R&D activities if they directly contribute to the core R&D.

**3. The Link Between Core and Supporting Activities:** Supporting R&D activities must directly support core R&D. If the activity isn't directly related to generating new knowledge, then it won't qualify for the R&D Tax Incentive. For example, producing a product prototype might qualify as a supporting activity, but if it's part of a process that doesn't contribute directly to the knowledge creation, it may not be eligible.

**4. Documenting Your Activities:** You'll need to carefully document and show how each activity within your project aligns with the criteria for the R&DTI. This means keeping detailed records of your hypothesis, experiments, observations, and outcomes for core R&D activities. For supporting activities, you'll also need to explain how they directly contribute to the R&D process.

## How to Determine Which Activities Are Eligible

To determine whether your R&D activities qualify for the tax incentive, ask yourself the following questions:

• **Does the activity generate new knowledge?** Core R&D activities must be aimed at discovering something new—whether that's a new material, process, or service.
• **Is the outcome uncertain?** If you already know the result, or if it's based on publicly available knowledge, it's likely not eligible.
• **Is the activity part of a systematic process?** Core R&D activities must follow a methodical approach: from hypothesis to experimentation, observation, and analysis.
• **Does the activity directly support core R&D?** Supporting activities can only be claimed if they directly contribute to the research efforts, like providing necessary data or refining prototypes.

## Example: Software Development for a Predictive Healthcare Application

Imagine you're working on an innovative healthcare application designed to predict the onset of medical conditions using data from wearable devices like smartwatches and fitness trackers. The app will use real-time monitoring to identify early warning signs for conditions such as heart disease or diabetes.

**• Claimable R&D Activity:** Developing a new predictive algorithm that combines real-time biometric data, machine learning, and patient history to predict the risk of heart disease in individuals with high accuracy. This predictive model is based on new scientific principles, requiring experimentation, data analysis, and iterative testing to ensure its effectiveness.

**• Potentially Non-Eligible Activity:** The user interface design that displays the data from the wearable devices, or the integration with existing APIs for syncing data with health records, may not be eligible, as these are common practices in software development and do not typically involve new knowledge or experimentation.

**Why You Can't Claim the Entire Project:** While the healthcare application is innovative in its approach to using wearable data, the predictive algorithm is the only part of the project that would likely qualify as core R&D. The development of the algorithm involves creating new knowledge, testing hypotheses, and applying scientific principles in a way that hasn't been done before. On the other hand, user interface design or integrating existing data sources may not meet the R&D criteria, as these tasks are more routine and don't typically involve experimentation or scientific advancement.

## Conclusion

While you can't claim an entire R&D project under the R&D Tax Incentive, you can still claim the eligible activities that form the heart of your research. By understanding the distinction between core and supporting R&D activities and documenting your work, you can maximise your tax offset claims and ensure your business gets the support it needs to innovate.

Remember, it's crucial to carefully assess your R&D activities and consult the relevant guidelines or experts if you're unsure whether an activity qualifies. The R&D Tax Incentive can be a powerful tool for driving innovation, but it's all about claiming the right activities, not the entire project.`
    }
  ];

  const currentPost = selectedPost ? blogPosts.find(post => post.id === selectedPost) : null;

  const renderBlogList = () => (
    <div className="max-w-4xl mx-auto space-y-8">
      {blogPosts.map((post) => (
        <Card 
          key={post.id} 
          className="p-8 bg-card border cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => setSelectedPost(post.id)}
        >
          <h2 className="text-2xl font-bold mb-4 text-foreground hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="text-sm text-muted-foreground mb-4">{post.date}</p>
          <p className="text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
          <div className="mt-4">
            <Button variant="outline" className="mt-4">
              Read More →
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderBlogPost = () => {
    if (!currentPost) return null;

    return (
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="ghost" 
          className="mb-8"
          onClick={() => setSelectedPost(null)}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Button>
        
        <Card className="p-8 bg-card border">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-4 text-foreground">
              {currentPost.title}
            </h1>
            <p className="text-sm text-muted-foreground">{currentPost.date}</p>
          </div>
          
          <div className="prose prose-lg max-w-none text-foreground">
            {currentPost.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-primary">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              } else if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-foreground">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h4 key={index} className="text-lg font-semibold mt-4 mb-2 text-foreground">
                    {paragraph.replace(/\*\*/g, '')}
                  </h4>
                );
              } else {
                return (
                  <p key={index} className="mb-4 leading-relaxed text-foreground">
                    {paragraph}
                  </p>
                );
              }
            })}
          </div>
        </Card>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Blog & Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest R&D tax incentive news, insights, and tips to maximize your business benefits.
          </p>
        </div>

        {selectedPost ? renderBlogPost() : renderBlogList()}
      </div>
    </div>
  );
};

export default BlogPage;