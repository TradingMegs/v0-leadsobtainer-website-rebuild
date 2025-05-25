import { Phone, MessageSquare, Search, BarChart3 } from "lucide-react"

export function FeatureBreakdown() {
  const features = [
    {
      icon: Phone,
      title: "Lead Qualification & Booking",
      description:
        "Automate inbound/outbound calls, qualify leads, and schedule appointments without lifting a finger.",
      example: "AI handles 80% of appointment bookings, reducing staff workload by 50%.",
    },
    {
      icon: MessageSquare,
      title: "Smart Communication Hub",
      description:
        "Instantly respond to emails, WhatsApp, and customer queries. Convert abandoned carts with automated follow-ups.",
      example: "Boosted cart recovery rate by 35% for an e-commerce client in 2 months.",
    },
    {
      icon: Search,
      title: "SEO & Reputation Management",
      description:
        "AI-driven SEO enhancements and review management tools dominate local search rankings while deflecting negative feedback.",
      example: "Local gym ranked #1 for 'fitness near me' in 90 days.",
    },
    {
      icon: BarChart3,
      title: "Social Media & CRM Automation",
      description:
        "Schedule posts, analyze engagement, and auto-segment customers into your CRM with personalized welcome sequences.",
      example: "Increased social engagement by 47% while reducing management time by 15 hours/week.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">Feature Breakdown</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>

              <p className="text-gray-300 mb-6">{feature.description}</p>

              <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
                <p className="text-sm font-medium text-primary">REAL RESULT</p>
                <p className="text-gray-300">{feature.example}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/30 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-sm">How It Works</span>
          </div>

          <div className="mt-8 max-w-3xl mx-auto">
            <div className="relative py-8">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/80 to-secondary/80"></div>

              {[
                "AI analyzes your business processes and identifies automation opportunities",
                "We build custom workflows tailored to your specific needs",
                "Integrations with your existing tools and platforms are established",
                "AI employee is trained on your business voice and processes",
                "Continuous optimization based on performance data",
              ].map((step, index) => (
                <div key={index} className="relative mb-8 last:mb-0">
                  <div className="flex items-center">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className={`w-1/2 pr-8 ${index % 2 === 0 ? "text-right" : "ml-auto"}`}>
                      <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-primary/20">{step}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
