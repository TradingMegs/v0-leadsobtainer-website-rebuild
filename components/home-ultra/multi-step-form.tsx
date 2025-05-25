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
  industry: z.string().optional(),
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
    business: watch("business"),
    industry: watch("industry"),
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
    const fieldsToValidate = step === 1 ? ["name", "business"] : step === 2 ? ["email", "industry"] : ["phone"]
    const isStepValid = await trigger(fieldsToValidate as any)

    if (isStepValid) {
      // Track successful step completion
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: "form_step_complete",
          form_step: step,
        })
      }

      setStep((prev) => prev + 1)
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

      // Show success animation
      setShowSuccessAnimation(true)

      // Wait for animation to complete
      setTimeout(() => {
        setIsSuccess(true)
      }, 1000)

      // Track form submission for analytics
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: "form_submit",
          form_data: {
            name: data.name,
            email_domain: data.email.split("@")[1],
            has_phone: !!data.phone,
            industry: data.industry || "Not specified",
          },
        })
      }
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
                    <input
                      id="name"
                      type="text"
                      placeholder="John Smith"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? "border-red-500 bg-red-500/10" : "border-gray-700 bg-gray-900"} text-white focus:outline-none focus:ring-2 focus:ring-lime-400`}
                      {...register("name")}
                      data-test="input-name"
                    />
                    {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                    {watchedFields.name && !errors.name && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm text-lime-400 flex items-center gap-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Looks good!
                      </motion.p>
                    )}
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
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500 bg-red-500/10" : "border-gray-700 bg-gray-900"} text-white focus:outline-none focus:ring-2 focus:ring-lime-400`}
                      {...register("email")}
                      data-test="input-email"
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                    {watchedFields.email && !errors.email && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm text-lime-400 flex items-center gap-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Looks good!
                      </motion.p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="industry" className="text-sm font-medium text-gray-200">
                      Your Industry (Optional)
                    </label>
                    <select
                      id="industry"
                      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
                      {...register("industry")}
                      data-test="input-industry"
                    >
                      <option value="">Select your industry</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="legal">Legal</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="home-services">Home Services</option>
                      <option value="retail">Retail</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="education">Education</option>
                      <option value="other">Other</option>
                    </select>
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
                    <input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? "border-red-500 bg-red-500/10" : "border-gray-700 bg-gray-900"} text-white focus:outline-none focus:ring-2 focus:ring-lime-400`}
                      {...register("phone")}
                      data-test="input-phone"
                    />
                    {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                    {watchedFields.phone && !errors.phone && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm text-lime-400 flex items-center gap-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Looks good!
                      </motion.p>
                    )}
                  </div>

                  <div className="bg-lime-400/10 border border-lime-400/30 rounded-lg p-4 mb-2">
                    <p className="text-sm text-gray-300">By providing your phone number, you'll receive:</p>
                    <ul className="mt-2 space-y-1">
                      <li className="text-sm text-gray-300 flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-lime-400 mt-1"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Priority scheduling for your strategy session</span>
                      </li>
                      <li className="text-sm text-gray-300 flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-lime-400 mt-1"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>SMS confirmation and reminders</span>
                      </li>
                      <li className="text-sm text-gray-300 flex items-start gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-lime-400 mt-1"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Exclusive access to limited-time offers</span>
                      </li>
                    </ul>
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

          <div className="bg-lime-400/10 border border-lime-400/30 rounded-lg p-4 mt-6">
            <h4 className="font-semibold text-white mb-2">What happens next?</h4>
            <ol className="text-left space-y-2">
              <li className="text-gray-300 flex items-start gap-2">
                <span className="bg-lime-400/20 text-lime-400 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  1
                </span>
                <span>You'll receive an email confirmation within 5 minutes</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="bg-lime-400/20 text-lime-400 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  2
                </span>
                <span>Our team will review your business needs</span>
              </li>
              <li className="text-gray-300 flex items-start gap-2">
                <span className="bg-lime-400/20 text-lime-400 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  3
                </span>
                <span>We'll call you to schedule your strategy session</span>
              </li>
            </ol>
          </div>
        </motion.div>
      )}
    </div>
  )
}
