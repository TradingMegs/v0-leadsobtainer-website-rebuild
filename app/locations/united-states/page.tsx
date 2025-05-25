import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LocationHero } from "@/components/locations/location-hero"
import { LocationRegions } from "@/components/locations/location-regions"
import { LocationServices } from "@/components/locations/location-services"
import { LocationTestimonials } from "@/components/locations/location-testimonials"
import { LocationCTA } from "@/components/locations/location-cta"
import { LocationStats } from "@/components/locations/location-stats"
import { LocationIndustries } from "@/components/locations/location-industries"
import { LocationSuccess } from "@/components/locations/location-success"
import { LocationSeoServices } from "@/components/locations/location-seo-services"

export const metadata = {
  title: "United States | LeadsObtainer - Growth Solutions for Local Businesses",
  description:
    "LeadsObtainer provides AI-powered growth solutions for businesses across all 50 states in the US. Find your state and grow your business today.",
  keywords:
    "lead generation USA, marketing automation United States, business growth America, local business marketing US, digital marketing United States",
}

export default function UnitedStatesPage() {
  const regions = [
    {
      name: "Northeast",
      states: [
        "Connecticut",
        "Maine",
        "Massachusetts",
        "New Hampshire",
        "New Jersey",
        "New York",
        "Pennsylvania",
        "Rhode Island",
        "Vermont",
      ],
    },
    {
      name: "Midwest",
      states: [
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Michigan",
        "Minnesota",
        "Missouri",
        "Nebraska",
        "North Dakota",
        "Ohio",
        "South Dakota",
        "Wisconsin",
      ],
    },
    {
      name: "South",
      states: [
        "Alabama",
        "Arkansas",
        "Delaware",
        "Florida",
        "Georgia",
        "Kentucky",
        "Louisiana",
        "Maryland",
        "Mississippi",
        "North Carolina",
        "Oklahoma",
        "South Carolina",
        "Tennessee",
        "Texas",
        "Virginia",
        "West Virginia",
      ],
    },
    {
      name: "West",
      states: [
        "Alaska",
        "Arizona",
        "California",
        "Colorado",
        "Hawaii",
        "Idaho",
        "Montana",
        "Nevada",
        "New Mexico",
        "Oregon",
        "Utah",
        "Washington",
        "Wyoming",
      ],
    },
    {
      name: "Federal District & Territories",
      states: [
        "Washington, D.C.",
        "Puerto Rico",
        "Guam",
        "U.S. Virgin Islands",
        "Northern Mariana Islands",
        "American Samoa",
      ],
    },
  ]

  const stats = [
    { value: "33.2M", label: "Small Businesses", description: "Across the United States" },
    { value: "61%", label: "Digital Marketing", description: "Small businesses investing in digital" },
    { value: "4.2x", label: "ROI Increase", description: "With AI-powered marketing" },
    { value: "76%", label: "Lead Conversion", description: "Improvement with our solutions" },
  ]

  const industries = [
    "Healthcare",
    "Professional Services",
    "Home Services",
    "Retail",
    "Restaurants",
    "Real Estate",
    "Automotive",
    "Financial Services",
    "Education",
    "Fitness & Wellness",
    "Legal Services",
    "Manufacturing",
  ]

  const successStories = [
    {
      business: "Coastal Dental Group",
      location: "Miami, Florida",
      result: "237% increase in qualified leads within 90 days",
      quote: "LeadsObtainer transformed our practice. We're now booked solid three months in advance.",
    },
    {
      business: "Mountain View Realty",
      location: "Denver, Colorado",
      result: "189% ROI on marketing spend in the first quarter",
      quote: "Their AI-powered approach helped us dominate our local market during a challenging season.",
    },
    {
      business: "Midwest Auto Repair",
      location: "Chicago, Illinois",
      result: "43% reduction in customer acquisition costs",
      quote: "We're getting better quality leads at nearly half the cost of our previous marketing efforts.",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <LocationHero
        location="United States"
        description="AI-powered growth solutions for businesses across all 50 states, Washington D.C., and U.S. territories."
        keywords="lead generation USA, marketing automation United States, business growth America, local business marketing US"
      />
      <LocationStats location="United States" stats={stats} />
      <LocationRegions location="United States" regions={regions} />
      <LocationIndustries location="United States" industries={industries} />
      <LocationServices location="United States" />
      <LocationSuccess location="United States" successStories={successStories} />
      <LocationTestimonials location="United States" />
      <LocationSeoServices location="United States" />
      <LocationCTA location="United States" />
      <Footer />
    </main>
  )
}
