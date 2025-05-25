"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { GlowBackground } from "@/components/ui/glow-background"

export function PromoHero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="py-20 md:py-32 px-4 relative overflow-hidden">
      <GlowBackground color="accent" intensity="high" position="center" className="absolute inset-0" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text leading-tight">
              4X Your Business In 90 Days – Or We Pay You $1,000 CASH
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our AI-powered lead generation system turns strangers into paying clients on autopilot, guaranteed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <Link href="/booking">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 h-auto relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    Book Your Free Strategy Session{" "}
                    <ArrowRight
                      className={`ml-2 h-5 w-5 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
                    />
                  </span>
                </Button>
              </motion.div>
            </Link>
            <Link href="/webinar">
              <Button
                variant="outline"
                size="lg"
                className="bg-background/20 hover:bg-background/30 backdrop-blur-sm text-white border-white/20 text-lg px-8 py-6 h-auto"
              >
                Watch Free Training
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-secondary/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
              <p className="text-sm">No technical skills required - we handle everything</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
              <p className="text-sm">Works for any local business in any industry</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
              <p className="text-sm">Risk-free guarantee - results or you don't pay</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
