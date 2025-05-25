import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LocationHero } from "@/components/locations/location-hero"
import { LocationRegions } from "@/components/locations/location-regions"
import { LocationServices } from "@/components/locations/location-services"
import { LocationTestimonials } from "@/components/locations/location-testimonials"
import { LocationCTA } from "@/components/locations/location-cta"

export const metadata = {
  title: "Ireland | LeadsObtainer - Growth Solutions for Local Businesses",
  description:
    "LeadsObtainer provides AI-powered growth solutions for businesses across all Irish counties. Grow your Irish business today.",
}

export default function IrelandPage() {
  const regions = [
    {
      name: "Leinster",
      states: [
        "Dublin",
        "Kildare",
        "Kilkenny",
        "Laois",
        "Longford",
        "Louth",
        "Meath",
        "Offaly",
        "Westmeath",
        "Wexford",
        "Wicklow",
      ],
    },
    {
      name: "Munster",
      states: ["Clare", "Cork", "Kerry", "Limerick", "Tipperary", "Waterford"],
    },
    {
      name: "Connacht",
      states: ["Galway", "Leitrim", "Mayo", "Roscommon", "Sligo"],
    },
    {
      name: "Ulster (Republic of Ireland)",
      states: ["Cavan", "Donegal", "Monaghan"],
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <LocationHero
        location="Ireland"
        description="AI-powered growth solutions for businesses across all Irish counties."
        keywords="lead generation Ireland, marketing automation Irish business, business growth Dublin, local business marketing Cork, Galway business growth"
      />
      <LocationRegions location="Ireland" regions={regions} />
      <LocationServices location="Ireland" />
      <LocationTestimonials location="Ireland" />
      <LocationCTA location="Ireland" />
      <Footer />
    </main>
  )
}
