"use client"

import { motion } from "framer-motion"

interface Metric {
  label: string
  value: string
}

interface Stat {
  label: string
  value: string
}

interface PromoMetricStripProps {
  metrics?: Metric[]
  microcopy?: string
  headline?: string
  stats?: Stat[]
  link?: {
    text: string
    href: string
  }
  dataTest?: string
}

export function PromoMetricStrip({ metrics, microcopy, headline, stats, link, dataTest }: PromoMetricStripProps) {
  return (
    <section
      className="py-6 px-4 bg-black/40 backdrop-blur-sm border-y border-primary/10 relative z-10"
      data-test={dataTest}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {headline && <h3 className="text-xl font-bold">{headline}</h3>}

          {metrics && (
            <div className="flex flex-wrap justify-center md:justify-start gap-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary">{metric.value}</div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          )}

          {stats && (
            <div className="flex flex-wrap justify-center md:justify-start gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          )}

          {microcopy && (
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
              <p className="text-sm font-medium">{microcopy}</p>
            </div>
          )}

          {link && (
            <a
              href={link.href}
              className="text-primary hover:text-primary/80 text-sm font-medium underline underline-offset-4"
            >
              {link.text}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
