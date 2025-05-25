"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function FloatingCTA() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <a
        href="#get-started"
        className="flex items-center justify-center px-6 py-3 rounded-full bg-lime-500 text-black font-medium hover:bg-lime-400 transition-all shadow-lg shadow-lime-500/20"
        data-umami-event="floating-cta"
      >
        Get Your Free Growth Plan
        <ArrowRight className="ml-2 h-5 w-5" />
      </a>
    </motion.div>
  )
}
