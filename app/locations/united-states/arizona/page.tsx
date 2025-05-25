import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LocationTemplate } from "@/components/locations/location-template"
import { businessCategories } from "@/lib/business-categories"

export const metadata = {
  title: "Arizona | LeadsObtainer - AI-Powered Growth Solutions for Local Businesses",
  description:
    "LeadsObtainer provides AI-powered lead generation and marketing automation for local businesses in Arizona. Grow your Arizona business with our proven solutions.",
  keywords:
    "lead generation Arizona, marketing automation Arizona, business growth Arizona, local business marketing Arizona, AI marketing Arizona",
}

export default function ArizonaPage() {
  const regions = [
    "Phoenix",
    "Tucson",
    "Mesa",
    "Chandler",
    "Scottsdale",
    "Glendale",
    "Gilbert",
    "Tempe",
    "Peoria",
    "Surprise",
    "Yuma",
    "Avondale",
    "Flagstaff",
    "Goodyear",
    "Prescott",
  ]

  const stats = {
    totalBusinesses: "~550,000",
    growthRate: "3.5% annually",
    onlinePresence: "71% of businesses",
    competitionLevel: "Moderate to High",
  }

  const additionalInfo =
    "Arizona's rapidly growing economy and population make it an attractive market for businesses. With strong sectors in healthcare, technology, tourism, and construction, Arizona businesses can leverage digital marketing to capitalize on the state's economic momentum and diverse customer base."

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <LocationTemplate
        location="Arizona"
        description="LeadsObtainer provides AI-powered growth solutions for local businesses across Arizona. Our automated lead generation and marketing systems help Arizona businesses attract more customers, increase revenue, and scale efficiently in this competitive market."
        stats={stats}
        businessCategories={businessCategories}
        regions={regions}
        additionalInfo={additionalInfo}
      />
      <Footer />
    </main>
  )
}
