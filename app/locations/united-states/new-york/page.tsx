import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SubLocationHero } from "@/components/locations/sub-location-hero"
import { SubLocationServices } from "@/components/locations/sub-location-services"
import { SubLocationCities } from "@/components/locations/sub-location-cities"
import { SubLocationStats } from "@/components/locations/sub-location-stats"
import { SubLocationCTA } from "@/components/locations/sub-location-cta"
import { SubLocationIndustries } from "@/components/locations/sub-location-industries"

export const metadata = {
  title: "New York Lead Generation & Marketing | LeadsObtainer",
  description:
    "AI-powered lead generation and marketing automation for New York businesses. From NYC to Buffalo, we help New York businesses grow.",
  keywords:
    "New York lead generation, NYC marketing, Buffalo digital marketing, Rochester business growth, New York business marketing, Albany lead generation",
}

export default function NewYorkPage() {
  const cities = [
    "New York City",
    "Buffalo",
    "Rochester",
    "Yonkers",
    "Syracuse",
    "Albany",
    "New Rochelle",
    "Mount Vernon",
    "Schenectady",
    "Utica",
    "White Plains",
    "Hempstead",
    "Troy",
    "Niagara Falls",
    "Binghamton",
    "Freeport",
    "Valley Stream",
  ]

  const stats = [
    { value: "2.3M", label: "Small Businesses", description: "In New York" },
    { value: "71%", label: "Digital Marketing", description: "Businesses investing in digital" },
    { value: "4.2x", label: "ROI Increase", description: "With our solutions" },
    { value: "78%", label: "Lead Conversion", description: "Improvement in New York" },
  ]

  const industries = [
    "Finance",
    "Media",
    "Fashion",
    "Technology",
    "Healthcare",
    "Real Estate",
    "Hospitality",
    "Professional Services",
    "Retail",
    "Food & Beverage",
    "Education",
    "Manufacturing",
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <SubLocationHero
        location="New York"
        parentLocation="United States"
        description="AI-powered growth solutions for businesses across the Empire State, from NYC to Upstate New York."
        keywords="New York lead generation, NYC marketing, Buffalo digital marketing, Rochester business growth"
      />
      <SubLocationStats location="New York" stats={stats} />
      <SubLocationServices location="New York" />
      <SubLocationIndustries location="New York" industries={industries} />
      <SubLocationCities location="New York" cities={cities} />
      <SubLocationCTA location="New York" />
      <Footer />
    </main>
  )
}
