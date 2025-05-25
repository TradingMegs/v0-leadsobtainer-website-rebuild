"use client"

import { motion } from "framer-motion"
import { ArrowRight, Briefcase, Users, Heart } from "lucide-react"
import Link from "next/link"

export function CareersHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/50"></div>
      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
              <Briefcase className="mr-1 h-4 w-4" />
              Join Our Team
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Build Your Career</span>
              <span className="block text-blue-600 dark:text-blue-500">Shape The Future</span>
            </h1>
            <p className="mb-8 max-w-2xl text-xl text-slate-600 dark:text-slate-300">
              Join a team of passionate professionals dedicated to transforming businesses through innovative digital
              solutions. Discover a workplace where your talents are valued and your growth is prioritized.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#open-positions"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="#why-join-us"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                Why Join Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl bg-white p-6 shadow-xl dark:bg-slate-800 lg:mr-0">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-100 opacity-70 dark:bg-blue-900/30"></div>
              <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-green-100 opacity-70 dark:bg-green-900/30"></div>

              <div className="relative z-10">
                <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">Why People Love Working Here</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Collaborative Culture</h4>
                      <p className="text-slate-600 dark:text-slate-300">
                        Work alongside industry experts in a supportive environment
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Growth Opportunities</h4>
                      <p className="text-slate-600 dark:text-slate-300">
                        Clear career paths with continuous learning and development
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-300">
                      <Heart className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Work-Life Balance</h4>
                      <p className="text-slate-600 dark:text-slate-300">
                        Flexible work arrangements and comprehensive wellness benefits
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
