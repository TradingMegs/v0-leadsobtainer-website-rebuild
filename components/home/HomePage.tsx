"use client"

import { useEffect, useState } from "react"
import { Hero } from "@/components/hero"
import { Challenges } from "@/components/challenges"
import { GrowthSystem } from "@/components/growth-system"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ProcessSteps } from "@/components/process-steps"
import { Testimonials } from "@/components/testimonials"
import { ScaleBusiness } from "@/components/scale-business"
import { PremiumSolutions } from "@/components/premium-solutions"
import { Footer } from "@/components/footer"
import { ExitIntentOverlay } from "@/components/home/exit-intent-overlay"
import { ScrollDepthOverlay } from "@/components/home/scroll-depth-overlay"
import { VideoModal } from "@/components/home/video-modal"
import { useExitIntent } from "@/hooks/use-exit-intent"
import { useScrollDepth } from "@/hooks/use-scroll-depth"
import { content } from "@/lib/home-content"

export default function HomePage() {
  const [showExitIntent, setShowExitIntent] = useState(false)
  const [showScrollDepth, setShowScrollDepth] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)

  // Initialize exit intent detection
  useExitIntent({
    onExit: () => {
      if (hasInteracted && !showExitIntent && !showScrollDepth) {
        setShowExitIntent(true)

        // Track exit intent overlay view
        if (typeof window !== "undefined") {
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({
            event: "exit_intent_overlay_view",
          })
        }
      }
    },
    sensitivity: 20,
  })

  // Initialize scroll depth detection
  useScrollDepth({
    onReachDepth: (depth) => {
      if (depth >= 50 && hasInteracted && !showExitIntent && !showScrollDepth) {
        setShowScrollDepth(true)

        // Track scroll depth overlay view
        if (typeof window !== "undefined") {
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({
            event: "scroll_depth_overlay_view",
            scroll_depth: depth,
          })
        }
      }
    },
    throttleMs: 100,
  })

  // Set interaction flag after user has been on page for 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasInteracted(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  // Track page view
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: "page_view",
        page_title: "Homepage",
        page_path: window.location.pathname,
      })
    }
  }, [])

  const handlePlayVideo = () => {
    setShowVideoModal(true)

    // Track video play
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: "video_play",
        video_title: "LeadsObtainer Explainer",
      })
    }
  }

  return (
    <main className="flex min-h-screen flex-col bg-black text-white relative overflow-hidden">
      <Hero onPlayVideo={handlePlayVideo} />
      <Challenges />
      <GrowthSystem />
      <WhyChooseUs />
      <ProcessSteps />
      <Testimonials />
      <ScaleBusiness />
      <PremiumSolutions />
      <Footer />

      {showExitIntent && <ExitIntentOverlay onClose={() => setShowExitIntent(false)} offer={content.exitIntent} />}
      {showScrollDepth && <ScrollDepthOverlay onClose={() => setShowScrollDepth(false)} offer={content.scrollDepth} />}
      {showVideoModal && <VideoModal videoUrl={content.hero.videoUrl} onClose={() => setShowVideoModal(false)} />}
    </main>
  )
}
