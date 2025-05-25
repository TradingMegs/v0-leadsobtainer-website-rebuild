"use client"

import { motion } from "framer-motion"
import { useExperiment } from "../high-conversion/experiment-provider"

export function UltraMinimalFooter() {
  const { trackEvent } = useExperiment()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="py-8 px-4 bg-black border-t border-gray-800"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} LeadsObtainer. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="/terms"
              className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
              onClick={() => trackEvent("footer_terms_click")}
            >
              Terms of Service
            </a>
            <a
              href="/privacy"
              className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
              onClick={() => trackEvent("footer_privacy_click")}
            >
              Privacy Policy
            </a>
            <a
              href="/contact"
              className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
              onClick={() => trackEvent("footer_contact_click")}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
