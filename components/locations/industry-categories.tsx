"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface IndustryCategoriesProps {
  location: string
}

export function IndustryCategories({ location }: IndustryCategoriesProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("Health & Wellness")

  const toggleCategory = (category: string) => {
    if (expandedCategory === category) {
      setExpandedCategory(null)
    } else {
      setExpandedCategory(category)
    }
  }

  const categories = {
    "Health & Wellness": [
      "Dentists",
      "Physicians (General Practice, Specialists)",
      "Chiropractors",
      "Physical Therapists",
      "Veterinarians",
      "Pharmacies",
      "Mental Health Counselors",
      "Optometrists/Eyewear Stores",
      "Fitness Centers/Gyms",
      "Yoga/Pilates Studios",
    ],
    "Professional Services": [
      "Accountants/Tax Preparers",
      "Lawyers/Legal Advisors",
      "Real Estate Agents/Brokers",
      "Insurance Agents",
      "Marketing/Advertising Agencies",
      "Consulting Firms (Business, IT, HR)",
      "Architects/Design Firms",
      "Engineering Firms",
    ],
    "Home Improvement & Maintenance": [
      "HVAC Contractors",
      "Roofing Contractors",
      "Plumbers",
      "Electricians",
      "Handyman Services",
      "Painters",
      "Flooring Specialists",
      "Window/Door Installers",
      "Landscaping Services",
      "Pest Control",
    ],
    Retail: [
      "Clothing Boutiques",
      "Grocery Stores",
      "Hardware Stores",
      "Furniture Stores",
      "Bookstores",
      "Electronics Retailers",
      "Gift Shops",
      "Pet Supply Stores",
      "Liquor Stores",
      "Thrift/Vintage Shops",
    ],
    "Food & Beverage": [
      "Restaurants (Casual, Fine Dining)",
      "Cafés/Coffee Shops",
      "Bakeries",
      "Food Trucks",
      "Bars/Pubs",
      "Catering Services",
      "Specialty Food Stores (Butcher, Bakery, Deli)",
      "Wineries/Breweries",
    ],
    Automotive: [
      "Auto Repair Shops",
      "Car Washes",
      "Dealerships (New/Used Cars)",
      "Auto Parts Stores",
      "Detailing Services",
      "Tire Shops",
      "Towing Services",
    ],
    "Personal Care": [
      "Hair Salons/Barbers",
      "Spas/Estheticians",
      "Nail Salons",
      "Tattoo/Piercing Studios",
      "Massage Therapists",
      "Cosmetic Retailers",
    ],
    "Education & Learning": [
      "Tutoring Centers",
      "Language Schools",
      "Music/Dance Lessons",
      "Preschools/Daycares",
      "Vocational Training",
      "Test Prep Services",
    ],
    "Technology & IT": [
      "IT Support Services",
      "Web Design/Development",
      "Cybersecurity Firms",
      "Software Companies",
      "Electronics Repair",
    ],
    "Financial Services": [
      "Banks/Credit Unions",
      "Financial Advisors",
      "Payday Loan Services",
      "Tax Preparation",
      "Investment Firms",
    ],
    "Construction & Trades": [
      "General Contractors",
      "Excavation Services",
      "Masonry/Concrete Work",
      "Carpentry/Cabinet Makers",
      "Welding/Fabrication",
    ],
    "Real Estate": ["Property Management", "Home Staging", "Real Estate Appraisers", "Title Companies"],
    "Hospitality & Entertainment": [
      "Hotels/Motels",
      "Event Venues",
      "Theaters/Cinemas",
      "Bowling Alleys",
      "Arcades/Gaming Centers",
    ],
    "Environmental & Sustainability": [
      "Solar Panel Installers",
      "Recycling Centers",
      "Eco-Friendly Retailers",
      "Energy Efficiency Consultants",
    ],
    "Legal Services": ["Law Firms (Family, Corporate, Criminal)", "Notaries Public", "Mediation/Arbitration Services"],
    "Pet Services": ["Pet Groomers", "Pet Boarding/Kennels", "Dog Walkers/Trainers", "Pet Stores"],
    Miscellaneous: [
      "Locksmiths",
      "Photographers/Videographers",
      "Event Planners",
      "Dry Cleaners/Laundromats",
      "Printing/Copy Shops",
      "Florists",
      "Courier/Delivery Services",
    ],
  }

  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Industries We Serve in {location}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered growth solutions are tailored to the unique needs of these industries across {location}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(categories).map(([category, industries], index) => (
            <motion.div
              key={category}
              className="bg-secondary/30 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Button
                variant="ghost"
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => toggleCategory(category)}
              >
                <span className="font-semibold text-lg">{category}</span>
                {expandedCategory === category ? (
                  <ChevronUp className="h-5 w-5 text-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-primary" />
                )}
              </Button>

              {expandedCategory === category && (
                <motion.div
                  className="p-4 pt-0 grid grid-cols-1 sm:grid-cols-2 gap-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {industries.map((industry) => (
                    <div key={industry} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">{industry}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
