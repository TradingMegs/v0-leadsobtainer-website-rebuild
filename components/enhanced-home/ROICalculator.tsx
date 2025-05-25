"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Calculator } from "lucide-react"

export function ROICalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(20000)
  const [leadConversionRate, setLeadConversionRate] = useState(20)
  const [averageClientValue, setAverageClientValue] = useState(1000)
  const [currentMarketingCost, setCurrentMarketingCost] = useState(2000)

  const [projectedLeads, setProjectedLeads] = useState(0)
  const [projectedClients, setProjectedClients] = useState(0)
  const [projectedRevenue, setProjectedRevenue] = useState(0)
  const [projectedROI, setProjectedROI] = useState(0)

  useEffect(() => {
    // Calculate projected results
    const baseLeads = Math.round(monthlyRevenue / averageClientValue / (leadConversionRate / 100))
    const newLeads = Math.round(baseLeads * 3.17) // 317% increase
    const newClients = Math.round(newLeads * (leadConversionRate / 100))
    const newRevenue = Math.round(newClients * averageClientValue)
    const roi = Math.round(((newRevenue - monthlyRevenue) / 2500) * 100) // 2500 is our service cost

    setProjectedLeads(newLeads)
    setProjectedClients(newClients)
    setProjectedRevenue(newRevenue)
    setProjectedROI(roi)
  }, [monthlyRevenue, leadConversionRate, averageClientValue, currentMarketingCost])

  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center px-3 py-1 rounded-full bg-lime-500/10 text-lime-500 border border-lime-500/20 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium">Calculate Your Growth</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-600">
              See Your Potential ROI
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Use our calculator to see how our AI growth system could impact your business
          </motion.p>
        </div>

        <motion.div
          className="bg-black/40 backdrop-blur-sm border border-lime-500/20 rounded-xl p-6 md:p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Calculator className="mr-2 h-5 w-5 text-lime-500" />
                Enter Your Business Details
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Current Monthly Revenue</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={monthlyRevenue}
                      onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 bg-black/60 border border-lime-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Lead Conversion Rate (%)</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={leadConversionRate}
                      onChange={(e) => setLeadConversionRate(Number(e.target.value))}
                      className="w-full px-4 py-3 bg-black/60 border border-lime-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500/50"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Average Client Value</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={averageClientValue}
                      onChange={(e) => setAverageClientValue(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 bg-black/60 border border-lime-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Current Monthly Marketing Cost</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={currentMarketingCost}
                      onChange={(e) => setCurrentMarketingCost(Number(e.target.value))}
                      className="w-full pl-8 pr-4 py-3 bg-black/60 border border-lime-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500/50"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
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
                  className="mr-2 text-lime-500"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                Your Projected Results
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-lime-500/10 rounded-lg p-6 border border-lime-500/20">
                  <div className="text-sm text-gray-400 mb-1">Monthly Leads</div>
                  <div className="flex items-baseline">
                    <div className="text-3xl font-bold text-white">{projectedLeads}</div>
                    <div className="text-lime-500 ml-2">+217%</div>
                  </div>
                </div>

                <div className="bg-lime-500/10 rounded-lg p-6 border border-lime-500/20">
                  <div className="text-sm text-gray-400 mb-1">Monthly Clients</div>
                  <div className="flex items-baseline">
                    <div className="text-3xl font-bold text-white">{projectedClients}</div>
                    <div className="text-lime-500 ml-2">+217%</div>
                  </div>
                </div>

                <div className="bg-lime-500/10 rounded-lg p-6 border border-lime-500/20">
                  <div className="text-sm text-gray-400 mb-1">Monthly Revenue</div>
                  <div className="flex items-baseline">
                    <div className="text-3xl font-bold text-white">${projectedRevenue.toLocaleString()}</div>
                    <div className="text-lime-500 ml-2">+217%</div>
                  </div>
                </div>

                <div className="bg-lime-500/10 rounded-lg p-6 border border-lime-500/20">
                  <div className="text-sm text-gray-400 mb-1">ROI</div>
                  <div className="flex items-baseline">
                    <div className="text-3xl font-bold text-white">{projectedROI}x</div>
                    <div className="text-lime-500 ml-2">Return</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-black/60 border border-lime-500/20 rounded-lg">
                <div className="flex items-start">
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
                    className="text-lime-500 mr-2 mt-1"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  <div className="text-sm text-gray-400">
                    These projections are based on average results across our client base. Your actual results may vary
                    based on your industry, location, and other factors.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#get-started"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-lime-500 text-black font-medium hover:bg-lime-400 transition-all"
            data-umami-event="roi-calculator-cta"
          >
            Get Your Personalized Growth Plan
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
