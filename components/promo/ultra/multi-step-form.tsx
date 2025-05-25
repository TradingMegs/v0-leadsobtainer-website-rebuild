"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Check, X } from "lucide-react"
import { useExperiment } from "../high-conversion/experiment-provider"
import { cn } from "@/lib/utils"

type FormStep = "name" | "email" | "phone" | "complete"

export function UltraMultiStepForm() {
  const { variants, trackEvent, trackConversion } = useExperiment()
  const [currentStep, setCurrentStep] = useState<FormStep>("name")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateStep = (step: FormStep): boolean => {
    let isValid = true
    const newErrors = { ...errors }

    if (step === "name") {
      if (!formData.name.trim()) {
        newErrors.name = "Name is required"
        isValid = false
      } else {
        newErrors.name = ""
      }
    }

    if (step === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!formData.email.trim()) {
        newErrors.email = "Email is required"
        isValid = false
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email"
        isValid = false
      } else {
        newErrors.email = ""
      }
    }

    if (step === "phone") {
      const phoneRegex = /^\d{10,15}$/
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required"
        isValid = false
      } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
        newErrors.phone = "Please enter a valid phone number"
        isValid = false
      } else {
        newErrors.phone = ""
      }
    }

    setErrors(newErrors)
    return isValid
  }

  const handleNext = () => {
    if (currentStep === "name" && validateStep("name")) {
      setCurrentStep("email")
      trackEvent("form_step_complete", { step: "name" })
    } else if (currentStep === "email" && validateStep("email")) {
      setCurrentStep("phone")
      trackEvent("form_step_complete", { step: "email" })
    } else if (currentStep === "phone" && validateStep("phone")) {
      handleSubmit()
    }
  }

  const handleSubmit = async () => {
    if (!validateStep("phone")) return

    setIsSubmitting(true)
    trackEvent("form_submit_attempt")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setCurrentStep("complete")
      trackEvent("form_submit_success")
      trackConversion("form_complete", 1)
    } catch (error) {
      trackEvent("form_submit_error", { error: String(error) })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const getStepProgress = () => {
    switch (currentStep) {
      case "name":
        return 33
      case "email":
        return 66
      case "phone":
        return 100
      case "complete":
        return 100
      default:
        return 0
    }
  }

  return (
    <section
      className="py-16 md:py-24 px-4 bg-background"
      data-section="form"
      data-variant={`form-style-${variants.formStyle}`}
    >
      <div className="container mx-auto max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(
            "bg-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10",
            variants.formStyle === "A" ? "shadow-xl" : "shadow-2xl border-blue-500/20",
          )}
        >
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold">
                {currentStep === "complete" ? "Setup Complete!" : "Start Your 30-Minute Setup"}
              </h3>
              <div className="text-sm text-gray-400">
                Step {currentStep === "name" ? "1" : currentStep === "email" ? "2" : "3"} of 3
              </div>
            </div>

            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-500"
                initial={{ width: `${getStepProgress() - 33}%` }}
                animate={{ width: `${getStepProgress()}%` }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {currentStep === "name" && (
              <motion.div
                key="name-step"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    What's your name?
                  </label>
                  <div className="relative">
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={cn(
                        "bg-background/50 border-gray-700 focus:border-blue-500",
                        errors.name && "border-red-500",
                      )}
                      autoFocus
                    />
                    <AnimatePresence>
                      {formData.name && !errors.name && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                          <Check className="h-5 w-5 text-green-500" />
                        </motion.div>
                      )}
                      {errors.name && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                          <X className="h-5 w-5 text-red-500" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white py-6 h-auto rounded-2xl"
                  onClick={handleNext}
                >
                  Continue <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-center text-xs text-gray-500 mt-4">
                  By continuing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </motion.div>
            )}

            {currentStep === "email" && (
              <motion.div
                key="email-step"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    What's your email address?
                  </label>
                  <div className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className={cn(
                        "bg-background/50 border-gray-700 focus:border-blue-500",
                        errors.email && "border-red-500",
                      )}
                      autoFocus
                    />
                    <AnimatePresence>
                      {formData.email && !errors.email && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                          <Check className="h-5 w-5 text-green-500" />
                        </motion.div>
                      )}
                      {errors.email && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                          <X className="h-5 w-5 text-red-500" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white py-6 h-auto rounded-2xl"
                  onClick={handleNext}
                >
                  Continue <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-center text-xs text-gray-500 mt-4">
                  We'll send your setup instructions to this email address.
                </p>
              </motion.div>
            )}

            {currentStep === "phone" && (
              <motion.div
                key="phone-step"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    What's your phone number?
                  </label>
                  <div className="relative">
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className={cn(
                        "bg-background/50 border-gray-700 focus:border-blue-500",
                        errors.phone && "border-red-500",
                      )}
                      autoFocus
                    />
                    <AnimatePresence>
                      {formData.phone && !errors.phone && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                          <Check className="h-5 w-5 text-green-500" />
                        </motion.div>
                      )}
                      {errors.phone && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                          <X className="h-5 w-5 text-red-500" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white py-6 h-auto rounded-2xl relative overflow-hidden"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Start Your 30-Minute Setup <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </Button>

                <p className="text-center text-xs text-gray-500 mt-4">
                  We'll only use your phone for your setup call and important notifications.
                </p>
              </motion.div>
            )}

            {currentStep === "complete" && (
              <motion.div
                key="complete-step"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-green-500/20 p-4 rounded-full">
                    <Check className="h-8 w-8 text-green-500" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">Setup Process Started!</h3>
                <p className="text-gray-400 mb-6">
                  Thank you, {formData.name}! We've sent your setup instructions to {formData.email}. Our team will
                  contact you within 30 minutes to complete your automation system setup.
                </p>

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white py-6 h-auto rounded-2xl"
                  onClick={() => (window.location.href = "/thank-you")}
                >
                  View Next Steps
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
