"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Shield } from "lucide-react"
import { GlowBackground } from "@/components/ui/glow-background"
import { useExperiment } from "./experiment-provider"
import { promoContent } from "@/lib/promo-content"

export function OfferDetails() {
  const { trackEvent, trackConversion } = useExperiment()

  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden">
      <GlowBackground color="primary" intensity="low" position="bottom" className="absolute inset-0" />

      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text" data-test="offer-headline">
              {promoContent.offer.title}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">{promoContent.offer.description}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6 mb-8">
                {promoContent.offer.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start bg-secondary/20 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-primary/30 transition-all duration-300"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="bg-primary/20 p-2 rounded-full mr-4">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-secondary/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl"
              data-test="pricing-card"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Complete transformation in 90 days</h3>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-gray-400 text-sm line-through mr-2">
                    {promoContent.offer.pricing.originalValue}
                  </span>
                  <span className="text-gray-300 text-sm">Perceived Value</span>
                </div>
              </div>

              <div className="bg-secondary/50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-white mb-4">Your Elite Investment:</h4>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-3xl md:text-4xl font-bold text-primary">
                    {promoContent.offer.pricing.currentPrice}
                  </span>
                </div>
                <p className="text-center text-gray-400 mb-4">One-Time Setup</p>
                <p className="text-center text-gray-300 mb-6">
                  Then just {promoContent.offer.pricing.recurringPrice} after your first 30 days
                </p>
                <p className="text-center text-sm text-gray-400 mb-2">
                  Just {promoContent.offer.pricing.valuePercentage} of the Total Value – Cheaper Than Hiring a Part-Time
                  Employee!
                </p>
                <p className="text-center text-sm text-primary mb-4">{promoContent.offer.pricing.dailyPrice}</p>
              </div>

              <div className="space-y-4 mb-6">
                {promoContent.offer.guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3" />
                    <span className="text-gray-300">{guarantee}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-semibold rounded-2xl group relative overflow-hidden"
                  data-test="main-cta-button"
                  onClick={() => {
                    trackEvent("main_cta_click")
                    trackConversion("main-cta-button")
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    {promoContent.offer.cta}{" "}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 py-3 rounded-2xl"
                  data-test="secondary-cta-button"
                  onClick={() => {
                    trackEvent("secondary_cta_click")
                    trackConversion("secondary-cta-button", 0.5)
                  }}
                >
                  {promoContent.offer.secondaryCta}
                </Button>

                <Button
                  variant="link"
                  className="w-full text-primary hover:text-primary/90"
                  data-test="tertiary-cta-button"
                  onClick={() => {
                    trackEvent("tertiary_cta_click")
                    trackConversion("tertiary-cta-button", 0.3)
                  }}
                >
                  {promoContent.offer.tertiaryCta}
                </Button>
              </div>

              <div className="mt-6">
                <p className="text-center text-sm text-gray-400">
                  {promoContent.offer.alternativeOffer.text.split(promoContent.offer.alternativeOffer.linkText)[0]}
                  <span
                    className="text-primary hover:underline cursor-pointer"
                    onClick={() => {
                      trackEvent("pro_plan_click")
                      trackConversion("pro-plan-link", 0.2)
                    }}
                  >
                    {promoContent.offer.alternativeOffer.linkText}
                  </span>
                  {promoContent.offer.alternativeOffer.text.split(promoContent.offer.alternativeOffer.linkText)[1]}
                </p>
                <p className="text-center text-sm text-gray-400 mt-2">{promoContent.offer.paymentOptions}</p>
              </div>

              <div className="flex items-center justify-center mt-6 text-xs text-gray-500">
                <Shield className="h-4 w-4 mr-1" />
                <span>Secure Payment</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
