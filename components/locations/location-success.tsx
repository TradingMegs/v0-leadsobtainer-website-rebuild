"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

interface SuccessStory {
  business: string
  location: string
  result: string
  quote: string
}

interface LocationSuccessProps {
  location: string
  successStories: SuccessStory[]
}

export function LocationSuccess({ location, successStories }: LocationSuccessProps) {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Success Stories from {location}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from real businesses just like yours across {location}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              className="bg-secondary/30 rounded-xl p-6 border border-primary/10 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 -left-4 bg-primary/20 rounded-full p-2">
                <Quote className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold mt-4 mb-1">{story.business}</h3>
              <p className="text-sm text-muted-foreground mb-4">{story.location}</p>
              <div className="bg-primary/10 rounded-lg p-3 mb-4">
                <p className="text-primary font-medium">{story.result}</p>
              </div>
              <p className="text-muted-foreground italic">"{story.quote}"</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.p
            className="text-lg font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Your business could be our next success story in {location}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
