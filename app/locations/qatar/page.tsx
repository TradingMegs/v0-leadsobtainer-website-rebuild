import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LocationHero } from "@/components/locations/location-hero"
import { LocationRegions } from "@/components/locations/location-regions"
import { LocationServices } from "@/components/locations/location-services"
import { LocationTestimonials } from "@/components/locations/location-testimonials"
import { LocationCTA } from "@/components/locations/location-cta"

export const metadata = {
  title: "Qatar | LeadsObtainer - Growth Solutions for Local Businesses",
  description:
    "LeadsObtainer provides AI-powered growth solutions for businesses across all municipalities of Qatar. Grow your Qatar business today.",
}

export default function QatarPage() {
  const regions = [
    {
      name: "Municipalities",
      states: [
        "Ad Dawhah (Doha)",
        "Al Khor",
        "Al Shamal",
        "Al Wakrah",
        "Al Rayyan",
        "Al Daayen",
        "Umm Salal",
        "Mesaieed",
      ],
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <LocationHero
        location="Qatar"
        description="AI-powered growth solutions for businesses across all municipalities of Qatar."
        keywords="lead generation Qatar, marketing automation Qatar business, business growth Doha, local business marketing Qatar, digital marketing Qatar"
      />
      <LocationRegions location="Qatar" regions={regions} />
      <LocationServices location="Qatar" />
      <LocationTestimonials location="Qatar" />
      <LocationCTA location="Qatar" />
      <Footer />
    </main>
  )
}
