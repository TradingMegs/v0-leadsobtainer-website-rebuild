"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
  Area,
  AreaChart,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ArrowRight, TrendingUp, DollarSign, Users, BarChart3 } from "lucide-react"

export function ResultsShowcase() {
  const [activeTab, setActiveTab] = useState("revenue")
  const [animateChart, setAnimateChart] = useState(false)
  const [hoveredBar, setHoveredBar] = useState<number | null>(null)
  const [chartType, setChartType] = useState<"bar" | "line" | "area">("bar")
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      setAnimateChart(true)
      controls.start("visible")
    }
  }, [isInView, controls])

  const revenueData = [
    { month: "Jan", before: 10000, after: 15000 },
    { month: "Feb", before: 12000, after: 22000 },
    { month: "Mar", before: 9000, after: 25000 },
    { month: "Apr", before: 11000, after: 28000 },
    { month: "May", before: 10500, after: 32000 },
    { month: "Jun", before: 11500, after: 35000 },
  ]

  const leadsData = [
    { month: "Jan", before: 20, after: 45 },
    { month: "Feb", before: 25, after: 65 },
    { month: "Mar", before: 18, after: 80 },
    { month: "Apr", before: 22, after: 95 },
    { month: "May", before: 24, after: 110 },
    { month: "Jun", before: 26, after: 125 },
  ]

  const costData = [
    { month: "Jan", before: 250, after: 180 },
    { month: "Feb", before: 240, after: 160 },
    { month: "Mar", before: 260, after: 150 },
    { month: "Apr", before: 245, after: 130 },
    { month: "May", before: 255, after: 120 },
    { month: "Jun", before: 250, after: 110 },
  ]

  const getActiveData = () => {
    switch (activeTab) {
      case "revenue":
        return revenueData
      case "leads":
        return leadsData
      case "cost":
        return costData
      default:
        return revenueData
    }
  }

  const getChartTitle = () => {
    switch (activeTab) {
      case "revenue":
        return "Monthly Revenue Growth"
      case "leads":
        return "Monthly Lead Generation"
      case "cost":
        return "Cost Per Lead Reduction"
      default:
        return "Monthly Revenue Growth"
    }
  }

  const getChartIcon = () => {
    switch (activeTab) {
      case "revenue":
        return <DollarSign className="h-5 w-5 text-lime-500" />
      case "leads":
        return <Users className="h-5 w-5 text-lime-500" />
      case "cost":
        return <TrendingUp className="h-5 w-5 text-lime-500" />
      default:
        return <DollarSign className="h-5 w-5 text-lime-500" />
    }
  }

  const formatYAxis = (value) => {
    if (activeTab === "revenue") {
      return `$${value / 1000}k`
    } else if (activeTab === "cost") {
      return `$${value}`
    }
    return value
  }

  const renderChart = () => {
    const data = getActiveData()

    switch (chartType) {
      case "bar":
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
              <XAxis dataKey="month" tick={{ fill: "#888" }} />
              <YAxis tickFormatter={formatYAxis} tick={{ fill: "#888" }} />
              <ChartTooltip content={<ChartTooltipContent />} cursor={{ fill: "rgba(144, 238, 144, 0.1)" }} />
              <Bar
                dataKey="before"
                fill="var(--color-before)"
                radius={[4, 4, 0, 0]}
                animationDuration={1500}
                animationBegin={0}
                isAnimationActive={animateChart}
                onMouseOver={(data, index) => setHoveredBar(index)}
                onMouseLeave={() => setHoveredBar(null)}
              />
              <Bar
                dataKey="after"
                fill="var(--color-after)"
                radius={[4, 4, 0, 0]}
                animationDuration={1500}
                animationBegin={300}
                isAnimationActive={animateChart}
                onMouseOver={(data, index) => setHoveredBar(index + data.length)}
                onMouseLeave={() => setHoveredBar(null)}
              />
            </BarChart>
          </ResponsiveContainer>
        )

      case "line":
        return (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
              <XAxis dataKey="month" tick={{ fill: "#888" }} />
              <YAxis tickFormatter={formatYAxis} tick={{ fill: "#888" }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="before"
                stroke="var(--color-before)"
                strokeWidth={3}
                dot={{ r: 4, strokeWidth: 2 }}
                activeDot={{ r: 6, strokeWidth: 2 }}
                animationDuration={1500}
                animationBegin={0}
                isAnimationActive={animateChart}
              />
              <Line
                type="monotone"
                dataKey="after"
                stroke="var(--color-after)"
                strokeWidth={3}
                dot={{ r: 4, strokeWidth: 2 }}
                activeDot={{ r: 6, strokeWidth: 2 }}
                animationDuration={1500}
                animationBegin={300}
                isAnimationActive={animateChart}
              />
            </LineChart>
          </ResponsiveContainer>
        )

      case "area":
        return (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
              <XAxis dataKey="month" tick={{ fill: "#888" }} />
              <YAxis tickFormatter={formatYAxis} tick={{ fill: "#888" }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <defs>
                <linearGradient id="colorBefore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-before)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="var(--color-before)" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorAfter" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-after)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="var(--color-after)" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="before"
                stroke="var(--color-before)"
                fillOpacity={1}
                fill="url(#colorBefore)"
                animationDuration={1500}
                animationBegin={0}
                isAnimationActive={animateChart}
              />
              <Area
                type="monotone"
                dataKey="after"
                stroke="var(--color-after)"
                fillOpacity={1}
                fill="url(#colorAfter)"
                animationDuration={1500}
                animationBegin={300}
                isAnimationActive={animateChart}
              />
            </AreaChart>
          </ResponsiveContainer>
        )
    }
  }

  return (
    <section ref={ref} className="py-16 md:py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <motion.div
            className="inline-flex items-center px-3 py-1 rounded-full bg-lime-500/10 text-lime-500 border border-lime-500/20 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <span className="text-sm font-medium">Proven Results</span>
          </motion.div>

          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-600">
              Real Growth. Real Numbers.
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
            }}
          >
            See the actual performance data from our clients across different industries
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <div className="inline-flex rounded-full p-1 bg-black/30 border border-lime-500/20">
            <button
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "revenue" ? "bg-lime-500 text-black" : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveTab("revenue")}
            >
              Revenue Growth
            </button>
            <button
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "leads" ? "bg-lime-500 text-black" : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveTab("leads")}
            >
              Lead Generation
            </button>
            <button
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "cost" ? "bg-lime-500 text-black" : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveTab("cost")}
            >
              Cost Reduction
            </button>
          </div>
        </div>

        <motion.div
          className="bg-black/40 backdrop-blur-sm border border-lime-500/20 rounded-xl p-4 md:p-6 lg:p-8 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
          }}
        >
          <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
            <div className="flex items-center">
              {getChartIcon()}
              <h3 className="text-lg md:text-xl font-bold ml-2">{getChartTitle()}</h3>
            </div>

            <div className="flex items-center space-x-2 bg-black/30 rounded-lg p-1">
              <button
                onClick={() => setChartType("bar")}
                className={`p-1.5 rounded ${
                  chartType === "bar" ? "bg-lime-500/20 text-lime-500" : "text-gray-400 hover:text-white"
                }`}
                title="Bar Chart"
              >
                <BarChart3 size={16} />
              </button>
              <button
                onClick={() => setChartType("line")}
                className={`p-1.5 rounded ${
                  chartType === "line" ? "bg-lime-500/20 text-lime-500" : "text-gray-400 hover:text-white"
                }`}
                title="Line Chart"
              >
                <TrendingUp size={16} />
              </button>
              <button
                onClick={() => setChartType("area")}
                className={`p-1.5 rounded ${
                  chartType === "area" ? "bg-lime-500/20 text-lime-500" : "text-gray-400 hover:text-white"
                }`}
                title="Area Chart"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 18L7 14L11 16L21 6M21 6V12M21 6H15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M3 18H21V22H3V18Z" fill="currentColor" fillOpacity="0.2" />
                </svg>
              </button>
            </div>
          </div>

          <div className="h-[300px] md:h-[400px]">
            <ChartContainer
              config={{
                before: {
                  label: "Before LeadsObtainer",
                  color: "hsl(var(--chart-1))",
                },
                after: {
                  label: "With LeadsObtainer",
                  color: "hsl(var(--chart-2))",
                },
              }}
            >
              {renderChart()}
            </ChartContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8">
            <motion.div
              className="bg-black/30 rounded-lg p-4 border border-lime-500/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="text-sm text-gray-400 mb-1">Average Improvement</div>
              <div className="text-2xl font-bold text-lime-500">
                {activeTab === "revenue" ? "+233%" : activeTab === "leads" ? "+317%" : "-58%"}
              </div>
            </motion.div>

            <motion.div
              className="bg-black/30 rounded-lg p-4 border border-lime-500/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="text-sm text-gray-400 mb-1">Implementation Time</div>
              <div className="text-2xl font-bold text-lime-500">30 Days</div>
            </motion.div>

            <motion.div
              className="bg-black/30 rounded-lg p-4 border border-lime-500/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="text-sm text-gray-400 mb-1">Client Satisfaction</div>
              <div className="text-2xl font-bold text-lime-500">97%</div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
          }}
        >
          <a
            href="#get-started"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-lime-500 text-black font-medium hover:bg-lime-400 transition-all"
            data-umami-event="results-cta"
          >
            See What Results You Can Achieve
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
