"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useFormSubmission } from "@/hooks/use-form-submission"

export function HeroForm() {
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    phone: "",
    businessType: "",
  })

  const { isSubmitting, isSubmitted, submitForm } = useFormSubmission()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submitForm(formData)
  }

  return (
    <div className="bg-black/40 backdrop-blur-sm border border-lime-500/20 rounded-2xl p-6 md:p-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">
          Get Your <span className="text-lime-500">Free</span> Growth Analysis
        </h2>
        <p className="text-gray-400 text-sm">Limited to 5 businesses per week</p>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="businessName"
              placeholder="Business Name"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black/60 border border-lime-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500/50"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black/60 border border-lime-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500/50"
              required
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black/60 border border-lime-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500/50"
              required
            />
          </div>

          <div>
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black/60 border border-lime-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500/50"
              required
            >
              <option value="">Business Type</option>
              <option value="local-service">Local Service Business</option>
              <option value="ecommerce">E-commerce</option>
              <option value="professional">Professional Services</option>
              <option value="restaurant">Restaurant/Food Service</option>
              <option value="retail">Retail</option>
              <option value="other">Other</option>
            </select>
          </div>

          <motion.button
            type="submit"
            className="w-full h-14 bg-lime-500 hover:bg-lime-400 text-black font-medium rounded-lg flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            data-variant="form-cta"
            data-test="form-cta"
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
              "Get My Free Growth Plan"
            )}
          </motion.button>

          <p className="text-xs text-center text-gray-400 mt-2">
            100% Free. No Credit Card Required.
            <br />
            Your data is secure and will never be shared.
          </p>
        </form>
      ) : (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
          <div className="w-16 h-16 bg-lime-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
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
              className="text-lime-500"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h4 className="text-xl font-bold mb-2">Thank You!</h4>
          <p className="text-gray-300 mb-4">
            Your growth analysis request has been submitted successfully. One of our growth experts will contact you
            within 24 hours.
          </p>
          <p className="text-lime-500 font-medium">Check your email for next steps.</p>
        </motion.div>
      )}
    </div>
  )
}
