"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Star } from "lucide-react"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"

const content = [
  {
    title: "Breakthrough 90 Blueprint Elite",
    description:
      "A comprehensive, fully customized marketing and digital transformation system that propels your business to the forefront of your competition.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white p-6 rounded-lg">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Breakthrough 90 Blueprint Elite</h3>
          <p className="text-sm opacity-90 mb-4">Complete transformation in 90 days</p>
          <div className="text-2xl font-bold">$27,500</div>
          <p className="text-xs mt-1 opacity-80">Perceived Value</p>
        </div>
      </div>
    ),
  },
  {
    title: "Elite Business Growth Strategy Session",
    description:
      "During your 60-minute session with our founder and digital strategist, we'll do a comprehensive review of your business, find the weaknesses you can exploit, and create a 6-month action plan.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white p-6 rounded-lg">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Elite Business Growth Strategy</h3>
          <p className="text-sm opacity-90 mb-4">60-minute deep dive session</p>
          <div className="text-2xl font-bold">$3,997</div>
          <p className="text-xs mt-1 opacity-80">Perceived Value</p>
        </div>
      </div>
    ),
  },
  {
    title: "AI Employee Assistant System",
    description:
      "Our AI assistant is designed to automate and scale your most normal workflows and communications. This intelligent system continuously learns your business, handles customer inquiries, books, and more.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] text-white p-6 rounded-lg">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">AI Employee Assistant</h3>
          <p className="text-sm opacity-90 mb-4">24/7 automated support</p>
          <div className="text-2xl font-bold">$3,997</div>
          <p className="text-xs mt-1 opacity-80">Perceived Value</p>
        </div>
      </div>
    ),
  },
  {
    title: "Expedited Priority Build",
    description:
      "We get your entire Sales machine built in just 14 weeks. Jump quicker to some of the highest converting campaigns that we've built for your market.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white p-6 rounded-lg">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Expedited Priority Build</h3>
          <p className="text-sm opacity-90 mb-4">Fast-track implementation</p>
          <div className="text-2xl font-bold">$1,997</div>
          <p className="text-xs mt-1 opacity-80">Perceived Value</p>
        </div>
      </div>
    ),
  },
  {
    title: "100% Money-Back Guarantee",
    description:
      "We're so confident you'll love our system that we're offering a risk-free money-back offer for your first 30 days. Plus, we'll even cover your first month if you're not completely satisfied!",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white p-6 rounded-lg">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">100% Money-Back Guarantee</h3>
          <p className="text-sm opacity-90 mb-4">Risk-free investment</p>
          <div className="text-2xl font-bold">Priceless</div>
          <p className="text-xs mt-1 opacity-80">Peace of Mind</p>
        </div>
      </div>
    ),
  },
]

export function PromoValue() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  }

  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black z-0"></div>

      <div className="container mx-auto max-w-6xl relative z-10" ref={ref}>
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#c1ff00]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Star className="h-4 w-4 text-[#c1ff00]" fill="currentColor" />
              <span className="text-sm">CORE PROGRAM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Path to High-Paying Clients</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Everything you need to transform your local business and dominate your market.
            </p>
          </motion.div>

          <div className="mb-16">
            <StickyScroll content={content} />
          </div>

          <motion.div
            variants={itemVariants}
            className="bg-[#c1ff00] text-black p-8 rounded-lg shadow-[0_0_30px_rgba(193,255,0,0.2)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Your Elite Investment:</h3>
                <div className="flex items-center mb-2">
                  <span className="text-3xl font-bold mr-3">$4,997</span>
                  <span className="bg-black text-white text-sm px-3 py-1 rounded">One-Time Setup</span>
                </div>
                <p className="text-sm mb-4">Then just $497/month after your first 30 days</p>

                <div className="space-y-3 mt-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Risk-Free 60-Day Guarantee</p>
                      <p className="text-xs">If you're not satisfied, we'll refund your investment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Complete Implementation</p>
                      <p className="text-xs">Our team handles everything for you</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Dedicated Support</p>
                      <p className="text-xs">Direct access to our expert team</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button className="w-full bg-black hover:bg-gray-800 text-white text-lg py-6 font-bold">
                    GET INSTANT ACCESS NOW →
                  </Button>
                </motion.div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <Button variant="outline" className="border-black text-black hover:bg-black/10">
                    Schedule a Call
                  </Button>
                  <Button variant="outline" className="border-black text-black hover:bg-black/10">
                    Pay in Full (Save 10%)
                  </Button>
                </div>

                <p className="text-xs text-center mt-4">
                  Just 4% of the Total Value – Cheaper Than Hiring a Part-Time Employee!
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
