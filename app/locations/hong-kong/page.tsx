import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LocationHero } from "@/components/locations/location-hero"
import { LocationRegions } from "@/components/locations/location-regions"
import { LocationServices } from "@/components/locations/location-services"
import { LocationTestimonials } from "@/components/locations/location-testimonials"
import { LocationCTA } from "@/components/locations/location-cta"

export const metadata = {
  title: "Hong Kong | LeadsObtainer - Growth Solutions for Local Businesses",
  description:
    "LeadsObtainer provides AI-powered growth solutions for businesses across all districts of Hong Kong. Grow your Hong Kong business today.",
}

export default function HongKongPage() {
  const regions = [
    {
      name: "Hong Kong Island",
      states: ["Central and Western", "Eastern", "Southern", "Wan Chai"],
    },
    {
      name: "Kowloon",
      states: ["Kowloon City", "Kwun Tong", "Sham Shui Po", "Wong Tai Sin", "Yau Tsim Mong"],
    },
    {
      name: "New Territories",
      states: ["Islands", "North", "Sai Kung", "Sha Tin", "Tai Po", "Tsuen Wan", "Tuen Mun", "Yuen Long"],
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <LocationHero
        location="Hong Kong"
        description="AI-powered growth solutions for businesses across all districts of Hong Kong."
        keywords="lead generation Hong Kong, marketing automation Hong Kong business, business growth Hong Kong, local business marketing Kowloon, digital marketing Hong Kong"
      />
      <LocationRegions location="Hong Kong" regions={regions} />
      <LocationServices location="Hong Kong" />
      <LocationTestimonials location="Hong Kong" />
      <LocationCTA location="Hong Kong" />
      <Footer />
    </main>
  )
}
