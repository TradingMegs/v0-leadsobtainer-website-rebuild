"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface LocationIndustriesProps {
  location: string
  industries: string[]
}

export function LocationIndustries({ location, industries }: LocationIndustriesProps) {
  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Industries We Serve in {location}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered growth solutions are tailored to the unique needs of these industries across {location}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              className="bg-secondary/30 rounded-lg p-4 flex items-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/20 rounded-full p-1 mr-3">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <span className="font-medium">{industry}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Don't see your industry? <span className="text-primary font-medium">Contact us</span> for a customized
            solution.
          </p>
        </div>
      </div>
    </section>
  )
}
