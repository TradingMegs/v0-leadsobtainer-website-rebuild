"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calculator, DollarSign, TrendingUp } from "lucide-react"

export function SavingsCalculator() {
  const [businessType, setBusinessType] = useState("")
  const [currentRevenue, setCurrentRevenue] = useState(10000)
  const [marketingBudget, setMarketingBudget] = useState(2000)
  const [results, setResults] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const handleCalculate = () => {
    setIsCalculating(true)

    // Simulate API call with setTimeout
    setTimeout(() => {
      // Simple calculation logic instead of using AI
      const growthMultiplier =
        {
          dental: 1.35,
          restaurant: 1.28,
          realestate: 1.4,
          lawfirm: 1.32,
          gym: 1.25,
          salon: 1.3,
          retail: 1.22,
          other: 1.3,
        }[businessType] || 1.3

      const leadCost =
        {
          dental: 200,
          restaurant: 50,
          realestate: 300,
          lawfirm: 400,
          gym: 100,
          salon: 80,
          retail: 60,
          other: 150,
        }[businessType] || 150

      // Calculate results based on inputs and business type
      setResults({
        projectedRevenue: Math.round(currentRevenue * growthMultiplier),
        newLeads: Math.round((marketingBudget * 0.8) / leadCost),
        roi: Math.round(((currentRevenue * growthMultiplier - currentRevenue) / marketingBudget) * 100),
        timeframe: "90 days",
      })

      setIsCalculating(false)
    }, 1500) // Simulate 1.5 second calculation time
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center gap-2 bg-lime-400/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4"
          >
            <Calculator className="h-4 w-4 text-lime-400" />
            <span className="text-sm font-medium text-lime-400">ROI Calculator</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Calculate Your Growth Potential
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            See how our AI-powered growth system can transform your business metrics in just 90 days.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-black/50 backdrop-blur-sm border border-lime-400/10 rounded-xl p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold mb-6">Enter Your Business Details</h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Business Type</label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full bg-black/50 border border-gray-800 rounded-md p-2 text-white"
                >
                  <option value="">Select business type</option>
                  <option value="dental">Dental Practice</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="realestate">Real Estate</option>
                  <option value="lawfirm">Law Firm</option>
                  <option value="gym">Fitness Studio</option>
                  <option value="salon">Salon/Spa</option>
                  <option value="retail">Retail Store</option>
                  <option value="other">Other Local Business</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Current Monthly Revenue: {formatCurrency(currentRevenue)}
                </label>
                <input
                  type="range"
                  min="5000"
                  max="100000"
                  step="1000"
                  value={currentRevenue}
                  onChange={(e) => setCurrentRevenue(Number.parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Current Marketing Budget: {formatCurrency(marketingBudget)}
                </label>
                <input
                  type="range"
                  min="500"
                  max="20000"
                  step="500"
                  value={marketingBudget}
                  onChange={(e) => setMarketingBudget(Number.parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              <button
                onClick={handleCalculate}
                disabled={!businessType || isCalculating}
                className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold py-3 px-4 rounded-lg disabled:opacity-50"
              >
                {isCalculating ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Calculating...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Calculator className="h-4 w-4" />
                    Calculate Growth Potential
                  </span>
                )}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`bg-black/50 backdrop-blur-sm border ${results ? "border-lime-400/20" : "border-gray-800/50"} rounded-xl p-6 md:p-8 h-full`}
          >
            <h3 className="text-xl font-semibold mb-6">Your Growth Projection</h3>

            {!results ? (
              <div className="flex flex-col items-center justify-center h-[300px] text-center">
                <TrendingUp className="h-16 w-16 text-gray-700 mb-4" />
                <p className="text-gray-500">
                  Enter your business details and calculate to see your personalized growth projection
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/40 border border-lime-400/10 rounded-lg p-4">
                    <p className="text-sm text-gray-400 mb-1">Projected Revenue</p>
                    <p className="text-2xl font-bold text-lime-400">{formatCurrency(results.projectedRevenue)}</p>
                    <p className="text-xs text-gray-500">per month</p>
                  </div>

                  <div className="bg-black/40 border border-lime-400/10 rounded-lg p-4">
                    <p className="text-sm text-gray-400 mb-1">New Leads</p>
                    <p className="text-2xl font-bold text-lime-400">{results.newLeads}+</p>
                    <p className="text-xs text-gray-500">per month</p>
                  </div>

                  <div className="bg-black/40 border border-lime-400/10 rounded-lg p-4">
                    <p className="text-sm text-gray-400 mb-1">ROI</p>
                    <p className="text-2xl font-bold text-lime-400">{results.roi}%</p>
                    <p className="text-xs text-gray-500">return on investment</p>
                  </div>

                  <div className="bg-black/40 border border-lime-400/10 rounded-lg p-4">
                    <p className="text-sm text-gray-400 mb-1">Timeframe</p>
                    <p className="text-2xl font-bold text-lime-400">{results.timeframe}</p>
                    <p className="text-xs text-gray-500">to achieve results</p>
                  </div>
                </div>

                <div className="bg-lime-400/10 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-lime-400 mt-0.5" />
                    <div>
                      <p className="font-medium">Your Investment</p>
                      <p className="text-sm text-gray-400">
                        Our growth system costs less than your current marketing budget and delivers 3x better results.
                      </p>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold py-3 px-4 rounded-lg">
                  Get Your Custom Growth Plan
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
