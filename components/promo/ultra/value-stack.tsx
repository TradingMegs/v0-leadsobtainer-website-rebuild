"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check, Info, Package, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useExperiment } from "../high-conversion/experiment-provider"
import { promoUltraContent } from "@/lib/promo-ultra-content"
import { cn } from "@/lib/utils"

export function UltraValueStack() {
  const { variants, trackEvent } = useExperiment()
  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const getIcon = (index: number) => {
    const icons = [
      <Star key="star" className="h-6 w-6 text-blue-400" />,
      <Package key="package" className="h-6 w-6 text-blue-400" />,
      <ArrowRight key="arrow" className="h-6 w-6 text-blue-400" />,
      <Info key="info" className="h-6 w-6 text-blue-400" />,
    ]
    return icons[index % icons.length]
  }

  const calculateTotalValue = () => {
    const monthlyItems = promoUltraContent.valueStack.items.filter((item) => !item.oneTime)
    const oneTimeItems = promoUltraContent.valueStack.items.filter((item) => item.oneTime)

    const monthlyValue = monthlyItems.reduce((total, item) => total + item.value, 0)
    const oneTimeValue = oneTimeItems.reduce((total, item) => total + item.value, 0)

    return {
      monthly: monthlyValue,
      oneTime: oneTimeValue,
      total: monthlyValue * 3 + oneTimeValue, // 3 months value + one-time value
    }
  }

  const totalValue = calculateTotalValue()
  const yourTotalPrice =
    promoUltraContent.valueStack.yourPrice.monthly * 3 + promoUltraContent.valueStack.yourPrice.setup
  const savings = Math.round((1 - yourTotalPrice / totalValue.total) * 100)

  return (
    <section
      className="py-16 md:py-24 px-4 bg-black"
      data-section="value-stack"
      data-variant={`style-${variants.valueStackStyle}`}
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 blue-gradient-text" data-test="value-stack-headline">
            {promoUltraContent.valueStack.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{promoUltraContent.valueStack.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 mb-12">
          {promoUltraContent.valueStack.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "bg-blue-900/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10",
                expandedItem === index && "border-blue-500/50",
                variants.valueStackStyle === "B" && "hover:bg-blue-900/30 transition-colors duration-300",
              )}
              onClick={() => {
                setExpandedItem(expandedItem === index ? null : index)
                trackEvent("value_stack_item_click", { item_index: index, item_title: item.title })
              }}
            >
              <div className="flex items-start">
                <div className="bg-blue-500/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                  {getIcon(index)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <div className="inline-flex items-center bg-blue-500/20 rounded-full px-3 py-0.5 text-xs font-medium text-blue-300 mb-2">
                        {item.included}
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-sm text-gray-400">Value</div>
                      <div className="text-xl font-bold text-blue-400">
                        {formatCurrency(item.value)}
                        {!item.oneTime && "/mo"}
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {(expandedItem === index || variants.valueStackStyle === "B") && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-300 mt-2">{item.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {expandedItem !== index && variants.valueStackStyle !== "B" && (
                    <button
                      className="text-blue-400 text-sm font-medium flex items-center mt-1 hover:underline"
                      onClick={(e) => {
                        e.stopPropagation()
                        setExpandedItem(index)
                        trackEvent("value_stack_expand_click", { item_index: index, item_title: item.title })
                      }}
                    >
                      See details <ArrowRight className="ml-1 h-3 w-3" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Your Investment</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-gray-300">Total 3-Month Value:</span>
                  <span className="text-2xl font-bold">{formatCurrency(totalValue.total)}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-gray-300">One-Time Setup Fee:</span>
                  <span className="text-xl font-bold">
                    {formatCurrency(promoUltraContent.valueStack.yourPrice.setup)}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-gray-300">Monthly Investment:</span>
                  <span className="text-xl font-bold">
                    {formatCurrency(promoUltraContent.valueStack.yourPrice.monthly)}/mo
                  </span>
                </div>
                <div className="flex justify-between items-center text-blue-400">
                  <span className="font-bold">Your Savings:</span>
                  <span className="text-2xl font-bold">{savings}%</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {promoUltraContent.offer.guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center bg-blue-900/20 rounded-full px-3 py-1.5">
                    <Check className="h-4 w-4 text-blue-400 mr-1.5" />
                    <span className="text-sm">{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-500 text-white text-lg py-6 h-auto rounded-2xl"
                onClick={() => {
                  trackEvent("value_stack_cta_click")
                }}
              >
                <span className="flex items-center">
                  {promoUltraContent.offer.cta} <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>

              <Button
                variant="outline"
                className="w-full bg-background/20 hover:bg-background/30 backdrop-blur-sm text-white border-white/20 py-4 h-auto rounded-2xl"
                onClick={() => {
                  trackEvent("value_stack_secondary_cta_click")
                }}
              >
                {promoUltraContent.offer.secondaryCta}
              </Button>

              <div className="text-center text-sm text-gray-400">{promoUltraContent.offer.paymentOptions}</div>

              <div className="mt-4 p-4 bg-blue-900/20 rounded-xl">
                <p className="text-sm text-center">
                  <span className="font-bold text-blue-400">FREE BONUS:</span> Professional website ($1,997 value)
                  included with your subscription
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
