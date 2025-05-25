"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Clock, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlowBackground } from "@/components/ui/glow-background"
import { useExperiment } from "../high-conversion/experiment-provider"
import { promoUltraContent } from "@/lib/promo-ultra-content"
import { cn } from "@/lib/utils"
import { AnimatedBackground } from "@/components/ui/animated-background"

export function UltraHero() {
  const { variants, trackEvent, trackConversion } = useExperiment()
  const containerRef = useRef<HTMLDivElement>(null)

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Headline variants for A/B testing
  const headlines = {
    A: promoUltraContent.hero.headline,
    B: "Automate Your Entire Business in Just 30 Minutes",
  }

  // CTA text variants for A/B testing
  const ctaTexts = {
    A: promoUltraContent.hero.primaryCta,
    B: "Get Started Now",
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-16 md:py-24 px-4 flex items-center overflow-hidden"
      data-section="hero"
      data-variant={`headline-${variants.headline}-cta-${variants.ctaText}-image-${variants.heroImage}`}
    >
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <GlowBackground color="#c1ff00" intensity="high" position="center" className="absolute inset-0" />
        <motion.div style={{ opacity, y }} className="absolute inset-0">
          <AnimatedBackground color="#c1ff00" className="opacity-20" />
        </motion.div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            {/* Dream outcome badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center bg-[#c1ff00]/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <Clock className="h-4 w-4 mr-2 text-[#c1ff00]" />
              <span className="text-sm font-medium">
                Up and running <span className="font-bold text-[#c1ff00]">{promoUltraContent.hero.timeToResult}</span>
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text leading-tight"
              data-test="hero-headline"
            >
              {headlines[variants.headline]}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              {promoUltraContent.hero.subheadline}
            </motion.p>

            {/* Effort vs. Reward meter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-[#c1ff00]/10 backdrop-blur-sm rounded-2xl p-4 mb-8 max-w-md mx-auto md:mx-0"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-red-500/20 p-1.5 rounded-full mr-2">
                    <Zap className="h-3 w-3 text-red-500" />
                  </div>
                  <span className="text-sm font-medium">Your Effort</span>
                </div>
                <span className="text-sm font-bold">Minimal</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full mb-3">
                <div
                  className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full"
                  style={{ width: "10%" }}
                ></div>
              </div>

              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-green-500/20 p-1.5 rounded-full mr-2">
                    <Zap className="h-3 w-3 text-green-500" />
                  </div>
                  <span className="text-sm font-medium">Your Results</span>
                </div>
                <span className="text-sm font-bold">Exceptional</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full">
                <div
                  className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            >
              <Button
                size="lg"
                className={cn(
                  "bg-[#c1ff00] hover:bg-[#d4ff4d] text-black text-lg px-8 py-6 h-auto relative overflow-hidden group rounded-2xl w-full sm:w-auto",
                  "transition-all duration-300 hover:shadow-[0_0_20px_rgba(193,255,0,0.5)]",
                )}
                data-test="hero-cta"
                onClick={() => {
                  trackEvent("hero_cta_click")
                  trackConversion("hero-cta")
                }}
              >
                <span className="relative z-10 flex items-center">
                  {ctaTexts[variants.ctaText]}{" "}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#c1ff00] to-[#d4ff4d] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="bg-background/20 hover:bg-background/30 backdrop-blur-sm text-white border-white/20 text-lg px-8 py-6 h-auto rounded-2xl w-full sm:w-auto"
                data-test="hero-secondary-cta"
                onClick={() => {
                  trackEvent("hero_secondary_cta_click")
                  trackConversion("hero-secondary-cta", 0.5)
                }}
              >
                {promoUltraContent.hero.secondaryCta}
              </Button>
            </motion.div>
          </div>

          {/* Hero image/animation - only on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex-1 hidden md:block"
          >
            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="AI-powered business automation system"
                className="w-full h-auto rounded-2xl shadow-2xl"
                data-test="hero-image"
                data-variant={variants.heroImage}
              />

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-black/80 backdrop-blur-sm border border-[#c1ff00]/30 rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center">
                  <div className="bg-[#c1ff00]/20 p-2 rounded-full mr-3">
                    <Zap className="h-5 w-5 text-[#c1ff00]" />
                  </div>
                  <div>
                    <p className="font-bold">30-Min Setup</p>
                    <p className="text-sm text-gray-400">Quick Implementation</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -top-6 -right-6 bg-black/80 backdrop-blur-sm border border-[#c1ff00]/30 rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center">
                  <div className="bg-[#c1ff00]/20 p-2 rounded-full mr-3">
                    <Clock className="h-5 w-5 text-[#c1ff00]" />
                  </div>
                  <div>
                    <p className="font-bold">24/7 Automation</p>
                    <p className="text-sm text-gray-400">Works While You Sleep</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-[#c1ff00]/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-3xl mx-auto mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start">
              <div className="bg-[#c1ff00]/20 p-2 rounded-full mr-3 mt-0.5">
                <Zap className="h-4 w-4 text-[#c1ff00]" />
              </div>
              <p className="text-sm">No technical skills required - setup in 30 minutes</p>
            </div>
            <div className="flex items-start">
              <div className="bg-[#c1ff00]/20 p-2 rounded-full mr-3 mt-0.5">
                <Zap className="h-4 w-4 text-[#c1ff00]" />
              </div>
              <p className="text-sm">Works for any business in any industry</p>
            </div>
            <div className="flex items-start">
              <div className="bg-[#c1ff00]/20 p-2 rounded-full mr-3 mt-0.5">
                <Zap className="h-4 w-4 text-[#c1ff00]" />
              </div>
              <p className="text-sm">30-day money-back guarantee - zero risk</p>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex justify-center mt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          >
            <ArrowRight className="h-8 w-8 text-[#c1ff00] transform rotate-90" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
