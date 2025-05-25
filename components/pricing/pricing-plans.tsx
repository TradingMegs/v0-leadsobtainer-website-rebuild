"use client"

import { useState } from "react"
import { Check, X, CreditCard, Shield, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function PricingPlans() {
  const [isAnnual, setIsAnnual] = useState(false)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-background/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px] opacity-20" />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Transparent Pricing, Guaranteed Results</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our risk-free guarantee - you only pay if
            we deliver results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Partner Plan */}
          <motion.div
            className="bg-secondary/30 rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 flex flex-col h-full backdrop-blur-sm"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Partner</h3>
              <p className="text-muted-foreground mb-4">Perfect for small local businesses just getting started</p>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold">$297</span>
                <span className="text-muted-foreground ml-2">/month</span>
              </div>
              <div className="text-base font-medium text-white/80 mb-2">
                <span className="text-xl font-bold">$1,497</span> one-time setup fee
              </div>
              <div className="text-sm text-primary mb-4">Just $9.90 per day</div>
              <Link href="/checkout?plan=partner">
                <Button className="w-full bg-secondary hover:bg-secondary/80 text-white">Get Started</Button>
              </Link>
            </div>
            <div className="space-y-3 flex-grow">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>AI-powered lead generation system with 24/7 operation</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Basic marketing automation with email & SMS sequences</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Entry-level AI chatbot for website visitor engagement</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Email sequences & follow-ups (up to 5 sequences)</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Monthly strategy calls (60 min) with growth specialist</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Email & chat support (24-hour response time)</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>60-day money-back guarantee</span>
              </div>
              <div className="flex items-start">
                <X className="h-5 w-5 text-muted-foreground mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Advanced AI automation</span>
              </div>
              <div className="flex items-start">
                <X className="h-5 w-5 text-muted-foreground mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Multi-channel campaigns</span>
              </div>
            </div>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            className="bg-primary/10 rounded-lg p-6 border border-primary relative flex flex-col h-full transform hover:scale-105 transition-all duration-300 z-10 shadow-xl shadow-primary/20 backdrop-blur-sm"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                Most Popular
              </span>
            </div>
            <div className="mb-6 pt-2">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-muted-foreground mb-4">Ideal for established businesses ready to scale</p>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold">$497</span>
                <span className="text-muted-foreground ml-2">/month</span>
              </div>
              <div className="text-base font-medium text-white/80 mb-2">
                <span className="text-xl font-bold">$2,997</span> one-time setup fee
              </div>
              <div className="text-sm text-primary mb-4">Just $16.50 per day</div>
              <Link href="/checkout?plan=pro">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
              </Link>
            </div>
            <div className="space-y-3 flex-grow">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Everything in Partner plan</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Advanced AI automation with personalized customer journeys</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Custom growth plan tailored to your business goals</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Advanced AI chatbot with custom training & integrations</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Multi-channel lead generation (social, email, SMS, web)</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Sales automation with lead scoring & qualification</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Workflow automation for business processes</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Weekly strategy calls with dedicated specialist</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Priority support (4-hour response time)</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>60-day money-back guarantee</span>
              </div>
            </div>
            <div className="mt-4 text-sm">
              <p className="text-center text-primary">Pay in 3 interest-free monthly installments of $999 for setup</p>
            </div>
          </motion.div>

          {/* Elite Plan */}
          <motion.div
            className="bg-secondary/30 rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 flex flex-col h-full backdrop-blur-sm"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Elite</h3>
              <p className="text-muted-foreground mb-4">For businesses that demand the absolute best results</p>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-bold">$797</span>
                <span className="text-muted-foreground ml-2">/month</span>
              </div>
              <div className="text-base font-medium text-white/80 mb-2">
                <span className="text-xl font-bold">$4,997</span> one-time setup fee
              </div>
              <div className="text-sm text-primary mb-4">Just $26.50 per day</div>
              <Link href="/checkout?plan=elite">
                <Button className="w-full bg-secondary hover:bg-secondary/80 text-white">Get Started</Button>
              </Link>
            </div>
            <div className="space-y-3 flex-grow">
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Everything in Pro plan</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Fully customized growth plan with quarterly reviews</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Enterprise-grade AI chatbot with advanced integrations</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Multi-location support for franchise businesses</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Advanced workflow automation with custom triggers</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Premium reporting & analytics dashboard</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Dedicated account manager & success team</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Unlimited strategy calls & quarterly business reviews</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>VIP support with 1-hour response time</span>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>60-day money-back guarantee</span>
              </div>
            </div>
            <div className="mt-4 text-sm">
              <p className="text-center text-primary">
                Pay in 3 interest-free monthly installments of $1,666 for setup
              </p>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <div className="flex items-center bg-secondary/20 px-6 py-3 rounded-lg backdrop-blur-sm">
              <Shield className="h-8 w-8 text-primary mr-3" />
              <div>
                <h4 className="font-medium">Secure Payments</h4>
                <p className="text-xs text-muted-foreground">256-bit SSL encryption</p>
              </div>
            </div>
            <div className="flex items-center bg-secondary/20 px-6 py-3 rounded-lg backdrop-blur-sm">
              <Award className="h-8 w-8 text-primary mr-3" />
              <div>
                <h4 className="font-medium">60-Day Guarantee</h4>
                <p className="text-xs text-muted-foreground">Risk-free results guarantee</p>
              </div>
            </div>
            <div className="flex items-center bg-secondary/20 px-6 py-3 rounded-lg backdrop-blur-sm">
              <CreditCard className="h-8 w-8 text-primary mr-3" />
              <div className="flex flex-col">
                <h4 className="font-medium">Payment Methods</h4>
                <div className="flex space-x-2 mt-1">
                  <div className="bg-white rounded px-2 py-1">
                    <svg className="h-8 w-auto" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M44 11H4V37H44V11Z" fill="white" />
                      <path
                        d="M16 28.5C18.4853 28.5 20.5 26.4853 20.5 24C20.5 21.5147 18.4853 19.5 16 19.5C13.5147 19.5 11.5 21.5147 11.5 24C11.5 26.4853 13.5147 28.5 16 28.5Z"
                        fill="#EB001B"
                      />
                      <path
                        d="M32 28.5C34.4853 28.5 36.5 26.4853 36.5 24C36.5 21.5147 34.4853 19.5 32 19.5C29.5147 19.5 27.5 21.5147 27.5 24C27.5 26.4853 29.5147 28.5 32 28.5Z"
                        fill="#F79E1B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24 27.2623C22.7789 26.2429 22 24.7114 22 23C22 21.2886 22.7789 19.7571 24 18.7377C25.2211 19.7571 26 21.2886 26 23C26 24.7114 25.2211 26.2429 24 27.2623Z"
                        fill="#FF5F00"
                      />
                    </svg>
                  </div>
                  <div className="bg-white rounded px-2 py-1">
                    <svg className="h-8 w-auto" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M44 11H4V37H44V11Z" fill="white" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M19.3 18.7H28.7V29.4H19.3V18.7Z" fill="#0066B2" />
                      <path
                        d="M19.9 24.05C19.9 22.2 20.8 20.6 22.2 19.7C21.5 19.1 20.6 18.75 19.6 18.75C17.3 18.75 15.5 21.15 15.5 24.05C15.5 26.95 17.3 29.35 19.6 29.35C20.6 29.35 21.5 29 22.2 28.4C20.8 27.55 19.9 25.9 19.9 24.05Z"
                        fill="#0066B2"
                      />
                      <path
                        d="M32.5 24.05C32.5 26.95 30.7 29.35 28.4 29.35C27.4 29.35 26.5 29 25.8 28.4C27.2 27.5 28.1 25.9 28.1 24.05C28.1 22.2 27.2 20.6 25.8 19.7C26.5 19.1 27.4 18.75 28.4 18.75C30.7 18.75 32.5 21.2 32.5 24.05Z"
                        fill="#0066B2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Not sure which plan is right for you? Schedule a free consultation with our team to get personalized
            recommendations.
          </p>
          <Link href="/booking">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
              Book a Free Strategy Call
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
