"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface WhyChooseUsItem {
  title: string
  description: string
  icon: string
  details: string[]
}

interface WhyChooseUsProps {
  items: WhyChooseUsItem[]
}

export function WhyChooseUs({ items }: WhyChooseUsProps) {
  const [activeItem, setActiveItem] = useState<number | null>(null)

  return (
    <section className="py-16 relative z-10 bg-black/30" data-test="why-choose-us-section">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-variant="why-choose-us-headline"
            data-test="why-choose-us-headline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose LeadsObtainer?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're not just another marketing agency. Here's what sets us apart:
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border border-lime-400/20 bg-black/40 backdrop-blur-sm p-6 hover:border-lime-400/50 transition-all cursor-pointer"
              onMouseEnter={() => setActiveItem(index)}
              onMouseLeave={() => setActiveItem(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              data-variant={`why-choose-us-item-${index}`}
              data-test={`why-choose-us-item-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-lime-400/10 p-3 text-lime-400">
                  <span className="text-2xl" dangerouslySetInnerHTML={{ __html: item.icon }}></span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-3">{item.description}</p>

                  <AnimatePresence>
                    {activeItem === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ul className="space-y-2 mt-4">
                          {item.details.map((detail, detailIndex) => (
                            <motion.li
                              key={detailIndex}
                              className="flex items-start gap-2 text-gray-300"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: 0.1 * detailIndex }}
                            >
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
                              <span>{detail}</span>
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
      </div>
    </section>
  )
}
