"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GlobeIcon } from "lucide-react"

export function LocationsCTA() {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="bg-secondary/30 rounded-lg p-8 md:p-12">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Don't See Your Location?</h2>
              <p className="text-muted-foreground mb-6">
                We're constantly expanding our service areas to help more local businesses grow. Even if your specific
                location isn't listed, we may still be able to help your business thrive. Contact us today to discuss
                your unique needs and discover how our AI-powered growth solutions can be tailored to your local market.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6">Contact Us</Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="border-primary/20">
                    Schedule a Call
                  </Button>
                </motion.div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="bg-primary/10 rounded-full w-48 h-48 flex items-center justify-center">
                <GlobeIcon className="h-24 w-24 text-primary/60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
