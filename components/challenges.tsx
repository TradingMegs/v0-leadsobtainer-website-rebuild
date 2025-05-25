"use client"

import { motion } from "framer-motion"

export function Challenges() {
  const challenges = [
    {
      icon: "user",
      title: "Inconsistent Client Acquisition",
      description:
        "Struggling to maintain a steady flow of new clients? Our system ensures a consistent pipeline of qualified leads.",
      cta: "Solve This Now",
    },
    {
      icon: "clock",
      title: "Marketing That Drains Time & Money",
      description:
        "Tired of wasting resources on ineffective marketing? Our AI optimizes your campaigns for maximum ROI.",
      cta: "Discover How We Fix This",
    },
    {
      icon: "chart",
      title: "Intense Local Competition",
      description:
        "Competing with established businesses in your area? Our strategies help you stand out and capture market share.",
      cta: "See How We Do This",
    },
  ]

  return (
    <section className="py-16 px-4 relative z-10">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Are These Challenges Killing Your Business Growth?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-gray-300 max-w-3xl mx-auto mb-12"
        >
          Most local business owners face these exact same problems, and are struggling with outdated marketing
          strategies that simply don't work anymore.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="bg-black/40 backdrop-blur-sm border border-lime-500/20 rounded-xl p-6 hover:border-lime-500/50 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-lime-500/10 flex items-center justify-center text-lime-500 mb-4">
                {challenge.icon === "user" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                )}
                {challenge.icon === "clock" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                )}
                {challenge.icon === "chart" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3v18h18"></path>
                    <path d="m19 9-5 5-4-4-3 3"></path>
                  </svg>
                )}
              </div>

              <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
              <p className="text-gray-300 mb-4">{challenge.description}</p>

              <a href="#get-started" className="text-lime-500 hover:text-lime-400 font-medium flex items-center">
                {challenge.cta}
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
                  className="ml-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
