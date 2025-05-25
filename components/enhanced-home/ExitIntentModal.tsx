"use client"

import { motion } from "framer-motion"
import { X, ArrowRight } from "lucide-react"
import { useState } from "react"

interface ExitIntentModalProps {
  onClose: () => void
}

export function ExitIntentModal({ onClose }: ExitIntentModalProps) {
  const [email, setEmail] = useState("")

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="relative w-full max-w-md rounded-xl bg-black/90 border border-lime-500/20 p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="mb-6 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-lime-500/10 text-lime-500 border border-lime-500/20 mb-4">
            <span className="text-sm font-medium">Limited Time Offer</span>
          </div>
          <h3 className="mb-2 text-2xl font-bold text-white">Don't Miss Your Growth Opportunity</h3>
          <div className="mb-4 h-1 w-16 bg-lime-500 mx-auto"></div>
          <p className="text-gray-300">
            Get our exclusive guide on "7 AI Strategies to Double Your Leads in 30 Days" for FREE.
          </p>
        </div>

        <div className="bg-lime-500/5 border border-lime-500/10 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-400">FREE BONUS</div>
              <div className="text-white font-medium">AI Lead Generation Blueprint</div>
            </div>
            <div className="text-lime-500 font-bold">$997 Value</div>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full rounded-lg border border-lime-500/20 bg-black/60 px-4 py-3 text-white placeholder:text-gray-500 focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500/30"
              required
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-lg bg-lime-500 py-3 font-medium text-black transition-all hover:bg-lime-400 flex items-center justify-center"
          >
            Get Free Blueprint
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.button>
          <p className="text-center text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
        </form>
      </motion.div>
    </motion.div>
  )
}
