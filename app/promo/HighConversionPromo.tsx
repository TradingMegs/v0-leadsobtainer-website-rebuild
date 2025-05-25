"use client"

import { useEffect, useState } from "react"
import { ExperimentProvider } from "@/components/promo/high-conversion/experiment-provider"
import { Hero } from "@/components/promo/high-conversion/hero"
import { ValueStack } from "@/components/promo/high-conversion/value-stack"
import { InteractiveBenefits } from "@/components/promo/high-conversion/interactive-benefits"
import { UrgencyTimer } from "@/components/promo/high-conversion/urgency-timer"
import { MultiStepForm } from "@/components/promo/high-conversion/multi-step-form"
import { ExitIntentOverlay } from "@/components/promo/high-conversion/exit-intent-overlay"
import { ScrollDepthOverlay } from "@/components/promo/high-conversion/scroll-depth-overlay"
import { SocialProof } from "@/components/promo/high-conversion/social-proof"
import { UnifiedFooter } from "@/components/shared/unified-footer"

export default function HighConversionPromo() {
  const [showExitIntent, setShowExitIntent] = useState(false)
  const [showScrollDepth, setShowScrollDepth] = useState(false)

  // Handle exit intent
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !showExitIntent && !localStorage.getItem("exitIntentShown")) {
        setShowExitIntent(true)
        localStorage.setItem("exitIntentShown", "true")
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [showExitIntent])

  // Handle scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight
      const scrollTop = document.documentElement.scrollTop
      const clientHeight = document.documentElement.clientHeight
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100

      if (scrollPercentage > 70 && !showScrollDepth && !localStorage.getItem("scrollDepthShown")) {
        setShowScrollDepth(true)
        localStorage.setItem("scrollDepthShown", "true")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [showScrollDepth])

  return (
    <ExperimentProvider>
      <div className="bg-black text-white">
        <Hero />
        <ValueStack />
        <InteractiveBenefits />
        <SocialProof />
        <section id="get-started" className="py-16 px-4 relative z-10">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Lead Generation?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Book your free 30-minute growth strategy session with one of our lead generation specialists.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-start">
              <UrgencyTimer />
              <MultiStepForm />
            </div>
          </div>
        </section>

        {/* Use the minimal variant of the unified footer */}
        <UnifiedFooter variant="minimal" bgColor="bg-black" textColor="text-white" accentColor="text-[#c1ff00]" />

        {/* Modals and Overlays */}
        {showExitIntent && <ExitIntentOverlay onClose={() => setShowExitIntent(false)} />}
        {showScrollDepth && <ScrollDepthOverlay onClose={() => setShowScrollDepth(false)} />}
      </div>
    </ExperimentProvider>
  )
}
