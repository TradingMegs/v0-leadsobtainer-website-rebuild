import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LocationHero } from "@/components/locations/location-hero"
import { LocationRegions } from "@/components/locations/location-regions"
import { LocationServices } from "@/components/locations/location-services"
import { LocationTestimonials } from "@/components/locations/location-testimonials"
import { LocationCTA } from "@/components/locations/location-cta"

export const metadata = {
  title: "Canada | LeadsObtainer - Growth Solutions for Local Businesses",
  description:
    "LeadsObtainer provides AI-powered growth solutions for businesses across all Canadian provinces and territories. Grow your Canadian business today.",
}

export default function CanadaPage() {
  const regions = [
    {
      name: "Provinces",
      states: [
        "Alberta",
        "British Columbia",
        "Manitoba",
        "New Brunswick",
        "Newfoundland and Labrador",
        "Nova Scotia",
        "Ontario",
        "Prince Edward Island",
        "Quebec",
        "Saskatchewan",
      ],
    },
    {
      name: "Territories",
      states: ["Yukon", "Northwest Territories", "Nunavut"],
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <LocationHero
        location="Canada"
        description="AI-powered growth solutions for businesses across all Canadian provinces and territories."
        keywords="lead generation Canada, marketing automation Canadian business, business growth Canada, local business marketing Ontario, Quebec business growth"
      />
      <LocationRegions location="Canada" regions={regions} />
      <LocationServices location="Canada" />
      <LocationTestimonials location="Canada" />
      <LocationCTA location="Canada" />
      <Footer />
    </main>
  )
}
