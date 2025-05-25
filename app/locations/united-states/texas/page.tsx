import type { Metadata } from "next"
import { SubLocationHero } from "@/components/locations/sub-location-hero"
import { SubLocationStats } from "@/components/locations/sub-location-stats"
import { SubLocationServices } from "@/components/locations/sub-location-services"
import { SubLocationCities } from "@/components/locations/sub-location-cities"
import { SubLocationCta } from "@/components/locations/sub-location-cta"
import { IndustryCategories } from "@/components/locations/industry-categories"
import { LocationCompetition } from "@/components/locations/location-competition"

export const metadata: Metadata = {
  title: "Texas Lead Generation & Marketing Services | LeadsObtainer",
  description:
    "Specialized lead generation and marketing automation services for Texas businesses. Grow your customer base with our AI-powered solutions.",
}

export default function TexasPage() {
  const competitionData = [
    {
      category: "Health & Wellness",
      saturation: 75,
      opportunity: 82,
    },
    {
      category: "Professional Services",
      saturation: 80,
      opportunity: 75,
    },
    {
      category: "Home Improvement",
      saturation: 65,
      opportunity: 85,
    },
    {
      category: "Retail",
      saturation: 85,
      opportunity: 70,
    },
    {
      category: "Food & Beverage",
      saturation: 78,
      opportunity: 80,
    },
    {
      category: "Automotive",
      saturation: 70,
      opportunity: 78,
    },
    {
      category: "Technology",
      saturation: 60,
      opportunity: 90,
    },
  ]

  const stats = [
    {
      value: "29.5M+",
      label: "Texas Population",
    },
    {
      value: "2.8M+",
      label: "Small Businesses",
    },
    {
      value: "72%",
      label: "Online Search Rate",
    },
    {
      value: "51%",
      label: "Digital Ad Growth",
    },
  ]

  const cities = [
    "Houston",
    "San Antonio",
    "Dallas",
    "Austin",
    "Fort Worth",
    "El Paso",
    "Arlington",
    "Corpus Christi",
    "Plano",
    "Lubbock",
    "Irving",
    "Laredo",
    "Garland",
    "Frisco",
    "McKinney",
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <SubLocationHero
        location="Texas"
        parentLocation="United States"
        headline="Grow Your Texas Business with AI-Powered Lead Generation"
        description="Custom marketing solutions designed specifically for Texas's unique business landscape. Turn more clicks into customers with our proven strategies."
      />

      <SubLocationStats
        location="Texas"
        stats={stats}
        description="Texas's booming economy presents tremendous opportunities for local businesses to expand their digital presence and capture market share."
      />

      <LocationCompetition location="Texas" competitionData={competitionData} />

      <IndustryCategories location="Texas" />

      <SubLocationServices
        location="Texas"
        services={[
          {
            title: "Local SEO Domination",
            description:
              "Rank higher in local searches across Texas cities with our targeted SEO strategies designed for your specific market.",
          },
          {
            title: "Targeted Lead Generation",
            description:
              "Attract high-quality leads from across Texas with custom campaigns tailored to your industry and local audience.",
          },
          {
            title: "Conversion Rate Optimization",
            description:
              "Turn more website visitors into paying customers with our data-driven CRO strategies for Texas businesses.",
          },
          {
            title: "Social Media Management",
            description:
              "Build a strong local presence on social media platforms with content that resonates with Texas consumers.",
          },
          {
            title: "Reputation Management",
            description:
              "Build and maintain a stellar online reputation to stand out from competitors in your local Texas market.",
          },
          {
            title: "Marketing Automation",
            description:
              "Save time and increase efficiency with automated marketing workflows designed for Texas business needs.",
          },
        ]}
      />

      <SubLocationCities location="Texas" cities={cities} />

      <SubLocationCta
        location="Texas"
        headline="Ready to Grow Your Texas Business?"
        description="Schedule a free strategy session to discover how our AI-powered marketing solutions can help you attract more customers and increase revenue."
      />
    </main>
  )
}
