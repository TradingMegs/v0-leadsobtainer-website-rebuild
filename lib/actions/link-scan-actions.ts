"use server"

import fs from "fs"
import path from "path"
import type { LinkScanResult } from "@/lib/link-scanner"
import { pageExists, getFallbackPage } from "@/lib/page-utils"

/**
 * Logs link scan results to a file and returns verified broken links
 * @param result The link scan result from the client
 * @returns The verified broken links with fallback pages
 */
export async function logLinkScanResults(result: LinkScanResult) {
  const { unlinkedElements, brokenLinks, timestamp, pageUrl } = result

  // Verify broken links by checking if the pages exist
  const verifiedBrokenLinks = await Promise.all(
    brokenLinks.map(async (link) => {
      const exists = pageExists(link.href)
      const fallbackPage = !exists ? getFallbackPage(link.href) : null

      return {
        ...link,
        exists,
        fallbackPage,
      }
    }),
  )

  // Create log entry
  const logEntry = {
    timestamp,
    pageUrl,
    unlinkedElements: unlinkedElements.map(({ element, ...rest }) => rest), // Remove DOM element
    brokenLinks: verifiedBrokenLinks.map(({ element, ...rest }) => rest), // Remove DOM element
  }

  // Ensure logs directory exists
  const logsDir = path.join(process.cwd(), "logs")
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true })
  }

  // Write to log file
  const logFilePath = path.join(logsDir, "link-scan-results.json")

  let existingLogs: any[] = []
  if (fs.existsSync(logFilePath)) {
    try {
      const fileContent = fs.readFileSync(logFilePath, "utf8")
      existingLogs = JSON.parse(fileContent)
    } catch (error) {
      console.error("Error reading existing logs:", error)
    }
  }

  // Add new log entry
  existingLogs.push(logEntry)

  // Write updated logs
  fs.writeFileSync(logFilePath, JSON.stringify(existingLogs, null, 2), "utf8")

  // Return verified broken links for client-side use
  return verifiedBrokenLinks.filter((link) => !link.exists)
}
