import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingPlans } from "@/components/pricing/pricing-plans"
import { ContactForm } from "@/components/pricing/contact-form"
import { GetStarted } from "@/components/pricing/get-started"
import { ElevateBusiness } from "@/components/pricing/elevate-business"
import { PricingFAQs } from "@/components/pricing/pricing-faqs"
import { PremiumSolutions } from "@/components/premium-solutions"

export const metadata = {
  title: "Pricing | LeadsObtainer - Growth Solutions for Local Businesses",
  description:
    "Choose the perfect growth plan for your local business. Transparent pricing with a risk-free guarantee.",
}

// Apply alternating background colors to Pricing page sections
export default function PricingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <PricingHero />
      <PricingPlans />
      <ContactForm />
      <GetStarted />
      <ElevateBusiness />
      <PricingFAQs />
      <PremiumSolutions />
      <Footer />
    </main>
  )
}
