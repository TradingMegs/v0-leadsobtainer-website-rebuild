"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, XCircle, ArrowRight } from "lucide-react"

export function CompetitiveAdvantage() {
  const [activeTab, setActiveTab] = useState("us")

  const comparisonData = [
    {
      feature: "Lead Generation Approach",
      us: "AI-powered targeting with continuous optimization",
      them: "Generic targeting with manual adjustments",
    },
    {
      feature: "Follow-up System",
      us: "Automated 24/7 personalized follow-up",
      them: "Manual or basic automated follow-up",
    },
    {
      feature: "Implementation Time",
      us: "30 minutes setup, results in days",
      them: "Weeks of setup, months for results",
    },
    {
      feature: "Performance Guarantee",
      us: "Results in 90 days or you don't pay",
      them: "Long-term contracts with no guarantees",
    },
    {
      feature: "ROI Tracking",
      us: "Real-time dashboard with clear attribution",
      them: "Basic reporting with limited insights",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-lime-950/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center px-3 py-1 rounded-full bg-lime-500/10 text-lime-500 border border-lime-500/20 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium">Why Choose Us</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-600">
              How We Compare to Traditional Marketing
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            See why our AI-powered approach delivers superior results compared to traditional marketing agencies
          </motion.p>
        </div>

        <motion.div
          className="bg-black/40 backdrop-blur-sm border border-lime-500/20 rounded-xl p-6 md:p-8 mb-12 overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <th className="text-left p-4 border-b border-lime-500/10">Feature</th>
                <th className="p-4 border-b border-lime-500/10">
                  <div className="flex justify-center items-center">
                    <div
                      className={`px-4 py-2 rounded-full ${activeTab === "us" ? "bg-lime-500 text-black" : "bg-transparent"}`}
                    >
                      LeadsObtainer
                    </div>
                  </div>
                </th>
                <th className="p-4 border-b border-lime-500/10">
                  <div className="flex justify-center items-center">
                    <div
                      className={`px-4 py-2 rounded-full ${activeTab === "them" ? "bg-red-500 text-black" : "bg-transparent"}`}
                    >
                      Traditional Marketing
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={index} className="border-b border-lime-500/10">
                  <td className="p-4 font-medium">{item.feature}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-center">
                      <div className="bg-lime-500/10 text-lime-500 rounded-lg p-3 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                        <span>{item.us}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center">
                      <div className="bg-red-500/10 text-red-400 rounded-lg p-3 flex items-center">
                        <XCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                        <span>{item.them}</span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-black/40 backdrop-blur-sm border border-lime-500/20 rounded-xl p-6"
          >
            <div className="w-12 h-12 rounded-lg bg-lime-500/10 flex items-center justify-center text-lime-500 mb-4">
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
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Results-Based Guarantee</h3>
            <p className="text-gray-300 mb-4">
              We're so confident in our system that if you don't see results within 90 days, you don't pay.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-black/40 backdrop-blur-sm border border-lime-500/20 rounded-xl p-6"
          >
            <div className="w-12 h-12 rounded-lg bg-lime-500/10 flex items-center justify-center text-lime-500 mb-4">
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
                <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
                <path d="M8 7h.01"></path>
                <path d="M12 7h.01"></path>
                <path d="M16 7h.01"></path>
                <path d="M12 11h.01"></path>
                <path d="M8 11h.01"></path>
                <path d="M16 11h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Proprietary AI Technology</h3>
            <p className="text-gray-300 mb-4">
              Our custom-built AI algorithms outperform traditional marketing methods by 3-5x.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-black/40 backdrop-blur-sm border border-lime-500/20 rounded-xl p-6"
          >
            <div className="w-12 h-12 rounded-lg bg-lime-500/10 flex items-center justify-center text-lime-500 mb-4">
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
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Done-For-You Implementation</h3>
            <p className="text-gray-300 mb-4">
              We handle everything from setup to optimization, requiring minimal time investment from you.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a
            href="#get-started"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-lime-500 text-black font-medium hover:bg-lime-400 transition-all"
            data-umami-event="competitive-cta"
          >
            Experience the Difference
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
