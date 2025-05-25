"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  business: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export function MultiStepForm() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  })

  const watchedFields = {
    name: watch("name"),
    email: watch("email"),
    phone: watch("phone"),
  }

  // Track form step progress for analytics
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: "form_step_view",
        form_step: step,
      })
    }
  }, [step])

  const nextStep = async () => {
    const fieldsToValidate = step === 1 ? ["name"] : step === 2 ? ["email"] : ["phone"]
    const isStepValid = await trigger(fieldsToValidate as any)

    if (isStepValid) {
      // Show micro-affirmation animation
      setShowSuccessAnimation(true)

      // Track step completion
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: "form_step_complete",
          form_step: step,
        })
      }

      // Move to next step after animation
      setTimeout(() => {
        setShowSuccessAnimation(false)
        setStep((prev) => prev + 1)
      }, 800)
    }
  }

  const prevStep = () => {
    setStep((prev) => prev - 1)
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Track form submission for analytics
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: "form_submit",
          form_data: {
            name: data.name,
            email_domain: data.email.split("@")[1],
            has_phone: !!data.phone,
            has_business: !!data.business,
          },
        })
      }

      setIsSuccess(true)
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const progressPercentage = ((step - 1) / 3) * 100

  return (
    <div className="w-full" data-test="multi-step-form">
      {!isSuccess ? (
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-400 mb-1">
              <span>Step {step} of 3</span>
              <span>{Math.round(progressPercentage)}% Complete</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-lime-500 to-green-600 rounded-full"
                initial={{ width: `${progressPercentage}%` }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-200">
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        type="text"
                        placeholder="John Smith"
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name ? "border-red-500 bg-red-500/10" : "border-gray-700 bg-gray-900"
                        } text-white focus:outline-none focus:ring-2 focus:ring-lime-400`}
                        {...register("name")}
                        data-test="input-name"
                      />

                      {/* Success animation */}
                      <AnimatePresence>
                        {showSuccessAnimation && step === 1 && watchedFields.name && !errors.name && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lime-400"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="business" className="text-sm font-medium text-gray-200">
                      Business Name (Optional)
                    </label>
                    <input
                      id="business"
                      type="text"
                      placeholder="Your Business LLC"
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
                      {...register("business")}
                      data-test="input-business"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!watchedFields.name}
                    className={`w-full py-3 rounded-lg font-medium transition-all ${
                      watchedFields.name
                        ? "bg-gradient-to-r from-lime-500 to-green-600 text-black hover:shadow-lg hover:shadow-lime-500/25"
                        : "bg-gray-700 text-gray-300 cursor-not-allowed"
                    }`}
                    data-test="button-next-1"
                  >
                    Continue
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-200">
                      Your Email
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email ? "border-red-500 bg-red-500/10" : "border-gray-700 bg-gray-900"
                        } text-white focus:outline-none focus:ring-2 focus:ring-lime-400`}
                        {...register("email")}
                        data-test="input-email"
                      />

                      {/* Success animation */}
                      <AnimatePresence>
                        {showSuccessAnimation && step === 2 && watchedFields.email && !errors.email && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lime-400"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 py-3 rounded-lg font-medium bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
                      data-test="button-prev-2"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!watchedFields.email || !!errors.email}
                      className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                        watchedFields.email && !errors.email
                          ? "bg-gradient-to-r from-lime-500 to-green-600 text-black hover:shadow-lg hover:shadow-lime-500/25"
                          : "bg-gray-700 text-gray-300 cursor-not-allowed"
                      }`}
                      data-test="button-next-2"
                    >
                      Continue
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-200">
                      Your Phone Number
                    </label>
                    <div className="relative">
                      <input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.phone ? "border-red-500 bg-red-500/10" : "border-gray-700 bg-gray-900"
                        } text-white focus:outline-none focus:ring-2 focus:ring-lime-400`}
                        {...register("phone")}
                        data-test="input-phone"
                      />

                      {/* Success animation */}
                      <AnimatePresence>
                        {showSuccessAnimation && step === 3 && watchedFields.phone && !errors.phone && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lime-400"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 py-3 rounded-lg font-medium bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
                      data-test="button-prev-3"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || !watchedFields.phone || !!errors.phone}
                      className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                        watchedFields.phone && !errors.phone && !isSubmitting
                          ? "bg-gradient-to-r from-lime-500 to-green-600 text-black hover:shadow-lg hover:shadow-lime-500/25"
                          : "bg-gray-700 text-gray-300 cursor-not-allowed"
                      }`}
                      data-test="button-submit"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
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
                        "Get Your Free Strategy Session"
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-lime-400"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span className="text-xs text-gray-400">Secure SSL</span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-lime-400"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span className="text-xs text-gray-400">100% Confidential</span>
            </div>
          </div>

          <p className="text-xs text-gray-400 text-center">
            By submitting this form, you agree to our{" "}
            <a href="/terms" className="text-lime-400 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-lime-400 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-8 space-y-4"
        >
          <div className="rounded-full bg-lime-400/20 p-4 w-20 h-20 mx-auto flex items-center justify-center">
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
              className="text-lime-400"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-lime-400">Thank You!</h3>
          <p className="text-gray-300">
            We've received your information and will contact you shortly to schedule your free strategy session.
          </p>
          <p className="text-gray-300">Check your email for confirmation and next steps.</p>
        </motion.div>
      )}
    </div>
  )
}
