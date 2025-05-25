"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ValueStackItem {
  title: string
  value: string
  description: string
  icon: string
  features: string[]
}

interface ValueStackProps {
  items: ValueStackItem[]
}

export function ValueStack({ items }: ValueStackProps) {
  const [activeItem, setActiveItem] = useState<number | null>(null)

  const totalValue = items.reduce((sum, item) => {
    const numericValue = Number.parseFloat(item.value.replace(/[^0-9.]/g, ""))
    return sum + numericValue
  }, 0)

  const formattedTotalValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(totalValue)

  const yourPrice = 997 // This would come from your actual pricing
  const formattedYourPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(yourPrice)

  return (
    <section className="py-16 relative z-10" data-test="value-stack-section">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-variant="value-stack-headline"
            data-test="value-stack-headline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Everything You Need to Scale Your Business
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our complete growth system includes all these premium solutions at a fraction of their market value
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl border border-lime-400/20 bg-black/40 backdrop-blur-sm p-6 hover:border-lime-400/50 transition-all cursor-pointer group"
              onMouseEnter={() => setActiveItem(index)}
              onMouseLeave={() => setActiveItem(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              data-variant={`value-stack-item-${index}`}
              data-test={`value-stack-item-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-lime-400/10 p-3 text-lime-400">
                  <span className="text-2xl" dangerouslySetInnerHTML={{ __html: item.icon }}></span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-lime-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-2xl font-bold text-lime-400 mb-2">{item.value}</p>
                  <p className="text-gray-300 mb-3">{item.description}</p>

                  <AnimatePresence>
                    {activeItem === index && (
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-sm font-medium text-white">Includes:</p>
                        <ul className="space-y-1">
                          {item.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              className="flex items-start gap-2 text-gray-300 text-sm"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: 0.1 * featureIndex }}
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
                                className="text-lime-400 mt-1 flex-shrink-0"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-2xl mx-auto rounded-2xl border border-lime-400/30 bg-black/60 backdrop-blur-md p-8 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          data-test="value-stack-summary"
        >
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-lg text-gray-300 mb-1">Total Value</h4>
              <p className="text-3xl font-bold text-white">{formattedTotalValue}</p>
            </div>
            <div>
              <h4 className="text-lg text-gray-300 mb-1">Your Price</h4>
              <p className="text-3xl font-bold text-lime-400">{formattedYourPrice}</p>
            </div>
          </div>

          <p className="text-lg text-gray-300 mb-6">
            That's a{" "}
            <span className="text-lime-400 font-bold">
              {Math.round(((totalValue - yourPrice) / totalValue) * 100)}% discount
            </span>{" "}
            off the market value!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#get-started"
              className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-lime-500 to-green-600 px-8 text-lg font-medium text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-lime-500/25 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 w-full sm:w-auto"
              data-variant="value-stack-cta"
              data-test="value-stack-cta"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dataLayer = window.dataLayer || []
                  window.dataLayer.push({
                    event: "cta_click",
                    cta_text: "Claim This Offer Now",
                    cta_location: "value_stack",
                  })
                }
              }}
            >
              Claim This Offer Now
            </a>

            <div className="flex items-center gap-2 text-gray-300 text-sm">
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
                className="text-lime-400"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>30-Day Money-Back Guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
