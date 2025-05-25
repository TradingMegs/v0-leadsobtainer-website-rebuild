"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface ProcessStep {
  number: number
  title: string
  description: string
  icon: string
}

interface ProcessStepsProps {
  steps: ProcessStep[]
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <section className="py-16 relative z-10" data-test="process-steps-section">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-variant="process-steps-headline"
            data-test="process-steps-headline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Simple 4-Step Process
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Getting started is easy. Here's how we'll transform your business:
          </motion.p>
        </div>

        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lime-400/80 via-lime-400/50 to-lime-400/10 transform -translate-x-1/2 z-0"></div>

          <div className="space-y-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`md:grid md:grid-cols-2 md:gap-8 items-center ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                data-variant={`process-step-${index}`}
                data-test={`process-step-${index}`}
              >
                <div className={`flex ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"} mb-4 md:mb-0`}>
                  <motion.div
                    className="rounded-full bg-black/60 border-2 border-lime-400 p-6 w-20 h-20 flex items-center justify-center relative"
                    whileHover={{ scale: 1.05 }}
                    animate={activeStep === index ? { boxShadow: "0 0 15px 5px rgba(163, 230, 53, 0.3)" } : {}}
                  >
                    <span className="text-2xl text-lime-400" dangerouslySetInnerHTML={{ __html: step.icon }}></span>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-lime-400 text-black font-bold flex items-center justify-center">
                      {step.number}
                    </div>
                  </motion.div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#get-started"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-lime-500 to-green-600 px-8 text-lg font-medium text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-lime-500/25 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2"
            data-variant="process-steps-cta"
            data-test="process-steps-cta"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.dataLayer = window.dataLayer || []
                window.dataLayer.push({
                  event: "cta_click",
                  cta_text: "Start Your Growth Journey",
                  cta_location: "process_steps",
                })
              }
            }}
          >
            Start Your Growth Journey
          </a>
        </motion.div>
      </div>
    </section>
  )
}
