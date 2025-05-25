"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  endDate: string
  label?: string
}

export function CountdownTimer({ endDate, label }: CountdownTimerProps) {
  const calculateTimeLeft = () => {
    const difference = new Date(endDate).getTime() - new Date().getTime()

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [endDate])

  return (
    <div className="flex flex-col items-center">
      {label && <div className="text-sm text-gray-400 mb-1">{label}</div>}
      <div className="flex gap-2">
        <div className="bg-black/60 border border-primary/20 rounded px-2 py-1 min-w-[40px] text-center">
          <div className="text-lg font-bold">{timeLeft.days}</div>
          <div className="text-xs text-gray-400">Days</div>
        </div>
        <div className="bg-black/60 border border-primary/20 rounded px-2 py-1 min-w-[40px] text-center">
          <div className="text-lg font-bold">{timeLeft.hours}</div>
          <div className="text-xs text-gray-400">Hours</div>
        </div>
        <div className="bg-black/60 border border-primary/20 rounded px-2 py-1 min-w-[40px] text-center">
          <div className="text-lg font-bold">{timeLeft.minutes}</div>
          <div className="text-xs text-gray-400">Mins</div>
        </div>
        <div className="bg-black/60 border border-primary/20 rounded px-2 py-1 min-w-[40px] text-center">
          <div className="text-lg font-bold">{timeLeft.seconds}</div>
          <div className="text-xs text-gray-400">Secs</div>
        </div>
      </div>
    </div>
  )
}
