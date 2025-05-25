"use client"

import { useEffect, useState } from "react"
import { CheckCircle, Clock } from "lucide-react"
import { AnimatedText } from "@/components/ui/animated-text"

export default function ThankYouMessage() {
  const [userName, setUserName] = useState("")

  useEffect(() => {
    const userData = sessionStorage.getItem("webinarUser")
    if (userData) {
      const { firstName } = JSON.parse(userData)
      setUserName(firstName)
    }
  }, [])

  const agendaItems = [
    {
      time: "0:00–2:00",
      title: "Quick Win: The 5-Minute Lead Magnet Formula",
      description: "Create irresistible lead magnets that convert at 40%+",
    },
    {
      time: "2:00–7:00",
      title: "Core Strategy: The Automated Lead Machine System",
      description: "Set up your end-to-end client acquisition funnel",
    },
    {
      time: "7:00–10:00",
      title: "Live Q&A with Mark Johnson",
      description: "Get your specific questions answered",
    },
  ]

  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-full bg-primary/20 text-primary">
        <CheckCircle className="w-5 h-5 mr-2" />
        <span className="font-medium">You're all set!</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
        <AnimatedText text={`Thanks${userName ? `, ${userName}` : ""}! You're In!`} />
      </h1>

      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        Your spot for the "Unlock Lead Generation Secrets" masterclass has been reserved. Here's everything you need to
        know:
      </p>

      <div className="bg-secondary/30 rounded-xl p-6 max-w-2xl mx-auto">
        <div className="flex items-center mb-4">
          <Clock className="w-5 h-5 text-primary mr-2" />
          <h3 className="text-xl font-semibold">Webinar Agenda</h3>
        </div>

        <div className="space-y-4">
          {agendaItems.map((item, index) => (
            <div key={index} className="flex">
              <div className="w-20 flex-shrink-0 font-mono text-sm text-muted-foreground">{item.time}</div>
              <div className="text-left">
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
