import type { Metadata } from "next"
import { SubLocationHero } from "@/components/locations/sub-location-hero"
import { SubLocationStats } from "@/components/locations/sub-location-stats"
import { SubLocationServices } from "@/components/locations/sub-location-services"
import { SubLocationCities } from "@/components/locations/sub-location-cities"
import { SubLocationCta } from "@/components/locations/sub-location-cta"
import { IndustryCategories } from "@/components/locations/industry-categories"
import { LocationCompetition } from "@/components/locations/location-competition"

export const metadata: Metadata = {
  title: "California Lead Generation & Marketing Services | LeadsObtainer",
  description:
    "Specialized lead generation and marketing automation services for California businesses. Grow your customer base with our AI-powered solutions.",
}

export default function CaliforniaPage() {
  const competitionData = [
    {
      category: "Health & Wellness",
      saturation: 85,
      opportunity: 75,
    },
    {
      category: "Professional Services",
      saturation: 88,
      opportunity: 72,
    },
    {
      category: "Home Improvement",
      saturation: 70,
      opportunity: 80,
    },
    {
      category: "Retail",
      saturation: 90,
      opportunity: 65,
    },
    {
      category: "Food & Beverage",
      saturation: 82,
      opportunity: 78,
    },
    {
      category: "Automotive",
      saturation: 75,
      opportunity: 70,
    },
    {
      category: "Technology",
      saturation: 95,
      opportunity: 85,
    },
  ]

  const stats = [
    {
      value: "39.2M+",
      label: "California Population",
    },
    {
      value: "4.1M+",
      label: "Small Businesses",
    },
    {
      value: "78%",
      label: "Online Search Rate",
    },
    {
      value: "58%",
      label: "Digital Ad Growth",
    },
  ]

  const cities = [
    "Los Angeles",
    "San Diego",
    "San Jose",
    "San Francisco",
    "Fresno",
    "Sacramento",
    "Long Beach",
    "Oakland",
    "Bakersfield",
    "Anaheim",
    "Santa Ana",
    "Riverside",
    "Stockton",
    "Irvine",
    "Chula Vista",
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <SubLocationHero
        location="California"
        parentLocation="United States"
        headline="Grow Your California Business with AI-Powered Lead Generation"
        description="Custom marketing solutions designed specifically for California's unique business landscape. Turn more clicks into customers with our proven strategies."
      />

      <SubLocationStats
        location="California"
        stats={stats}
        description="California's innovative economy presents exceptional opportunities for local businesses to expand their digital presence and capture market share."
      />

      <LocationCompetition location="California" competitionData={competitionData} />

      <IndustryCategories location="California" />

      <SubLocationServices
        location="California"
        services={[
          {
            title: "Local SEO Domination",
            description:
              "Rank higher in local searches across California cities with our targeted SEO strategies designed for your specific market.",
          },
          {
            title: "Targeted Lead Generation",
            description:
              "Attract high-quality leads from across California with custom campaigns tailored to your industry and local audience.",
          },
          {
            title: "Conversion Rate Optimization",
            description:
              "Turn more website visitors into paying customers with our data-driven CRO strategies for California businesses.",
          },
          {
            title: "Social Media Management",
            description:
              "Build a strong local presence on social media platforms with content that resonates with California consumers.",
          },
          {
            title: "Reputation Management",
            description:
              "Build and maintain a stellar online reputation to stand out from competitors in your local California market.",
          },
          {
            title: "Marketing Automation",
            description:
              "Save time and increase efficiency with automated marketing workflows designed for California business needs.",
          },
        ]}
      />

      <SubLocationCities location="California" cities={cities} />

      <SubLocationCta
        location="California"
        headline="Ready to Grow Your California Business?"
        description="Schedule a free strategy session to discover how our AI-powered marketing solutions can help you attract more customers and increase revenue."
      />
    </main>
  )
}
