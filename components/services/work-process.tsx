export function WorkProcess() {
  const steps = [
    {
      number: 1,
      title: "Discovery & Analysis",
      description: "We analyze your business, market, and competition to identify opportunities.",
    },
    {
      number: 2,
      title: "Planning & Strategy",
      description: "We create a custom growth plan tailored to your goals.",
    },
    {
      number: 3,
      title: "Implementation",
      description: "Our team executes the strategy with precision and attention to detail.",
    },
    {
      number: 4,
      title: "Automation & Integration",
      description: "We connect all systems to create a seamless workflow.",
    },
    {
      number: 5,
      title: "Done-For-You Excellence",
      description: "We manage everything so you can focus on your core business.",
    },
    {
      number: 6,
      title: "Monitoring & Optimization",
      description: "Continuous improvement to maximize results.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">How We Work With You</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our proven approach delivers reliable, consistent results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
