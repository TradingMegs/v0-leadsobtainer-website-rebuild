"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

interface Field {
  name: string
  label: string
  type: string
  required?: boolean
}

interface LeadFormProps {
  title: string
  fields: Field[]
  submit: {
    text: string
    props?: Record<string, any>
  }
  microcopy?: string
  dataTest?: string
}

export function LeadForm({ title, fields, submit, microcopy, dataTest }: LeadFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`
      }

      if (field.type === "email" && formData[field.name] && !/^\S+@\S+\.\S+$/.test(formData[field.name])) {
        newErrors[field.name] = "Please enter a valid email address"
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    try {
      // Track form submission
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: "lead_form_submit",
          form_type: "lead_gen_audit",
        })
      }

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSubmitted(true)
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div data-test={dataTest}>
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">{title}</h3>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className="block text-sm font-medium mb-1">
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-black/40 border ${
                  errors[field.name] ? "border-red-500" : "border-primary/30"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50`}
                required={field.required}
              />
              {errors[field.name] && <p className="mt-1 text-sm text-red-500">{errors[field.name]}</p>}
            </div>
          ))}

          <motion.button
            type="submit"
            className="w-full h-14 bg-primary hover:bg-primary/90 text-black font-medium rounded-lg flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            {...submit.props}
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </div>
            ) : (
              submit.text
            )}
          </motion.button>

          {microcopy && <p className="text-xs text-center text-gray-400 mt-2">{microcopy}</p>}
        </form>
      ) : (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-500"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h4 className="text-xl font-bold mb-2">Thank You!</h4>
          <p className="text-gray-300 mb-4">
            Your audit request has been submitted successfully. One of our lead generation experts will contact you
            within 24 hours.
          </p>
          <p className="text-primary font-medium">Check your email for next steps.</p>
        </motion.div>
      )}
    </div>
  )
}
