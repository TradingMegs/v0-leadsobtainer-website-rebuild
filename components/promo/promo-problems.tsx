"use client"

import { motion, useInView } from "framer-motion"
import { X } from "lucide-react"
import { useRef } from "react"

export function PromoProblems() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  }

  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black z-0"></div>

      <div className="container mx-auto max-w-5xl relative z-10" ref={ref}>
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <div className="bg-[#c1ff00] text-black text-xs font-bold px-4 py-1 rounded-full">PAIN POINTS</div>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-10">
            Are You Tired of:
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="bg-[#111] border border-[#333] rounded-lg p-6 mb-16 shadow-[0_0_15px_rgba(193,255,0,0.1)]"
          >
            <div className="space-y-8">
              <motion.div
                className="flex items-start gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex-shrink-0 mt-1 bg-red-500/20 rounded-full p-1 group-hover:bg-red-500/30 transition-colors">
                  <X className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-[#c1ff00] transition-colors">
                    Wasting $$$$ Monthly on Ads That Don't Convert?
                  </h3>
                  <p className="text-gray-400">
                    You're spending money on ads without a proper system for turning clicks into customers. Our clients
                    see 3x better ROI.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex-shrink-0 mt-1 bg-red-500/20 rounded-full p-1 group-hover:bg-red-500/30 transition-colors">
                  <X className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-[#c1ff00] transition-colors">
                    Missing Out on High-Paying Clients Because Your Website Sucks?
                  </h3>
                  <p className="text-gray-400">
                    92% of prospects evaluate your website before making your business a real revenue source.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex-shrink-0 mt-1 bg-red-500/20 rounded-full p-1 group-hover:bg-red-500/30 transition-colors">
                  <X className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 group-hover:text-[#c1ff00] transition-colors">
                    Falling Back While Competitors Dominate Your Market?
                  </h3>
                  <p className="text-gray-400">
                    The top business leaders are focused on automating every step. Don't get left behind.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <div className="bg-[#c1ff00] text-black text-xs font-bold px-4 py-1 rounded-full">LIMITED TIME OFFER</div>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-4">
            🚨 LAST CHANCE – Join the 90-Day Profit Revolution!
          </motion.h2>

          <motion.p variants={itemVariants} className="text-center text-gray-400 mb-12">
            After empowering over 10,000 local businesses, we've perfected a system that delivers results fast.
          </motion.p>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              className="bg-[#111] border border-[#333] rounded-lg p-6 hover:border-[#c1ff00]/50 transition-colors duration-300 hover:shadow-[0_0_15px_rgba(193,255,0,0.15)]"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[#c1ff00]/20 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#c1ff00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-lg text-center mb-2">Get a Customized "Money-Machine"</h3>
              <p className="text-gray-400 text-center">
                We'll build you a complete lead generation and conversion client capture specifically for your business.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#111] border border-[#333] rounded-lg p-6 hover:border-[#c1ff00]/50 transition-colors duration-300 hover:shadow-[0_0_15px_rgba(193,255,0,0.15)]"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[#c1ff00]/20 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#c1ff00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-lg text-center mb-2">Unlock 24/7 AI Assistant to Handle Daily Tasks</h3>
              <p className="text-gray-400 text-center">
                Our AI technology works around the clock to qualify leads, answer questions, and book appointments.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#111] border border-[#333] rounded-lg p-6 hover:border-[#c1ff00]/50 transition-colors duration-300 hover:shadow-[0_0_15px_rgba(193,255,0,0.15)]"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[#c1ff00]/20 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#c1ff00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-lg text-center mb-2">Proven Framework Used By 10,000+ Businesses</h3>
              <p className="text-gray-400 text-center">
                Follow the exact same blueprint that's generated millions in revenue for businesses just like yours.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
