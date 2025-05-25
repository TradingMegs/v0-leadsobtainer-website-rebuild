"use client"

import { useEffect, useState } from "react"

export function useExitIntent({ sensitivity = 20, disableOnMobile = true } = {}) {
  const [showExitIntent, setShowExitIntent] = useState(false)

  useEffect(() => {
    // Don't run on mobile devices if disabled
    if (disableOnMobile && typeof window !== "undefined" && /Mobi|Android/i.test(navigator.userAgent)) {
      return
    }

    let isActive = true

    // Function to detect exit intent
    const detectExitIntent = (e: MouseEvent) => {
      if (!isActive || showExitIntent) return

      // If the mouse is near the top of the page
      if (e.clientY <= sensitivity) {
        isActive = false
        setShowExitIntent(true)
      }
    }

    // Add event listener
    document.addEventListener("mousemove", detectExitIntent)

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", detectExitIntent)
    }
  }, [sensitivity, disableOnMobile, showExitIntent])

  return { showExitIntent, setShowExitIntent }
}
