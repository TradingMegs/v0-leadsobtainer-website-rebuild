"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PromoHero } from "@/components/promo/promo-hero"
import { PromoProblems } from "@/components/promo/promo-problems"
import { PromoFeatures } from "@/components/promo/promo-features"
import { PromoValue } from "@/components/promo/promo-value"
import { PromoTestimonials } from "@/components/promo/promo-testimonials"
import { PromoGuarantee } from "@/components/promo/promo-guarantee"
import { PromoSystem } from "@/components/promo/promo-system"
import { PromoCTA } from "@/components/promo/promo-cta"
import { BackgroundBeams } from "@/components/ui/background-beams"

export default function PromoPageClient() {
  return (
    <main className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden">
      <Navbar />
      <div className="relative z-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <PromoHero />
          <PromoProblems />
          <PromoFeatures />
          <PromoValue />
          <PromoTestimonials />
          <PromoGuarantee />
          <PromoSystem />
          <PromoCTA />
        </motion.div>
      </div>
      <BackgroundBeams className="opacity-20" />
      <Footer />
    </main>
  )
}
