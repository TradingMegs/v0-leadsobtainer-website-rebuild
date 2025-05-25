import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AffiliateHero } from "@/components/affiliate/affiliate-hero"
import { AffiliateProgram } from "@/components/affiliate/affiliate-program"
import { AffiliateCommission } from "@/components/affiliate/affiliate-commission"
import { AffiliateResources } from "@/components/affiliate/affiliate-resources"
import { AffiliateFAQ } from "@/components/affiliate/affiliate-faq"
import { AffiliateJoin } from "@/components/affiliate/affiliate-join"

export const metadata = {
  title: "Affiliate Program | LeadsObtainer - Growth Solutions for Local Businesses",
  description: "Join our affiliate program and earn commissions by referring businesses to LeadsObtainer.",
}

export default function AffiliatePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <AffiliateHero />
      <AffiliateProgram />
      <AffiliateCommission />
      <AffiliateResources />
      <AffiliateFAQ />
      <AffiliateJoin />
      <Footer />
    </main>
  )
}
