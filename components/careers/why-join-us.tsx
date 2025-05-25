"use client"

import { motion } from "framer-motion"
import { CheckCircle, TrendingUp, Zap, Coffee, Globe, Award } from "lucide-react"

export function WhyJoinUs() {
  const benefits = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Career Growth",
      description: "Clear advancement paths with mentorship programs and leadership development opportunities.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Innovative Work",
      description: "Work on cutting-edge projects using the latest technologies and methodologies.",
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Work-Life Balance",
      description: "Flexible schedules, remote work options, and generous time-off policies.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Impact",
      description: "Make a difference by helping businesses worldwide achieve their digital transformation goals.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Comprehensive Benefits",
      description: "Health and wellness programs, retirement plans, and professional development allowances.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Recognition Culture",
      description: "Regular recognition programs that celebrate achievements and contributions.",
    },
  ]

  return (
    <section id="why-join-us" className="bg-white py-24 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Join Our Team?
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-slate-600 dark:text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We're building a company where talented individuals thrive, innovate, and grow together.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-slate-50 p-6 shadow-md transition-all hover:shadow-lg dark:bg-slate-800/50 dark:hover:bg-slate-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                {benefit.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">{benefit.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{benefit.description}</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mx-auto mt-16 max-w-3xl rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-1"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-lg bg-white p-8 dark:bg-slate-900">
            <blockquote className="text-center text-xl font-medium italic text-slate-700 dark:text-slate-300">
              "Joining this company was one of the best career decisions I've made. The culture of innovation, support,
              and growth is unmatched. I've developed skills I never thought possible and worked on projects that truly
              make an impact."
            </blockquote>
            <div className="mt-6 flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300">
                <span className="text-lg font-medium">JD</span>
              </div>
              <div className="ml-4 text-left">
                <p className="font-medium text-slate-900 dark:text-white">Jane Doe</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Senior Developer, 3 years</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
