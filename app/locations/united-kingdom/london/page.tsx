import type { Metadata } from "next"
import { SubLocationHero } from "@/components/locations/sub-location-hero"
import { SubLocationStats } from "@/components/locations/sub-location-stats"
import { SubLocationServices } from "@/components/locations/sub-location-services"
import { SubLocationCities } from "@/components/locations/sub-location-cities"
import { SubLocationCta } from "@/components/locations/sub-location-cta"
import { IndustryCategories } from "@/components/locations/industry-categories"
import { LocationCompetition } from "@/components/locations/location-competition"

export const metadata: Metadata = {
  title: "London Lead Generation & Marketing Services | LeadsObtainer",
  description:
    "Specialized lead generation and marketing automation services for London businesses. Grow your customer base with our AI-powered solutions.",
}

export default function LondonPage() {
  const competitionData = [
    {
      category: "Health & Wellness",
      saturation: 82,
      opportunity: 78,
    },
    {
      category: "Professional Services",
      saturation: 90,
      opportunity: 70,
    },
    {
      category: "Home Improvement",
      saturation: 75,
      opportunity: 80,
    },
    {
      category: "Retail",
      saturation: 88,
      opportunity: 68,
    },
    {
      category: "Food & Beverage",
      saturation: 85,
      opportunity: 75,
    },
    {
      category: "Automotive",
      saturation: 70,
      opportunity: 65,
    },
    {
      category: "Technology",
      saturation: 92,
      opportunity: 82,
    },
  ]

  const stats = [
    {
      value: "9.5M+",
      label: "London Population",
    },
    {
      value: "1.1M+",
      label: "Small Businesses",
    },
    {
      value: "82%",
      label: "Online Search Rate",
    },
    {
      value: "61%",
      label: "Digital Ad Growth",
    },
  ]

  const areas = [
    "Central London",
    "Westminster",
    "Camden",
    "Islington",
    "Hackney",
    "Tower Hamlets",
    "Southwark",
    "Lambeth",
    "Wandsworth",
    "Hammersmith",
    "Kensington & Chelsea",
    "Brent",
    "Ealing",
    "Hounslow",
    "Richmond upon Thames",
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <SubLocationHero
        location="London"
        parentLocation="United Kingdom"
        headline="Grow Your London Business with AI-Powered Lead Generation"
        description="Custom marketing solutions designed specifically for London's unique business landscape. Turn more clicks into customers with our proven strategies."
      />

      <SubLocationStats
        location="London"
        stats={stats}
        description="London's dynamic economy presents exceptional opportunities for local businesses to expand their digital presence and capture market share."
      />

      <LocationCompetition location="London" competitionData={competitionData} />

      <IndustryCategories location="London" />

      <SubLocationServices
        location="London"
        services={[
          {
            title: "Local SEO Domination",
            description:
              "Rank higher in local searches across London areas with our targeted SEO strategies designed for your specific market.",
          },
          {
            title: "Targeted Lead Generation",
            description:
              "Attract high-quality leads from across London with custom campaigns tailored to your industry and local audience.",
          },
          {
            title: "Conversion Rate Optimization",
            description:
              "Turn more website visitors into paying customers with our data-driven CRO strategies for London businesses.",
          },
          {
            title: "Social Media Management",
            description:
              "Build a strong local presence on social media platforms with content that resonates with London consumers.",
          },
          {
            title: "Reputation Management",
            description:
              "Build and maintain a stellar online reputation to stand out from competitors in your local London market.",
          },
          {
            title: "Marketing Automation",
            description:
              "Save time and increase efficiency with automated marketing workflows designed for London business needs.",
          },
        ]}
      />

      <SubLocationCities location="London" cities={areas} />

      <SubLocationCta
        location="London"
        headline="Ready to Grow Your London Business?"
        description="Schedule a free strategy session to discover how our AI-powered marketing solutions can help you attract more customers and increase revenue."
      />
    </main>
  )
}
