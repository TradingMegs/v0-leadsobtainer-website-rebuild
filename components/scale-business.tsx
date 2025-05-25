"use client"

import { motion } from "framer-motion"

export function ScaleBusiness() {
  const benefits = [
    "Get consistent growth without stress",
    "Increase your average customer value",
    "Get a proven business growth plan",
    "Leverage AI to automate your marketing",
  ]

  return (
    <section className="py-16 px-4 relative z-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your Business Without the Stress?</h2>
            <p className="text-gray-300 mb-8">
              Take the first step toward automated, predictable growth today. Our AI-powered system handles the complex
              work while you focus on what you do best—running your business.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className="flex items-start"
                >
                  <div className="mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-lime-500"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-black/40 backdrop-blur-sm border border-lime-500/20 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Get Your Free Growth Plan</h3>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Business Name"
                    className="w-full px-4 py-3 bg-black/60 border border-lime-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500/50"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-black/60 border border-lime-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500/50"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-black/60 border border-lime-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500/50"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full h-14 bg-lime-500 hover:bg-lime-400 text-black font-medium rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get My Free Growth Plan
                </motion.button>

                <p className="text-xs text-center text-gray-400 mt-2">
                  100% Free. No Credit Card Required.
                  <br />
                  Your data is secure and will never be shared.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
