"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Variant = "A" | "B"

type ABTestContextType = {
  headlineVariant: Variant
  ctaTextVariant: Variant
  heroImageVariant: Variant
  trackConversion: (element: string) => void
}

const ABTestContext = createContext<ABTestContextType | undefined>(undefined)

export function useABTest() {
  const context = useContext(ABTestContext)
  if (!context) {
    throw new Error("useABTest must be used within an ABTestProvider")
  }
  return context
}

type ABTestProviderProps = {
  children: ReactNode
}

export function ABTestProvider({ children }: ABTestProviderProps) {
  // Randomly assign variants on client-side only
  const [variants, setVariants] = useState<{
    headline: Variant
    ctaText: Variant
    heroImage: Variant
  }>({
    headline: "A",
    ctaText: "A",
    heroImage: "A",
  })

  useEffect(() => {
    // Randomly assign variants or get from localStorage if already set
    const storedVariants = localStorage.getItem("ab_test_variants")

    if (storedVariants) {
      setVariants(JSON.parse(storedVariants))
    } else {
      const newVariants = {
        headline: Math.random() > 0.5 ? "A" : "B",
        ctaText: Math.random() > 0.5 ? "A" : "B",
        heroImage: Math.random() > 0.5 ? "A" : "B",
      }
      setVariants(newVariants)
      localStorage.setItem("ab_test_variants", JSON.stringify(newVariants))
    }
  }, [])

  const trackConversion = (element: string) => {
    // In a real implementation, this would send data to your analytics platform
    console.log(`Conversion tracked for ${element}`, variants)

    // Example implementation with Google Analytics
    if (typeof window !== "undefined" && "gtag" in window) {
      const gtag = (window as any).gtag
      gtag("event", "conversion", {
        send_to: "AW-CONVERSION_ID/CONVERSION_LABEL",
        event_category: "Promo",
        event_label: element,
        value: 1,
        non_interaction: false,
        headline_variant: variants.headline,
        cta_variant: variants.ctaText,
        hero_image_variant: variants.heroImage,
      })
    }
  }

  return (
    <ABTestContext.Provider
      value={{
        headlineVariant: variants.headline,
        ctaTextVariant: variants.ctaText,
        heroImageVariant: variants.heroImage,
        trackConversion,
      }}
    >
      {children}
    </ABTestContext.Provider>
  )
}
