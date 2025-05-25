import { CheckCircle } from "lucide-react"

export default function WebinarValueStack() {
  const benefits = [
    {
      title: "Discover the 3-Step Client Acquisition Formula",
      description: "Learn our proven system that turns cold prospects into paying clients in less than 30 days",
    },
    {
      title: "Master the High-Ticket Client Attraction Method",
      description: "Stop chasing low-value leads and start attracting clients willing to pay premium prices",
    },
    {
      title: "Get Our Lead Generation Automation Toolkit",
      description: "Receive the exact templates and scripts we use to generate $10,000+ per month for our clients",
    },
    {
      title: "Live Q&A with Mark Johnson",
      description: "Get your specific questions answered by our lead generation expert with 15+ years of experience",
    },
    {
      title: "Exclusive Bonus: Local Business Growth Roadmap",
      description: "Walk away with a customized 90-day plan to scale your business (valued at $997)",
    },
  ]

  return (
    <div className="bg-secondary/30 rounded-xl p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4">Here's What You'll Learn:</h3>
      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex">
            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div className="ml-3">
              <h4 className="font-medium">{benefit.title}</h4>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
