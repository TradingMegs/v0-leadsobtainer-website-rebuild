import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Search, MapPin, BarChart3, LineChart, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "SEO & Local SEO Services | LeadsObtainer",
  description:
    "AI-powered SEO and local SEO services to improve your search rankings and drive more targeted traffic to your website.",
  keywords:
    "SEO services, local SEO, search engine optimization, Google Business Profile optimization, technical SEO audit, on-page SEO",
}

export default function SeoServicesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">AI-Powered SEO & Local SEO Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Dominate search results with our data-driven SEO strategies that drive targeted traffic and increase
              conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/get-started">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Comprehensive SEO Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a full range of SEO services designed to improve your online visibility and drive more qualified
              traffic to your website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-secondary/10 p-6 rounded-xl">
              <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Local SEO</h3>
              <p className="text-muted-foreground mb-4">
                Dominate local search results and attract more customers from your target area with our local SEO
                strategies.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Google Business Profile optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Local citation building and management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Local keyword research and targeting</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl">
              <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Technical SEO</h3>
              <p className="text-muted-foreground mb-4">
                Ensure your website meets all technical requirements for optimal search engine crawling and indexing.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Comprehensive technical SEO audit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Site speed optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Mobile optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl">
              <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">
                <LineChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">On-Page SEO</h3>
              <p className="text-muted-foreground mb-4">
                Optimize your website content and structure to improve relevance and rankings for target keywords.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Keyword research and optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Content optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Meta tag optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl">
              <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Content Strategy</h3>
              <p className="text-muted-foreground mb-4">
                Develop a content strategy that attracts, engages, and converts your target audience.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>SEO content creation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Content gap analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Topic cluster development</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl">
              <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Link Building</h3>
              <p className="text-muted-foreground mb-4">
                Build high-quality backlinks that improve your website's authority and search rankings.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Strategic link building</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Competitor backlink analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Local citation building</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl">
              <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">SEO Analytics & Reporting</h3>
              <p className="text-muted-foreground mb-4">
                Track your SEO performance with detailed analytics and regular reporting.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Keyword ranking tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Traffic and conversion analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Competitor performance tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Search Rankings?</h2>
            <p className="text-muted-foreground mb-8">
              Get a customized SEO strategy tailored to your business goals and target audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/get-started">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Schedule a Free SEO Audit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
