"use client"

import { useState } from "react"
import { useLinkScanner } from "@/hooks/use-link-scanner"
import { LinkScanResults } from "@/components/debug/link-scan-results"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle } from "lucide-react"

interface LinkIntegrityScannerProps {
  location: string
  autoFix?: boolean
  debug?: boolean
}

export function LinkIntegrityScanner({ location, autoFix = true, debug = false }: LinkIntegrityScannerProps) {
  const [showResults, setShowResults] = useState(false)
  const { scanResult, isScanning } = useLinkScanner({
    location,
    autoFix,
    onScanComplete: (result) => {
      // If in debug mode and there are issues, show results automatically
      if (debug && (result.unlinkedElements.length > 0 || result.brokenLinks.length > 0)) {
        setShowResults(true)
      }
    },
  })

  // Only render in development mode or if debug is true
  if (process.env.NODE_ENV !== "development" && !debug) {
    return null
  }

  return (
    <>
      {debug && (
        <div className="fixed bottom-4 right-4 z-40">
          <Button
            onClick={() => setShowResults(true)}
            size="sm"
            variant={
              scanResult && (scanResult.unlinkedElements.length > 0 || scanResult.brokenLinks.length > 0)
                ? "destructive"
                : "outline"
            }
            className="flex items-center gap-2"
          >
            {scanResult ? (
              scanResult.unlinkedElements.length > 0 || scanResult.brokenLinks.length > 0 ? (
                <>
                  <AlertCircle className="h-4 w-4" />
                  <span>Issues Found</span>
                </>
              ) : (
                <>
                  <CheckCircle className="h-4 w-4" />
                  <span>No Issues</span>
                </>
              )
            ) : (
              <span>{isScanning ? "Scanning..." : "Scan Links"}</span>
            )}
          </Button>
        </div>
      )}

      {showResults && scanResult && <LinkScanResults result={scanResult} onClose={() => setShowResults(false)} />}
    </>
  )
}
