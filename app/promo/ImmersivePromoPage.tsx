"use client"

import { useState, useEffect } from "react"
import { Hero } from "@/components/promo/immersive/hero"
import { InteractiveBenefits } from "@/components/promo/immersive/interactive-benefits"
import { DynamicSocialProof } from "@/components/promo/immersive/dynamic-social-proof"
import { MultiStepForm } from "@/components/promo/immersive/multi-step-form"
import { UrgencySection } from "@/components/promo/immersive/urgency-section"
import { OfferDetails } from "@/components/promo/immersive/offer-details"
import { MinimalFooter } from "@/components/promo/immersive/minimal-footer"
import { ExitIntentOverlay } from "@/components/promo/immersive/exit-intent-overlay"
import { ScrollDepthOverlay } from "@/components/promo/immersive/scroll-depth-overlay"
import { ExperimentProvider } from "@/components/promo/immersive/experiment-provider"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { useExitIntent } from "@/hooks/use-exit-intent"
import { useScrollDepth } from "@/hooks/use-scroll-depth"
import { AnimatedBackground } from "@/components/ui/animated-background"

export default function ImmersivePromoPage() {
  const [mounted, setMounted] = useState(false)

  // Hydration fix
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="relative w-full h-full min-h-screen">
          <AnimatedBackground color="#c1ff00" className="opacity-20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <ExperimentProvider>
      <PromoPageContent />
    </ExperimentProvider>
  )
}

function PromoPageContent() {
  const { showExitIntent, setShowExitIntent } = useExitIntent()
  const { showScrollDepth, setShowScrollDepth } = useScrollDepth(0.5) // 50% scroll depth

  return (
    <main className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden">
      <div className="relative z-10">
        <Hero />
        <InteractiveBenefits />
        <DynamicSocialProof />
        <UrgencySection />
        <OfferDetails />
        <MultiStepForm />
      </div>
      <BackgroundBeams className="opacity-20" />
      <MinimalFooter />

      {showExitIntent && <ExitIntentOverlay onClose={() => setShowExitIntent(false)} />}

      {showScrollDepth && <ScrollDepthOverlay onClose={() => setShowScrollDepth(false)} />}
    </main>
  )
}
