"use client"

import { useState } from "react"

export function useFormSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submitForm = async (data: any) => {
    setIsSubmitting(true)
    setError(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simulate successful submission
      setIsSuccess(true)
      return { success: true }
    } catch (err) {
      setError("An error occurred. Please try again.")
      return { success: false, error: "An error occurred" }
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    isSubmitting,
    isSuccess,
    error,
    submitForm,
  }
}
