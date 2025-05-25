"use client"

import { motion } from "framer-motion"
import { GlowBackground } from "@/components/ui/glow-background"
import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/ui/animated-text"
import { MapPin } from "lucide-react"

interface LocationHeroProps {
  location: string
  description: string
  keywords: string
}

export function LocationHero({ location, description, keywords }: LocationHeroProps) {
  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden">
      <GlowBackground color="primary" intensity="low">
        <div className="container mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <motion.div
              className="inline-flex items-center gap-2 bg-secondary/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm">Service Location</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <AnimatedText text={`LeadsObtainer in`} animationType="wave" className="block" />
              <AnimatedText text={location} animationType="gradient" className="block" />
            </h1>

            <motion.p
              className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 shadow-lg shadow-primary/20">
                  Get Your Free Growth Plan
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="border-primary/20 shadow-lg shadow-primary/5">
                  Schedule a Call
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </GlowBackground>

      {/* Hidden SEO keywords */}
      <div className="hidden">
        <p>{keywords}</p>
      </div>
    </section>
  )
}
