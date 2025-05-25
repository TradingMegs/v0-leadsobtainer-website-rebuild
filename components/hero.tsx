"use client"

import { useState, useEffect } from "react"
import { HeroForm } from "@/components/hero-form"

const industries = [
  "Dental Practices",
  "Law Firms",
  "Real Estate Agents",
  "Home Services",
  "Medical Clinics",
  "Financial Advisors",
  "Fitness Studios",
  "Restaurants",
]

export function Hero({ onPlayVideo }) {
  const [currentIndustry, setCurrentIndustry] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndustry((prev) => (prev + 1) % industries.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [industries.length])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-600">
                Triple Your Local Business Revenue in 90 Days
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Our AI-powered growth system automates your marketing, sales, and client acquisition — guaranteed
                results or you don't pay.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/get-started"
                className="inline-flex h-12 items-center justify-center rounded-md bg-lime-400 px-6 text-lg font-medium text-black transition-colors hover:bg-lime-300 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2"
              >
                Get Your Free Growth Plan
              </a>
              <a
                href="#watch-demo"
                onClick={(e) => {
                  e.preventDefault()
                  onPlayVideo()
                }}
                className="inline-flex h-12 items-center justify-center rounded-md border border-lime-400/20 bg-black/20 px-6 text-lg font-medium text-lime-400 transition-colors hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2"
              >
                Watch 2-Min Demo
              </a>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400 mt-4">
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-lime-400"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-lime-400"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Setup in 30 minutes</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-lime-400"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">
                Perfect for <span className="text-lime-400">{industries[currentIndustry]}</span>
              </h2>
            </div>
            <HeroForm />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80 z-0"></div>
    </section>
  )
}
