import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LocationHero } from "@/components/locations/location-hero"
import { LocationRegions } from "@/components/locations/location-regions"
import { LocationServices } from "@/components/locations/location-services"
import { LocationTestimonials } from "@/components/locations/location-testimonials"
import { LocationCTA } from "@/components/locations/location-cta"

export const metadata = {
  title: "Australia | LeadsObtainer - Growth Solutions for Local Businesses",
  description:
    "LeadsObtainer provides AI-powered growth solutions for businesses across all Australian states and territories. Grow your Australian business today.",
}

export default function AustraliaPage() {
  const regions = [
    {
      name: "States",
      states: [
        "New South Wales (NSW)",
        "Victoria (VIC)",
        "Queensland (QLD)",
        "South Australia (SA)",
        "Western Australia (WA)",
        "Tasmania (TAS)",
      ],
    },
    {
      name: "Mainland Territories",
      states: ["Australian Capital Territory (ACT)", "Northern Territory (NT)"],
    },
    {
      name: "External Territories",
      states: ["Christmas Island", "Norfolk Island", "Australian Antarctic Territory"],
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <LocationHero
        location="Australia"
        description="AI-powered growth solutions for businesses across all Australian states and territories."
        keywords="lead generation Australia, marketing automation Australian business, business growth Sydney, local business marketing Melbourne, Brisbane business growth"
      />
      <LocationRegions location="Australia" regions={regions} />
      <LocationServices location="Australia" />
      <LocationTestimonials location="Australia" />
      <LocationCTA location="Australia" />
      <Footer />
    </main>
  )
}
