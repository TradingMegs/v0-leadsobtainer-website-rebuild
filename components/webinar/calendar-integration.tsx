"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, CalendarPlus, Bell } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function CalendarIntegration() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [smsReminder, setSmsReminder] = useState(false)
  const [emailReminder, setEmailReminder] = useState(true)

  const webinarDate = new Date()
  webinarDate.setDate(webinarDate.getDate() + 2) // Set webinar 2 days from now
  webinarDate.setHours(13, 0, 0, 0) // 1:00 PM

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  const handleSmsToggle = () => {
    setSmsReminder(!smsReminder)
  }

  const handleEmailToggle = () => {
    setEmailReminder(!emailReminder)
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value)
  }

  const handleAddToCalendar = (type: string) => {
    // In a real implementation, this would generate calendar links
    console.log(`Adding to ${type} calendar`)
  }

  return (
    <div className="bg-secondary/30 rounded-xl p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4">Add to Your Calendar</h3>

      <div className="mb-6">
        <div className="flex items-center text-lg font-medium mb-2">
          <Calendar className="w-5 h-5 mr-2 text-primary" />
          <span>
            {formatDate(webinarDate)} at {formatTime(webinarDate)}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">Duration: 10 minutes + Q&A</p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <Button
          variant="outline"
          className="flex items-center justify-center"
          onClick={() => handleAddToCalendar("Google")}
        >
          <CalendarPlus className="w-4 h-4 mr-2" />
          Google Calendar
        </Button>

        <Button
          variant="outline"
          className="flex items-center justify-center"
          onClick={() => handleAddToCalendar("Outlook")}
        >
          <CalendarPlus className="w-4 h-4 mr-2" />
          Outlook/iCal
        </Button>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium">Set Reminders</h4>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Bell className="w-4 h-4 mr-2 text-muted-foreground" />
            <Label htmlFor="email-reminder" className="text-sm">
              Email reminder (1 hour before)
            </Label>
          </div>
          <Switch id="email-reminder" checked={emailReminder} onCheckedChange={handleEmailToggle} />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Bell className="w-4 h-4 mr-2 text-muted-foreground" />
            <Label htmlFor="sms-reminder" className="text-sm">
              SMS reminder (15 minutes before)
            </Label>
          </div>
          <Switch id="sms-reminder" checked={smsReminder} onCheckedChange={handleSmsToggle} />
        </div>

        {smsReminder && (
          <div className="pt-2">
            <Label htmlFor="phone-number" className="text-sm mb-1 block">
              Phone Number
            </Label>
            <Input
              id="phone-number"
              type="tel"
              placeholder="(555) 123-4567"
              value={phoneNumber}
              onChange={handlePhoneChange}
              className="bg-background/50 border-0 focus:ring-2 focus:ring-primary"
            />
          </div>
        )}
      </div>
    </div>
  )
}
