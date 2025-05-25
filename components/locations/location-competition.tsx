"use client"

import { motion } from "framer-motion"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface LocationCompetitionProps {
  location: string
  competitionData: {
    category: string
    saturation: number
    opportunity: number
  }[]
}

export function LocationCompetition({ location, competitionData }: LocationCompetitionProps) {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Market Competition in {location}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Understanding the competitive landscape helps identify opportunities for growth and market penetration
          </p>
        </div>

        <motion.div
          className="bg-secondary/30 rounded-lg p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Industry Saturation vs. Opportunity</h3>
            <p className="text-muted-foreground">
              This chart shows the balance between market saturation and growth opportunity across key industries in{" "}
              {location}
            </p>
          </div>

          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={competitionData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 60,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis
                  dataKey="category"
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  tick={{ fill: "#888888", fontSize: 12 }}
                />
                <YAxis tick={{ fill: "#888888" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(15, 23, 42, 0.9)",
                    border: "1px solid #334155",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="saturation" name="Market Saturation" fill="#ef4444" radius={[4, 4, 0, 0]} />
                <Bar dataKey="opportunity" name="Growth Opportunity" fill="#22c55e" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-8">
            <h4 className="font-medium mb-2">Key Insights:</h4>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <span className="text-white">Emerging Opportunities:</span> Several industries in {location} show high
                growth potential with relatively low competition
              </li>
              <li>
                <span className="text-white">Competitive Markets:</span> Some sectors require more sophisticated
                strategies to stand out from competitors
              </li>
              <li>
                <span className="text-white">Untapped Niches:</span> We've identified specific sub-markets with minimal
                competition and growing demand
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
