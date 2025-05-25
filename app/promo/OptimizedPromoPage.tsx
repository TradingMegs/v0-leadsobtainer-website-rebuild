"use client"

import { useState, useEffect } from "react"
import { Hero } from "@/components/promo/optimized/hero"
import { Benefits } from "@/components/promo/optimized/benefits"
import { SocialProof } from "@/components/promo/optimized/social-proof"
import { CTASection } from "@/components/promo/optimized/cta-section"
import { MinimalFooter } from "@/components/promo/optimized/minimal-footer"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { ABTestProvider } from "@/components/promo/optimized/ab-test-provider"

export default function OptimizedPromoPage() {
  const [mounted, setMounted] = useState(false)

  // Hydration fix
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ABTestProvider>
      <main className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden">
        <div className="relative z-10">
          <Hero />
          <Benefits />
          <SocialProof />
          <CTASection />
        </div>
        <BackgroundBeams className="opacity-20" />
        <MinimalFooter />
      </main>
    </ABTestProvider>
  )
}
