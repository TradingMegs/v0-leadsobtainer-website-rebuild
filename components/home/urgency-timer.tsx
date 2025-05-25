"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface UrgencyTimerProps {
  deadline: string
  spotsLeft: number
}

export function UrgencyTimer({ deadline, spotsLeft }: UrgencyTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [displayedSpots, setDisplayedSpots] = useState(spotsLeft)
  const [showSpotAnimation, setShowSpotAnimation] = useState(false)

  useEffect(() => {
    // Calculate time remaining
    const calculateTimeLeft = () => {
      const difference = new Date(deadline).getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [deadline])

  // Randomly decrease spots (for demo purposes)
  useEffect(() => {
    const randomDecrease = () => {
      const shouldDecrease = Math.random() < 0.3 // 30% chance

      if (shouldDecrease && displayedSpots > 1) {
        setShowSpotAnimation(true)

        setTimeout(() => {
          setDisplayedSpots((prev) => prev - 1)
          setShowSpotAnimation(false)

          // Track spot decrease for analytics
          if (typeof window !== "undefined") {
            window.dataLayer = window.dataLayer || []
            window.dataLayer.push({
              event: "spots_decreased",
              spots_remaining: displayedSpots - 1,
            })
          }
        }, 500)
      }
    }

    const interval = setInterval(randomDecrease, 30000) // Every 30 seconds

    return () => clearInterval(interval)
  }, [displayedSpots])

  return (
    <div className="space-y-6" data-test="urgency-section">
      <motion.div
        className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        data-variant="spots-counter"
        data-spots={displayedSpots}
      >
        {showSpotAnimation && (
          <motion.div
            className="absolute inset-0 bg-yellow-400/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
        <div className="flex items-center justify-center gap-2">
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
            className="text-yellow-400"
          >
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
          </svg>
          <p className="text-yellow-400 font-medium">
            <span className="font-bold">Only {displayedSpots} spots</span> left for this month
          </p>
        </div>
      </motion.div>

      <div className="space-y-2">
        <p className="text-sm text-center text-gray-300">This offer expires in:</p>
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="rounded-lg bg-black/40 border border-lime-400/20 p-2">
            <div className="text-2xl font-bold text-white">{timeLeft.days}</div>
            <div className="text-xs text-gray-400">Days</div>
          </div>
          <div className="rounded-lg bg-black/40 border border-lime-400/20 p-2">
            <div className="text-2xl font-bold text-white">{timeLeft.hours}</div>
            <div className="text-xs text-gray-400">Hours</div>
          </div>
          <div className="rounded-lg bg-black/40 border border-lime-400/20 p-2">
            <div className="text-2xl font-bold text-white">{timeLeft.minutes}</div>
            <div className="text-xs text-gray-400">Mins</div>
          </div>
          <div className="rounded-lg bg-black/40 border border-lime-400/20 p-2">
            <div className="text-2xl font-bold text-white">{timeLeft.seconds}</div>
            <div className="text-xs text-gray-400">Secs</div>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-300 bg-lime-400/10 border border-lime-400/20 rounded-lg p-3">
        <p>
          <span className="font-semibold text-lime-400">30-Day Money-Back Guarantee</span> if you're not completely
          satisfied
        </p>
      </div>
    </div>
  )
}
