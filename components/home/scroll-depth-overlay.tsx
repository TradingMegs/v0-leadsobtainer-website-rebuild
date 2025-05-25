"use client"

import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { createPortal } from "react-dom"

interface ScrollDepthOverlayProps {
  onClose: () => void
  offer: {
    headline: string
    description: string
    bonus: string
    bonusValue: string
    cta: string
  }
}

export function ScrollDepthOverlay({ onClose, offer }: ScrollDepthOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null)

  // Close when clicking outside the modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (overlayRef.current && event.target instanceof Node && !overlayRef.current.contains(event.target)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose])

  // Close on escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscKey)

    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [onClose])

  // Create portal for the overlay
  if (typeof document === "undefined") return null

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        data-test="scroll-depth-overlay"
      >
        <motion.div
          ref={overlayRef}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-gray-900 border border-lime-400/30 rounded-2xl max-w-xl w-full p-6 md:p-8 relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            aria-label="Close"
            data-test="scroll-depth-close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>

          <div className="text-center mb-6">
            <div className="w-16 h-16 rounded-full bg-lime-400/20 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-lime-400"
              >
                <path d="M12 8v4l3 3"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2" data-variant="scroll-depth-headline">
              {offer.headline}
            </h3>
            <p className="text-gray-300">{offer.description}</p>
          </div>

          <div className="bg-lime-400/10 border border-lime-400/30 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-lime-400/20 p-2 text-lime-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">{offer.bonus}</h4>
                <p className="text-gray-300 text-sm mb-2">
                  Limited time offer for readers who are serious about growth
                </p>
                <p className="text-lime-400 font-bold">Value: {offer.bonusValue}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="#get-started"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dataLayer = window.dataLayer || []
                  window.dataLayer.push({
                    event: "scroll_depth_cta_click",
                    cta_text: offer.cta,
                  })
                }
                onClose()
              }}
              className="w-full py-3 rounded-lg font-medium bg-gradient-to-r from-lime-500 to-green-600 text-black hover:shadow-lg hover:shadow-lime-500/25 transition-all text-center"
              data-variant="scroll-depth-cta"
              data-test="scroll-depth-cta"
            >
              {offer.cta}
            </a>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors text-sm"
              data-test="scroll-depth-decline"
            >
              I'll continue reading first
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  )
}
