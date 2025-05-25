import { Mail, BarChart2, Globe, Users } from "lucide-react"

export function KeyFeatures() {
  const features = [
    {
      icon: Mail,
      title: "Lead Nurturing Workflows",
      description:
        "Auto-assign leads to your CRM, trigger personalized email sequences, and score prospects based on behavior.",
      benefits: [
        "Automated follow-up sequences",
        "Behavior-based lead scoring",
        "Personalized content delivery",
        "Multi-channel engagement",
      ],
    },
    {
      icon: BarChart2,
      title: "Campaign Optimization",
      description: "AI A/B tests ad copy, landing pages, and CTAs to maximize ROI.",
      benefits: [
        "Automated A/B testing",
        "Performance-based optimization",
        "Dynamic content adjustment",
        "Conversion rate improvement",
      ],
    },
    {
      icon: Globe,
      title: "Multi-Channel Ads Management",
      description: "Run synchronized campaigns across Google, Meta, and LinkedIn with real-time budget allocation.",
      benefits: [
        "Cross-platform campaign management",
        "Dynamic budget allocation",
        "Unified reporting dashboard",
        "Audience segmentation",
      ],
    },
    {
      icon: Users,
      title: "Customer Retention Engine",
      description: "Automated win-back campaigns for churned clients and referral programs for loyal customers.",
      benefits: [
        "Churn prediction algorithms",
        "Automated win-back sequences",
        "Loyalty program management",
        "Referral system automation",
      ],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">Key Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>

              <p className="text-gray-300 mb-6">{feature.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="max-w-4xl mx-auto bg-black/60 backdrop-blur-sm rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center">How Our Marketing Automation Works</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg bg-primary/10">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Strategy & Setup</h4>
                <p className="text-sm text-gray-300">
                  We analyze your business goals and create a tailored automation strategy.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-primary/10">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Implementation</h4>
                <p className="text-sm text-gray-300">
                  Our team builds and integrates the automation systems with your existing tools.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg bg-primary/10">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Optimization</h4>
                <p className="text-sm text-gray-300">
                  Continuous monitoring and refinement to maximize performance and ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
