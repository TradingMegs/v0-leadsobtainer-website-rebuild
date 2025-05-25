"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Search, MapPin, ChevronRight } from "lucide-react"

interface CountryRegionsProps {
  country: string
  regions: string[]
  countrySlug: string
}

export function CountryRegions({ country, regions, countrySlug }: CountryRegionsProps) {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter regions based on search term
  const filteredRegions = useMemo(() => {
    if (!searchTerm.trim()) return regions

    return regions.filter((region) => region.toLowerCase().includes(searchTerm.toLowerCase()))
  }, [searchTerm, regions])

  // Create URL-friendly slugs for regions
  const getRegionSlug = (region: string) => {
    return region
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Regions in {country}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select a region to learn more about our AI-powered growth solutions in your area.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder={`Search for a region in ${country}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-6 bg-secondary/30"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredRegions.map((region, index) => (
            <motion.div
              key={region}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
            >
              <Link href={`/locations/${countrySlug}/${getRegionSlug(region)}`}>
                <div className="bg-secondary/30 rounded-lg p-5 hover:bg-secondary/50 transition-colors border border-transparent hover:border-primary/20 group h-full">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <h3 className="font-medium">{region}</h3>
                    </div>
                    <ChevronRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredRegions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No regions found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}
