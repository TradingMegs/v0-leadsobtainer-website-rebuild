import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MarketingAutomationHero } from "@/components/services/marketing-automation/marketing-automation-hero"
import { KeyFeatures } from "@/components/services/marketing-automation/key-features"
import { ResultsSection } from "@/components/services/marketing-automation/results-section"
import { ScaleBusiness } from "@/components/scale-business"
import { PremiumSolutions } from "@/components/premium-solutions"

export const metadata = {
  title: "Marketing Automation | LeadsObtainer - Growth Solutions for Local Businesses",
  description:
    "Turn clicks into customers with automated marketing. From lead capture to retention, our AI-driven systems drive conversions 24/7.",
}

export default function MarketingAutomationPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <MarketingAutomationHero />
      <KeyFeatures />
      <ResultsSection />
      <ScaleBusiness />
      <PremiumSolutions />
      <Footer />
    </main>
  )
}
