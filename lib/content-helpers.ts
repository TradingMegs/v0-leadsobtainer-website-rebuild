/**
 * Checks if the provided content contains a specific keyword (case-insensitive)
 * @param content The content to check
 * @param keyword The keyword to look for
 * @returns Boolean indicating if the keyword was found
 */
export function contentContainsKeyword(content: string, keyword: string): boolean {
  if (!content || !keyword) return false

  // Create a regex with word boundaries to match whole words only
  const regex = new RegExp(`\\b${keyword}\\b`, "i")
  return regex.test(content)
}

/**
 * Determines the appropriate CTA URL based on page content
 * @param content The page content
 * @param location Optional location parameter to append to the URL
 * @returns The appropriate CTA URL
 */
export function getCtaUrl(content: string, location?: string): string {
  const hasBookingKeyword = contentContainsKeyword(content, "book")

  // Base URL based on content
  const baseUrl = hasBookingKeyword ? "/booking" : "/get-started"

  // Append location parameter if provided
  if (location) {
    return `${baseUrl}?location=${encodeURIComponent(location)}`
  }

  return baseUrl
}

/**
 * Gets the appropriate CTA text based on page content
 * @param content The page content
 * @returns The appropriate CTA text
 */
export function getCtaText(content: string): string {
  const hasBookingKeyword = contentContainsKeyword(content, "book")
  return hasBookingKeyword ? "Book a Free Strategy Call" : "Get Your Free Growth Plan"
}
