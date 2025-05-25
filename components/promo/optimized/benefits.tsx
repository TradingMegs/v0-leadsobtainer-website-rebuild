"use client"

import { motion } from "framer-motion"
import { Zap, BarChart3, Users, Clock, CheckCircle } from "lucide-react"

export function Benefits() {
  const benefits = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Automated Lead Generation",
      description:
        "Our AI identifies and targets your ideal customers with precision, delivering a consistent flow of high-quality leads without your involvement.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "AI-Powered Sales Automation",
      description:
        "Our system nurtures leads through the entire sales process, handling follow-ups, objections, and scheduling, so you only deal with ready-to-buy customers.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Client Retention Engine",
      description:
        "Keep clients longer and increase their lifetime value with our automated retention system that prevents churn and identifies upsell opportunities.",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Time-Saving Automation",
      description:
        "Reclaim hours of your week with our comprehensive automation tools that handle repetitive marketing and sales tasks for you.",
    },
  ]

  const problems = [
    "Spending too much on ads with poor ROI",
    "Wasting time on unqualified leads",
    "Struggling to follow up consistently",
    "Losing clients due to poor communication",
    "Manually handling repetitive marketing tasks",
    "Inconsistent lead flow and revenue",
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text" data-test="benefits-headline">
              How Our System Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered growth system helps local businesses automate their marketing, sales, and client
              acquisition.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/30 rounded-2xl p-6 flex flex-col h-full"
              data-test={`benefit-card-${index}`}
            >
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-secondary/20 rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Are You Facing These Challenges?</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start"
              >
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1" />
                <p>{problem}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
