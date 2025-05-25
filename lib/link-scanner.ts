import { mapButtonToTargetPage } from "./page-utils"

export interface UnlinkedElement {
  element: HTMLElement
  text: string
  suggestedLink: string
  location: string
}

export interface BrokenLink {
  element: HTMLAnchorElement
  href: string
  text: string
  location: string
}

export interface LinkScanResult {
  unlinkedElements: UnlinkedElement[]
  brokenLinks: BrokenLink[]
  timestamp: string
  pageUrl: string
}

/**
 * Scans the DOM for unlinked buttons and CTAs
 * @param location The current location name for reporting
 * @returns An array of unlinked elements with suggested links
 */
export function scanForUnlinkedElements(location: string): UnlinkedElement[] {
  const unlinkedElements: UnlinkedElement[] = []

  // Scan for buttons without links
  const buttons = document.querySelectorAll("button:not([disabled])")
  buttons.forEach((button) => {
    // Check if button is not wrapped in an anchor tag
    if (!button.closest("a")) {
      const buttonText = button.textContent || ""
      if (buttonText.trim()) {
        unlinkedElements.push({
          element: button as HTMLElement,
          text: buttonText.trim(),
          suggestedLink: mapButtonToTargetPage(buttonText),
          location,
        })
      }
    }
  })

  // Scan for elements with CTA-like classes that aren't linked
  const ctaSelectors = [
    ".cta",
    '[class*="cta"]',
    '[class*="call-to-action"]',
    ".btn:not(button)",
    '[class*="button"]:not(button)',
    ".card-action",
    ".action-link",
    ".learn-more",
  ]

  const ctaElements = document.querySelectorAll(ctaSelectors.join(","))
  ctaElements.forEach((element) => {
    // Check if element is not an anchor and not wrapped in an anchor
    if (element.tagName !== "A" && !element.closest("a")) {
      const elementText = element.textContent || ""
      if (elementText.trim()) {
        unlinkedElements.push({
          element: element as HTMLElement,
          text: elementText.trim(),
          suggestedLink: mapButtonToTargetPage(elementText),
          location,
        })
      }
    }
  })

  return unlinkedElements
}

/**
 * Scans the DOM for links to potentially non-existent pages
 * @param location The current location name for reporting
 * @returns An array of potentially broken links
 */
export function scanForPotentialBrokenLinks(location: string): BrokenLink[] {
  const potentialBrokenLinks: BrokenLink[] = []

  // Get all anchor tags
  const links = document.querySelectorAll("a[href]")

  links.forEach((link) => {
    const href = link.getAttribute("href") || ""

    // Skip external links, anchor links, and empty links
    if (href.startsWith("http") || href.startsWith("#") || href === "") {
      return
    }

    // Skip common known pages
    const knownPages = ["/", "/about", "/services", "/pricing", "/contact", "/get-started", "/booking", "/locations"]

    if (knownPages.includes(href)) {
      return
    }

    // Add to potential broken links for server-side verification
    potentialBrokenLinks.push({
      element: link as HTMLAnchorElement,
      href,
      text: link.textContent || "",
      location,
    })
  })

  return potentialBrokenLinks
}

/**
 * Fixes unlinked elements by wrapping them in anchor tags
 * @param unlinkedElements Array of unlinked elements to fix
 */
export function fixUnlinkedElements(unlinkedElements: UnlinkedElement[]): void {
  unlinkedElements.forEach((item) => {
    const { element, suggestedLink } = item

    // Create a new anchor element
    const anchor = document.createElement("a")
    anchor.href = suggestedLink
    anchor.className = element.className

    // Clone the element's attributes
    Array.from(element.attributes).forEach((attr) => {
      if (attr.name !== "class") {
        anchor.setAttribute(attr.name, attr.value)
      }
    })

    // Replace the element with the anchor wrapped version
    const parent = element.parentNode
    if (parent) {
      // Clone the element
      const clone = element.cloneNode(true)

      // Insert the clone into the anchor
      anchor.appendChild(clone)

      // Replace the original element with the anchor
      parent.replaceChild(anchor, element)
    }
  })
}
