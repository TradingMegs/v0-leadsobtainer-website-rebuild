"use client"

import { useEffect, useState } from "react"

export function LeadMagnetScarcity() {
  const [hours, setHours] = useState(23)
  const [minutes, setMinutes] = useState(59)
  const [seconds, setSeconds] = useState(59)

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      } else if (minutes > 0) {
        setMinutes(minutes - 1)
        setSeconds(59)
      } else if (hours > 0) {
        setHours(hours - 1)
        setMinutes(59)
        setSeconds(59)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [hours, minutes, seconds])

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-lg bg-gray-800/50 p-8 text-center">
          <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">Limited Time Offer</h2>

          <div className="mb-6 flex justify-center gap-4">
            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-lg bg-gray-700">
              <span className="text-2xl font-bold text-white">{hours.toString().padStart(2, "0")}</span>
              <span className="text-xs text-gray-400">Hours</span>
            </div>
            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-lg bg-gray-700">
              <span className="text-2xl font-bold text-white">{minutes.toString().padStart(2, "0")}</span>
              <span className="text-xs text-gray-400">Minutes</span>
            </div>
            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-lg bg-gray-700">
              <span className="text-2xl font-bold text-white">{seconds.toString().padStart(2, "0")}</span>
              <span className="text-xs text-gray-400">Seconds</span>
            </div>
          </div>

          <p className="mb-4 text-lg text-gray-300">
            Offer expires in {hours}h {minutes}m {seconds}s!
          </p>

          <div className="mb-6">
            <div className="mb-2 h-3 overflow-hidden rounded-full bg-gray-700">
              <div className="h-full w-[85%] bg-lime-400"></div>
            </div>
            <p className="text-sm text-gray-400">Only 15 copies left out of 100 - 85% claimed!</p>
          </div>

          <p className="text-gray-300">Over 2,500 marketers have already claimed their copy – join them today!</p>
        </div>
      </div>
    </section>
  )
}
