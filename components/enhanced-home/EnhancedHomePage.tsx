"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { EnhancedHero } from "./EnhancedHero"
import { ProblemSolutionSection } from "./ProblemSolutionSection"
import { ResultsShowcase } from "./ResultsShowcase"
import { HowItWorksSection } from "./HowItWorksSection"
import { TestimonialCarousel } from "./TestimonialCarousel"
import { CompetitiveAdvantage } from "./CompetitiveAdvantage"
import { ROICalculator } from "./ROICalculator"
import { GuaranteeSection } from "./GuaranteeSection"
import { FinalCTA } from "./FinalCTA"
import { ExitIntentModal } from "./ExitIntentModal"
import { ScrollProgressBar } from "./ScrollProgressBar"
import { VideoModal } from "./VideoModal"
import { useExitIntent } from "@/hooks/use-exit-intent"
import { useScrollDepth } from "@/hooks/use-scroll-depth"

export default function EnhancedHomePage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const { showExitIntent, setShowExitIntent } = useExitIntent()
  const scrollDepth = useScrollDepth()

  return (
    <div className="relative">
      <ScrollProgressBar />

      <section className="mb-16">
        <EnhancedHero onPlayVideo={() => setVideoModalOpen(true)} />
      </section>

      <section className="py-16 bg-black/50">
        <ProblemSolutionSection />
      </section>

      <section className="py-16">
        <ResultsShowcase />
      </section>

      <section className="py-16 bg-black/50">
        <HowItWorksSection />
      </section>

      <section className="py-16">
        <TestimonialCarousel />
      </section>

      <section className="py-16 bg-black/50">
        <CompetitiveAdvantage />
      </section>

      <section className="py-16">
        <ROICalculator />
      </section>

      <section className="py-16 bg-black/50">
        <GuaranteeSection />
      </section>

      <section className="py-16">
        <FinalCTA />
      </section>

      <AnimatePresence>
        {showExitIntent && <ExitIntentModal onClose={() => setShowExitIntent(false)} />}
      </AnimatePresence>

      <AnimatePresence>{videoModalOpen && <VideoModal onClose={() => setVideoModalOpen(false)} />}</AnimatePresence>
    </div>
  )
}
