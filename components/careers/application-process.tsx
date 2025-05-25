"use client"

import { motion } from "framer-motion"
import { FileText, Users, MessageSquare, CheckCircle, ArrowRight } from "lucide-react"

export function ApplicationProcess() {
  const steps = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Application Review",
      description:
        "Our team carefully reviews your application and resume to assess your qualifications and experience.",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Initial Interview",
      description:
        "A brief conversation to learn more about you, your experience, and answer any questions you might have.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Interview",
      description:
        "Meet with potential team members to discuss technical skills, problem-solving abilities, and cultural fit.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Decision & Offer",
      description: "If there's a mutual fit, we'll extend an offer and welcome you to the team!",
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
            Our Application Process
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            We've designed a straightforward process to help us get to know each other better.
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-blue-200 dark:bg-blue-900/50 md:left-[calc(15%+12px)] lg:left-[calc(15%+16px)]"></div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="mb-4 flex items-center justify-center md:mb-0 md:w-[30%]">
                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg md:h-16 md:w-16">
                        {step.icon}
                      </div>
                    </div>
                    <div className="rounded-xl bg-white p-6 shadow-md dark:bg-slate-900 md:w-[70%]">
                      <div className="flex items-center">
                        <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                          {index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
                      </div>
                      <p className="mt-4 text-slate-600 dark:text-slate-300">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="mx-auto mt-16 max-w-3xl rounded-xl bg-white p-8 text-center shadow-lg dark:bg-slate-900"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Ready to Apply?</h3>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            We're excited to learn more about you and how you can contribute to our team.
          </p>
          <a
            href="#application-form"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
