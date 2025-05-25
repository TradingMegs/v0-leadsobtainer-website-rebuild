import type { Metadata } from "next"
import HomeUltraPage from "./HomeUltraPage"

export const metadata: Metadata = {
  title: "LeadsObtainer - Transform Your Business Growth | AI-Powered Solutions",
  description:
    "Our comprehensive AI-powered growth system automates your marketing, sales, and client acquisition — delivering guaranteed results for local businesses.",
  openGraph: {
    title: "LeadsObtainer - Transform Your Business Growth | AI-Powered Solutions",
    description:
      "Our comprehensive AI-powered growth system automates your marketing, sales, and client acquisition — delivering guaranteed results for local businesses.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
}

export default function HomeUltra() {
  return <HomeUltraPage />
}
