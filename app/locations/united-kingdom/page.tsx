import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LocationHero } from "@/components/locations/location-hero"
import { LocationRegions } from "@/components/locations/location-regions"
import { LocationServices } from "@/components/locations/location-services"
import { LocationTestimonials } from "@/components/locations/location-testimonials"
import { LocationCTA } from "@/components/locations/location-cta"

export const metadata = {
  title: "United Kingdom | LeadsObtainer - Growth Solutions for Local Businesses",
  description:
    "LeadsObtainer provides AI-powered growth solutions for businesses across England, Scotland, Wales, and Northern Ireland. Grow your UK business today.",
}

export default function UnitedKingdomPage() {
  const regions = [
    {
      name: "England",
      states: [
        "London",
        "South East",
        "South West",
        "East of England",
        "East Midlands",
        "West Midlands",
        "North West",
        "North East",
        "Yorkshire and the Humber",
      ],
    },
    {
      name: "Scotland",
      states: ["Glasgow", "Edinburgh", "Aberdeen", "Highlands", "Dundee", "Stirling", "Perth"],
    },
    {
      name: "Wales",
      states: ["Cardiff", "Swansea", "Newport", "Bangor", "Wrexham", "Gwynedd", "Powys"],
    },
    {
      name: "Northern Ireland",
      states: ["Belfast", "Derry", "Lisburn", "Newry", "Armagh", "Antrim", "Down"],
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <LocationHero
        location="United Kingdom"
        description="AI-powered growth solutions for businesses across England, Scotland, Wales, and Northern Ireland."
        keywords="lead generation UK, marketing automation Britain, business growth United Kingdom, local business marketing England, Scotland business growth"
      />
      <LocationRegions location="United Kingdom" regions={regions} />
      <LocationServices location="United Kingdom" />
      <LocationTestimonials location="United Kingdom" />
      <LocationCTA location="United Kingdom" />
      <Footer />
    </main>
  )
}
