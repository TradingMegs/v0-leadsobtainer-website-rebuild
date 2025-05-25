import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LocationHero } from "@/components/locations/location-hero"
import { LocationRegions } from "@/components/locations/location-regions"
import { LocationServices } from "@/components/locations/location-services"
import { LocationTestimonials } from "@/components/locations/location-testimonials"
import { LocationCTA } from "@/components/locations/location-cta"

export const metadata = {
  title: "New Zealand | LeadsObtainer - Growth Solutions for Local Businesses",
  description:
    "LeadsObtainer provides AI-powered growth solutions for businesses across all New Zealand regions. Grow your New Zealand business today.",
}

export default function NewZealandPage() {
  const regions = [
    {
      name: "North Island",
      states: [
        "Auckland",
        "Bay of Plenty",
        "Gisborne",
        "Hawke's Bay",
        "Manawatū-Whanganui",
        "Northland",
        "Taranaki",
        "Waikato",
        "Wellington",
      ],
    },
    {
      name: "South Island",
      states: ["Canterbury", "Marlborough", "Nelson", "Otago", "Southland", "Tasman", "West Coast"],
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <LocationHero
        location="New Zealand"
        description="AI-powered growth solutions for businesses across all New Zealand regions."
        keywords="lead generation New Zealand, marketing automation NZ business, business growth Auckland, local business marketing Wellington, Christchurch business growth"
      />
      <LocationRegions location="New Zealand" regions={regions} />
      <LocationServices location="New Zealand" />
      <LocationTestimonials location="New Zealand" />
      <LocationCTA location="New Zealand" />
      <Footer />
    </main>
  )
}
