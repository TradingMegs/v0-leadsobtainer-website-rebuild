"use client"

import { BackgroundBeams } from "@/components/ui/background-beams"
import { GlowBackground } from "@/components/ui/glow-background"
import { AnimatedText } from "@/components/ui/animated-text"
import { motion } from "framer-motion"

export function ContactHero() {
  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden">
      <GlowBackground color="accent" intensity="medium">
        <div className="container mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <motion.div
              className="inline-flex items-center gap-2 bg-secondary/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 5.25L12 13.75L3 5.25M4.5 5.25H19.5C20.3284 5.25 21 5.92157 21 6.75V17.25C21 18.0784 20.3284 18.75 19.5 18.75H4.5C3.67157 18.75 3 18.0784 3 17.25V6.75C3 5.92157 3.67157 5.25 4.5 5.25Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm">Get In Touch With Us</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <AnimatedText text="Let's Build" animationType="wave" className="inline-block" />{" "}
              <AnimatedText text="Something Amazing" animationType="gradient" className="inline-block" />
            </h1>

            <motion.p
              className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Our team is ready to help you achieve explosive growth. Reach out and let's start the conversation.
            </motion.p>
          </motion.div>
        </div>
      </GlowBackground>
      <BackgroundBeams />
    </section>
  )
}
