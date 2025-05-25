import fs from "fs"
import path from "path"
import { parse } from "json2csv"

// Path to the log file
const logFilePath = path.join(process.cwd(), "logs", "link-scan-results.json")

// Check if log file exists
if (!fs.existsSync(logFilePath)) {
  console.error("Log file not found. Run the link scanner first.")
  process.exit(1)
}

// Read log file
const logContent = fs.readFileSync(logFilePath, "utf8")
const logs = JSON.parse(logContent)

// Process logs
const unlinkedElements: any[] = []
const brokenLinks: any[] = []

logs.forEach((log: any) => {
  // Process unlinked elements
  log.unlinkedElements.forEach((element: any) => {
    unlinkedElements.push({
      pageUrl: log.pageUrl,
      timestamp: log.timestamp,
      text: element.text,
      suggestedLink: element.suggestedLink,
      location: element.location,
    })
  })

  // Process broken links
  log.brokenLinks.forEach((link: any) => {
    if (!link.exists) {
      brokenLinks.push({
        pageUrl: log.pageUrl,
        timestamp: log.timestamp,
        href: link.href,
        text: link.text,
        location: link.location,
        fallbackPage: link.fallbackPage,
      })
    }
  })
})

// Create reports directory
const reportsDir = path.join(process.cwd(), "reports")
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true })
}

// Generate CSV reports
if (unlinkedElements.length > 0) {
  const unlinkedCsv = parse(unlinkedElements)
  fs.writeFileSync(path.join(reportsDir, "unlinked-elements.csv"), unlinkedCsv)
  console.log(`Generated report for ${unlinkedElements.length} unlinked elements`)
}

if (brokenLinks.length > 0) {
  const brokenCsv = parse(brokenLinks)
  fs.writeFileSync(path.join(reportsDir, "broken-links.csv"), brokenCsv)
  console.log(`Generated report for ${brokenLinks.length} broken links`)
}

// Generate summary report
const summary = {
  totalScans: logs.length,
  uniquePages: new Set(logs.map((log: any) => log.pageUrl)).size,
  totalUnlinkedElements: unlinkedElements.length,
  totalBrokenLinks: brokenLinks.length,
  generatedAt: new Date().toISOString(),
}

fs.writeFileSync(path.join(reportsDir, "link-scan-summary.json"), JSON.stringify(summary, null, 2))

console.log("Link scan report generated successfully!")
console.log(`Total scans: ${summary.totalScans}`)
console.log(`Unique pages: ${summary.uniquePages}`)
console.log(`Total unlinked elements: ${summary.totalUnlinkedElements}`)
console.log(`Total broken links: ${summary.totalBrokenLinks}`)
