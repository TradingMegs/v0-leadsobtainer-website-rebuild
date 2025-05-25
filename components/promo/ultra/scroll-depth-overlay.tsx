"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { X, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useExperiment } from "../high-conversion/experiment-provider"
import { promoUltraContent } from "@/lib/promo-ultra-content"

type UltraScrollDepthOverlayProps = {
  onClose: () => void
}

export function UltraScrollDepthOverlay({ onClose }: UltraScrollDepthOverlayProps) {
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
    trackEvent("scroll_depth_claim")
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
          <div className="bg-blue-500/20 p-3 rounded-full">
            <Sparkles className="h-6 w-6 text-blue-400" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-2">{promoUltraContent.scrollDepth.headline}</h2>
        <p className="text-gray-400 text-center mb-6">{promoUltraContent.scrollDepth.description}</p>

        <div className="space-y-4">
          <Button
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-6 h-auto rounded-2xl"
            onClick={handleClaim}
          >
            <span className="flex items-center">
              {promoUltraContent.scrollDepth.cta} <ArrowRight className="ml-2 h-5 w-5" />
            </span>
          </Button>

          <Button variant="ghost" className="w-full text-gray-400 hover:text-gray-300" onClick={handleReject}>
            {promoUltraContent.scrollDepth.secondaryCta}
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
