import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LocationTemplate } from "@/components/locations/location-template"
import { businessCategories } from "@/lib/business-categories"

export const metadata = {
  title: "Ontario | LeadsObtainer - AI-Powered Growth Solutions for Local Businesses",
  description:
    "LeadsObtainer provides AI-powered lead generation and marketing automation for local businesses in Ontario. Grow your Ontario business with our proven solutions.",
  keywords:
    "lead generation Ontario, marketing automation Ontario, business growth Ontario, local business marketing Ontario, AI marketing Ontario, Toronto marketing",
}

export default function OntarioPage() {
  const regions = [
    "Toronto",
    "Ottawa",
    "Mississauga",
    "Brampton",
    "Hamilton",
    "London",
    "Markham",
    "Vaughan",
    "Kitchener",
    "Windsor",
    "Richmond Hill",
    "Oakville",
    "Burlington",
    "Sudbury",
    "Kingston",
  ]

  const stats = {
    totalBusinesses: "~1.1 million",
    growthRate: "2.7% annually",
    onlinePresence: "74% of businesses",
    competitionLevel: "Moderate to High",
  }

  const additionalInfo =
    "Ontario is Canada's economic powerhouse, with diverse industries including finance, technology, manufacturing, and agriculture. With Toronto as a major business hub and strong regional economies throughout the province, Ontario businesses can leverage digital marketing to reach their target audiences effectively."

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <LocationTemplate
        location="Ontario"
        description="LeadsObtainer provides AI-powered growth solutions for local businesses across Ontario. Our automated lead generation and marketing systems help Ontario businesses attract more customers, increase revenue, and scale efficiently in this competitive market."
        stats={stats}
        businessCategories={businessCategories}
        regions={regions}
        additionalInfo={additionalInfo}
      />
      <Footer />
    </main>
  )
}
