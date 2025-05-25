"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getCtaUrl, getCtaText } from "@/lib/content-helpers"

interface SubLocationCTAProps {
  location: string
  headline?: string
  description?: string
  pageContent?: string
}

export function SubLocationCta({ location, headline, description, pageContent = "" }: SubLocationCTAProps) {
  // Get the appropriate CTA URL and text based on page content
  const primaryCtaUrl = getCtaUrl(pageContent, location)
  const primaryCtaText = getCtaText(pageContent)

  // For the secondary CTA, use the opposite of the primary
  const hasBookingKeyword = pageContent.toLowerCase().includes("book")
  const secondaryCtaUrl = hasBookingKeyword ? `/get-started?location=${encodeURIComponent(location)}` : "/booking"
  const secondaryCtaText = hasBookingKeyword ? "Get Started Now" : "Book a Free Strategy Call"

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          className="bg-secondary/30 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {headline || `Ready to Grow Your ${location} Business?`}
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {description ||
              `Schedule a free strategy session to discover how our AI-powered marketing solutions can help you attract more customers and increase revenue in ${location}.`}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href={primaryCtaUrl}>{primaryCtaText}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={secondaryCtaUrl}>{secondaryCtaText}</Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            No contracts. No risk. Just results for your {location} business.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
