"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare } from "lucide-react"
import { AIChatDialog } from "./AIChatDialog"

export function AIChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-lime-500 text-black shadow-lg hover:bg-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open AI Chat"
      >
        <MessageSquare className="h-6 w-6" />
      </motion.button>

      <AnimatePresence>{isOpen && <AIChatDialog onClose={() => setIsOpen(false)} />}</AnimatePresence>
    </>
  )
}
