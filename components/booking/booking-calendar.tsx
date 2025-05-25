"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "lucide-react"
import { GlowBackground } from "@/components/ui/glow-background"

export function BookingCalendar() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedTime, setSelectedTime] = useState("")
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", { ...formData, date: calendarData[activeIndex].fullDate, time: selectedTime })
    setStep(3)
  }

  // Generate calendar data for the next 14 days
  const generateCalendarData = () => {
    const data = []
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    const today = new Date()

    for (let i = 0; i < 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)

      const hasEvents = i % 3 === 0 || i % 4 === 0 // Just for demo purposes

      const events = hasEvents
        ? [
            {
              title: "30-Min Strategy Call",
              day: days[date.getDay()],
              time: "10:00 AM",
            },
            {
              title: "30-Min Strategy Call",
              day: days[date.getDay()],
              time: "2:00 PM",
            },
            {
              title: "30-Min Strategy Call",
              day: days[date.getDay()],
              time: "4:00 PM",
            },
          ]
        : undefined

      data.push({
        month: months[date.getMonth()],
        date: date.getDate(),
        day: days[date.getDay()],
        fullDate: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        events,
      })
    }

    return data
  }

  const calendarData = generateCalendarData()

  return (
    <section className="py-16 md:py-24 px-4 overflow-hidden">
      <GlowBackground color="primary" intensity="low">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Book Your Free Strategy Session</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Schedule a 30-minute call with one of our growth specialists to discuss how we can help your business
              grow.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {step === 1 && (
              <motion.div
                className="bg-secondary/30 rounded-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6">Select a Date & Time</h2>

                <motion.div
                  layout
                  className="flex w-full flex-col gap-6 overflow-hidden rounded-3xl border bg-secondary/50 p-8"
                >
                  <motion.div layout className="w-fit font-bold">
                    {calendarData[activeIndex].day}, {calendarData[activeIndex].month} {calendarData[activeIndex].date}
                  </motion.div>

                  {calendarData[activeIndex].events && (
                    <motion.div
                      layout
                      className="flex flex-col gap-4"
                      initial={{ x: 10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                    >
                      <motion.div
                        className="flex items-center gap-2"
                        layout
                        initial={{ x: 10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                      >
                        <Calendar className="h-5 w-5" />
                        <span className="font-medium">Available Times</span>
                      </motion.div>

                      <div className="flex flex-wrap gap-4">
                        {calendarData[activeIndex].events.map((event, index) => (
                          <motion.div
                            key={event.time + index}
                            layout
                            className={`w-full max-w-44 rounded-lg border p-3 cursor-pointer transition-colors ${
                              selectedTime === event.time ? "bg-primary/20 border-primary" : "hover:bg-secondary/70"
                            }`}
                            initial={{ x: 10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            onClick={() => setSelectedTime(event.time)}
                          >
                            <p className="text-sm font-medium">{event.title}</p>
                            <p className="text-xs text-muted-foreground">{event.time}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <div className="flex flex-wrap gap-3">
                    {calendarData.map((day, index) => (
                      <motion.button
                        key={day.date + "-" + index}
                        layout
                        className={`flex flex-col rounded-2xl border border-border p-3 text-center opacity-100 duration-200 hover:bg-secondary/70 ${
                          activeIndex === index ? "bg-secondary/70" : ""
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => {
                          setActiveIndex(index)
                          setSelectedTime("")
                        }}
                      >
                        <span className="text-xs font-medium uppercase">{day.month}</span>
                        <span className="font-semibold">{day.date}</span>
                        <span className="text-xs font-medium uppercase text-primary duration-200">{day.day}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                <div className="mt-8 flex justify-end">
                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={() => setStep(2)}
                    disabled={!selectedTime}
                  >
                    Continue
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                className="bg-secondary/30 rounded-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6">Your Information</h2>
                <p className="text-muted-foreground mb-6">
                  Please provide your details so we can confirm your appointment.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name*
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-secondary/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address*
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-secondary/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number*
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-secondary/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-secondary/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      What would you like to discuss in your strategy call?
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="bg-secondary/50"
                      placeholder="Tell us about your business goals and challenges"
                    />
                  </div>

                  <div className="pt-4 flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Confirm Booking
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                className="bg-secondary/30 rounded-lg p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-primary/10 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6">
                  <Calendar className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
                <p className="text-muted-foreground mb-6">
                  Your strategy session has been scheduled for{" "}
                  <span className="font-medium text-foreground">
                    {calendarData[activeIndex].day}, {calendarData[activeIndex].month} {calendarData[activeIndex].date}{" "}
                    at {selectedTime}
                  </span>
                  .
                </p>
                <p className="text-muted-foreground mb-8">
                  We've sent a confirmation email to{" "}
                  <span className="font-medium text-foreground">{formData.email}</span> with all the details and a
                  calendar invitation.
                </p>
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => (window.location.href = "/")}
                >
                  Return to Homepage
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </GlowBackground>
    </section>
  )
}
