"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  BarChart3,
  Users,
  TrendingUp,
  MapPin,
  CheckCircle2,
  Heart,
  Briefcase,
  Home,
  ShoppingBag,
  Utensils,
  Car,
  Scissors,
  GraduationCap,
  DollarSign,
  Building,
  Hotel,
  Leaf,
  Dog,
  Key,
  Search,
  Bot,
  LineChart,
  Target,
  Megaphone,
  Sparkles,
  Mail,
} from "lucide-react"
import { LocationSeoServices } from "@/components/locations/location-seo-services"
import { getCtaUrl, getCtaText } from "@/lib/content-helpers"

interface BusinessCategory {
  name: string
  businesses: string[]
}

interface LocationStats {
  totalBusinesses: string
  growthRate: string
  onlinePresence: string
  competitionLevel: string
}

interface LocationTemplateProps {
  location: string
  description: string
  stats: LocationStats
  businessCategories: BusinessCategory[]
  regions?: string[]
  additionalInfo?: string
}

export function LocationTemplate({
  location,
  description,
  stats,
  businessCategories,
  regions,
  additionalInfo,
}: LocationTemplateProps) {
  const [activeTab, setActiveTab] = useState("overview")

  // JSON-LD Schema for LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `LeadsObtainer - AI-Powered Growth Solutions in ${location}`,
    description: description,
    address: {
      "@type": "PostalAddress",
      addressLocality: location,
    },
    geo: {
      "@type": "GeoCoordinates",
    },
    url: `https://leadsobtainer.com/locations/${location.toLowerCase().replace(/\s+/g, "-")}`,
    telephone: "+1-800-LEADS-AI",
    openingHours: "Mo-Fr 09:00-17:00",
    priceRange: "$$$",
  }

  // Service categories with icons
  const serviceCategories = [
    {
      id: "health",
      name: "Health & Wellness",
      icon: <Heart className="h-6 w-6 text-primary" />,
      services: [
        "Dentists",
        "Physicians",
        "Chiropractors",
        "Physical Therapists",
        "Veterinarians",
        "Pharmacies",
        "Mental Health Counselors",
        "Optometrists / Eyewear Stores",
        "Fitness Centers / Gyms",
        "Yoga / Pilates Studios",
        "Massage Therapists",
      ],
    },
    {
      id: "professional",
      name: "Professional Services",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      services: [
        "Accountants / Tax Preparers",
        "Lawyers / Legal Advisors",
        "Real Estate Agents / Brokers",
        "Insurance Agents",
        "Notaries Public",
      ],
    },
    {
      id: "home",
      name: "Home Improvement & Maintenance",
      icon: <Home className="h-6 w-6 text-primary" />,
      services: [
        "HVAC Contractors",
        "Roofing Contractors",
        "Plumbers",
        "Electricians",
        "Handyman Services",
        "Painters",
        "Flooring Specialists",
        "Window / Door Installers",
        "Landscaping / Lawn Care Services",
        "Pest Control",
      ],
    },
    {
      id: "retail",
      name: "Retail",
      icon: <ShoppingBag className="h-6 w-6 text-primary" />,
      services: [
        "Clothing Boutiques",
        "Grocery Stores",
        "Hardware Stores",
        "Furniture Stores",
        "Bookstores",
        "Gift Shops",
        "Pet Supply Stores",
        "Liquor Stores",
        "Thrift / Vintage Shops",
      ],
    },
    {
      id: "food",
      name: "Food & Beverage",
      icon: <Utensils className="h-6 w-6 text-primary" />,
      services: [
        "Restaurants",
        "Cafés / Coffee Shops",
        "Bakeries",
        "Food Trucks",
        "Bars / Pubs",
        "Catering Services",
        "Specialty Food Stores",
        "Wineries / Breweries",
      ],
    },
    {
      id: "automotive",
      name: "Automotive",
      icon: <Car className="h-6 w-6 text-primary" />,
      services: [
        "Auto Repair Shops",
        "Car Washes",
        "Auto Parts Stores",
        "Detailing Services",
        "Tire Shops",
        "Towing Services",
        "Mobile Car Services",
      ],
    },
    {
      id: "personal",
      name: "Personal Care",
      icon: <Scissors className="h-6 w-6 text-primary" />,
      services: [
        "Hair Salons / Barbers",
        "Spas / Estheticians",
        "Nail Salons",
        "Tattoo / Piercing Studios",
        "Massage Therapists",
      ],
    },
    {
      id: "education",
      name: "Education & Learning",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      services: [
        "Tutoring Centers",
        "Language Schools",
        "Music / Dance Lessons",
        "Preschools / Daycares",
        "Test Prep Services",
      ],
    },
    {
      id: "financial",
      name: "Financial Services",
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      services: ["Tax Preparation", "Payday Loan Services", "Banks / Credit Unions"],
    },
    {
      id: "construction",
      name: "Construction & Trades",
      icon: <Building className="h-6 w-6 text-primary" />,
      services: [
        "General Contractors",
        "Excavation Services",
        "Masonry / Concrete Work",
        "Carpenters / Cabinet Makers",
        "Welding / Fabrication",
      ],
    },
    {
      id: "realestate",
      name: "Real Estate",
      icon: <MapPin className="h-6 w-6 text-primary" />,
      services: ["Property Management", "Home Staging", "Real Estate Appraisers", "Title Companies"],
    },
    {
      id: "hospitality",
      name: "Hospitality & Entertainment",
      icon: <Hotel className="h-6 w-6 text-primary" />,
      services: ["Hotels / Motels", "Event Venues", "Theaters / Cinemas", "Bowling Alleys", "Arcades / Gaming Centers"],
    },
    {
      id: "environmental",
      name: "Environmental & Sustainability",
      icon: <Leaf className="h-6 w-6 text-primary" />,
      services: ["Solar Panel Installers", "Recycling Centers", "Eco-Friendly Retailers"],
    },
    {
      id: "pet",
      name: "Pet Services",
      icon: <Dog className="h-6 w-6 text-primary" />,
      services: [
        "Pet Groomers",
        "Pet Boarding / Kennels",
        "Dog Walkers / Trainers",
        "Pet Stores",
        "Mobile Pet Services",
      ],
    },
    {
      id: "miscellaneous",
      name: "Miscellaneous",
      icon: <Key className="h-6 w-6 text-primary" />,
      services: [
        "Locksmiths",
        "Photographers / Videographers",
        "Event Planners",
        "Dry Cleaners / Laundromats",
        "Printing / Copy Shops",
        "Florists",
        "Courier / Delivery Services",
        "Junk Removal Services",
        "Local Tour Guides / Operators",
        "Craft / Artisan Shops",
      ],
    },
  ]

  // Our service offerings with icons
  const ourServices = [
    {
      id: "seo",
      name: "SEO & Local SEO",
      icon: <Search className="h-6 w-6 text-primary" />,
      services: [
        "Local SEO services",
        "Small business SEO services",
        "Local search marketing",
        "Google Business Profile optimization",
        "On-page SEO optimization services",
        "Technical SEO audit",
      ],
    },
    {
      id: "automation",
      name: "Marketing Automation & CRM Integration",
      icon: <Bot className="h-6 w-6 text-primary" />,
      services: [
        "Marketing automation services",
        "CRM integration services",
        "Sales and marketing automation",
        "Omnichannel marketing automation",
        "CRM data integration services",
      ],
    },
    {
      id: "conversion",
      name: "Conversion Rate Optimization & Landing Pages",
      icon: <LineChart className="h-6 w-6 text-primary" />,
      services: [
        "Conversion rate optimization services",
        "Landing page design services",
        "Website conversion optimization",
        "A/B testing services",
        "User experience optimization",
        "Conversion funnel optimization",
      ],
    },
    {
      id: "leads",
      name: "Lead Generation, Retention & Referrals",
      icon: <Target className="h-6 w-6 text-primary" />,
      services: [
        "Lead generation services",
        "Local lead generation agency",
        "Inbound marketing services",
        "Customer acquisition strategies",
        "Customer retention marketing",
        "Loyalty program solutions",
        "Referral marketing services",
      ],
    },
    {
      id: "advertising",
      name: "Paid Advertising",
      icon: <Megaphone className="h-6 w-6 text-primary" />,
      services: [
        "Google Ads management services",
        "Facebook (Meta) Ads management",
        "TikTok advertising agency",
        "LinkedIn advertising services",
        "PPC advertising agency",
        "Social media ad campaigns",
        "Programmatic advertising services",
      ],
    },
    {
      id: "ai",
      name: "AI-Powered Automation & Workflows",
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      services: [
        "AI marketing automation",
        "AI-driven workflow automation",
        "AI marketing tools and services",
        "Predictive analytics consulting",
        "Chatbot automation services",
        "Generative AI marketing solutions",
      ],
    },
    {
      id: "email",
      name: "Email Marketing & Cart Abandonment",
      icon: <Mail className="h-6 w-6 text-primary" />,
      services: [
        "Email marketing automation services",
        "Abandoned cart email recovery",
        "Automated email drip campaigns",
        "Email list segmentation services",
        "Email personalization campaigns",
        "Automated email workflows",
        "Email campaign optimization",
      ],
    },
  ]

  // Extract page content for CTA conditional logic
  const pageContent = description || ""
  const ctaUrl = getCtaUrl(pageContent, location)
  const ctaText = getCtaText(pageContent)

  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <div className="py-12 md:py-16">
        {/* Location Overview */}
        <section className="container mx-auto mb-16">
          <div className="bg-secondary/30 rounded-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                  AI-Powered Growth Solutions in {location}
                </h1>
                <p className="text-muted-foreground mb-6">{description}</p>

                {regions && regions.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-medium mb-2">Serving all regions including:</h3>
                    <div className="flex flex-wrap gap-2">
                      {regions.slice(0, 8).map((region) => (
                        <span key={region} className="bg-secondary/50 px-3 py-1 rounded-full text-sm">
                          {region}
                        </span>
                      ))}
                      {regions.length > 8 && (
                        <span className="bg-secondary/50 px-3 py-1 rounded-full text-sm">
                          +{regions.length - 8} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Get Your Free Growth Plan
                  </Button>
                  <Button variant="outline">Schedule a Call</Button>
                </div>
              </div>

              <div className="bg-secondary/20 rounded-xl p-6">
                <h3 className="font-bold text-xl mb-4">Business Statistics in {location}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Businesses:</span>
                    <span className="font-medium">{stats.totalBusinesses}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Annual Growth Rate:</span>
                    <span className="font-medium">{stats.growthRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Online Presence:</span>
                    <span className="font-medium">{stats.onlinePresence}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Competition Level:</span>
                    <span className="font-medium">{stats.competitionLevel}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="container mx-auto mb-16">
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="industries">Industries We Serve</TabsTrigger>
              <TabsTrigger value="services">Our Services</TabsTrigger>
              <TabsTrigger value="directory">Local Directory</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  className="bg-secondary/30 p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Market Analysis</h3>
                  <p className="text-muted-foreground">
                    Our AI analyzes the {location} market to identify growth opportunities specific to your business
                    niche.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-secondary/30 p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Local Targeting</h3>
                  <p className="text-muted-foreground">
                    We target your ideal customers in {location} with precision, delivering high-quality local leads.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-secondary/30 p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Growth Strategy</h3>
                  <p className="text-muted-foreground">
                    Custom growth strategies designed for the unique business environment in {location}.
                  </p>
                </motion.div>
              </div>

              {additionalInfo && (
                <div className="mt-8 bg-secondary/10 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3">About {location}</h3>
                  <p className="text-muted-foreground">{additionalInfo}</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="industries" className="mt-6">
              <div className="bg-secondary/10 p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-6">Industries We Serve in {location}</h2>

                <Accordion type="single" collapsible className="w-full">
                  {businessCategories.map((category, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-lg font-medium">{category.name}</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pt-2">
                          {category.businesses.map((business, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary" />
                              <span>{business}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="services" className="mt-6">
              <div className="bg-secondary/10 p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-6">Our Services in {location}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {ourServices.map((service, index) => (
                    <div key={index} className="bg-secondary/30 p-6 rounded-xl">
                      <div className="flex items-center gap-3 mb-3">
                        {service.icon}
                        <h3 className="text-xl font-semibold">{service.name}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        We provide {service.name.toLowerCase()} services tailored specifically for businesses in{" "}
                        {location}.
                      </p>
                      <ul className="space-y-2">
                        {service.services.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="directory" className="mt-6">
              <div className="bg-secondary/10 p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-6">Local Business Directory for {location}</h2>
                <p className="text-muted-foreground mb-8">
                  Find top-rated local businesses in {location} or list your business in our directory to increase your
                  visibility.
                </p>

                <div className="space-y-8">
                  {serviceCategories.map((category, index) => (
                    <section key={index} className="bg-secondary/20 p-6 rounded-xl" id={category.id}>
                      <div className="flex items-center gap-3 mb-4">
                        {category.icon}
                        <h2 className="text-xl font-bold">
                          {category.name} in {location}
                        </h2>
                      </div>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2">
                        {category.services.map((service, idx) => (
                          <li key={idx} className="py-1">
                            <a href="#" className="hover:text-primary flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary" />
                              <span>
                                {service} in {location}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Add SEO Services */}
        <LocationSeoServices location={location} />

        {/* CTA Section */}
        <section className="container mx-auto">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business in {location}?</h2>
              <p className="text-muted-foreground mb-8">
                Join hundreds of local businesses in {location} that are already experiencing predictable growth with
                our AI-powered solutions.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href={ctaUrl}>{ctaText}</Link>
                </Button>
                <Button size="lg" variant="outline">
                  <MapPin className="mr-2 h-4 w-4" /> Find Local Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
