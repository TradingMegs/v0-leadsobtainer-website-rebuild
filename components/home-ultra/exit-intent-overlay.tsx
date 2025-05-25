"use client"

import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { createPortal } from "react-dom"

interface ExitIntentOverlayProps {
  onClose: () => void
  offer: {
    headline: string
    description: string
    bonus: string
    bonusValue: string
    cta: string
  }
}

export function ExitIntentOverlay({ onClose, offer }: ExitIntentOverlayProps) {
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
        data-test="exit-intent-overlay"
      >
        <motion.div
          ref={overlayRef}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-gray-900 border border-lime-400/30 rounded-2xl max-w-xl w-full p-6 md:p-8 relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            aria-label="Close"
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
            <h3 className="text-2xl font-bold text-white mb-2" data-variant="exit-intent-headline">
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
                  <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
                  <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
                  <path d="M18 12a2 2 0 0 0 0 4h2v-4Z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">{offer.bonus}</h4>
                <p className="text-gray-300 text-sm mb-2">Get this exclusive bonus when you sign up today!</p>
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
                    event: "exit_intent_cta_click",
                    cta_text: offer.cta,
                  })
                }
                onClose()
              }}
              className="w-full py-3 rounded-lg font-medium bg-gradient-to-r from-lime-500 to-green-600 text-black hover:shadow-lg hover:shadow-lime-500/25 transition-all text-center"
              data-variant="exit-intent-cta"
              data-test="exit-intent-cta"
            >
              {offer.cta}
            </a>

            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dataLayer = window.dataLayer || []
                  window.dataLayer.push({
                    event: "exit_intent_dismiss",
                  })
                }
                onClose()
              }}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              No thanks, I'll pass on this offer
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  )
}
