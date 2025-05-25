"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock, CheckCircle } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden" id="get-started">
      <div className="absolute inset-0 bg-gradient-to-b from-lime-500/5 to-lime-500/20 z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-lime-500/10 text-lime-500 border border-lime-500/20 mb-4">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">Limited Time Offer</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-600">
                Triple Your Revenue
              </span>{" "}
              in the Next 90 Days?
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              Take the first step toward automated, predictable growth today. Our AI-powered system handles the complex
              work while you focus on what you do best—running your business.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-lime-500 mr-3" />
                <span className="text-lg">Get consistent growth without stress</span>
              </div>

              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-lime-500 mr-3" />
                <span className="text-lg">Increase your average customer value</span>
              </div>

              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-lime-500 mr-3" />
                <span className="text-lg">Get a proven business growth plan</span>
              </div>

              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-lime-500 mr-3" />
                <span className="text-lg">Leverage AI to automate your marketing</span>
              </div>
            </div>

            <motion.a
              href="#get-started"
              className="inline-flex h-14 items-center justify-center rounded-md bg-lime-500 px-8 text-lg font-medium text-black transition-colors hover:bg-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-umami-event="final-cta-click"
            >
              Get Your Free Growth Plan
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>

            <p className="text-sm text-gray-400 mt-4">Limited to 5 businesses per week. No credit card required.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-black/60 backdrop-blur-sm border border-lime-500/20 rounded-2xl p-6 md:p-8 shadow-xl shadow-lime-500/5">
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
                    type="text"
                    placeholder="Your Name"
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

                <div>
                  <select
                    className="w-full px-4 py-3 bg-black/60 border border-lime-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500/50"
                    required
                  >
                    <option value="">Business Type</option>
                    <option value="local-service">Local Service Business</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="professional">Professional Services</option>
                    <option value="restaurant">Restaurant/Food Service</option>
                    <option value="retail">Retail</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <motion.button
                  type="submit"
                  className="w-full h-14 bg-lime-500 hover:bg-lime-400 text-black font-medium rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-umami-event="final-form-submit"
                >
                  Get My Free Growth Plan
                </motion.button>

                <div className="flex items-center justify-center space-x-2 mt-4">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-lime-500 mr-1"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="text-xs text-gray-400">Free Analysis</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-lime-500 mr-1"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="text-xs text-gray-400">No Credit Card</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-lime-500 mr-1"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="text-xs text-gray-400">Secure</span>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
