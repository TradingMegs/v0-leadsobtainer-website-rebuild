import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CountryHero } from "@/components/locations/country-hero"
import { CountryRegions } from "@/components/locations/country-regions"
import { LocationCTA } from "@/components/locations/location-cta"
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
    description:
      "LeadsObtainer provides AI-powered growth solutions for businesses across all states and territories in the United States. Our localized strategies help American businesses thrive in their specific markets.",
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
    description:
      "LeadsObtainer delivers tailored AI growth solutions for businesses throughout the United Kingdom, including England, Scotland, Wales, and Northern Ireland. Our local expertise helps UK businesses achieve sustainable growth.",
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
    description:
      "LeadsObtainer provides specialized AI-powered growth solutions for Canadian businesses across all provinces and territories. Our strategies are tailored to the unique Canadian market landscape.",
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
    description:
      "LeadsObtainer offers comprehensive AI growth solutions for Australian businesses in all states and territories. Our localized approach helps Australian companies achieve sustainable growth in their specific markets.",
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
    description:
      "LeadsObtainer delivers tailored AI growth solutions for New Zealand businesses across all regions. Our strategies are designed to help Kiwi companies thrive in their local markets.",
  },
  ireland: {
    name: "Ireland",
    regions: ["Dublin", "Cork", "Galway", "Limerick", "Waterford", "Leinster", "Munster", "Connacht", "Ulster"],
    description:
      "LeadsObtainer provides specialized AI-powered growth solutions for Irish businesses across all counties. Our localized strategies help Irish companies achieve sustainable growth in their specific markets.",
  },
  singapore: {
    name: "Singapore",
    regions: ["Central Singapore", "North-East", "North-West", "South-East", "West"],
    description:
      "LeadsObtainer offers comprehensive AI growth solutions for Singaporean businesses across all regions. Our tailored approach helps Singapore companies thrive in their competitive market.",
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
    description:
      "LeadsObtainer delivers specialized AI-powered growth solutions for Hong Kong businesses across all districts. Our strategies are tailored to help Hong Kong companies achieve sustainable growth in their unique market.",
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
    description:
      "LeadsObtainer provides comprehensive AI growth solutions for Qatari businesses across all municipalities. Our localized approach helps Qatari companies thrive in their specific market conditions.",
  },
  "united-arab-emirates": {
    name: "United Arab Emirates",
    regions: ["Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Umm Al Quwain", "Ras Al Khaimah", "Fujairah"],
    description:
      "LeadsObtainer offers tailored AI-powered growth solutions for UAE businesses across all emirates. Our strategies are designed to help UAE companies achieve sustainable growth in their competitive market.",
  },
}

type Props = {
  params: { country: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const country = countryData[params.country as keyof typeof countryData]

  if (!country) {
    return {
      title: "Location Not Found | LeadsObtainer",
      description: "The requested location could not be found.",
    }
  }

  return {
    title: `${country.name} | LeadsObtainer - AI-Powered Growth Solutions`,
    description: country.description,
    keywords: `LeadsObtainer, ${country.name}, AI marketing, lead generation, business growth, marketing automation, sales automation, ${country.name} business, ${country.name} marketing, local SEO ${country.name}, SEO services ${country.name}`,
    openGraph: {
      title: `${country.name} | LeadsObtainer - AI-Powered Growth Solutions`,
      description: country.description,
      url: `https://leadsobtainer.com/locations/${params.country}`,
      siteName: "LeadsObtainer",
      locale: "en_US",
      type: "website",
    },
  }
}

export default function CountryPage({ params }: Props) {
  const countrySlug = params.country
  const country = countryData[countrySlug as keyof typeof countryData]

  if (!country) {
    notFound()
  }

  // Generate JSON-LD Schema for LocalBusiness
  const pageUrl = `https://leadsobtainer.com/locations/${countrySlug}`
  const localBusinessSchema = generateLocationBusinessSchema(country.name, country.description, pageUrl)

  // Extract page content for CTA conditional logic
  const pageContent = country.description || ""

  return (
    <main className="min-h-screen flex flex-col">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </Head>
      <Navbar />
      <CountryHero country={country.name} description={country.description} />
      <CountryRegions country={country.name} regions={country.regions} countrySlug={countrySlug} />
      <LocationSeoServices location={country.name} />
      <LocationCTA location={country.name} pageContent={pageContent} />
      <Footer />

      {/* Add the Link Integrity Scanner */}
      <LinkIntegrityScanner location={country.name} autoFix={true} debug={process.env.NODE_ENV === "development"} />
    </main>
  )
}
