"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function SocialProofBar() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  const stats = [
    { value: "3,500+", label: "Businesses Helped" },
    { value: "93%", label: "Client Retention" },
    { value: "187%", label: "Average ROI" },
    { value: "30-Day", label: "Money-Back Guarantee" },
  ]

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="py-10 bg-black border-t border-b border-lime-500/20"
    >
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center justify-center text-center"
            >
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-lime-400 to-green-500 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-sm md:text-base text-gray-400 mt-1">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
