import { Check } from "lucide-react"

export function GetStarted() {
  const benefits = [
    {
      title: "Expert Strategy Session",
      description: "Our team will analyze your business and create a custom growth plan.",
    },
    {
      title: "Custom Implementation Plan",
      description: "We'll create a step-by-step implementation plan tailored to your business.",
    },
    {
      title: "60-Day Money-Back Guarantee",
      description: "If you're not satisfied with our service, we'll refund your investment.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">
              Schedule a free strategy call with our team to discuss your business goals and see how we can help you
              achieve them.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-full p-1 mt-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="bg-secondary/30 rounded-lg p-8 w-full max-w-md">
              <div className="aspect-video bg-background/20 rounded-md flex items-center justify-center mb-6">
                <svg
                  className="h-16 w-16 text-primary/50"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M15 12L10 15.5V8.5L15 12Z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Watch Our Demo</h3>
              <p className="text-sm text-muted-foreground mb-4">
                See how our system works and how it can help your business grow.
              </p>
              <button className="text-primary text-sm font-medium flex items-center gap-1">
                Watch Video
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
