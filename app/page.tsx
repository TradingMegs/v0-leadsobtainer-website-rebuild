import type { Metadata } from "next"
import EnhancedHomePage from "@/components/enhanced-home/EnhancedHomePage"

export const metadata: Metadata = {
  title: "LeadsObtainer - Triple Your Local Business Revenue in 90 Days | Guaranteed Results",
  description:
    "Our AI-powered growth system automates your marketing, sales, and client acquisition — guaranteed results or you don't pay. See how local businesses increase revenue by 317% on average.",
}

export default function Home() {
  return <EnhancedHomePage />
}
