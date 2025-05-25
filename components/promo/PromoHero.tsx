"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface PromoHeroProps {
  headline: string
  subheadline: string
  primaryCta: {
    text: string
    href: string
    props?: Record<string, any>
  }
  visualSrc: string
  visualAlt: string
  dataTest?: string
}

export function PromoHero({ headline, subheadline, primaryCta, visualSrc, visualAlt, dataTest }: PromoHeroProps) {
  return (
    <section className="py-20 md:py-28 px-4 relative overflow-hidden" data-test={dataTest}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1
              className="text-4xl md:text-6xl font-bold mb-6 gradient-text leading-tight"
              data-variant="hero-headline"
            >
              {headline}
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8" data-variant="hero-subheadline">
              {subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href={primaryCta.href}
                className="inline-flex h-14 items-center justify-center rounded-full bg-primary hover:bg-primary/90 px-8 text-lg font-medium text-black transition-all hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-variant="hero-cta"
                {...primaryCta.props}
              >
                {primaryCta.text}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </motion.a>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-700 border-2 border-black flex items-center justify-center text-xs"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <span className="text-primary font-bold">500+</span> businesses joined this week
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10">
              <Image
                src={visualSrc || "/placeholder.svg"}
                alt={visualAlt}
                width={600}
                height={400}
                className="w-full h-auto"
                loading="lazy"
              />

              <div className="absolute top-4 right-4 bg-primary/90 text-black text-xs font-bold px-3 py-1 rounded-full">
                LIVE DEMO
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-black/80 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Average Response Time</div>
                  <div className="text-sm font-bold">Under 5 Minutes</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
