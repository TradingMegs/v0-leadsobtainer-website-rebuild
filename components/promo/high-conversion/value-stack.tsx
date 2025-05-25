"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check, Gift, Info, Package, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useExperiment } from "./experiment-provider"
import { promoContent } from "@/lib/promo-content"
import { cn } from "@/lib/utils"

export function ValueStack() {
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
      <Star key="star" className="h-6 w-6 text-primary" />,
      <Package key="package" className="h-6 w-6 text-primary" />,
      <ArrowRight key="arrow" className="h-6 w-6 text-primary" />,
      <Info key="info" className="h-6 w-6 text-primary" />,
      <Gift key="gift" className="h-6 w-6 text-primary" />,
      <Shield key="shield" className="h-6 w-6 text-primary" />,
    ]
    return icons[index % icons.length]
  }

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text" data-test="value-stack-headline">
            {promoContent.valueStack.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{promoContent.valueStack.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 mb-12">
          {promoContent.valueStack.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "bg-secondary/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10",
                expandedItem === index && "border-primary/50",
                variants.valueStackStyle === "B" && "hover:bg-secondary/30 transition-colors duration-300",
              )}
              onClick={() => {
                setExpandedItem(expandedItem === index ? null : index)
                trackEvent("value_stack_item_click", { item_index: index, item_title: item.title })
              }}
            >
              <div className="flex items-start">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 shrink-0">
                  {getIcon(index)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <div className="text-right ml-4">
                      <div className="text-sm text-gray-400">Value</div>
                      <div className="text-xl font-bold text-primary">
                        {typeof item.value === "number" ? formatCurrency(item.value) : item.value}
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
                      className="text-primary text-sm font-medium flex items-center mt-1 hover:underline"
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
          className="bg-primary/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/30"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Your Investment</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-gray-300">Total Value:</span>
                  <span className="text-2xl font-bold">{formatCurrency(promoContent.valueStack.totalValue)}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-gray-300">One-Time Setup Fee:</span>
                  <span className="text-xl font-bold">{formatCurrency(promoContent.valueStack.yourPrice.setup)}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="text-gray-300">Monthly Investment:</span>
                  <span className="text-xl font-bold">
                    {formatCurrency(promoContent.valueStack.yourPrice.monthly)}/mo
                  </span>
                </div>
                <div className="flex justify-between items-center text-primary">
                  <span className="font-bold">Your Savings:</span>
                  <span className="text-2xl font-bold">{promoContent.valueStack.savings}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {promoContent.offer.guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center bg-secondary/20 rounded-full px-3 py-1.5">
                    <Check className="h-4 w-4 text-primary mr-1.5" />
                    <span className="text-sm">{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 h-auto rounded-2xl"
                onClick={() => {
                  trackEvent("value_stack_cta_click")
                }}
              >
                <span className="flex items-center">
                  {promoContent.offer.cta} <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>

              <Button
                variant="outline"
                className="w-full bg-background/20 hover:bg-background/30 backdrop-blur-sm text-white border-white/20 py-4 h-auto rounded-2xl"
                onClick={() => {
                  trackEvent("value_stack_secondary_cta_click")
                }}
              >
                {promoContent.offer.secondaryCta}
              </Button>

              <div className="text-center text-sm text-gray-400">{promoContent.offer.paymentOptions}</div>

              <div className="mt-4 p-4 bg-secondary/20 rounded-xl">
                <p className="text-sm text-center">{promoContent.offer.alternativeOffer.text}</p>
                <button
                  className="text-primary text-sm font-medium flex items-center justify-center mt-2 hover:underline mx-auto"
                  onClick={() => {
                    trackEvent("value_stack_alternative_offer_click")
                  }}
                >
                  Learn more about the {promoContent.offer.alternativeOffer.linkText}{" "}
                  <ArrowRight className="ml-1 h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
