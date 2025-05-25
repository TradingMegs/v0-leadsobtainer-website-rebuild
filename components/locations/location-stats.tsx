"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface Stat {
  value: string
  label: string
  description: string
}

interface LocationStatsProps {
  location: string
  stats: Stat[]
}

export function LocationStats({ location, stats }: LocationStatsProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">{location} Business Growth Statistics</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See why businesses across {location} are choosing LeadsObtainer to accelerate their growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-secondary/30 rounded-xl p-6 text-center border border-primary/10 hover:border-primary/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={cn("text-4xl font-bold mb-2 gradient-text")}>{stat.value}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
