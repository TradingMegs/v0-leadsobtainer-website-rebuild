"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { X, Percent, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useExperiment } from "./experiment-provider"
import { promoContent } from "@/lib/promo-content"

type ScrollDepthOverlayProps = {
  onClose: () => void
}

export function ScrollDepthOverlay({ onClose }: ScrollDepthOverlayProps) {
  const { trackEvent, trackConversion } = useExperiment()
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    trackEvent("scroll_depth_shown")

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [onClose, trackEvent])

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (overlayRef.current && e.target === overlayRef.current) {
      onClose()
    }
  }

  const handleClaim = () => {
    trackEvent("scroll_depth_claimed")
    trackConversion("scroll_depth_conversion", 0.5)
    onClose()
  }

  const handleReject = () => {
    trackEvent("scroll_depth_rejected")
    onClose()
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleClickOutside}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        className="bg-background border border-gray-800 rounded-2xl p-6 max-w-md w-full relative"
      >
        <button className="absolute top-4 right-4 text-gray-400 hover:text-white" onClick={onClose} aria-label="Close">
          <X className="h-5 w-5" />
        </button>

        <div className="flex justify-center mb-6">
          <div className="bg-primary/20 p-3 rounded-full">
            <Percent className="h-6 w-6 text-primary" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-2">{promoContent.scrollDepth.headline}</h2>
        <p className="text-gray-400 text-center mb-6">{promoContent.scrollDepth.description}</p>

        <div className="space-y-4">
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-white py-6 h-auto rounded-2xl"
            onClick={handleClaim}
          >
            <span className="flex items-center">
              {promoContent.scrollDepth.cta} <ArrowRight className="ml-2 h-5 w-5" />
            </span>
          </Button>

          <Button variant="ghost" className="w-full text-gray-400 hover:text-gray-300" onClick={handleReject}>
            {promoContent.scrollDepth.secondaryCta}
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
