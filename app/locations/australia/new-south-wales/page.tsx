import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LocationTemplate } from "@/components/locations/location-template"
import { businessCategories } from "@/lib/business-categories"

export const metadata = {
  title: "New South Wales | LeadsObtainer - AI-Powered Growth Solutions for Local Businesses",
  description:
    "LeadsObtainer provides AI-powered lead generation and marketing automation for local businesses in New South Wales. Grow your NSW business with our proven solutions.",
  keywords:
    "lead generation NSW, marketing automation Sydney, business growth New South Wales, local business marketing NSW, AI marketing Sydney",
}

export default function NSWPage() {
  const regions = [
    "Sydney",
    "Newcastle",
    "Central Coast",
    "Wollongong",
    "Maitland",
    "Coffs Harbour",
    "Wagga Wagga",
    "Port Macquarie",
    "Albury",
    "Tamworth",
    "Orange",
    "Dubbo",
    "Bathurst",
    "Lismore",
    "Armidale",
  ]

  const stats = {
    totalBusinesses: "~800,000",
    growthRate: "2.9% annually",
    onlinePresence: "78% of businesses",
    competitionLevel: "High",
  }

  const additionalInfo =
    "New South Wales is Australia's most populous state and economic center, with Sydney as its global city. The state's economy spans finance, technology, tourism, education, and manufacturing, offering diverse opportunities for businesses that leverage effective digital marketing strategies."

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <LocationTemplate
        location="New South Wales"
        description="LeadsObtainer provides AI-powered growth solutions for local businesses across New South Wales. Our automated lead generation and marketing systems help NSW businesses attract more customers, increase revenue, and scale efficiently in this competitive market."
        stats={stats}
        businessCategories={businessCategories}
        regions={regions}
        additionalInfo={additionalInfo}
      />
      <Footer />
    </main>
  )
}
