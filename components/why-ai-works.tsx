"use client"

import { motion } from "framer-motion"
import { Brain, Clock, DollarSign, Shield, TrendingUp } from "lucide-react"

export function WhyAIWorks() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/5">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lime-400">
            Why AI is the Answer to Your Biggest Challenges
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Small businesses face unique hurdles like limited budgets, intense competition, and time constraints—but AI
            isn't just for big companies. Our system automates repetitive tasks (like lead follow-ups and social media)
            while giving you data-driven insights to outperform competitors.
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto mt-4">
            Unlike traditional marketing, which drains time and money, our AI learns and adapts to your business,
            ensuring consistent results without the guesswork.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-secondary/30 rounded-lg p-6 flex flex-col h-full"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="bg-lime-400/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-lime-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Intelligent Automation</h3>
            <p className="text-muted-foreground">
              Our AI handles repetitive tasks like lead follow-ups, appointment scheduling, and social media posting,
              freeing up your time to focus on growth.
            </p>
          </motion.div>

          <motion.div
            className="bg-secondary/30 rounded-lg p-6 flex flex-col h-full"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="bg-lime-400/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <DollarSign className="h-6 w-6 text-lime-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Cost-Effective Growth</h3>
            <p className="text-muted-foreground">
              AI-powered marketing delivers 63% lower customer acquisition costs compared to traditional methods, making
              growth affordable for small businesses of all sizes.
            </p>
          </motion.div>

          <motion.div
            className="bg-secondary/30 rounded-lg p-6 flex flex-col h-full"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div className="bg-lime-400/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-lime-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Data-Driven Decisions</h3>
            <p className="text-muted-foreground">
              Our AI analyzes millions of data points to optimize your marketing and sales processes, eliminating
              guesswork and ensuring consistent results.
            </p>
          </motion.div>

          <motion.div
            className="bg-secondary/30 rounded-lg p-6 flex flex-col h-full"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <div className="bg-lime-400/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-lime-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">24/7 Operation</h3>
            <p className="text-muted-foreground">
              Unlike human employees, our AI works around the clock, responding to leads, nurturing prospects, and
              optimizing campaigns even while you sleep.
            </p>
          </motion.div>

          <motion.div
            className="bg-secondary/30 rounded-lg p-6 flex flex-col h-full"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <div className="bg-lime-400/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-lime-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Secure & Compliant</h3>
            <p className="text-muted-foreground">
              Our AI systems are built with security and compliance (GDPR, CCPA) in mind, protecting your business and
              customer data at all times.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
