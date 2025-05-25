"use client"

import { useEffect, useState } from "react"
import {
  scanForUnlinkedElements,
  scanForPotentialBrokenLinks,
  fixUnlinkedElements,
  type LinkScanResult,
} from "@/lib/link-scanner"

interface UseLinkScannerProps {
  location: string
  autoFix?: boolean
  onScanComplete?: (result: LinkScanResult) => void
}

/**
 * Hook to scan for and optionally fix unlinked elements and broken links
 */
export function useLinkScanner({ location, autoFix = false, onScanComplete }: UseLinkScannerProps) {
  const [scanResult, setScanResult] = useState<LinkScanResult | null>(null)
  const [isScanning, setIsScanning] = useState(false)

  useEffect(() => {
    // Don't run on server
    if (typeof window === "undefined") return

    // Wait for the page to fully render
    const timeoutId = setTimeout(() => {
      setIsScanning(true)

      try {
        // Scan for unlinked elements
        const unlinkedElements = scanForUnlinkedElements(location)

        // Scan for potential broken links
        const brokenLinks = scanForPotentialBrokenLinks(location)

        // Create scan result
        const result: LinkScanResult = {
          unlinkedElements,
          brokenLinks,
          timestamp: new Date().toISOString(),
          pageUrl: window.location.href,
        }

        // Update state
        setScanResult(result)

        // Call callback if provided
        if (onScanComplete) {
          onScanComplete(result)
        }

        // Auto-fix unlinked elements if enabled
        if (autoFix && unlinkedElements.length > 0) {
          fixUnlinkedElements(unlinkedElements)
        }
      } catch (error) {
        console.error("Error scanning for links:", error)
      } finally {
        setIsScanning(false)
      }
    }, 1000) // Wait 1 second for the page to render

    return () => clearTimeout(timeoutId)
  }, [location, autoFix, onScanComplete])

  return { scanResult, isScanning }
}
