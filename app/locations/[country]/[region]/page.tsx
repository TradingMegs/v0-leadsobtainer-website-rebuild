import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SubLocationHero } from "@/components/locations/sub-location-hero"
import { SubLocationServices } from "@/components/locations/sub-location-services"
import { SubLocationStats } from "@/components/locations/sub-location-stats"
import { SubLocationIndustries } from "@/components/locations/sub-location-industries"
import { SubLocationCta } from "@/components/locations/sub-location-cta"
import { LocationSeoServices } from "@/components/locations/location-seo-services"
import { LinkIntegrityScanner } from "@/components/link-integrity-scanner"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Head from "next/head"
import { generateLocationBusinessSchema } from "@/lib/schema-helpers"

// Define the countries and their regions data
const countryData = {
  "united-states": {
    name: "United States",
    regions: [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
      "Washington, D.C.",
      "Puerto Rico",
      "Guam",
      "U.S. Virgin Islands",
      "Northern Mariana Islands",
      "American Samoa",
    ],
  },
  "united-kingdom": {
    name: "United Kingdom",
    regions: [
      // England
      "London",
      "South East",
      "South West",
      "East of England",
      "East Midlands",
      "West Midlands",
      "North West",
      "North East",
      "Yorkshire and the Humber",
      // Scotland
      "Scotland",
      "Glasgow",
      "Edinburgh",
      "Aberdeen",
      "Highlands",
      // Wales
      "Wales",
      "Cardiff",
      "Swansea",
      "Gwynedd",
      // Northern Ireland
      "Northern Ireland",
      "Belfast",
      "Derry",
      "Antrim",
    ],
  },
  canada: {
    name: "Canada",
    regions: [
      "Alberta",
      "British Columbia",
      "Manitoba",
      "New Brunswick",
      "Newfoundland and Labrador",
      "Nova Scotia",
      "Ontario",
      "Prince Edward Island",
      "Quebec",
      "Saskatchewan",
      "Yukon",
      "Northwest Territories",
      "Nunavut",
    ],
  },
  australia: {
    name: "Australia",
    regions: [
      "New South Wales",
      "Victoria",
      "Queensland",
      "South Australia",
      "Western Australia",
      "Tasmania",
      "Australian Capital Territory",
      "Northern Territory",
    ],
  },
  "new-zealand": {
    name: "New Zealand",
    regions: [
      "Auckland",
      "Bay of Plenty",
      "Canterbury",
      "Gisborne",
      "Hawke's Bay",
      "Manawatū-Whanganui",
      "Marlborough",
      "Nelson",
      "Northland",
      "Otago",
      "Southland",
      "Taranaki",
      "Tasman",
      "Waikato",
      "Wellington",
      "West Coast",
    ],
  },
  ireland: {
    name: "Ireland",
    regions: ["Dublin", "Cork", "Galway", "Limerick", "Waterford", "Leinster", "Munster", "Connacht", "Ulster"],
  },
  singapore: {
    name: "Singapore",
    regions: ["Central Singapore", "North-East", "North-West", "South-East", "West"],
  },
  "hong-kong": {
    name: "Hong Kong",
    regions: [
      "Central and Western",
      "Wan Chai",
      "Eastern",
      "Southern",
      "Kowloon City",
      "Kwun Tong",
      "Sham Shui Po",
      "Wong Tai Sin",
      "Yau Tsim Mong",
      "Islands",
      "North",
      "Sai Kung",
      "Sha Tin",
      "Tai Po",
      "Tsuen Wan",
      "Tuen Mun",
      "Yuen Long",
    ],
  },
  qatar: {
    name: "Qatar",
    regions: [
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
  "united-arab-emirates": {
    name: "United Arab Emirates",
    regions: ["Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Umm Al Quwain", "Ras Al Khaimah", "Fujairah"],
  },
}

// Helper function to convert slug to proper name
function slugToName(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

// Helper function to find region name from slug
function findRegionName(countryData: any, countrySlug: string, regionSlug: string): string | null {
  const country = countryData[countrySlug]
  if (!country) return null

  const regionName = country.regions.find((region: string) => {
    const currentRegionSlug = region
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
    return currentRegionSlug === regionSlug
  })

  return regionName || null
}

type Props = {
  params: { country: string; region: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country: countrySlug, region: regionSlug } = params
  const countryName = countryData[countrySlug as keyof typeof countryData]?.name || slugToName(countrySlug)
  const regionName = findRegionName(countryData, countrySlug, regionSlug) || slugToName(regionSlug)

  return {
    title: `${regionName}, ${countryName} | LeadsObtainer - AI-Powered Growth Solutions`,
    description: `LeadsObtainer provides AI-powered growth solutions for businesses in ${regionName}, ${countryName}. Our localized strategies help businesses thrive in the ${regionName} market with SEO, lead generation, and marketing automation.`,
    keywords: `LeadsObtainer, ${regionName}, ${countryName}, AI marketing, lead generation, business growth, marketing automation, sales automation, ${regionName} business, ${regionName} marketing, local SEO ${regionName}, SEO services ${regionName}`,
    openGraph: {
      title: `${regionName}, ${countryName} | LeadsObtainer - AI-Powered Growth Solutions`,
      description: `LeadsObtainer provides AI-powered growth solutions for businesses in ${regionName}, ${countryName}. Our localized strategies help businesses thrive in the ${regionName} market.`,
      url: `https://leadsobtainer.com/locations/${countrySlug}/${regionSlug}`,
      siteName: "LeadsObtainer",
      locale: "en_US",
      type: "website",
    },
  }
}

export default function RegionPage({ params }: Props) {
  const { country: countrySlug, region: regionSlug } = params

  // Check if country exists
  const country = countryData[countrySlug as keyof typeof countryData]
  if (!country) {
    notFound()
  }

  // Find the region name from the slug
  const regionName = findRegionName(countryData, countrySlug, regionSlug)
  if (!regionName) {
    notFound()
  }

  // Generate region-specific description
  const description = `LeadsObtainer provides AI-powered growth solutions tailored specifically for businesses in ${regionName}, ${country.name}. Our localized strategies help businesses thrive in the competitive ${regionName} market.`

  // SEO keywords
  const keywords = `LeadsObtainer, ${regionName}, ${country.name}, AI marketing, lead generation, business growth, marketing automation, sales automation, ${regionName} business, ${regionName} marketing, local SEO ${regionName}, SEO services ${regionName}`

  // Sample stats for the region
  const stats = [
    {
      value: "87%",
      label: "Growth Rate",
      description: `Businesses in ${regionName} see an average 87% increase in qualified leads`,
    },
    {
      value: "63%",
      label: "Cost Reduction",
      description: "Lower customer acquisition costs with our AI-powered solutions",
    },
    {
      value: "92%",
      label: "Client Satisfaction",
      description: `Our ${regionName} clients report 92% satisfaction with our services`,
    },
    {
      value: "3.5x",
      label: "ROI",
      description: "Average return on investment within the first 6 months",
    },
  ]

  // Sample industries for the region
  const industries = [
    "Healthcare",
    "Real Estate",
    "Legal Services",
    "Financial Services",
    "Home Services",
    "Retail",
    "Hospitality",
    "Education",
    "Manufacturing",
    "Technology",
    "Construction",
    "Automotive",
  ]

  // Generate JSON-LD Schema for LocalBusiness
  const pageUrl = `https://leadsobtainer.com/locations/${countrySlug}/${regionSlug}`
  const localBusinessSchema = generateLocationBusinessSchema(regionName, description, pageUrl)

  // Extract page content for CTA conditional logic
  const pageContent = description || ""

  return (
    <main className="min-h-screen flex flex-col">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </Head>
      <Navbar />
      <SubLocationHero
        location={regionName}
        parentLocation={country.name}
        description={description}
        keywords={keywords}
      />
      <SubLocationStats location={regionName} stats={stats} />
      <SubLocationServices location={regionName} />
      <SubLocationIndustries location={regionName} industries={industries} />
      <LocationSeoServices location={regionName} />
      <SubLocationCta
        location={regionName}
        headline={`Ready to Grow Your Business in ${regionName}?`}
        description={`Get a customized growth strategy tailored specifically for the ${regionName} market. Our AI-powered solutions help businesses like yours thrive in ${regionName}, ${country.name}.`}
        pageContent={pageContent}
      />
      <Footer />

      {/* Add the Link Integrity Scanner */}
      <LinkIntegrityScanner location={regionName} autoFix={true} debug={process.env.NODE_ENV === "development"} />
    </main>
  )
}
