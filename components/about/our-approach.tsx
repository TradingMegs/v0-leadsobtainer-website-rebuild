import { Button } from "@/components/ui/button"

export function OurApproach() {
  const steps = [
    {
      number: 1,
      title: "Analyze",
      description: "We start by analyzing your business, market, and competition to identify growth opportunities.",
    },
    {
      number: 2,
      title: "Strategize",
      description: "We create a custom growth strategy tailored to your specific business goals and market.",
    },
    {
      number: 3,
      title: "Implement",
      description: "Our team handles the implementation of all systems, campaigns, and automations.",
    },
    {
      number: 4,
      title: "Optimize",
      description: "We continuously monitor, test, and optimize to maximize your results and ROI.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Approach</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We follow a proven methodology to deliver consistent results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="bg-secondary/30 rounded-lg p-6 relative">
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-secondary/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Grow Your Business?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Schedule a free strategy call to see how we can help you achieve your growth goals.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6">
            Schedule Your Free Strategy Call
          </Button>
        </div>
      </div>
    </section>
  )
}
