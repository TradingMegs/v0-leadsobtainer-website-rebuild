import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LocationHero } from "@/components/locations/location-hero"
import { LocationRegions } from "@/components/locations/location-regions"
import { LocationServices } from "@/components/locations/location-services"
import { LocationTestimonials } from "@/components/locations/location-testimonials"
import { LocationCTA } from "@/components/locations/location-cta"

export const metadata = {
  title: "United Arab Emirates | LeadsObtainer - Growth Solutions for Local Businesses",
  description:
    "LeadsObtainer provides AI-powered growth solutions for businesses across all emirates of the UAE. Grow your UAE business today.",
}

export default function UAEPage() {
  const regions = [
    {
      name: "Emirates",
      states: ["Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Umm Al Quwain", "Ras Al Khaimah", "Fujairah"],
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <LocationHero
        location="United Arab Emirates"
        description="AI-powered growth solutions for businesses across all emirates of the UAE."
        keywords="lead generation UAE, marketing automation Dubai business, business growth Abu Dhabi, local business marketing Sharjah, digital marketing United Arab Emirates"
      />
      <LocationRegions location="United Arab Emirates" regions={regions} />
      <LocationServices location="United Arab Emirates" />
      <LocationTestimonials location="United Arab Emirates" />
      <LocationCTA location="United Arab Emirates" />
      <Footer />
    </main>
  )
}
