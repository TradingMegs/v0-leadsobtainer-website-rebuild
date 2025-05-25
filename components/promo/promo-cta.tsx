"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { GlowBackground } from "@/components/ui/glow-background"

export function PromoCTA() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <GlowBackground color="primary" intensity="low" position="bottom" className="absolute inset-0" />

      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Breakthrough 90 Blueprint Elite</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A comprehensive, fully customized marketing and digital transformation system that propels your business
              to the forefront of your competition.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6 mb-8">
                  <div className="flex items-start bg-secondary/20 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <div className="bg-primary/20 p-2 rounded-full mr-4">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Elite Business Growth Strategy Session</h3>
                      <p className="text-gray-400">
                        During your 60-minute session with our founder and digital strategist, we'll do a comprehensive
                        review of your business, find the weaknesses you can exploit, and create a 6-month action plan.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-secondary/20 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <div className="bg-primary/20 p-2 rounded-full mr-4">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">AI Employee Assistant System</h3>
                      <p className="text-gray-400">
                        Our AI assistant is designed to automate and scale your most normal workflows and
                        communications. This intelligent system continuously learns your business, handles customer
                        inquiries, books, and more.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-secondary/20 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <div className="bg-primary/20 p-2 rounded-full mr-4">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Expedited Priority Build</h3>
                      <p className="text-gray-400">
                        We get your entire Sales machine built in just 14 weeks. Jump quicker to some of the highest
                        converting campaigns that we've built for your market.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-secondary/20 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <div className="bg-primary/20 p-2 rounded-full mr-4">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">100% Money-Back Guarantee</h3>
                      <p className="text-gray-400">
                        We're so confident you'll love our system that we're offering a risk-free money-back offer for
                        your first 60 days. Plus, we'll even cover your first month if you're not completely satisfied!
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-secondary/30 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-xl"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Complete transformation in 90 days</h3>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-gray-400 text-sm line-through mr-2">$27,500</span>
                  <span className="text-gray-300 text-sm">Perceived Value</span>
                </div>
              </div>

              <div className="bg-secondary/50 rounded-lg p-6 mb-6">
                <h4 className="text-xl font-semibold text-white mb-4">Your Elite Investment:</h4>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-3xl md:text-4xl font-bold text-primary">$4,997</span>
                </div>
                <p className="text-center text-gray-400 mb-4">One-Time Setup</p>
                <p className="text-center text-gray-300 mb-6">Then just $497/month after your first 30 days</p>
                <p className="text-center text-sm text-gray-400 mb-2">
                  Just 4% of the Total Value – Cheaper Than Hiring a Part-Time Employee!
                </p>
                <p className="text-center text-sm text-primary mb-4">Only $16.50 per day</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  <span className="text-gray-300">Risk-Free 60-Day Guarantee</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  <span className="text-gray-300">Complete Implementation</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3" />
                  <span className="text-gray-300">Dedicated Support</span>
                </div>
              </div>

              <div className="space-y-4">
                <Link href="/checkout?plan=elite">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-semibold">
                    GET INSTANT ACCESS NOW <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/booking">
                  <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 py-3">
                    Schedule a Call
                  </Button>
                </Link>
                <Link href="/checkout?plan=elite&discount=10">
                  <Button variant="link" className="w-full text-primary hover:text-primary/90">
                    Pay in Full (Save 10%)
                  </Button>
                </Link>
              </div>

              <div className="mt-6">
                <p className="text-center text-sm text-gray-400">
                  Not ready for the Elite plan? Try our{" "}
                  <Link href="/pricing" className="text-primary hover:underline">
                    Pro plan
                  </Link>{" "}
                  at $2,997 setup + $497/month
                </p>
                <p className="text-center text-sm text-gray-400 mt-2">Or pay in 3 interest-free monthly installments</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
