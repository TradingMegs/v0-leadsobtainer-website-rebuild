"use client"

import { Hero } from "@/components/home-ultra/hero"
import { ValueStack } from "@/components/home-ultra/value-stack"
import { Benefits } from "@/components/home-ultra/benefits"
import { UseCases } from "@/components/home-ultra/use-cases"
import { ProcessSteps } from "@/components/home-ultra/process-steps"
import { MultiStepForm } from "@/components/home-ultra/multi-step-form"
import { UrgencyTimer } from "@/components/home-ultra/urgency-timer"
import { SocialProof } from "@/components/home-ultra/social-proof"
import { ExitIntentOverlay } from "@/components/home-ultra/exit-intent-overlay"
import { ScrollDepthOverlay } from "@/components/home-ultra/scroll-depth-overlay"
import { VideoModal } from "@/components/home-ultra/video-modal"
import { UnifiedFooter } from "@/components/shared/unified-footer"
import { homeUltraContent } from "@/lib/home-ultra-content"
import { useEffect, useState } from "react"

export default function HomeUltraPage() {
  const [showExitIntent, setShowExitIntent] = useState(false)
  const [showScrollDepth, setShowScrollDepth] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)

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
    <div className="bg-black text-white">
      <Hero onWatchVideo={() => setShowVideoModal(true)} />
      <ValueStack />
      <Benefits />
      <SocialProof testimonials={homeUltraContent.testimonials} />
      <UseCases />
      <ProcessSteps />
      <section id="get-started" className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Lead Generation?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Book your free 30-minute growth strategy session with one of our lead generation specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-start">
            <UrgencyTimer countdown={homeUltraContent.urgency.countdown} spots={homeUltraContent.urgency.spots} />
            <MultiStepForm />
          </div>
        </div>
      </section>

      {/* Use the minimal variant of the unified footer */}
      <UnifiedFooter variant="minimal" />

      {/* Modals and Overlays */}
      {showExitIntent && <ExitIntentOverlay onClose={() => setShowExitIntent(false)} />}
      {showScrollDepth && <ScrollDepthOverlay onClose={() => setShowScrollDepth(false)} />}
      {showVideoModal && <VideoModal onClose={() => setShowVideoModal(false)} />}
    </div>
  )
}
