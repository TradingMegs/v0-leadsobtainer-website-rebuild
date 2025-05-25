import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LocationTemplate } from "@/components/locations/location-template"
import { businessCategories } from "@/lib/business-categories"

export const metadata = {
  title: "England | LeadsObtainer - AI-Powered Growth Solutions for Local Businesses",
  description:
    "LeadsObtainer provides AI-powered lead generation and marketing automation for local businesses across England. Grow your English business with our proven solutions.",
  keywords:
    "lead generation England, marketing automation England, business growth England, local business marketing England, AI marketing England, London marketing",
}

export default function EnglandPage() {
  const regions = [
    "London",
    "Manchester",
    "Birmingham",
    "Liverpool",
    "Leeds",
    "Sheffield",
    "Bristol",
    "Newcastle",
    "Nottingham",
    "Southampton",
    "Oxford",
    "Cambridge",
    "Brighton",
    "York",
    "Bath",
  ]

  const stats = {
    totalBusinesses: "~5.9 million",
    growthRate: "2.2% annually",
    onlinePresence: "76% of businesses",
    competitionLevel: "High",
  }

  const additionalInfo =
    "England's diverse economy encompasses finance, technology, manufacturing, and services. With London as a global business hub and strong regional economies throughout the country, English businesses benefit from targeted digital marketing strategies that account for local market nuances and competitive landscapes."

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <LocationTemplate
        location="England"
        description="LeadsObtainer provides AI-powered growth solutions for local businesses across England. Our automated lead generation and marketing systems help English businesses attract more customers, increase revenue, and scale efficiently in this competitive market."
        stats={stats}
        businessCategories={businessCategories}
        regions={regions}
        additionalInfo={additionalInfo}
      />
      <Footer />
    </main>
  )
}
