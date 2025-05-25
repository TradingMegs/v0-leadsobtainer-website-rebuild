"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, Calendar, Mail, Users, CheckCircle, ArrowRight } from "lucide-react"
import { useExperiment } from "../high-conversion/experiment-provider"
import { promoUltraContent } from "@/lib/promo-ultra-content"
import { cn } from "@/lib/utils"

export function UltraInteractiveBenefits() {
  const { variants, trackEvent } = useExperiment()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "bot":
        return <Bot className="h-6 w-6 text-blue-400" />
      case "calendar":
        return <Calendar className="h-6 w-6 text-blue-400" />
      case "mail":
        return <Mail className="h-6 w-6 text-blue-400" />
      case "users":
        return <Users className="h-6 w-6 text-blue-400" />
      default:
        return <Bot className="h-6 w-6 text-blue-400" />
    }
  }

  return (
    <section
      className="py-16 md:py-24 px-4 bg-background"
      data-section="benefits"
      data-variant={`layout-${variants.benefitsLayout}`}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 blue-gradient-text" data-test="benefits-headline">
              How Our Automation System Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered system automates your marketing, sales, and customer service so you can focus on growing
              your business.
            </p>
          </motion.div>
        </div>

        <div
          className={cn(
            "grid gap-8 mb-16",
            variants.benefitsLayout === "A"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              : "grid-cols-1 md:grid-cols-2",
          )}
        >
          {promoUltraContent.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "bg-blue-900/30 rounded-2xl p-6 flex flex-col h-full border border-transparent",
                "transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(0,200,255,0.15)]",
                activeIndex === index && "border-blue-500/50 shadow-[0_0_20px_rgba(0,200,255,0.2)]",
              )}
              onMouseEnter={() => {
                setActiveIndex(index)
                trackEvent("benefit_hover", { benefit_index: index, benefit_title: benefit.title })
              }}
              onMouseLeave={() => setActiveIndex(null)}
              data-test={`benefit-card-${index}`}
            >
              <div className="bg-blue-500/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {getIcon(benefit.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground mb-4">{benefit.description}</p>

              {/* Effort vs. Reward meter */}
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-400">Effort Required</span>
                  <span className="text-xs font-medium">{benefit.effortScore}/10</span>
                </div>
                <div className="h-1.5 bg-gray-800 rounded-full mb-3">
                  <div
                    className="h-full bg-red-500 rounded-full"
                    style={{ width: `${benefit.effortScore * 10}%` }}
                  ></div>
                </div>

                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-400">Reward Potential</span>
                  <span className="text-xs font-medium">{benefit.rewardScore}/10</span>
                </div>
                <div className="h-1.5 bg-gray-800 rounded-full">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${benefit.rewardScore * 10}%` }}
                  ></div>
                </div>
              </div>

              {/* Expanded tooltip that appears on hover */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="mt-4 pt-4 border-t border-gray-700"
                  >
                    <div className="flex items-center text-blue-400 text-sm font-medium cursor-pointer group">
                      Learn how this works
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-blue-900/20 rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Are You Facing These Challenges?</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {promoUltraContent.problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start"
              >
                <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-1" />
                <p>{problem}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
