"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Lock } from "lucide-react"

export function LeadMagnetForm() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Validate form
    if (!name.trim() || !email.trim()) {
      setError("Please fill in all fields")
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      setIsSubmitting(false)
      return
    }

    // Simulate form submission
    setTimeout(() => {
      // In a real implementation, you would send the data to your server here
      console.log("Form submitted:", { name, email })

      // Store the name in localStorage to use on the thank you page
      localStorage.setItem("leadMagnetName", name)

      // Redirect to thank you page
      router.push("/lead-magnet/thank-you")
    }, 1500)
  }

  return (
    <section className="py-12 md:py-16" id="opt-in-form">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-md rounded-lg bg-gray-800 p-8 shadow-xl">
          <h2 className="mb-6 text-center text-2xl font-bold text-white md:text-3xl">
            Download Your Free Playbook Now
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:border-lime-400 focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-gray-600 bg-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:border-lime-400 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            {error && <div className="rounded-md bg-red-900/50 p-3 text-sm text-red-200">{error}</div>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-lime-400 px-6 py-4 text-center text-lg font-bold text-black transition-all hover:bg-lime-500 disabled:opacity-70"
            >
              {isSubmitting ? "Processing..." : "Download My Free Playbook Now – 100% Free (Worth $199)"}
            </button>

            <div className="flex items-center justify-center gap-2 text-center text-sm text-gray-400">
              <Lock className="h-4 w-4" />
              <span>Your information is secure and will never be shared with third parties.</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
