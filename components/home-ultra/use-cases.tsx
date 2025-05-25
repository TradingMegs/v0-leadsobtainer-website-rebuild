"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface UseCase {
  title: string
  industry: string
  problem: string
  solution: string
  results: string[]
  image: string
}

interface UseCasesProps {
  cases: UseCase[]
}

export function UseCases({ cases }: UseCasesProps) {
  const [activeCase, setActiveCase] = useState(0)

  return (
    <section className="py-16 relative z-10" data-test="use-cases-section">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-variant="use-cases-headline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Real Business Transformations
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            See how our AI-powered growth system has helped businesses like yours overcome challenges and achieve
            remarkable results
          </motion.p>
        </div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-8">
          <div className="space-y-4">
            {cases.map((useCase, index) => (
              <motion.button
                key={index}
                className={`w-full text-left p-4 rounded-lg transition-all ${
                  activeCase === index
                    ? "bg-lime-400/20 border border-lime-400/40"
                    : "bg-black/20 border border-gray-800 hover:bg-black/40"
                }`}
                onClick={() => setActiveCase(index)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                data-test={`use-case-tab-${index}`}
              >
                <h3 className={`font-semibold ${activeCase === index ? "text-lime-400" : "text-white"}`}>
                  {useCase.title}
                </h3>
                <p className="text-sm text-gray-400">{useCase.industry}</p>
              </motion.button>
            ))}
          </div>

          <motion.div
            className="bg-black/40 backdrop-blur-sm border border-lime-400/20 rounded-xl p-6 md:p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            key={activeCase}
            data-test={`use-case-content-${activeCase}`}
          >
            <div className="grid md:grid-cols-[1fr_1fr] gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-lime-400 mb-4">{cases[activeCase].title}</h3>
                <p className="text-gray-400 mb-6">{cases[activeCase].industry}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">The Challenge</h4>
                  <p className="text-gray-300">{cases[activeCase].problem}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Our Solution</h4>
                  <p className="text-gray-300">{cases[activeCase].solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2">The Results</h4>
                  <ul className="space-y-2">
                    {cases[activeCase].results.map((result, index) => (
                      <li key={index} className="flex items-start gap-2">
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
                        <span className="text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="rounded-lg overflow-hidden border border-gray-800 w-full max-w-sm">
                  <Image
                    src={cases[activeCase].image || "/placeholder.svg?height=400&width=300"}
                    alt={cases[activeCase].title}
                    width={300}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>
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
            data-variant="use-cases-cta"
            data-test="use-cases-cta"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.dataLayer = window.dataLayer || []
                window.dataLayer.push({
                  event: "cta_click",
                  cta_text: "Get Started Free",
                  cta_location: "Use Cases Section",
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
