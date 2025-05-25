"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ValueStackItem {
  title: string
  value: string
  description: string
  features: string[]
  icon: string
}

interface ValueStackProps {
  items: ValueStackItem[]
}

export function ValueStack({ items }: ValueStackProps) {
  const [activeItem, setActiveItem] = useState<number | null>(null)

  return (
    <section className="py-16 relative z-10" data-test="value-stack-section">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-variant="value-stack-headline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Everything You Need to Scale Your Business
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our complete growth system includes all these premium solutions designed to automate your marketing, sales,
            and client acquisition processes
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl border border-lime-400/20 bg-black/40 backdrop-blur-sm p-6 hover:border-lime-400/50 transition-all cursor-pointer group h-full"
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
                <div className="rounded-full bg-lime-400/10 p-3 text-lime-400 flex-shrink-0">
                  <span className="text-2xl" dangerouslySetInnerHTML={{ __html: item.icon }}></span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-lime-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-2xl font-bold text-lime-400 mb-2">{item.value}</p>
                  <p className="text-gray-300 mb-4">{item.description}</p>

                  <AnimatePresence>
                    {activeItem === index && (
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="font-medium text-white">Includes:</h4>
                        <ul className="space-y-2">
                          {item.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
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
                              <span className="text-gray-300">{feature}</span>
                            </li>
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
        >
          <div className="mb-6">
            <h4 className="text-2xl font-bold text-white mb-4">Your Investment</h4>
            <p className="text-gray-300 mb-6">
              Our comprehensive growth system is designed to deliver maximum ROI for your business. Contact us to
              discuss a customized solution that fits your specific needs and budget.
            </p>

            <div className="flex items-center justify-center gap-2 mb-6">
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
                className="text-lime-400"
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span className="text-lime-400 font-medium">100% Money-Back Guarantee</span>
            </div>
          </div>

          <a
            href="#get-started"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-lime-500 to-green-600 px-8 text-lg font-medium text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-lime-500/25 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2"
            data-variant="value-stack-cta"
            data-test="value-stack-cta"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.dataLayer = window.dataLayer || []
                window.dataLayer.push({
                  event: "cta_click",
                  cta_text: "Get Your Custom Quote",
                  cta_location: "Value Stack Section",
                })
              }
            }}
          >
            Get Your Custom Quote
          </a>
        </motion.div>
      </div>
    </section>
  )
}
