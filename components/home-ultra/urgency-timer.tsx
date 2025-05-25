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
  const [spotDecreased, setSpotDecreased] = useState(false)

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
        setDisplayedSpots((prev) => prev - 1)
        setSpotDecreased(true)

        // Reset the animation after 2 seconds
        setTimeout(() => {
          setSpotDecreased(false)
        }, 2000)

        // Track spot decrease for analytics
        if (typeof window !== "undefined") {
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({
            event: "urgency_spot_decrease",
            spots_remaining: displayedSpots - 1,
          })
        }
      }
    }

    const interval = setInterval(randomDecrease, 30000) // Every 30 seconds

    return () => clearInterval(interval)
  }, [displayedSpots])

  return (
    <div className="space-y-6" data-test="urgency-section">
      <motion.div
        className={`rounded-xl border ${spotDecreased ? "border-red-500 bg-red-500/20" : "border-yellow-500/30 bg-yellow-500/10"} p-4 text-center`}
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: spotDecreased ? [1, 1.05, 1] : 1,
          transition: {
            scale: {
              duration: 0.3,
              repeat: spotDecreased ? 1 : 0,
              repeatType: "reverse",
            },
          },
        }}
        transition={{ duration: 0.4 }}
        data-variant="spots-counter"
        data-spots={displayedSpots}
      >
        <p className={`${spotDecreased ? "text-red-400" : "text-yellow-400"} font-medium`}>
          <span className="font-bold">Only {displayedSpots} spots</span> left for this month
        </p>
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

      <div className="bg-lime-400/10 border border-lime-400/30 rounded-lg p-3 text-center">
        <div className="flex items-center justify-center gap-2 text-sm">
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
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
          <span className="text-lime-400">100% Money-Back Guarantee</span>
        </div>
      </div>
    </div>
  )
}
