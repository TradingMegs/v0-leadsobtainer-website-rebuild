"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

interface SubLocationIndustriesProps {
  location: string
  industries: string[]
}

export function SubLocationIndustries({ location, industries }: SubLocationIndustriesProps) {
  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Industries We Serve in {location}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered growth solutions are tailored to the specific needs of these industries in {location}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              className="bg-secondary/30 rounded-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">{industry}</h3>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Don't see your industry? We work with businesses across all sectors in {location}.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Contact Us About Your Industry
          </Button>
        </div>
      </div>
    </section>
  )
}
