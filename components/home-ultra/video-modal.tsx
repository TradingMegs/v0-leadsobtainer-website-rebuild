"use client"

import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { createPortal } from "react-dom"

interface VideoModalProps {
  videoUrl: string
  onClose: () => void
}

export function VideoModal({ videoUrl, onClose }: VideoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  // Close when clicking outside the modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && event.target instanceof Node && !modalRef.current.contains(event.target)) {
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

  // Track video modal view
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: "video_modal_view",
        video_url: videoUrl,
      })
    }
  }, [videoUrl])

  // Create portal for the modal
  if (typeof document === "undefined") return null

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        data-test="video-modal"
      >
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-gray-900 border border-lime-400/30 rounded-2xl max-w-4xl w-full p-4 relative"
        >
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-gray-400 hover:text-white transition-colors z-10"
            aria-label="Close video"
            data-test="close-video-button"
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

          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              src={videoUrl}
              title="LeadsObtainer Explainer Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              data-test="video-iframe"
            ></iframe>
          </div>

          <div className="mt-4 flex justify-center">
            <a
              href="#get-started"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dataLayer = window.dataLayer || []
                  window.dataLayer.push({
                    event: "video_modal_cta_click",
                  })
                }
                onClose()
              }}
              className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-lime-500 to-green-600 px-8 text-lg font-medium text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-lime-500/25 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2"
              data-variant="video-modal-cta"
              data-test="video-modal-cta"
            >
              Get Started Free
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  )
}
