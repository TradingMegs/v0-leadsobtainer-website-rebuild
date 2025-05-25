"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight, Clock, Calendar, Users, BarChart3, Target } from "lucide-react"
import Link from "next/link"

export function BreakthroughSection() {
  const [activeTab, setActiveTab] = useState("overview")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px] opacity-20" />

      {/* Glowing orbs in background */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-lime-400">
              Breakthrough 90 Blueprint Elite
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven 90-day system to transform your business from struggling to thriving with predictable lead flow
              and automated client acquisition
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-16">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 md:grid-cols-5 w-full max-w-3xl">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="phase1">Phase 1</TabsTrigger>
              <TabsTrigger value="phase2">Phase 2</TabsTrigger>
              <TabsTrigger value="phase3">Phase 3</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={fadeIn}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">The Complete System</h3>
                  <p className="text-muted-foreground mb-6">
                    The Breakthrough 90 Blueprint Elite is our comprehensive system designed to transform your business
                    in just 90 days. Unlike other programs that offer piecemeal solutions, our blueprint addresses every
                    aspect of your customer acquisition process.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="bg-primary/20 p-2 rounded-full mr-4 flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">90-Day Transformation</h4>
                        <p className="text-sm text-muted-foreground">
                          A structured approach that delivers measurable results in just 90 days
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/20 p-2 rounded-full mr-4 flex-shrink-0">
                        <Target className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Proven 3-Phase System</h4>
                        <p className="text-sm text-muted-foreground">
                          Our methodology has been tested and refined with hundreds of businesses
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-primary/20 p-2 rounded-full mr-4 flex-shrink-0">
                        <BarChart3 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Predictable Growth</h4>
                        <p className="text-sm text-muted-foreground">
                          Create systems that deliver consistent results month after month
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button onClick={() => setActiveTab("phase1")} className="bg-primary hover:bg-primary/90">
                    Explore The Blueprint <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="bg-secondary/30 rounded-xl p-8 border border-primary/30 shadow-xl backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4">What You'll Achieve in 90 Days</h3>

                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>A fully automated lead generation system working 24/7</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>2-3x increase in qualified leads without increasing ad spend</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>40-60% reduction in cost per acquisition</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>AI-powered follow-up sequences that convert leads into customers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Streamlined sales process that closes deals more efficiently</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Clear metrics and analytics to track your ROI</span>
                    </li>
                  </ul>

                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Businesses helped:</span>
                      <span className="font-bold">1,247+</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Average ROI:</span>
                      <span className="font-bold">327%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Success rate:</span>
                      <span className="font-bold">94%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="phase1">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={fadeIn}
            >
              <Card className="bg-secondary/20 border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-primary">1</span>
                    </div>
                    <h3 className="text-2xl font-bold">Phase 1: Foundation (Days 1-30)</h3>
                  </div>

                  <p className="text-muted-foreground mb-8">
                    The first 30 days are focused on building the foundation for your automated lead generation system.
                    We'll analyze your market, identify your ideal customers, and set up the initial infrastructure.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-background/50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-primary" /> Week 1-2
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Market research & competitor analysis</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Ideal customer profile development</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Value proposition refinement</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Initial tech stack setup</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-background/50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-primary" /> Week 3
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Lead magnet creation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Landing page development</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Initial automation setup</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">CRM integration & configuration</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-background/50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-primary" /> Week 4
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Initial campaign launch</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Tracking & analytics setup</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Baseline metrics establishment</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Phase 1 review & optimization</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/10 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Phase 1 Deliverables:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Complete market analysis and competitive positioning</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Fully functional lead generation landing page</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Initial lead magnet and content assets</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Basic automation workflows and CRM setup</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button variant="outline" onClick={() => setActiveTab("overview")}>
                      Back to Overview
                    </Button>
                    <Button onClick={() => setActiveTab("phase2")}>
                      Next: Phase 2 <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="phase2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={fadeIn}
            >
              <Card className="bg-secondary/20 border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-primary">2</span>
                    </div>
                    <h3 className="text-2xl font-bold">Phase 2: Optimization (Days 31-60)</h3>
                  </div>

                  <p className="text-muted-foreground mb-8">
                    In Phase 2, we focus on optimizing your lead generation system based on initial data. We'll refine
                    targeting, improve conversion rates, and expand your automation capabilities.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-background/50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-primary" /> Week 5-6
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Data analysis from Phase 1</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Audience targeting refinement</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">A/B testing implementation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Conversion rate optimization</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-background/50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-primary" /> Week 7
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Advanced automation sequences</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Multi-channel integration</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Lead scoring implementation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Sales process optimization</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-background/50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-primary" /> Week 8
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">AI chatbot implementation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Retargeting campaign setup</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Performance metrics review</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Phase 2 review & optimization</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/10 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Phase 2 Deliverables:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Optimized lead generation campaigns with improved targeting</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Advanced automation workflows across multiple channels</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>AI-powered lead qualification and scoring system</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Initial results showing 30-50% improvement in key metrics</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button variant="outline" onClick={() => setActiveTab("phase1")}>
                      Back to Phase 1
                    </Button>
                    <Button onClick={() => setActiveTab("phase3")}>
                      Next: Phase 3 <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="phase3">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={fadeIn}
            >
              <Card className="bg-secondary/20 border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-primary">3</span>
                    </div>
                    <h3 className="text-2xl font-bold">Phase 3: Scaling (Days 61-90)</h3>
                  </div>

                  <p className="text-muted-foreground mb-8">
                    The final phase focuses on scaling your lead generation system for maximum impact. We'll implement
                    advanced AI features, expand your reach, and ensure your system is set up for long-term success.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-background/50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-primary" /> Week 9-10
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Advanced AI implementation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Predictive analytics setup</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Channel expansion strategy</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Scaling campaign budgets</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-background/50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-primary" /> Week 11
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Customer journey refinement</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Upsell/cross-sell automation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Referral system implementation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Customer retention strategies</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-background/50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-primary" /> Week 12
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Final system review</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Team training & handover</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Long-term strategy planning</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Final results presentation</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/10 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Phase 3 Deliverables:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Fully automated lead generation system with AI optimization</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Complete customer journey from lead to loyal customer</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Comprehensive analytics dashboard and reporting</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>Documented processes and training for your team</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button variant="outline" onClick={() => setActiveTab("phase2")}>
                      Back to Phase 2
                    </Button>
                    <Button onClick={() => setActiveTab("results")}>
                      See Results <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="results">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={fadeIn}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Proven Results</h3>
                  <p className="text-muted-foreground mb-6">
                    After completing the Breakthrough 90 Blueprint Elite, our clients consistently achieve remarkable
                    results that transform their businesses. Here's what you can expect:
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="bg-secondary/30 p-6 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Users className="h-6 w-6 text-primary mr-3" />
                        <h4 className="text-lg font-semibold">Lead Generation</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Our clients typically see a 2-3x increase in qualified leads without increasing their marketing
                        budget.
                      </p>
                      <div className="w-full bg-background/50 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "85%" }}></div>
                      </div>
                      <div className="flex justify-between text-xs mt-1">
                        <span>Before</span>
                        <span className="font-medium">+215% Average Improvement</span>
                      </div>
                    </div>

                    <div className="bg-secondary/30 p-6 rounded-lg">
                      <div className="flex items-center mb-2">
                        <BarChart3 className="h-6 w-6 text-primary mr-3" />
                        <h4 className="text-lg font-semibold">Conversion Rate</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Conversion rates from lead to customer typically improve by 40-60% through our optimized
                        processes.
                      </p>
                      <div className="w-full bg-background/50 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "65%" }}></div>
                      </div>
                      <div className="flex justify-between text-xs mt-1">
                        <span>Before</span>
                        <span className="font-medium">+52% Average Improvement</span>
                      </div>
                    </div>

                    <div className="bg-secondary/30 p-6 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Clock className="h-6 w-6 text-primary mr-3" />
                        <h4 className="text-lg font-semibold">Time Savings</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Business owners save an average of 15-20 hours per week through our automation systems.
                      </p>
                      <div className="w-full bg-background/50 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "75%" }}></div>
                      </div>
                      <div className="flex justify-between text-xs mt-1">
                        <span>Before</span>
                        <span className="font-medium">18.5 Hours Saved Weekly (Average)</span>
                      </div>
                    </div>
                  </div>

                  <Link href="/get-started">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                      Start Your 90-Day Transformation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                <div className="space-y-6">
                  <Card className="bg-secondary/20 border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="bg-primary/20 p-3 rounded-full mr-4">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Case Study: Local Dental Practice</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            "We were struggling to get new patients until we implemented the Breakthrough 90 Blueprint.
                            Within 3 months, we went from 8-10 new patients per month to over 35, without increasing our
                            marketing budget."
                          </p>
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">Results:</span>
                            <span className="text-primary font-bold">+337% new patients</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-secondary/20 border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="bg-primary/20 p-3 rounded-full mr-4">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Case Study: Home Services Company</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            "Before LeadsObtainer, we were spending $3,200 per month on ads with inconsistent results.
                            After implementing the Blueprint, we're now spending $2,800 and getting 3x the leads. Our
                            cost per acquisition dropped from $287 to $89."
                          </p>
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">Results:</span>
                            <span className="text-primary font-bold">69% reduction in CPA</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-secondary/20 border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="bg-primary/20 p-3 rounded-full mr-4">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Case Study: Law Firm</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            "The AI-powered follow-up system has been a game-changer for our practice. We're now
                            converting 42% of our consultations into clients, up from 18% before. The system follows up
                            automatically so nothing falls through the cracks."
                          </p>
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">Results:</span>
                            <span className="text-primary font-bold">133% increase in conversion rate</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Link href="/get-started">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              Apply for Your Breakthrough 90 Blueprint
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            Limited spots available. Application required to ensure we can deliver results for your business.
          </p>
        </div>
      </div>
    </section>
  )
}
