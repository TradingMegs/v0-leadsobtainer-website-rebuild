import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LocationTemplate } from "@/components/locations/location-template"
import { businessCategories } from "@/lib/business-categories"

export const metadata = {
  title: "Alabama | LeadsObtainer - AI-Powered Growth Solutions for Local Businesses",
  description:
    "LeadsObtainer provides AI-powered lead generation and marketing automation for local businesses in Alabama. Grow your Alabama business with our proven solutions.",
  keywords:
    "lead generation Alabama, marketing automation Alabama, business growth Alabama, local business marketing Alabama, AI marketing Alabama",
}

export default function AlabamaPage() {
  const regions = [
    "Birmingham",
    "Montgomery",
    "Mobile",
    "Huntsville",
    "Tuscaloosa",
    "Hoover",
    "Dothan",
    "Auburn",
    "Decatur",
    "Madison",
    "Florence",
    "Gadsden",
    "Vestavia Hills",
    "Prattville",
    "Phenix City",
  ]

  const stats = {
    totalBusinesses: "~400,000",
    growthRate: "2.8% annually",
    onlinePresence: "62% of businesses",
    competitionLevel: "Moderate",
  }

  const additionalInfo =
    "Alabama's diverse economy spans manufacturing, agriculture, aerospace, and a growing technology sector. With a strategic location in the Southeast and business-friendly policies, Alabama offers unique opportunities for local businesses to thrive with the right digital marketing strategy."

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <LocationTemplate
        location="Alabama"
        description="LeadsObtainer provides AI-powered growth solutions for local businesses across Alabama. Our automated lead generation and marketing systems help Alabama businesses attract more customers, increase revenue, and scale efficiently."
        stats={stats}
        businessCategories={businessCategories}
        regions={regions}
        additionalInfo={additionalInfo}
      />
      <Footer />
    </main>
  )
}
