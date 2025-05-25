"use client"

import { useState, useEffect } from "react"
import { Clock, Users } from "lucide-react"

export default function WebinarUrgency() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 0,
    seconds: 0,
  })

  const [spotsLeft, setSpotsLeft] = useState(47)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1

        if (totalSeconds <= 0) {
          clearInterval(timer)
          return { hours: 0, minutes: 0, seconds: 0 }
        }

        const hours = Math.floor(totalSeconds / 3600)
        const minutes = Math.floor((totalSeconds % 3600) / 60)
        const seconds = totalSeconds % 60

        return { hours, minutes, seconds }
      })
    }, 1000)

    // Randomly decrease spots left
    const spotsTimer = setInterval(() => {
      if (Math.random() > 0.7 && spotsLeft > 5) {
        setSpotsLeft((prev) => prev - 1)
      }
    }, 30000)

    return () => {
      clearInterval(timer)
      clearInterval(spotsTimer)
    }
  }, [spotsLeft])

  const formatTime = (value: number) => {
    return value.toString().padStart(2, "0")
  }

  return (
    <div className="space-y-4">
      <div className="bg-primary/10 rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center text-sm font-medium">
            <Clock className="h-4 w-4 mr-1.5" />
            <span>Webinar starts in:</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-background/30 rounded-md p-2">
            <div className="text-2xl font-bold">{formatTime(timeLeft.hours)}</div>
            <div className="text-xs text-muted-foreground">Hours</div>
          </div>
          <div className="bg-background/30 rounded-md p-2">
            <div className="text-2xl font-bold">{formatTime(timeLeft.minutes)}</div>
            <div className="text-xs text-muted-foreground">Minutes</div>
          </div>
          <div className="bg-background/30 rounded-md p-2">
            <div className="text-2xl font-bold">{formatTime(timeLeft.seconds)}</div>
            <div className="text-xs text-muted-foreground">Seconds</div>
          </div>
        </div>
      </div>

      <div className="bg-secondary/20 rounded-xl p-4">
        <div className="flex items-center mb-2">
          <Users className="h-4 w-4 mr-1.5 text-primary" />
          <span className="text-sm font-medium">Limited availability</span>
        </div>

        <div className="space-y-2">
          <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: `${(1 - spotsLeft / 50) * 100}%` }}></div>
          </div>

          <div className="text-sm text-center">
            <span className="font-medium">{spotsLeft} spots left</span> out of 50 total
          </div>

          <p className="text-xs text-muted-foreground text-center">Last webinar filled up in less than 24 hours!</p>
        </div>
      </div>
    </div>
  )
}
