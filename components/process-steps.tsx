export function ProcessSteps() {
  return (
    <section className="py-16 md:py-24 px-4 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Simple 3-Step Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Getting started with our AI-powered growth system is easy and straightforward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary/30 rounded-lg p-6 border border-lime-400/20 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-lime-400 text-black flex items-center justify-center text-xl font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold mb-3 mt-4">Strategy Session</h3>
            <p className="text-muted-foreground mb-4">
              We'll analyze your business, competitors, and market to create a custom growth strategy tailored to your
              specific goals.
            </p>
            <a href="#" className="text-primary hover:underline text-sm">
              Learn more →
            </a>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6 border border-lime-400/20 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-lime-400 text-black flex items-center justify-center text-xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold mb-3 mt-4">System Implementation</h3>
            <p className="text-muted-foreground mb-4">
              Our team will set up and configure your custom AI growth system, integrating with your existing business
              processes.
            </p>
            <a href="#" className="text-primary hover:underline text-sm">
              Learn more →
            </a>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6 border border-lime-400/20 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-lime-400 text-black flex items-center justify-center text-xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold mb-3 mt-4">Growth & Optimization</h3>
            <p className="text-muted-foreground mb-4">
              Sit back and watch your business grow while our AI continuously optimizes your campaigns for maximum
              results.
            </p>
            <a href="#" className="text-primary hover:underline text-sm">
              Learn more →
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Most clients see significant results within the first 30 days of implementation.
          </p>
          <a
            href="#get-started"
            className="inline-flex h-12 items-center justify-center rounded-md bg-lime-400 px-6 text-lg font-medium text-black transition-colors hover:bg-lime-300 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  )
}
