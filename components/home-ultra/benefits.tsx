"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface Benefit {
  title: string
  description: string
  icon: string
  metrics: {
    label: string
    value: string
    percentage: number
  }[]
  tooltip: string
}

interface BenefitsProps {
  benefits: Benefit[]
}

export function Benefits({ benefits }: BenefitsProps) {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null)
  const [tooltipVisible, setTooltipVisible] = useState<number | null>(null)

  return (
    <section className="py-16 relative z-10" data-test="benefits-section">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-variant="benefits-headline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How Our AI-Powered System Transforms Your Business
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our proven system automates your marketing, sales, and client acquisition processes, allowing you to focus
            on what matters most - running your business and serving your customers
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border border-lime-400/20 bg-black/40 backdrop-blur-sm p-6 hover:border-lime-400/50 transition-all h-full flex flex-col relative"
              onMouseEnter={() => setHoveredBenefit(index)}
              onMouseLeave={() => setHoveredBenefit(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              data-variant={`benefit-item-${index}`}
              data-test={`benefit-item-${index}`}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="rounded-full bg-lime-400/10 p-3 text-lime-400 w-fit flex-shrink-0">
                  <span className="text-2xl" dangerouslySetInnerHTML={{ __html: benefit.icon }}></span>
                </div>

                <h3 className="text-xl font-semibold">
                  {benefit.title}
                  <button
                    className="ml-2 text-gray-400 hover:text-lime-400 transition-colors"
                    onClick={() => setTooltipVisible(tooltipVisible === index ? null : index)}
                    aria-label={`More information about ${benefit.title}`}
                  >
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
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                  </button>
                </h3>
              </div>

              {tooltipVisible === index && (
                <div className="absolute top-16 right-6 z-10 bg-gray-900 border border-lime-400/30 rounded-lg p-4 shadow-lg max-w-xs">
                  <p className="text-sm text-gray-300">{benefit.tooltip}</p>
                  <div className="absolute -top-2 right-4 w-4 h-4 bg-gray-900 border-t border-l border-lime-400/30 transform rotate-45"></div>
                </div>
              )}

              <p className="text-gray-300 mb-6 flex-grow">{benefit.description}</p>

              <div className="space-y-3 mt-auto">
                {benefit.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{metric.label}</span>
                      <span className="text-lime-400 font-medium">{metric.value}</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-lime-500 to-green-600 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{
                          width: hoveredBenefit === index ? `${metric.percentage}%` : "0%",
                        }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#get-started"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-lime-500 to-green-600 px-8 text-lg font-medium text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-lime-500/25 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2"
            data-variant="benefits-cta"
            data-test="benefits-cta"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.dataLayer = window.dataLayer || []
                window.dataLayer.push({
                  event: "cta_click",
                  cta_text: "Get Started Free",
                  cta_location: "Benefits Section",
                })
              }
            }}
          >
            Get Started Free
          </a>
        </motion.div>
      </div>
    </section>
  )
}
