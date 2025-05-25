import type { Metadata } from "next"
import { SubLocationHero } from "@/components/locations/sub-location-hero"
import { SubLocationStats } from "@/components/locations/sub-location-stats"
import { SubLocationServices } from "@/components/locations/sub-location-services"
import { SubLocationCities } from "@/components/locations/sub-location-cities"
import { SubLocationCta } from "@/components/locations/sub-location-cta"
import { IndustryCategories } from "@/components/locations/industry-categories"
import { LocationCompetition } from "@/components/locations/location-competition"

export const metadata: Metadata = {
  title: "Oklahoma Lead Generation & Marketing Services | LeadsObtainer",
  description:
    "Specialized lead generation and marketing automation services for Oklahoma businesses. Grow your customer base with our AI-powered solutions.",
}

export default function OklahomaPage() {
  const competitionData = [
    {
      category: "Health & Wellness",
      saturation: 65,
      opportunity: 78,
    },
    {
      category: "Professional Services",
      saturation: 72,
      opportunity: 68,
    },
    {
      category: "Home Improvement",
      saturation: 58,
      opportunity: 82,
    },
    {
      category: "Retail",
      saturation: 80,
      opportunity: 55,
    },
    {
      category: "Food & Beverage",
      saturation: 75,
      opportunity: 70,
    },
    {
      category: "Automotive",
      saturation: 62,
      opportunity: 75,
    },
    {
      category: "Technology",
      saturation: 45,
      opportunity: 88,
    },
  ]

  const stats = [
    {
      value: "4.1M+",
      label: "Oklahoma Population",
    },
    {
      value: "347K+",
      label: "Small Businesses",
    },
    {
      value: "68%",
      label: "Online Search Rate",
    },
    {
      value: "43%",
      label: "Digital Ad Growth",
    },
  ]

  const cities = [
    "Oklahoma City",
    "Tulsa",
    "Norman",
    "Broken Arrow",
    "Lawton",
    "Edmond",
    "Moore",
    "Midwest City",
    "Enid",
    "Stillwater",
    "Muskogee",
    "Bartlesville",
    "Shawnee",
    "Owasso",
    "Ponca City",
  ]

  return (
    <main className="flex flex-col min-h-screen">
      <SubLocationHero
        location="Oklahoma"
        parentLocation="United States"
        headline="Grow Your Oklahoma Business with AI-Powered Lead Generation"
        description="Custom marketing solutions designed specifically for Oklahoma's unique business landscape. Turn more clicks into customers with our proven strategies."
      />

      <SubLocationStats
        location="Oklahoma"
        stats={stats}
        description="Oklahoma's growing economy presents unique opportunities for local businesses to expand their digital presence and capture market share."
      />

      <LocationCompetition location="Oklahoma" competitionData={competitionData} />

      <IndustryCategories location="Oklahoma" />

      <SubLocationServices
        location="Oklahoma"
        services={[
          {
            title: "Local SEO Domination",
            description:
              "Rank higher in local searches across Oklahoma cities with our targeted SEO strategies designed for your specific market.",
          },
          {
            title: "Targeted Lead Generation",
            description:
              "Attract high-quality leads from across Oklahoma with custom campaigns tailored to your industry and local audience.",
          },
          {
            title: "Conversion Rate Optimization",
            description:
              "Turn more website visitors into paying customers with our data-driven CRO strategies for Oklahoma businesses.",
          },
          {
            title: "Social Media Management",
            description:
              "Build a strong local presence on social media platforms with content that resonates with Oklahoma consumers.",
          },
          {
            title: "Reputation Management",
            description:
              "Build and maintain a stellar online reputation to stand out from competitors in your local Oklahoma market.",
          },
          {
            title: "Marketing Automation",
            description:
              "Save time and increase efficiency with automated marketing workflows designed for Oklahoma business needs.",
          },
        ]}
      />

      <SubLocationCities location="Oklahoma" cities={cities} />

      <SubLocationCta
        location="Oklahoma"
        headline="Ready to Grow Your Oklahoma Business?"
        description="Schedule a free strategy session to discover how our AI-powered marketing solutions can help you attract more customers and increase revenue."
      />
    </main>
  )
}
