"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isLocationsOpen, setIsLocationsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 50], [0, 1])
  const blur = useTransform(scrollY, [0, 50], [0, 8])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={cn(
        "py-4 px-4 md:px-8 lg:px-12 fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "backdrop-blur-md bg-background/70 shadow-md" : "",
      )}
      style={{
        backdropFilter: scrolled ? "blur(8px)" : "blur(0px)",
      }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <img src="/images/l7-logo.png" alt="L7 Logo" className="h-8 md:h-10 w-auto" style={{ maxWidth: "120px" }} />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button
              className="flex items-center text-white hover:text-primary transition-colors"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <motion.div
              className="absolute z-10 mt-2 w-48 rounded-md bg-secondary/80 backdrop-blur-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={isServicesOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="py-1">
                <Link
                  href="/services"
                  className="block px-4 py-2 text-sm text-white hover:bg-primary/20 transition-colors"
                  onClick={() => setIsServicesOpen(false)}
                >
                  All Services
                </Link>
                <Link
                  href="/services/ai-employee-automation"
                  className="block px-4 py-2 text-sm text-white hover:bg-primary/20 transition-colors"
                  onClick={() => setIsServicesOpen(false)}
                >
                  AI Employee Automation
                </Link>
                <Link
                  href="/services/marketing-automation"
                  className="block px-4 py-2 text-sm text-white hover:bg-primary/20 transition-colors"
                  onClick={() => setIsServicesOpen(false)}
                >
                  Marketing Automation
                </Link>
              </div>
            </motion.div>
          </div>
          <Link href="/about" className="text-white hover:text-primary transition-colors relative group">
            About
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.2 }}
            />
          </Link>
          <Link href="/pricing" className="text-white hover:text-primary transition-colors relative group">
            Pricing
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.2 }}
            />
          </Link>
          <Link href="/contact" className="text-white hover:text-primary transition-colors relative group">
            Contact
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.2 }}
            />
          </Link>
        </div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block">
          <Link href="/get-started">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
              Get Started
            </Button>
          </Link>
        </motion.div>

        {/* Mobile Navigation Toggle */}
        <motion.button
          className="md:hidden text-white"
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        className="md:hidden absolute z-20 top-16 left-0 right-0 bg-background/90 backdrop-blur-lg border-t border-border"
        initial={{ opacity: 0, height: 0 }}
        animate={isMenuOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isMenuOpen && (
          <div className="flex flex-col p-4 space-y-4">
            <button
              className="flex items-center justify-between text-white hover:text-primary transition-colors"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>
            <motion.div
              className="pl-4 space-y-2 overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={isServicesOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/services"
                className="block text-sm text-white hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                All Services
              </Link>
              <Link
                href="/services/ai-employee-automation"
                className="block text-sm text-white hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                AI Employee Automation
              </Link>
              <Link
                href="/services/marketing-automation"
                className="block text-sm text-white hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Marketing Automation
              </Link>
            </motion.div>
            <Link
              href="/about"
              className="text-white hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/pricing"
              className="text-white hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="/get-started" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full shadow-lg shadow-primary/20">
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </motion.div>
    </motion.nav>
  )
}
