import type { Metadata } from "next"
import HighConversionPromo from "./HighConversionPromo"

export const metadata: Metadata = {
  title: "4X Your Business In 90 Days – Or We Pay You $1,000 CASH | LeadsObtainer",
  description: "Our AI-powered lead generation system turns strangers into paying clients on autopilot, guaranteed.",
}

export default function PromoPage() {
  return <HighConversionPromo />
}
