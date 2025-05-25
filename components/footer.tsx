"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 bg-black border-t border-lime-500/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Link href="/" className="text-2xl font-bold flex items-center">
                <span className="text-lime-500">Leads</span>
                <span>Obtainer</span>
              </Link>
            </div>
            <p className="text-gray-400 mb-4">
              AI-powered growth system for local businesses. Triple your revenue in 90 days, guaranteed.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-lime-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-lime-500">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/knowledge-base" className="text-gray-400 hover:text-lime-500">
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-lime-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-lime-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-lime-500">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/services/ai-employee-automation" className="text-gray-400 hover:text-lime-500">
                  AI Employee Automation
                </Link>
              </li>
              <li>
                <Link href="/services/marketing-automation" className="text-gray-400 hover:text-lime-500">
                  Marketing Automation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Locations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/locations/united-states" className="text-gray-400 hover:text-lime-500">
                  United States
                </Link>
              </li>
              <li>
                <Link href="/locations/united-kingdom" className="text-gray-400 hover:text-lime-500">
                  United Kingdom
                </Link>
              </li>
              <li>
                <Link href="/locations/canada" className="text-gray-400 hover:text-lime-500">
                  Canada
                </Link>
              </li>
              <li>
                <Link href="/locations/australia" className="text-gray-400 hover:text-lime-500">
                  Australia
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-400 hover:text-lime-500">
                  View All Locations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-lime-500/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© {currentYear} LeadsObtainer. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-lime-500 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-lime-500 text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-lime-500 text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
