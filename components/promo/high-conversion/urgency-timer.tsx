"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { AlertTriangle, Clock } from "lucide-react"
import { useExperiment } from "./experiment-provider"
import { promoContent } from "@/lib/promo-content"

export function UrgencyTimer() {
  const { trackEvent } = useExperiment()
  const [timeLeft, setTimeLeft] = useState({
    days: promoContent.urgency.daysLeft,
    hours: promoContent.urgency.hoursLeft,
    minutes: promoContent.urgency.minutesLeft,
    seconds: promoContent.urgency.secondsLeft,
  })
  const [spotsLeft, setSpotsLeft] = useState(promoContent.urgency.spotsLeft)

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds -= 1
        } else {
          seconds = 59
          if (minutes > 0) {
            minutes -= 1
          } else {
            minutes = 59
            if (hours > 0) {
              hours -= 1
            } else {
              hours = 23
              if (days > 0) {
                days -= 1
              }
            }
          }
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Simulate spots decreasing
  useEffect(() => {
    // Random interval between 30-120 seconds
    const interval = Math.floor(Math.random() * 90000) + 30000

    const timer = setTimeout(() => {
      if (spotsLeft > 1) {
        setSpotsLeft((prev) => prev - 1)
        trackEvent("spot_decreased", { spots_left: spotsLeft - 1 })
      }
    }, interval)

    return () => clearTimeout(timer)
  }, [spotsLeft, trackEvent])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-16 md:py-24 px-4 bg-black text-white"
      data-section="urgency"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#111] border border-[#c1ff00]/30 rounded-2xl p-8"
          data-test="urgency-container"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-2">
                <AlertTriangle className="h-5 w-5 text-[#c1ff00] mr-2" />
                <h3 className="text-2xl font-bold">Limited Time Offer</h3>
              </div>
              <p className="text-gray-400">
                Only <span className="text-white font-bold">{spotsLeft} spots left</span> at this price. Claim your
                breakthrough blueprint now!
              </p>
            </div>

            <div className="flex items-center bg-black/50 rounded-lg px-4 py-2 border border-[#333]">
              <Clock className="h-5 w-5 text-[#c1ff00] mr-2" />
              <p className="text-sm">
                Price increases by <span className="text-white font-bold">{promoContent.urgency.priceIncrease}</span>{" "}
                when timer ends
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-[#222] p-4 rounded-lg text-center relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-2xl font-bold">{String(timeLeft.days).padStart(2, "0")}</p>
                <p className="text-xs text-gray-400">Days</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#c1ff00]/20"></div>
            </div>
            <div className="bg-[#222] p-4 rounded-lg text-center relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, "0")}</p>
                <p className="text-xs text-gray-400">Hours</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#c1ff00]/20"></div>
            </div>
            <div className="bg-[#222] p-4 rounded-lg text-center relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, "0")}</p>
                <p className="text-xs text-gray-400">Minutes</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#c1ff00]/20"></div>
            </div>
            <div className="bg-[#222] p-4 rounded-lg text-center relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, "0")}</p>
                <p className="text-xs text-gray-400">Seconds</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#c1ff00]/20"></div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="inline-flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#c1ff00] animate-pulse mr-2"></div>
              <p className="text-sm text-gray-300">
                <span className="font-bold text-white">{spotsLeft} people</span> are viewing this offer right now
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
