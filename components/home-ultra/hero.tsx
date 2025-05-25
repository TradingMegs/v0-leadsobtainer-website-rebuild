"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import lottie from "lottie-web"
import Link from "next/link"

interface HeroProps {
  headline: string
  subheadline: string
  description: string
  painPoints: string[]
  cta: {
    primary: {
      text: string
      url: string
    }
    secondary: {
      text: string
    }
  }
  onPlayVideo: () => void
}

export function Hero({ headline, subheadline, description, painPoints, cta, onPlayVideo }: HeroProps) {
  const lottieContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (lottieContainer.current) {
      const animation = lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animations/hero-animation.json",
      })

      return () => animation.destroy()
    }
  }, [])

  // Track video play button click
  const handlePlayVideo = () => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: "video_play",
        video_title: "Explainer Video",
        video_source: "Hero Section",
      })
    }

    onPlayVideo()
  }

  return (
    <section className="w-full py-20 md:py-32 relative overflow-hidden" data-test="hero-section">
      <div className="absolute inset-0 z-0" ref={lottieContainer}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-1"></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-600 mb-6"
            data-variant="hero-headline"
            data-test="hero-headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {headline}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto"
            data-variant="hero-subheadline"
            data-test="hero-subheadline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subheadline}
          </motion.p>

          <motion.p
            className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto"
            data-variant="hero-description"
            data-test="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href={cta.primary.url}
              className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-lime-500 to-green-600 px-8 text-lg font-medium text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-lime-500/25 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2"
              data-variant="hero-cta-primary"
              data-test="hero-cta-primary"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dataLayer = window.dataLayer || []
                  window.dataLayer.push({
                    event: "cta_click",
                    cta_text: cta.primary.text,
                    cta_location: "Hero Section",
                  })
                }
              }}
            >
              {cta.primary.text}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>

            <button
              onClick={handlePlayVideo}
              className="inline-flex h-14 items-center justify-center rounded-full bg-black/40 border border-lime-400/30 px-8 text-lg font-medium text-white transition-all hover:bg-lime-400/10 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2"
              data-variant="hero-cta-video"
              data-test="hero-cta-video"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-lime-500 to-green-600 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-black"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </span>
              {cta.secondary.text}
            </button>
          </motion.div>

          <motion.div
            className="bg-black/40 backdrop-blur-sm border border-lime-400/20 rounded-xl p-6 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            data-test="hero-pain-points"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Are you struggling with:</h3>
            <ul className="space-y-3 text-left">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-lime-400 mt-1 flex-shrink-0"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-2 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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

            <div className="flex items-center gap-2 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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

            <div className="flex items-center gap-2 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="rounded-xl border border-lime-400/20 bg-black/40 backdrop-blur-sm p-4">
              <div className="text-2xl font-bold text-lime-400">317%</div>
              <div className="text-sm text-gray-300">Average Revenue Increase</div>
            </div>

            <div className="rounded-xl border border-lime-400/20 bg-black/40 backdrop-blur-sm p-4">
              <div className="text-2xl font-bold text-lime-400">1,000+</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </div>

            <div className="rounded-xl border border-lime-400/20 bg-black/40 backdrop-blur-sm p-4">
              <div className="text-2xl font-bold text-lime-400">90 Days</div>
              <div className="text-sm text-gray-300">Average Time to Results</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
