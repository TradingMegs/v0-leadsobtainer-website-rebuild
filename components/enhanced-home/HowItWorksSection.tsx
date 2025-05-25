"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const steps = [
    {
      number: 1,
      title: "Strategy Session",
      description: "We analyze your business, identify growth opportunities, and create a custom implementation plan.",
      icon: "strategy",
      color: "from-lime-500 to-green-500",
      details: [
        "Comprehensive market analysis",
        "Competitor benchmarking",
        "Growth opportunity identification",
        "Custom strategy development",
      ],
    },
    {
      number: 2,
      title: "System Setup",
      description: "Our team configures your entire lead generation and automation system in under 30 minutes.",
      icon: "setup",
      color: "from-blue-500 to-cyan-500",
      details: [
        "AI configuration and training",
        "Marketing channel integration",
        "CRM and sales tool setup",
        "Analytics dashboard implementation",
      ],
    },
    {
      number: 3,
      title: "Optimization",
      description: "We continuously monitor performance and optimize for maximum ROI and lead quality.",
      icon: "optimize",
      color: "from-purple-500 to-pink-500",
      details: [
        "Real-time performance monitoring",
        "A/B testing and optimization",
        "Lead quality refinement",
        "Conversion rate enhancement",
      ],
    },
    {
      number: 4,
      title: "Scale & Grow",
      description: "As results come in, we help you scale your business with additional automation and strategies.",
      icon: "scale",
      color: "from-orange-500 to-red-500",
      details: [
        "Capacity planning and scaling",
        "Advanced automation implementation",
        "New market expansion strategies",
        "Long-term growth roadmap",
      ],
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
            <span className="text-sm font-medium">Simple Process</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-600">
              How Our AI Growth System Works
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our streamlined process gets you from struggling to scaling in just four simple steps
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-black/40 backdrop-blur-sm border border-lime-500/20 rounded-xl p-8"
              >
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${steps[activeStep].color} flex items-center justify-center text-white text-2xl font-bold mb-6`}
                >
                  {steps[activeStep].number}
                </div>

                <h3 className="text-2xl font-bold mb-4">{steps[activeStep].title}</h3>
                <p className="text-gray-300 mb-6">{steps[activeStep].description}</p>

                <div className="space-y-3 mb-6">
                  {steps[activeStep].details.map((detail, index) => (
                    <div key={index} className="flex items-start">
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
                        className="text-lime-500 mr-3 mt-1"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#get-started"
                  className="inline-flex items-center text-lime-500 hover:text-lime-400 font-medium"
                >
                  Start Your Growth Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center p-4 rounded-lg cursor-pointer transition-all ${
                    activeStep === index
                      ? "bg-lime-500/10 border border-lime-500/30"
                      : "bg-black/20 border border-lime-500/10 hover:bg-black/30"
                  }`}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ x: 5 }}
                >
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold mr-4`}
                  >
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-bold">{step.title}</h4>
                    <p className="text-sm text-gray-400">{step.description.substring(0, 60)}...</p>
                  </div>
                  {activeStep === index && (
                    <div className="ml-auto">
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
                        className="text-lime-500"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
