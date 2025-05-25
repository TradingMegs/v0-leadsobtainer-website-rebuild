"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Search, MapPin, ChevronRight } from "lucide-react"

// Define the countries and their URL-friendly slugs
const countries = [
  { name: "United States", slug: "united-states", flag: "🇺🇸" },
  { name: "United Kingdom", slug: "united-kingdom", flag: "🇬🇧" },
  { name: "Canada", slug: "canada", flag: "🇨🇦" },
  { name: "Australia", slug: "australia", flag: "🇦🇺" },
  { name: "New Zealand", slug: "new-zealand", flag: "🇳🇿" },
  { name: "Ireland", slug: "ireland", flag: "🇮🇪" },
  { name: "Singapore", slug: "singapore", flag: "🇸🇬" },
  { name: "Hong Kong", slug: "hong-kong", flag: "🇭🇰" },
  { name: "Qatar", slug: "qatar", flag: "🇶🇦" },
  { name: "United Arab Emirates", slug: "united-arab-emirates", flag: "🇦🇪" },
]

export function LocationsList() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter countries based on search term
  const filteredCountries = useMemo(() => {
    if (!searchTerm.trim()) return countries

    return countries.filter((country) => country.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }, [searchTerm])

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for a country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-6 bg-secondary/30"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCountries.map((country, index) => (
            <motion.div
              key={country.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link href={`/locations/${country.slug}`}>
                <div className="bg-secondary/30 rounded-lg p-6 h-full hover:bg-secondary/50 transition-colors border border-transparent hover:border-primary/20 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{country.flag}</span>
                      <h3 className="text-xl font-semibold">{country.name}</h3>
                    </div>
                    <ChevronRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>View regions and services</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredCountries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No countries found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}
