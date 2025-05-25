"use client"

import { motion } from "framer-motion"
import { Heart, Users, Lightbulb, Target, Shield, Sparkles } from "lucide-react"

export function OurValues() {
  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      color: "text-red-500",
      bgColor: "bg-red-100 dark:bg-red-900/30",
      title: "Passion",
      description: "We're driven by a genuine passion for helping businesses succeed in the digital landscape.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      color: "text-blue-500",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      title: "Collaboration",
      description: "We believe the best results come from working together, sharing ideas, and supporting each other.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      color: "text-yellow-500",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
      title: "Innovation",
      description: "We constantly seek new and better ways to solve problems and deliver value to our clients.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      color: "text-green-500",
      bgColor: "bg-green-100 dark:bg-green-900/30",
      title: "Excellence",
      description:
        "We hold ourselves to the highest standards in everything we do, from code quality to client communication.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      color: "text-purple-500",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical principles in all our interactions.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      color: "text-indigo-500",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
      title: "Growth Mindset",
      description: "We embrace challenges, persist through obstacles, and see effort as the path to mastery.",
    },
  ]

  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            These principles guide everything we do and shape our company culture.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="flex flex-col rounded-xl bg-white p-8 shadow-md dark:bg-slate-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-full ${value.bgColor}`}>
                <div className={value.color}>{value.icon}</div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">{value.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mx-auto mt-16 max-w-4xl rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold">Living Our Values Every Day</h3>
          <p className="mt-4 text-lg">
            Our values aren't just words on a wall—they're reflected in how we work, how we treat each other, and how we
            serve our clients. When you join our team, you become part of a culture that truly embodies these
            principles.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
