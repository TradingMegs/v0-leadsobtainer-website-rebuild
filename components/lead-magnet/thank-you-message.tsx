"use client"

import { useEffect, useState } from "react"
import { AnimatedText } from "@/components/ui/animated-text"

export function ThankYouMessage() {
  const [name, setName] = useState("")

  useEffect(() => {
    // Get the name from localStorage if available
    const storedName = localStorage.getItem("leadMagnetName")
    setName(storedName || "there")
  }, [])

  return (
    <div className="mb-16 text-center">
      <AnimatedText
        text={`Thanks for Subscribing, ${name}!`}
        className="mb-6 text-4xl font-bold text-white md:text-5xl"
      />

      <div className="mx-auto max-w-2xl rounded-lg bg-gray-800/50 p-8">
        <h2 className="mb-6 text-2xl font-bold text-white">
          Your free eBook is ready! Here's how to maximize its value:
        </h2>

        <div className="space-y-4 text-left">
          <div className="flex items-start gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-black">
              1
            </div>
            <p className="text-gray-300">
              <span className="font-bold text-white">Read Chapter 3</span> for our top 5 AI tools to automate lead
              generation.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-black">
              2
            </div>
            <p className="text-gray-300">
              <span className="font-bold text-white">Use the included templates</span> to build your first automated
              workflow.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-black">
              3
            </div>
            <p className="text-gray-300">
              <span className="font-bold text-white">Join our webinar (next week)</span> to dive deeper – details
              inside!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
