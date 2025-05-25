"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Loader2 } from "lucide-react"
import { submitFormToWebhook } from "@/lib/actions/form-actions"

export function HeroForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [businessType, setBusinessType] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [step, setStep] = useState(1)
  const [formResult, setFormResult] = useState<{ success: boolean; message: string } | null>(null)
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === "name") {
      setName(value)
    } else if (name === "email") {
      setEmail(value)
    } else if (name === "phone") {
      setPhone(value)
    } else if (name === "business") {
      setBusinessType(value)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = {
      name,
      email,
      phone,
      businessType,
    }

    const result = await submitFormToWebhook(formData, "hero")

    if (result.success) {
      setSubmissionStatus("success")
      setName("")
      setEmail("")
      setPhone("")
      setBusinessType("")
    } else {
      setSubmissionStatus("error")
    }

    setIsSubmitting(false)
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-black/40 backdrop-blur-sm border border-lime-500/20 rounded-xl p-4 md:p-6"
    >
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium text-white">Get Your Free Growth Plan</h3>
          <div className="text-xs text-gray-400">{step}/3</div>
        </div>
        <div className="w-full h-1.5 bg-lime-500/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-lime-500"
            initial={{ width: `${(step - 1) * 50}%` }}
            animate={{ width: `${step * 33.33}%` }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-black/60 border border-lime-500/20 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-lime-500"
                placeholder="John Smith"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-black/60 border border-lime-500/20 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-lime-500"
                placeholder="john@example.com"
                required
              />
            </div>
            <motion.button
              type="button"
              onClick={nextStep}
              className="w-full flex items-center justify-center py-2.5 px-4 bg-lime-500 hover:bg-lime-400 text-black font-medium rounded-md transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-black/60 border border-lime-500/20 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-lime-500"
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label htmlFor="business" className="block text-sm font-medium text-gray-300 mb-1">
                Business Name
              </label>
              <input
                type="text"
                id="business"
                name="business"
                value={businessType}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-black/60 border border-lime-500/20 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500/30 focus:border-lime-500"
                placeholder="Your Business Name"
                required
              />
            </div>
            <div className="flex gap-2">
              <motion.button
                type="button"
                onClick={prevStep}
                className="flex-1 py-2.5 px-4 bg-black/60 border border-lime-500/20 text-white font-medium rounded-md hover:bg-black/80 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Back
              </motion.button>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 flex items-center justify-center py-2.5 px-4 bg-lime-500 hover:bg-lime-400 text-black font-medium rounded-md transition-colors disabled:opacity-70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Get Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </motion.button>
            </div>

            {formResult && !formResult.success && (
              <div className="text-red-500 text-sm text-center">{formResult.message}</div>
            )}
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center py-4"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lime-500/10 text-lime-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-gray-300 mb-4">
              Your growth plan is on its way to your inbox. One of our specialists will contact you shortly.
            </p>
            <a href="#" className="inline-flex items-center text-lime-500 hover:text-lime-400 font-medium">
              Schedule a Call
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </motion.div>
        )}
      </form>
    </motion.div>
  )
}
