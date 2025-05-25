export function PromoTimeline() {
  const steps = [
    {
      number: 1,
      title: "Book Your Strategy Call",
      description: "Schedule a free 30-minute strategy call with one of our growth specialists.",
    },
    {
      number: 2,
      title: "Get Your Custom Growth Plan",
      description: "We'll analyze your business and create a tailored growth strategy.",
    },
    {
      number: 3,
      title: "We Implement Everything",
      description: "Our team handles the complete setup and implementation of your growth system.",
    },
    {
      number: 4,
      title: "Start Seeing Results",
      description: "Watch as your leads, sales, and revenue begin to grow automatically.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Getting started with LeadsObtainer is simple. Here's what to expect:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
    </section>
  )
}
