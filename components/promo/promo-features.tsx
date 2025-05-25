import { Zap, BarChart3, Users, Clock } from "lucide-react"

export function PromoFeatures() {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">How Our System Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered growth system helps local businesses automate their marketing, sales, and client acquisition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-secondary/30 rounded-lg p-6 flex flex-col h-full">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Automated Lead Generation</h3>
            <p className="text-muted-foreground">
              Our AI identifies and targets your ideal customers with precision, delivering a consistent flow of
              high-quality leads without your involvement.
            </p>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6 flex flex-col h-full">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI-Powered Sales Automation</h3>
            <p className="text-muted-foreground">
              Our system nurtures leads through the entire sales process, handling follow-ups, objections, and
              scheduling, so you only deal with ready-to-buy customers.
            </p>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6 flex flex-col h-full">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Client Retention Engine</h3>
            <p className="text-muted-foreground">
              Keep clients longer and increase their lifetime value with our automated retention system that prevents
              churn and identifies upsell opportunities.
            </p>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6 flex flex-col h-full">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Time-Saving Automation</h3>
            <p className="text-muted-foreground">
              Reclaim hours of your week with our comprehensive automation tools that handle repetitive marketing and
              sales tasks for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
