"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, XCircle, ArrowRight } from "lucide-react"

export function ProblemSolutionSection() {
  const [activeTab, setActiveTab] = useState("problem")

  const problems = [
    {
      title: "Inconsistent Lead Generation",
      description:
        "Most local businesses struggle with unpredictable lead flow, making it impossible to plan for growth.",
      icon: "user",
    },
    {
      title: "Wasted Marketing Budget",
      description: "Traditional marketing methods drain resources with poor ROI and no clear attribution.",
      icon: "money",
    },
    {
      title: "Time-Consuming Follow-ups",
      description: "Manual lead follow-up is inconsistent and takes valuable time away from running your business.",
      icon: "clock",
    },
  ]

  const solutions = [
    {
      title: "AI-Powered Lead Generation",
      description: "Our system works 24/7 to deliver a consistent flow of qualified leads tailored to your business.",
      icon: "user",
    },
    {
      title: "Optimized Marketing ROI",
      description: "Data-driven campaigns that automatically adjust to maximize return on every dollar spent.",
      icon: "money",
    },
    {
      title: "Automated Follow-up System",
      description:
        "Never miss an opportunity with our intelligent follow-up system that nurtures leads until conversion.",
      icon: "clock",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-lime-950/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-600">
              The Growth Challenge for Local Businesses
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            See how our AI-powered system transforms common business challenges into growth opportunities
          </motion.p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full p-1 bg-black/30 border border-lime-500/20">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "problem" ? "bg-lime-500 text-black" : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveTab("problem")}
            >
              The Problem
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "solution" ? "bg-lime-500 text-black" : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveTab("solution")}
            >
              Our Solution
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(activeTab === "problem" ? problems : solutions).map((item, index) => (
            <motion.div
              key={`${activeTab}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`bg-black/40 backdrop-blur-sm border rounded-xl p-6 hover:border-lime-500/50 transition-all ${
                activeTab === "problem" ? "border-red-500/20" : "border-lime-500/20"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 ${
                  activeTab === "problem" ? "bg-red-500/10" : "bg-lime-500/10"
                }`}
              >
                {activeTab === "problem" ? (
                  <XCircle className={`h-6 w-6 ${activeTab === "problem" ? "text-red-500" : "text-lime-500"}`} />
                ) : (
                  <CheckCircle className={`h-6 w-6 ${activeTab === "problem" ? "text-red-500" : "text-lime-500"}`} />
                )}
              </div>

              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-300 mb-4">{item.description}</p>

              {activeTab === "solution" && (
                <a href="#get-started" className="text-lime-500 hover:text-lime-400 font-medium flex items-center">
                  Learn how we solve this
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {activeTab === "problem" && (
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={() => setActiveTab("solution")}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-lime-500 text-black font-medium hover:bg-lime-400 transition-all"
            >
              See How We Solve These Problems
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        )}

        {activeTab === "solution" && (
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#get-started"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-lime-500 text-black font-medium hover:bg-lime-400 transition-all"
              data-umami-event="problem-solution-cta"
            >
              Get Your Free Growth Plan
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  )
}
