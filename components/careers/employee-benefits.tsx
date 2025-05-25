"use client"

import { motion } from "framer-motion"
import { Heart, BookOpen, Clock, Globe, Users, Coffee, Laptop, Smile } from "lucide-react"

export function EmployeeBenefits() {
  const benefits = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs.",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Professional Development",
      description: "Learning stipends, conference attendance, and continuous education opportunities.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Work",
      description: "Remote-friendly environment with flexible hours and generous time off.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Team",
      description: "Work with talented professionals from around the world.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Building",
      description: "Regular team events, retreats, and collaborative activities.",
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Work Environment",
      description: "Modern offices with amenities or stipends for home office setup.",
    },
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "Equipment",
      description: "Top-of-the-line technology and tools to help you do your best work.",
    },
    {
      icon: <Smile className="h-6 w-6" />,
      title: "Company Culture",
      description: "Inclusive, supportive environment where everyone can thrive.",
    },
  ]

  return (
    <section className="bg-white py-24 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Employee Benefits
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            We believe in taking care of our team with comprehensive benefits that support your professional and
            personal life.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center rounded-xl bg-slate-50 p-6 text-center shadow-sm transition-all hover:shadow-md dark:bg-slate-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                {benefit.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">{benefit.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 text-white">
              <h3 className="text-2xl font-bold">Retirement Planning</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 text-green-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Competitive company match
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 text-green-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Financial planning resources
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 text-green-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Investment education
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 dark:bg-slate-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Time Off</h3>
              <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Generous paid vacation
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Paid holidays
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Parental leave
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
