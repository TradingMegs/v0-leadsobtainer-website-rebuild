import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LocationsHero } from "@/components/locations/locations-hero"
import { LocationsList } from "@/components/locations/locations-list"
import { LocationsCTA } from "@/components/locations/locations-cta"

export const metadata = {
  title: "Service Locations | LeadsObtainer - AI-Powered Growth Solutions",
  description:
    "LeadsObtainer provides AI-powered growth solutions for local businesses across the United States, United Kingdom, Canada, Australia, and more.",
}

export default function LocationsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <LocationsHero />
      <LocationsList />
      <LocationsCTA />
      <Footer />
    </main>
  )
}
