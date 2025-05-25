"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Play, CheckCircle, ArrowRight } from "lucide-react"
import { HeroForm } from "./HeroForm"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { cn } from "@/lib/utils"

const industries = [
  "Dental Practices",
  "Law Firms",
  "Real Estate Agents",
  "Home Services",
  "Medical Clinics",
  "Financial Advisors",
  "Fitness Studios",
  "Restaurants",
]

const heroStats = [
  { label: "Average Revenue Growth", value: "317%" },
  { label: "Lead Generation Increase", value: "243%" },
  { label: "Cost Per Lead Reduction", value: "58%" },
]

export function EnhancedHero({ onPlayVideo }) {
  const [currentIndustry, setCurrentIndustry] = useState(0)
  const [count, setCount] = useState(0)
  const [activeTab, setActiveTab] = useState(0)
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndustry((prev) => (prev + 1) % industries.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 317) {
        setCount((prev) => Math.min(prev + Math.ceil(317 / 50), 317))
      }
    }, 30)
    return () => clearInterval(interval)
  }, [count])

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % heroStats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <section className="w-full py-12 md:py-20 lg:py-28 relative overflow-hidden">
      <BackgroundBeams className="absolute inset-0 z-0 opacity-40" />

      {/* Animated particles/dots in background */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-lime-500/30"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.3,
              }}
              animate={{
                x: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
                y: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_450px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-lime-500/10 text-lime-500 border border-lime-500/20 mb-2 self-start">
              <span className="text-sm font-medium">AI-Powered Growth System</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl xl:text-6xl/none">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-600">
                  Triple Your Local Business Revenue in 90 Days
                </span>
              </h1>

              <div className="flex flex-wrap gap-4 mt-6">
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    custom={index}
                    initial="hidden"
                    animate={activeTab === index ? "visible" : "hidden"}
                    variants={statsVariants}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300",
                      activeTab === index ? "bg-lime-500/10 border border-lime-500/20" : "bg-transparent",
                    )}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-lime-500 tabular-nums">{stat.value}</div>
                    <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <p className="max-w-[600px] text-gray-300 text-lg md:text-xl">
                Our AI-powered growth system{" "}
                <span className="font-semibold text-white">
                  automates your marketing, sales, and client acquisition
                </span>{" "}
                — guaranteed results or you don't pay.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <motion.a
                  href="#get-started"
                  className="inline-flex h-12 md:h-14 items-center justify-center rounded-md bg-lime-500 px-6 text-base md:text-lg font-medium text-black transition-colors hover:bg-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-umami-event="hero-cta-click"
                >
                  Get Your Free Growth Plan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.a>

                <motion.button
                  onClick={onPlayVideo}
                  className="inline-flex h-12 md:h-14 items-center justify-center rounded-md border border-lime-500/20 bg-black/20 px-6 text-base md:text-lg font-medium text-lime-400 transition-colors hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-umami-event="hero-video-click"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch 2-Min Demo
                </motion.button>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mt-4">
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-5 w-5 text-lime-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-5 w-5 text-lime-500" />
                  <span>Setup in 30 minutes</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="h-5 w-5 text-lime-500" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col justify-center space-y-4">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="relative"
            >
              {/* 3D-like dashboard visualization */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="bg-black/40 backdrop-blur-sm border border-lime-500/20 rounded-xl p-4 md:p-6 shadow-xl relative z-20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-400">LeadsObtainer Dashboard</div>
                </div>

                <div className="space-y-4">
                  <div className="h-8 bg-lime-500/10 rounded-md w-3/4 animate-pulse"></div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-20 bg-lime-500/5 rounded-md flex flex-col items-center justify-center">
                      <div className="text-2xl font-bold text-lime-500">+43%</div>
                      <div className="text-xs text-gray-400">Leads</div>
                    </div>
                    <div className="h-20 bg-lime-500/5 rounded-md flex flex-col items-center justify-center">
                      <div className="text-2xl font-bold text-lime-500">+67%</div>
                      <div className="text-xs text-gray-400">Conversion</div>
                    </div>
                    <div className="h-20 bg-lime-500/5 rounded-md flex flex-col items-center justify-center">
                      <div className="text-2xl font-bold text-lime-500">-31%</div>
                      <div className="text-xs text-gray-400">Cost</div>
                    </div>
                  </div>

                  <div className="h-32 bg-lime-500/5 rounded-md p-2">
                    <div className="flex justify-between items-end h-full pb-2">
                      <div className="w-[10%] h-[30%] bg-lime-500/30 rounded-sm"></div>
                      <div className="w-[10%] h-[45%] bg-lime-500/30 rounded-sm"></div>
                      <div className="w-[10%] h-[60%] bg-lime-500/30 rounded-sm"></div>
                      <div className="w-[10%] h-[40%] bg-lime-500/30 rounded-sm"></div>
                      <div className="w-[10%] h-[70%] bg-lime-500/30 rounded-sm"></div>
                      <div className="w-[10%] h-[90%] bg-lime-500 rounded-sm"></div>
                      <div className="w-[10%] h-[75%] bg-lime-500 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
                }}
                className="absolute -left-4 top-1/4 h-20 w-20 rounded-lg bg-lime-500/5 border border-lime-500/10 -z-10"
              ></motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } },
                }}
                className="absolute -right-4 bottom-1/4 h-16 w-16 rounded-lg bg-lime-500/5 border border-lime-500/10 -z-10"
              ></motion.div>
            </motion.div>

            <div className="space-y-2 mt-4">
              <h2 className="text-xl md:text-2xl font-bold">
                Perfect for{" "}
                <motion.span
                  key={currentIndustry}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-lime-400"
                >
                  {industries[currentIndustry]}
                </motion.span>
              </h2>
            </div>
            <HeroForm />
          </div>
        </div>
      </div>
    </section>
  )
}
