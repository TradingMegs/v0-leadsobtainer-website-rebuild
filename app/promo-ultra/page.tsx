import type { Metadata } from "next"
import UltraPromoPage from "./UltraPromoPage"
import "@/styles/promo.css"

export const metadata: Metadata = {
  title: "Get Your Business Running on Autopilot in 30 Minutes | LeadsObtainer",
  description: "Our AI-powered automation system handles your marketing, sales, and customer service 24/7",
}

export default function PromoUltraPage() {
  return <UltraPromoPage />
}
