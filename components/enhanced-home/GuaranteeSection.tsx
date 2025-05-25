"use client"

import { motion } from "framer-motion"
import { Shield, ArrowRight } from "lucide-react"

export function GuaranteeSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-lime-950/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="inline-flex items-center px-3 py-1 rounded-full bg-lime-500/10 text-lime-500 border border-lime-500/20 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-medium">Risk-Free</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-600">
                Our 90-Day Growth Guarantee
              </span>
            </h2>

            <p className="text-gray-300 mb-8">
              We're so confident in our AI-powered growth system that we offer a simple guarantee: If you don't see
              measurable growth within 90 days, you don't pay.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-lime-500/10 flex items-center justify-center text-lime-500 mr-4 mt-1">
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
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">No Long-Term Contracts</h3>
                  <p className="text-gray-400">
                    Unlike traditional agencies that lock you in, we earn your business every month with real results.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-lime-500/10 flex items-center justify-center text-lime-500 mr-4 mt-1">
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
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Transparent Reporting</h3>
                  <p className="text-gray-400">
                    You'll have access to a real-time dashboard showing exactly how your campaigns are performing.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-lime-500/10 flex items-center justify-center text-lime-500 mr-4 mt-1">
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
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Money-Back Guarantee</h3>
                  <p className="text-gray-400">
                    If we don't deliver on our promises within 90 days, you get a full refund. It's that simple.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#get-started"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-lime-500 text-black font-medium hover:bg-lime-400 transition-all"
              data-umami-event="guarantee-cta"
            >
              Get Started Risk-Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-lime-500 to-green-500 rounded-full blur-3xl opacity-20"></div>
              <div className="relative bg-black/40 backdrop-blur-sm border-2 border-lime-500/30 rounded-3xl p-8 md:p-12 max-w-md">
                <div className="w-20 h-20 rounded-full bg-lime-500/10 flex items-center justify-center text-lime-500 mx-auto mb-6">
                  <Shield className="h-10 w-10" />
                </div>

                <h3 className="text-2xl font-bold text-center mb-6">Our Triple Growth Guarantee</h3>

                <div className="space-y-6">
                  <div className="bg-black/30 rounded-lg p-4 border border-lime-500/20">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-lime-500 text-black flex items-center justify-center font-bold mr-3">
                        1
                      </div>
                      <h4 className="font-bold">Results in 90 Days</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      You'll see measurable growth in leads, clients, or revenue within 90 days or you don't pay.
                    </p>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4 border border-lime-500/20">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-lime-500 text-black flex items-center justify-center font-bold mr-3">
                        2
                      </div>
                      <h4 className="font-bold">Positive ROI</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Our system will generate more revenue than it costs, ensuring a positive return on investment.
                    </p>
                  </div>

                  <div className="bg-black/30 rounded-lg p-4 border border-lime-500/20">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-lime-500 text-black flex items-center justify-center font-bold mr-3">
                        3
                      </div>
                      <h4 className="font-bold">Satisfaction Guarantee</h4>
                    </div>
                    <p className="text-gray-400 text-sm">
                      If you're not completely satisfied with our service, we'll work with you until you are or refund
                      your investment.
                    </p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-400 italic">
                    "We put our money where our mouth is. If we don't deliver, you don't pay."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
