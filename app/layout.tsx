import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { UnifiedFooter } from "@/components/shared/unified-footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LeadsObtainer - AI-Powered Lead Generation for Local Businesses",
  description:
    "Triple your qualified leads without increasing ad spend. Our AI-powered system automates your lead generation and follow-up for predictable business growth.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main>{children}</main>
          <UnifiedFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
