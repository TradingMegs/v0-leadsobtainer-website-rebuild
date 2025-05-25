"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface Region {
  name: string
  states: string[]
}

interface LocationRegionsProps {
  location: string
  regions: Region[]
}

export function LocationRegions({ location, regions }: LocationRegionsProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null)

  const toggleRegion = (regionName: string) => {
    if (expandedRegion === regionName) {
      setExpandedRegion(null)
    } else {
      setExpandedRegion(regionName)
    }
  }

  const filteredRegions = regions
    .map((region) => ({
      ...region,
      states: region.states.filter((state) => state.toLowerCase().includes(searchTerm.toLowerCase())),
    }))
    .filter((region) => region.states.length > 0)

  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Areas We Serve in {location}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            LeadsObtainer provides AI-powered growth solutions for businesses across all regions of {location}.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder={`Search for your area in ${location}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-6 bg-secondary/30"
            />
          </div>
        </div>

        <div className="space-y-8">
          {filteredRegions.map((region, index) => (
            <motion.div
              key={region.name}
              className="bg-secondary/30 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div
                className="p-6 flex justify-between items-center cursor-pointer"
                onClick={() => toggleRegion(region.name)}
              >
                <h3 className="text-xl font-semibold">{region.name}</h3>
                <Button variant="ghost" size="sm">
                  {expandedRegion === region.name ? "Hide" : "Show"} {region.states.length} Areas
                </Button>
              </div>

              {expandedRegion === region.name && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {region.states.map((state) => (
                      <div key={state} className="bg-secondary/50 rounded-lg p-3">
                        <p className="text-sm">{state}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {filteredRegions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No areas found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}
