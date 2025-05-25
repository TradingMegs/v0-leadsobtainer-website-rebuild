"use server"

import { revalidatePath } from "next/cache"

// Define types for form data
export type FormData = {
  name?: string
  email?: string
  phone?: string
  company?: string
  website?: string
  message?: string
  businessName?: string
  businessType?: string
  businessCategory?: string
  location?: string
  interest?: string
  // Get Started form specific fields
  usingPaidAds?: string
  adSpend?: string
  monthlyRevenue?: string
  usedAI?: string
  aiDescription?: string
  useSocialMedia?: string
  socialPlatforms?: string[]
  otherPlatform?: string
  biggestChallenge?: string
  // Additional fields
  formType: string
  formSource: string
  timestamp: string
  [key: string]: any
}

export async function processFormSubmission(formData: FormData) {
  try {
    // Add metadata
    const enrichedData = {
      ...formData,
      timestamp: new Date().toISOString(),
    }

    // Get the base URL (works in both development and production)
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http"
    const host = process.env.VERCEL_URL || "localhost:3000"
    const baseUrl = `${protocol}://${host}`

    // Send the form data to our webhook endpoint
    const response = await fetch(`${baseUrl}/api/webhooks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source: formData.formSource || "unknown",
        formData: enrichedData,
      }),
    })

    if (!response.ok) {
      throw new Error(`Webhook submission failed with status: ${response.status}`)
    }

    const result = await response.json()

    // Revalidate the current path to reflect any changes
    revalidatePath("/")

    return {
      success: true,
      message: "Form submitted successfully",
      data: result,
    }
  } catch (error) {
    console.error("Error processing form submission:", error)
    return {
      success: false,
      message: "Failed to process form submission",
    }
  }
}

export async function submitFormToWebhook(formData: any, source: string) {
  try {
    // Add source to the form data
    const dataWithSource = {
      ...formData,
      formSource: source,
      timestamp: new Date().toISOString(),
    }

    return processFormSubmission(dataWithSource)
  } catch (error) {
    console.error("Form submission error:", error)
    return { success: false, message: "Failed to submit form. Please try again." }
  }
}
