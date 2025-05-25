"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Variant = "A" | "B"

interface ExperimentContextType {
  variants: {
    headline: Variant
    ctaText: Variant
    heroImage: Variant
    benefitsLayout: Variant
    formStyle: Variant
    valueStackStyle: Variant
  }
  trackEvent: (eventName: string, properties?: Record<string, any>) => void
  trackConversion: (conversionName: string, value?: number) => void
}

const ExperimentContext = createContext<ExperimentContextType | undefined>(undefined)

export function useExperiment() {
  const context = useContext(ExperimentContext)
  if (context === undefined) {
    throw new Error("useExperiment must be used within an ExperimentProvider")
  }
  return context
}

interface ExperimentProviderProps {
  children: ReactNode
}

export function ExperimentProvider({ children }: ExperimentProviderProps) {
  // Randomly assign variants on client-side
  const [variants, setVariants] = useState({
    headline: "A" as Variant,
    ctaText: "A" as Variant,
    heroImage: "A" as Variant,
    benefitsLayout: "A" as Variant,
    formStyle: "A" as Variant,
    valueStackStyle: "A" as Variant,
  })

  useEffect(() => {
    // Randomly assign variants on client-side
    // In a real implementation, this would be handled by an A/B testing platform
    setVariants({
      headline: Math.random() > 0.5 ? "A" : "B",
      ctaText: Math.random() > 0.5 ? "A" : "B",
      heroImage: Math.random() > 0.5 ? "A" : "B",
      benefitsLayout: Math.random() > 0.5 ? "A" : "B",
      formStyle: Math.random() > 0.5 ? "A" : "B",
      valueStackStyle: Math.random() > 0.5 ? "A" : "B",
    })
  }, [])

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // In a real implementation, this would send data to an analytics platform
    console.log(`Event: ${eventName}`, properties)

    // Example implementation with Google Analytics
    if (typeof window !== "undefined" && "gtag" in window) {
      const gtag = (window as any).gtag
      gtag("event", eventName, {
        ...properties,
        experiment_variants: JSON.stringify(variants),
      })
    }
  }

  const trackConversion = (conversionName: string, value = 1) => {
    // In a real implementation, this would send conversion data to an analytics platform
    console.log(`Conversion: ${conversionName}`, { value })

    // Example implementation with Google Analytics
    if (typeof window !== "undefined" && "gtag" in window) {
      const gtag = (window as any).gtag
      gtag("event", "conversion", {
        send_to: "AW-CONVERSION_ID/CONVERSION_LABEL",
        event_category: "Promo",
        event_label: conversionName,
        value: value,
        non_interaction: false,
        experiment_variants: JSON.stringify(variants),
      })
    }
  }

  return (
    <ExperimentContext.Provider value={{ variants, trackEvent, trackConversion }}>
      {children}
    </ExperimentContext.Provider>
  )
}
