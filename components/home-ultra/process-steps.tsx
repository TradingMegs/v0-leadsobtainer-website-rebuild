"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface ProcessStep {
  title: string
  description: string
  icon: string
}

interface ProcessStepsProps {
  steps: ProcessStep[]
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <section className="py-16 relative z-10" data-test="process-steps-section">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-variant="process-headline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Simple 4-Step Process
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Getting started with our AI-powered growth system is easy. Here's how we'll transform your business in just
            four simple steps
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto" ref={containerRef}>
          {/* Connector Line */}
          <div className="absolute left-[28px] top-0 bottom-0 w-1 bg-gradient-to-b from-lime-500 to-green-600 hidden md:block"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                data-test={`process-step-${index + 1}`}
              >
                <div className="flex-shrink-0 relative z-10">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-lime-500 to-green-600 text-black font-bold text-xl">
                    {index + 1}
                  </div>
                </div>

                <div className="bg-black/40 backdrop-blur-sm border border-lime-400/20 rounded-xl p-6 flex-grow">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-lime-400/10 p-3 text-lime-400 flex-shrink-0">
                      <span className="text-2xl" dangerouslySetInnerHTML={{ __html: step.icon }}></span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="#get-started"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-lime-500 to-green-600 px-8 text-lg font-medium text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-lime-500/25 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2"
            data-variant="process-cta"
            data-test="process-cta"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.dataLayer = window.dataLayer || []
                window.dataLayer.push({
                  event: "cta_click",
                  cta_text: "Get Started Free",
                  cta_location: "Process Steps Section",
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
