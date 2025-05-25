"use client"

import { useState, useEffect } from "react"

export function useScrollDepth() {
  const [scrollDepth, setScrollDepth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      // Calculate how far the user has scrolled as a percentage
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollDepth(Math.min(Math.round(scrollPercentage), 100))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollDepth
}
