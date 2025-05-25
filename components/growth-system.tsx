"use client"

import { motion } from "framer-motion"

export function GrowthSystem() {
  const features = [
    {
      icon: "automation",
      title: "Automated Lead Generation",
      description:
        "Our AI-powered system automatically identifies and targets your ideal customers, generating a consistent flow of high-quality leads without manual effort.",
    },
    {
      icon: "ai",
      title: "AI-Powered Sales System",
      description:
        "Leverage cutting-edge artificial intelligence to nurture leads, automate follow-ups, and convert prospects into paying customers with minimal human intervention.",
    },
    {
      icon: "analytics",
      title: "Client Retention Engine",
      description:
        "Keep your customers coming back with our automated retention and referral system that maximizes lifetime value and generates word-of-mouth growth.",
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
          className="text-3xl md:text-4xl font-bold text-center mb-6"
        >
          Automated Growth System for Local Businesses
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-gray-300 max-w-3xl mx-auto mb-12"
        >
          Our proprietary AI-powered growth system combines cutting-edge technology with proven marketing strategies to
          deliver predictable, scalable growth for your local business.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="bg-black/40 backdrop-blur-sm border border-lime-500/20 rounded-xl p-6 hover:border-lime-500/50 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-lime-500/10 flex items-center justify-center text-lime-500 mb-4">
                {feature.icon === "automation" && (
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
                    <path d="M19 5v14H5V5h14Z"></path>
                    <path d="M17 2v3"></path>
                    <path d="M7 2v3"></path>
                    <path d="M14 13h-4v4h4v-4Z"></path>
                    <path d="M2 10h20"></path>
                  </svg>
                )}
                {feature.icon === "ai" && (
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
                    <path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"></path>
                    <path d="M12 6v4"></path>
                    <path d="M8 10h8"></path>
                  </svg>
                )}
                {feature.icon === "analytics" && (
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
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path>
                    <path d="m18 15-2-2"></path>
                    <path d="m15 18-2-2"></path>
                  </svg>
                )}
              </div>

              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.a
            href="#get-started"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex h-14 items-center justify-center rounded-full bg-lime-500 hover:bg-lime-400 px-8 text-lg font-medium text-black transition-all hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Growth Plan Now
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
              className="ml-2"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
