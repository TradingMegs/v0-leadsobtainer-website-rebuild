import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ServiceOfferings() {
  const services = [
    {
      title: "Business Analysis",
      description: "In-depth analysis of your business, competition, and market to create a tailored strategy.",
      icon: CheckCircle,
    },
    {
      title: "Wireframe Layout",
      description: "Strategic design of your digital assets to optimize for conversions.",
      icon: CheckCircle,
    },
    {
      title: "Micro Fads, Low Code, Landing Pages, HTML",
      description: "A simple, high-performance website with clear messaging designed to convert visitors.",
      icon: CheckCircle,
    },
    {
      title: "Website Optimization",
      description: "Improve your website's performance, user experience, and conversion rates.",
      icon: CheckCircle,
    },
    {
      title: "Funnels and Landing Pages",
      description: "High-converting sales funnels and landing pages designed to convert visitors into leads.",
      icon: CheckCircle,
    },
    {
      title: "CRM Creation, Integration & Workflow Automation",
      description: "Set up and optimize your CRM for maximum lead management.",
      icon: CheckCircle,
    },
    {
      title: "Forms for Lead Capture & Qualification",
      description: "Strategic form design to capture qualified leads without friction.",
      icon: CheckCircle,
    },
    {
      title: "Referral Management",
      description: "Systems to leverage your existing customers for new business.",
      icon: CheckCircle,
    },
    {
      title: "Creative Setup",
      description: "Professional design for all your marketing assets.",
      icon: CheckCircle,
    },
    {
      title: "Abandonment Recovery",
      description: "Automated email and Messenger follow-ups for cart abandonment.",
      icon: CheckCircle,
    },
    {
      title: "Email Sequence Setup",
      description: "Personalized and automated email sequences to nurture leads.",
      icon: CheckCircle,
    },
    {
      title: "Ads Management",
      description: "Strategy and implementation for paid ads across platforms.",
      icon: CheckCircle,
    },
    {
      title: "Reputation Management",
      description: "Review management and customer experience strategies to protect your brand.",
      icon: CheckCircle,
    },
    {
      title: "Workflow Automation",
      description: "Set up operational automations to streamline processes and save time.",
      icon: CheckCircle,
    },
    {
      title: "Automated Call Agent",
      description: "AI-powered call routing, follow-ups, and CRM integration for your business.",
      icon: CheckCircle,
    },
    {
      title: "Leads Call Agent",
      description: "Professional call handling and qualification that integrates with your systems.",
      icon: CheckCircle,
    },
    {
      title: "Payments Integration",
      description: "Seamless integration with Stripe, PayPal and other providers.",
      icon: CheckCircle,
    },
    {
      title: "SEO Services",
      description: "Comprehensive strategy for improving your search engine rankings.",
      icon: CheckCircle,
    },
    {
      title: "Security",
      description: "Implement best practices for website, privacy, and data security.",
      icon: CheckCircle,
    },
    {
      title: "Analytics",
      description: "Performance tracking and reporting to drive continuous improvement.",
      icon: CheckCircle,
    },
    {
      title: "Local SEO, Content & Strategies",
      description: "Targeted local SEO strategies to dominate your local market.",
      icon: CheckCircle,
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Service Offerings</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each service is designed to address specific aspects of your business growth strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-1">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center gap-2 bg-secondary/30 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-sm">Our Methodology</span>
          </button>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Featured Services</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/services/ai-employee-automation">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-primary/20 hover:border-primary/50 transition-all group cursor-pointer h-full">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-all">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold mb-3">AI Employee Automation</h3>
                <p className="text-gray-300 mb-4">Your 24/7 AI employee that automates tasks and scales growth.</p>
                <div className="flex items-center text-primary group-hover:translate-x-2 transition-all">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link href="/services/marketing-automation">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-primary/20 hover:border-primary/50 transition-all group cursor-pointer h-full">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-all">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Marketing Automation</h3>
                <p className="text-gray-300 mb-4">Turn clicks into customers with AI-driven marketing systems.</p>
                <div className="flex items-center text-primary group-hover:translate-x-2 transition-all">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
