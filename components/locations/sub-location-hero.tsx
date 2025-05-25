"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlowBackground } from "@/components/ui/glow-background"

interface SubLocationHeroProps {
  location: string
  parentLocation: string
  description: string
  keywords: string
}

export function SubLocationHero({ location, parentLocation, description, keywords }: SubLocationHeroProps) {
  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden">
      <GlowBackground className="opacity-40" />

      <div className="container mx-auto relative z-10">
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <Link href="/locations" className="hover:text-primary transition-colors">
            Locations
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <Link
            href={`/locations/${parentLocation.toLowerCase().replace(/\s+/g, "-")}`}
            className="hover:text-primary transition-colors"
          >
            {parentLocation}
          </Link>
          <ChevronRight className="h-4 w-4 mx-1" />
          <span className="text-primary">{location}</span>
        </div>

        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            AI-Powered Growth Solutions for <span className="gradient-text">{location}</span> Businesses
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Book a Free Strategy Call
            </Button>
          </motion.div>

          <motion.p
            className="text-xs text-muted-foreground mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {keywords}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
