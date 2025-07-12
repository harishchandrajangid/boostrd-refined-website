import { Card } from '@/components/ui/card';

const BlogPage = () => {
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

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card border">
            <div className="text-center text-muted-foreground">
              <h3 className="text-2xl font-semibold mb-4">Coming Soon</h3>
              <p className="text-lg">
                We're preparing valuable content and insights about R&D tax incentives. 
                Check back soon for expert articles and industry updates.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;