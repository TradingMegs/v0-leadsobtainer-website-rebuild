"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface TeamMember {
  name: string
  position: string
  bio: string
  image: string
}

interface AboutSectionProps {
  mission: string
  vision: string
  values: {
    title: string
    description: string
    icon: string
  }[]
  team: TeamMember[]
}

export function AboutSection({ mission, vision, values, team }: AboutSectionProps) {
  return (
    <section className="py-16 relative z-10" data-test="about-section">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-variant="about-headline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About LeadsObtainer
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're on a mission to transform how local businesses grow through AI-powered automation
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-lime-400 mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">{mission}</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-lime-400 mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">{vision}</p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-lime-400 mb-4">Our Core Values</h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="rounded-full bg-lime-400/10 p-3 h-12 w-12 flex items-center justify-center text-lime-400 flex-shrink-0">
                    <span className="text-xl" dangerouslySetInnerHTML={{ __html: value.icon }}></span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{value.title}</h4>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-lime-400 mb-8 text-center">Meet Our Leadership Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-lime-400/20 rounded-xl p-6 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-gray-800">
                  {member.image ? (
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-lime-400/20 text-lime-400 text-2xl">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>
                <h4 className="text-xl font-semibold text-white mb-1">{member.name}</h4>
                <p className="text-lime-400 mb-3">{member.position}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="#get-started"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-lime-500 to-green-600 px-8 text-lg font-medium text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-lime-500/25 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2"
            data-variant="about-cta"
            data-test="about-cta"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.dataLayer = window.dataLayer || []
                window.dataLayer.push({
                  event: "cta_click",
                  cta_text: "Get Started Free",
                  cta_location: "About Section",
                })
              }
            }}
          >
            Get Started Free
          </a>
        </motion.div>
      </div>
    </section>
  )
}
