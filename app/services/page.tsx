import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServiceOverview } from "@/components/services/service-overview"
import { ComprehensiveServices } from "@/components/services/comprehensive-services"
import { ServiceOfferings } from "@/components/services/service-offerings"
import { WorkProcess } from "@/components/services/work-process"
import { RiskFreePartnership } from "@/components/services/risk-free-partnership"
import { SuccessMetrics } from "@/components/services/success-metrics"
import { ScaleBusiness } from "@/components/scale-business"
import { PremiumSolutions } from "@/components/premium-solutions"

export const metadata = {
  title: "Services | LeadsObtainer - Growth Solutions for Local Businesses",
  description:
    "Comprehensive strategies and cutting-edge technologies to transform your business with maximum conversions.",
}

// Apply alternating background colors to Services page sections
export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <ServicesHero />
      <ServiceOverview />
      <ComprehensiveServices />
      <ServiceOfferings />
      <WorkProcess />
      <RiskFreePartnership />
      <SuccessMetrics />
      <ScaleBusiness />
      <PremiumSolutions />
      <Footer />
    </main>
  )
}
