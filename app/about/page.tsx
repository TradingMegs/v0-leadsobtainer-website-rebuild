import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { OurStory } from "@/components/about/our-story"
import { OurMission } from "@/components/about/our-mission"
import { OurValues } from "@/components/about/our-values"
import { OurApproach } from "@/components/about/our-approach"
import { OurTeam } from "@/components/about/our-team"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | LeadsObtainer - AI-Powered Growth Solutions",
  description:
    "Learn about LeadsObtainer's mission to revolutionize business growth through AI-powered marketing, sales, and client acquisition automation.",
  openGraph: {
    title: "About Us | LeadsObtainer - AI-Powered Growth Solutions",
    description:
      "Learn about LeadsObtainer's mission to revolutionize business growth through AI-powered marketing, sales, and client acquisition automation.",
    url: "https://leadsobtainer.com/about",
    siteName: "LeadsObtainer",
    locale: "en_US",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <AboutHero />
      <OurStory />
      <OurMission />
      <OurValues />
      <OurApproach />
      <OurTeam />
      <Footer />
    </main>
  )
}
