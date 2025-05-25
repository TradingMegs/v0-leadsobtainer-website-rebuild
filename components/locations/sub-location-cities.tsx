"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface SubLocationCitiesProps {
  location: string
  cities: string[]
}

export function SubLocationCities({ location, cities }: SubLocationCitiesProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCities = cities.filter((city) => city.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Areas We Serve in {location}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            LeadsObtainer provides AI-powered growth solutions for businesses across all cities and towns in {location}.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder={`Search for your city in ${location}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-6 bg-secondary/30"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredCities.map((city, index) => (
            <motion.div
              key={city}
              className="bg-secondary/30 rounded-lg p-4 text-center hover:bg-secondary/50 transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              viewport={{ once: true }}
            >
              <p className="font-medium">{city}</p>
            </motion.div>
          ))}
        </div>

        {filteredCities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No cities found matching your search.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Don't see your city? We serve all areas in {location}.{" "}
            <span className="text-primary font-medium">Contact us</span> for more information.
          </p>
        </div>
      </div>
    </section>
  )
}
