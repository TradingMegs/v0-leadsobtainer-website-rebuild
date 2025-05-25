import { CheckCircle } from "lucide-react"

export function OurValues() {
  const values = [
    {
      title: "Results First",
      description: "We measure our success by the results we deliver for our clients.",
    },
    {
      title: "Transparency",
      description: "We believe in complete transparency in our strategies, reporting, and pricing.",
    },
    {
      title: "Innovation",
      description: "We constantly innovate and adapt to stay ahead of the curve.",
    },
    {
      title: "Client Success",
      description: "Your success is our success. We're invested in your long-term growth.",
    },
    {
      title: "Data-Driven",
      description: "We make decisions based on data, not hunches or guesswork.",
    },
    {
      title: "Continuous Improvement",
      description: "We're never satisfied with the status quo and always strive to do better.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Core Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These principles guide everything we do and every decision we make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
