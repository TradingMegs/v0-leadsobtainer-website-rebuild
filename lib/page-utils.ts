import fs from "fs"
import path from "path"

/**
 * Checks if a page exists in the Next.js application
 * @param pagePath The path to check (e.g., /services/email-marketing)
 * @returns Boolean indicating if the page exists
 */
export function pageExists(pagePath: string): boolean {
  // Remove leading slash if present
  const normalizedPath = pagePath.startsWith("/") ? pagePath.slice(1) : pagePath

  // Check if it's a dynamic route with parameters
  if (normalizedPath.includes("[") && normalizedPath.includes("]")) {
    // For dynamic routes, we just check if the parent directory exists
    const parentPath = normalizedPath.split("/").slice(0, -1).join("/")
    return fs.existsSync(path.join(process.cwd(), "app", parentPath))
  }

  // Check for page.tsx in the app directory
  const appDirPath = path.join(process.cwd(), "app", normalizedPath, "page.tsx")
  if (fs.existsSync(appDirPath)) {
    return true
  }

  // Check for index.tsx in the app directory
  const appDirIndexPath = path.join(process.cwd(), "app", normalizedPath, "index.tsx")
  if (fs.existsSync(appDirIndexPath)) {
    return true
  }

  return false
}

/**
 * Maps button text to appropriate target pages
 * @param buttonText The text content of the button
 * @returns The appropriate target URL
 */
export function mapButtonToTargetPage(buttonText: string): string {
  const text = buttonText.toLowerCase().trim()

  // Common button text mappings
  const buttonMappings: Record<string, string> = {
    contact: "/contact",
    "contact us": "/contact",
    "get in touch": "/contact",
    "learn more": "/get-started",
    "get started": "/get-started",
    "start now": "/get-started",
    book: "/booking",
    "book a call": "/booking",
    schedule: "/booking",
    "schedule a call": "/booking",
    pricing: "/pricing",
    "view pricing": "/pricing",
    services: "/services",
    "our services": "/services",
    about: "/about",
    "about us": "/about",
    "free consultation": "/booking",
    "free strategy": "/booking",
    "free strategy call": "/booking",
    "free strategy session": "/booking",
    "case studies": "/case-studies",
    testimonials: "/testimonials",
    faq: "/faq",
    faqs: "/faq",
  }

  // Return the mapped URL or a default
  return buttonMappings[text] || "/get-started"
}

/**
 * Determines the appropriate fallback page for a missing page
 * @param missingPagePath The path that doesn't exist
 * @returns The appropriate fallback URL
 */
export function getFallbackPage(missingPagePath: string): string {
  // Remove leading slash if present
  const normalizedPath = missingPagePath.startsWith("/") ? missingPagePath.slice(1) : missingPagePath

  // Split the path into segments
  const segments = normalizedPath.split("/")

  // If it's a service page
  if (segments[0] === "services" && segments.length > 1) {
    return "/services"
  }

  // If it's a location page
  if (segments[0] === "locations" && segments.length > 1) {
    return "/locations"
  }

  // Default fallback
  return "/coming-soon"
}
