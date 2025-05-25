import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LocationTemplate } from "@/components/locations/location-template"
import { businessCategories } from "@/lib/business-categories"

export const metadata = {
  title: "Singapore | LeadsObtainer - AI-Powered Growth Solutions for Local Businesses",
  description:
    "LeadsObtainer provides AI-powered lead generation and marketing automation for local businesses in Singapore. Grow your Singapore business with our proven solutions.",
  keywords:
    "lead generation Singapore, marketing automation Singapore, business growth Singapore, local business marketing Singapore, AI marketing Singapore",
}

export default function SingaporePage() {
  const regions = [
    "Central Region",
    "East Region",
    "North Region",
    "North-East Region",
    "West Region",
    "Orchard",
    "Marina Bay",
    "Jurong",
    "Tampines",
    "Woodlands",
    "Ang Mo Kio",
    "Toa Payoh",
    "Punggol",
    "Sentosa",
    "Changi",
  ]

  const stats = {
    totalBusinesses: "~280,000",
    growthRate: "3.2% annually",
    onlinePresence: "85% of businesses",
    competitionLevel: "Very High",
  }

  const additionalInfo =
    "Singapore is a global financial center and business hub with a highly developed market economy. Its strategic location, business-friendly policies, and technological infrastructure make it an ideal market for businesses that leverage digital marketing to stand out in a competitive landscape."

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <LocationTemplate
        location="Singapore"
        description="LeadsObtainer provides AI-powered growth solutions for local businesses across Singapore. Our automated lead generation and marketing systems help Singapore businesses attract more customers, increase revenue, and scale efficiently in this highly competitive market."
        stats={stats}
        businessCategories={businessCategories}
        regions={regions}
        additionalInfo={additionalInfo}
      />
      <Footer />
    </main>
  )
}
