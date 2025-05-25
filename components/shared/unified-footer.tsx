"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Shield, Lock } from "lucide-react"

type FooterProps = {
  variant?: "full" | "minimal"
  bgColor?: string
  textColor?: string
  accentColor?: string
}

export function UnifiedFooter({
  variant = "full",
  bgColor = "bg-black",
  textColor = "text-white",
  accentColor = "text-lime-500",
}: FooterProps) {
  const currentYear = new Date().getFullYear()
  const baseTextColor = textColor === "text-white" ? "text-gray-400" : "text-gray-600"
  const hoverColor = accentColor
  const borderColor = accentColor.replace("text-", "border-") + "/10"

  // Minimal footer variant
  if (variant === "minimal") {
    return (
      <footer className={`py-8 px-4 ${bgColor} border-t ${borderColor} relative z-10`} data-test="footer-minimal">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className={`h-5 w-5 ${accentColor} mr-2`} />
              <span className={`text-sm ${baseTextColor}`}>100% Satisfaction Guarantee</span>
            </div>

            <div className="flex items-center">
              <Lock className={`h-5 w-5 ${accentColor} mr-2`} />
              <span className={`text-sm ${baseTextColor}`}>Secure Payment</span>
            </div>
          </div>

          <div className="text-center">
            <p className={`text-sm ${baseTextColor} mb-4`}>© {currentYear} LeadsObtainer. All rights reserved.</p>

            <div className="flex justify-center space-x-6">
              <Link href="/privacy" className={`text-xs ${baseTextColor} hover:${hoverColor}`}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={`text-xs ${baseTextColor} hover:${hoverColor}`}>
                Terms of Service
              </Link>
              <Link href="/cookies" className={`text-xs ${baseTextColor} hover:${hoverColor}`}>
                Cookie Policy
              </Link>
              <Link href="/contact" className={`text-xs ${baseTextColor} hover:${hoverColor}`}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  // Full footer variant (default)
  return (
    <footer className={`py-12 px-4 ${bgColor} border-t ${borderColor}`} data-test="footer-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Link href="/" className={`text-2xl font-bold flex items-center ${textColor}`}>
                <span className={accentColor}>Leads</span>
                <span>Obtainer</span>
              </Link>
            </div>
            <p className={`${baseTextColor} mb-4`}>
              AI-powered growth system for local businesses. Triple your revenue in 90 days, guaranteed.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className={`h-5 w-5 ${baseTextColor} hover:${textColor} transition-colors`} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className={`h-5 w-5 ${baseTextColor} hover:${textColor} transition-colors`} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className={`h-5 w-5 ${baseTextColor} hover:${textColor} transition-colors`} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className={`h-5 w-5 ${baseTextColor} hover:${textColor} transition-colors`} />
              </a>
            </div>
          </div>

          <div>
            <h3 className={`text-lg font-bold mb-4 ${textColor}`}>Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className={`${baseTextColor} hover:${accentColor}`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className={`${baseTextColor} hover:${accentColor}`}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/knowledge-base" className={`${baseTextColor} hover:${accentColor}`}>
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link href="/careers" className={`${baseTextColor} hover:${accentColor}`}>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className={`${baseTextColor} hover:${accentColor}`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`text-lg font-bold mb-4 ${textColor}`}>Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className={`${baseTextColor} hover:${accentColor}`}>
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/services/ai-employee-automation" className={`${baseTextColor} hover:${accentColor}`}>
                  AI Employee Automation
                </Link>
              </li>
              <li>
                <Link href="/services/marketing-automation" className={`${baseTextColor} hover:${accentColor}`}>
                  Marketing Automation
                </Link>
              </li>
              <li>
                <Link href="/services/lead-generation" className={`${baseTextColor} hover:${accentColor}`}>
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className={`${baseTextColor} hover:${accentColor}`}>
                  SEO Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={`text-lg font-bold mb-4 ${textColor}`}>Locations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/locations/united-states" className={`${baseTextColor} hover:${accentColor}`}>
                  United States
                </Link>
              </li>
              <li>
                <Link href="/locations/united-kingdom" className={`${baseTextColor} hover:${accentColor}`}>
                  United Kingdom
                </Link>
              </li>
              <li>
                <Link href="/locations/canada" className={`${baseTextColor} hover:${accentColor}`}>
                  Canada
                </Link>
              </li>
              <li>
                <Link href="/locations/australia" className={`${baseTextColor} hover:${accentColor}`}>
                  Australia
                </Link>
              </li>
              <li>
                <Link href="/locations" className={`${baseTextColor} hover:${accentColor}`}>
                  View All Locations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={`border-t ${borderColor} mt-8 pt-8 flex flex-col md:flex-row justify-between items-center`}>
          <p className={`${baseTextColor} text-sm mb-4 md:mb-0`}>© {currentYear} LeadsObtainer. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className={`${baseTextColor} hover:${accentColor} text-sm`}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={`${baseTextColor} hover:${accentColor} text-sm`}>
              Terms of Service
            </Link>
            <Link href="/cookies" className={`${baseTextColor} hover:${accentColor} text-sm`}>
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
