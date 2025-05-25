import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Target, Users, BarChart3, LineChart, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Lead Generation Services | LeadsObtainer",
  description:
    "AI-powered lead generation services to attract, qualify, and convert high-quality leads for your business.",
  keywords:
    "lead generation services, lead generation agency, inbound marketing, customer acquisition, customer retention, referral marketing",
}

export default function LeadGenerationPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">AI-Powered Lead Generation Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Generate high-quality leads that convert into loyal customers with our data-driven lead generation
              strategies.
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
            <h2 className="text-3xl font-bold mb-4">Our Comprehensive Lead Generation Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a full range of lead generation services designed to attract, qualify, and convert high-quality
              leads for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-secondary/10 p-6 rounded-xl">
              <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Targeted Lead Generation</h3>
              <p className="text-muted-foreground mb-4">
                Generate high-quality leads from your ideal target audience with our data-driven lead generation
                strategies.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Audience targeting and segmentation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Lead magnet development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Multi-channel lead generation</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl">
              <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Inbound Marketing</h3>
              <p className="text-muted-foreground mb-4">
                Attract qualified leads with valuable content and experiences tailored to their needs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Content marketing strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>SEO-optimized content creation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Social media marketing</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl">
              <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">
                <LineChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lead Qualification</h3>
              <p className="text-muted-foreground mb-4">
                Identify and prioritize the most valuable leads to focus your sales efforts on the right prospects.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Lead scoring and grading</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Behavioral analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>AI-powered lead qualification</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl">
              <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lead Nurturing</h3>
              <p className="text-muted-foreground mb-4">
                Build relationships with prospects at every stage of the buyer's journey to increase conversion rates.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automated email nurturing sequences</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Personalized content delivery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Multi-touch attribution</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl">
              <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Retention</h3>
              <p className="text-muted-foreground mb-4">
                Maximize customer lifetime value with strategies to increase retention and reduce churn.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Customer retention marketing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Loyalty program development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Customer satisfaction monitoring</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/10 p-6 rounded-xl">
              <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Referral Marketing</h3>
              <p className="text-muted-foreground mb-4">
                Turn your satisfied customers into brand advocates with strategic referral marketing programs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Referral program development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Incentive structure design</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Referral tracking and analytics</span>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Generate More High-Quality Leads?</h2>
            <p className="text-muted-foreground mb-8">
              Get a customized lead generation strategy tailored to your business goals and target audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/get-started">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Schedule a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
