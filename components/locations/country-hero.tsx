"use client"

import { motion } from "framer-motion"
import { GlowBackground } from "@/components/ui/glow-background"
import { MapPin } from "lucide-react"
import { AnimatedText } from "@/components/ui/animated-text"

interface CountryHeroProps {
  country: string
  description: string
}

export function CountryHero({ country, description }: CountryHeroProps) {
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
              <AnimatedText text={country} animationType="gradient" className="block" />
            </h1>

            <motion.p
              className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {description}
            </motion.p>
          </motion.div>
        </div>
      </GlowBackground>
    </section>
  )
}
