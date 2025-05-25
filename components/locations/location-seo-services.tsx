import Link from "next/link"
import { Search, Bot, LineChart, Target, Megaphone, Sparkles, Mail } from "lucide-react"

interface LocationSeoServicesProps {
  location: string
}

export function LocationSeoServices({ location }: LocationSeoServicesProps) {
  // Format location for URLs
  const locationSlug = location.toLowerCase().replace(/\s+/g, "-")

  // Create base URL for services
  const baseUrl = "/services"

  // Create base URL for get-started with location parameter
  const getStartedUrl = `/get-started?location=${encodeURIComponent(location)}`

  return (
    <section className="container mx-auto mb-16">
      <div className="bg-secondary/10 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-8 text-center">AI-Powered Growth Services in {location}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* SEO & Local SEO */}
          <div className="bg-secondary/20 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <Search className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">SEO & Local SEO in {location}</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Our {location} SEO experts help local businesses improve their online visibility and attract more
              customers through targeted search engine optimization strategies.
            </p>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Local SEO services in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Small business SEO services in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Local search marketing in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  SEO agency near {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Search engine optimization company in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Google Business Profile optimization in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  On-page SEO optimization services in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Technical SEO audit in {location}
                </Link>
              </li>
            </ul>
            <Link href={`${baseUrl}/seo`} className="text-primary hover:underline inline-flex items-center">
              Learn more about our SEO services
              <span className="ml-1">→</span>
            </Link>
          </div>

          {/* Marketing Automation & CRM Integration */}
          <div className="bg-secondary/20 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Marketing Automation & CRM in {location}</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Streamline your marketing and sales processes with our AI-powered automation solutions tailored for{" "}
              {location} businesses.
            </p>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Marketing automation services in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Marketing automation agency in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  CRM integration services in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  CRM automation consulting in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Sales and marketing automation in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Omnichannel marketing automation in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  CRM data integration services in {location}
                </Link>
              </li>
            </ul>
            <Link
              href="/services/marketing-automation"
              className="text-primary hover:underline inline-flex items-center"
            >
              Learn more about our automation services
              <span className="ml-1">→</span>
            </Link>
          </div>

          {/* Conversion Rate Optimization & Landing Pages */}
          <div className="bg-secondary/20 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <LineChart className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Conversion Optimization in {location}</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Turn more visitors into customers with our conversion rate optimization services designed for {location}{" "}
              businesses.
            </p>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Conversion rate optimization services in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Landing page design services in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Landing page optimization in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Website conversion optimization in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  A/B testing services in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  User experience optimization in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Conversion funnel optimization in {location}
                </Link>
              </li>
            </ul>
            <Link
              href={`${baseUrl}/conversion-optimization`}
              className="text-primary hover:underline inline-flex items-center"
            >
              Learn more about our conversion services
              <span className="ml-1">→</span>
            </Link>
          </div>

          {/* Lead Generation, Retention & Referrals */}
          <div className="bg-secondary/20 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Lead Generation in {location}</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Generate high-quality leads for your {location} business with our AI-powered lead generation strategies.
            </p>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Lead generation services in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Local lead generation agency in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Inbound marketing services in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Customer acquisition strategies in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Customer retention marketing in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Loyalty program solutions in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Referral marketing services in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Referral program software for {location} businesses
                </Link>
              </li>
            </ul>
            <Link href={`${baseUrl}/lead-generation`} className="text-primary hover:underline inline-flex items-center">
              Learn more about our lead generation services
              <span className="ml-1">→</span>
            </Link>
          </div>

          {/* Paid Advertising */}
          <div className="bg-secondary/20 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <Megaphone className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Paid Advertising in {location}</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Maximize your advertising ROI with our targeted paid advertising services for {location} businesses.
            </p>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Google Ads management services in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Facebook (Meta) Ads management in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  TikTok advertising agency in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  LinkedIn advertising services in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  PPC advertising agency in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Social media ad campaigns in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Programmatic advertising services in {location}
                </Link>
              </li>
            </ul>
            <Link
              href={`${baseUrl}/paid-advertising`}
              className="text-primary hover:underline inline-flex items-center"
            >
              Learn more about our advertising services
              <span className="ml-1">→</span>
            </Link>
          </div>

          {/* AI-Powered Automation & Workflows */}
          <div className="bg-secondary/20 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">AI-Powered Automation in {location}</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Transform your {location} business with cutting-edge AI automation solutions that save time and increase
              efficiency.
            </p>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  AI marketing automation in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  AI-driven workflow automation in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  AI marketing tools and services in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Predictive analytics consulting in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Chatbot automation services in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Generative AI marketing solutions in {location}
                </Link>
              </li>
            </ul>
            <Link
              href="/services/ai-employee-automation"
              className="text-primary hover:underline inline-flex items-center"
            >
              Learn more about our AI automation services
              <span className="ml-1">→</span>
            </Link>
          </div>

          {/* Email Marketing & Cart Abandonment */}
          <div className="bg-secondary/20 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Email Marketing in {location}</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Drive more sales with our targeted email marketing services designed for {location} businesses.
            </p>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Email marketing automation services in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Abandoned cart email recovery in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Automated email drip campaigns in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Email list segmentation services in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Email personalization campaigns in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Automated email workflows in {location}
                </Link>
              </li>
              <li>
                <Link href={getStartedUrl} className="hover:text-primary">
                  Email campaign optimization in {location}
                </Link>
              </li>
            </ul>
            <Link href={`${baseUrl}/email-marketing`} className="text-primary hover:underline inline-flex items-center">
              Learn more about our email marketing services
              <span className="ml-1">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Grow Your Business in {location}?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our AI-powered growth solutions are tailored specifically for businesses in {location}. Get started today
            and see the difference our local expertise can make.
          </p>
          <Link
            href={getStartedUrl}
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get Your Free Growth Plan for {location}
          </Link>
        </div>
      </div>
    </section>
  )
}
