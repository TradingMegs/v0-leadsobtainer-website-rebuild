import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LocationTemplate } from "@/components/locations/location-template"
import { businessCategories } from "@/lib/business-categories"

export const metadata = {
  title: "Alaska | LeadsObtainer - AI-Powered Growth Solutions for Local Businesses",
  description:
    "LeadsObtainer provides AI-powered lead generation and marketing automation for local businesses in Alaska. Grow your Alaska business with our proven solutions.",
  keywords:
    "lead generation Alaska, marketing automation Alaska, business growth Alaska, local business marketing Alaska, AI marketing Alaska",
}

export default function AlaskaPage() {
  const regions = [
    "Anchorage",
    "Fairbanks",
    "Juneau",
    "Wasilla",
    "Sitka",
    "Ketchikan",
    "Kenai",
    "Kodiak",
    "Bethel",
    "Palmer",
    "Homer",
    "Unalaska",
    "Barrow",
    "Soldotna",
    "Valdez",
  ]

  const stats = {
    totalBusinesses: "~70,000",
    growthRate: "1.9% annually",
    onlinePresence: "58% of businesses",
    competitionLevel: "Low to Moderate",
  }

  const additionalInfo =
    "Alaska's unique geography and climate create both challenges and opportunities for local businesses. With industries ranging from tourism and fishing to oil and gas, Alaska businesses benefit from targeted digital marketing strategies that account for the state's distinctive market conditions and seasonal fluctuations."

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <LocationTemplate
        location="Alaska"
        description="LeadsObtainer provides AI-powered growth solutions for local businesses across Alaska. Our automated lead generation and marketing systems help Alaska businesses attract more customers, increase revenue, and scale efficiently despite geographical challenges."
        stats={stats}
        businessCategories={businessCategories}
        regions={regions}
        additionalInfo={additionalInfo}
      />
      <Footer />
    </main>
  )
}
