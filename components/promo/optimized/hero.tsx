"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlowBackground } from "@/components/ui/glow-background"
import { useABTest } from "./ab-test-provider"

export function Hero() {
  const { headlineVariant, ctaTextVariant, heroImageVariant, trackConversion } = useABTest()

  const headlines = {
    A: "4X Your Business In 90 Days – Or We Pay You $1,000 CASH",
    B: "Double Your Leads In 30 Days – Guaranteed Or We Pay You $1,000",
  }

  const ctaTexts = {
    A: "Book Your Free Strategy Session",
    B: "Claim Your Free Growth Blueprint",
  }

  const heroImages = {
    A: "/placeholder.svg?height=600&width=800",
    B: "/placeholder.svg?height=600&width=800",
  }

  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      <GlowBackground color="accent" intensity="high" position="center" className="absolute inset-0" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text leading-tight"
                data-test="hero-headline"
              >
                {headlines[headlineVariant]}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Our AI-powered lead generation system turns strangers into paying clients on autopilot, guaranteed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 h-auto relative overflow-hidden group rounded-2xl w-full sm:w-auto"
                data-test="hero-cta"
                onClick={() => trackConversion("hero-cta")}
              >
                <span className="relative z-10 flex items-center">
                  {ctaTexts[ctaTextVariant]}{" "}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="bg-background/20 hover:bg-background/30 backdrop-blur-sm text-white border-white/20 text-lg px-8 py-6 h-auto rounded-2xl w-full sm:w-auto"
                data-test="hero-secondary-cta"
                onClick={() => trackConversion("hero-secondary-cta")}
              >
                Watch Free Training
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 hidden md:block"
          >
            <img
              src={heroImages[heroImageVariant] || "/placeholder.svg"}
              alt="AI-powered lead generation system"
              className="w-full h-auto rounded-2xl shadow-2xl"
              data-test="hero-image"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-secondary/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto mt-12"
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
