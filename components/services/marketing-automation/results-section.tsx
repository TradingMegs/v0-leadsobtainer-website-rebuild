import { DollarSign, TrendingUp, Users, Clock } from "lucide-react"

export function ResultsSection() {
  const metrics = [
    {
      icon: DollarSign,
      value: "40%",
      label: "Lower CAC for a real estate agency",
    },
    {
      icon: TrendingUp,
      value: "25%",
      label: "Higher email open rates with AI-generated subject lines",
    },
    {
      icon: Users,
      value: "3.2x",
      label: "Increase in qualified leads for service businesses",
    },
    {
      icon: Clock,
      value: "68%",
      label: "Reduction in time spent on marketing tasks",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">
          Results That Speak For Themselves
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-primary/10 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <metric.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">{metric.value}</div>
              <p className="text-sm text-gray-300">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-primary/10">
            <h3 className="text-xl font-semibold mb-6">Case Study: Local Fitness Studio</h3>

            <div className="space-y-4 mb-6">
              <p className="text-gray-300">
                A fitness studio was struggling to maintain consistent lead flow and member retention. After
                implementing our marketing automation:
              </p>

              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Lead generation increased by 47% in the first 60 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Member retention improved by 32% through automated engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Marketing costs reduced by 28% while improving results</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/10 p-4 rounded-lg">
              <blockquote className="text-gray-300 italic">
                "The automated marketing system has transformed our business. We're getting more leads and keeping
                members longer, all while spending less time on marketing."
              </blockquote>
              <div className="mt-2 text-sm text-gray-400">— Fitness Studio Owner</div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-primary/10">
            <h3 className="text-xl font-semibold mb-6">Case Study: Home Services Company</h3>

            <div className="space-y-4 mb-6">
              <p className="text-gray-300">
                A plumbing and HVAC company wanted to improve their lead generation and customer follow-up. After
                implementing our marketing automation:
              </p>

              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Google Ads conversion rate increased by 52%</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Customer reactivation campaigns generated $37,500 in 90 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <span className="text-xs">✓</span>
                  </div>
                  <span className="text-gray-300">Automated review requests increased positive reviews by 215%</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/10 p-4 rounded-lg">
              <blockquote className="text-gray-300 italic">
                "The ROI on this system has been incredible. We're booking more jobs and our technicians are busier than
                ever. The automated follow-ups have been a game-changer."
              </blockquote>
              <div className="mt-2 text-sm text-gray-400">— Home Services Business Owner</div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="/get-started"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-full transition-all"
          >
            Get Started with Marketing Automation
            <TrendingUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
