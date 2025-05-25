"use client"

import { motion } from "framer-motion"

export function PremiumSolutions() {
  return (
    <section className="py-16 px-4 relative z-10 bg-gradient-to-b from-black to-lime-950/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with Our Premium Solutions?
          </h2>
          <p className="text-gray-300">
            Schedule your free strategy call today to discover how our AI-powered growth system can help you triple your
            revenue in the next 90 days.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <motion.a
            href="#get-started"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex h-14 items-center justify-center rounded-full bg-lime-500 hover:bg-lime-400 px-8 text-lg font-medium text-black transition-all hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Strategy Call
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
              className="ml-2"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </motion.a>

          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex h-14 items-center justify-center rounded-full bg-transparent border border-lime-500 hover:bg-lime-500/10 px-8 text-lg font-medium text-white transition-all hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Our Team
          </motion.a>
        </div>
      </div>
    </section>
  )
}
