import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LeadMagnetHero } from "@/components/lead-magnet/lead-magnet-hero"
import { LeadMagnetValue } from "@/components/lead-magnet/lead-magnet-value"
import { LeadMagnetSocialProof } from "@/components/lead-magnet/lead-magnet-social-proof"
import { LeadMagnetForm } from "@/components/lead-magnet/lead-magnet-form"
import { LeadMagnetScarcity } from "@/components/lead-magnet/lead-magnet-scarcity"
import { BackgroundBeams } from "@/components/ui/background-beams"

export const metadata = {
  title: "Free AI & Automation Playbook | LeadsObtainer - Unlock Marketing Secrets",
  description:
    "Download our free AI & Automation Playbook and discover actionable strategies to automate your sales funnel, boost conversions, and scale with AI – no tech skills required!",
}

export default function LeadMagnetPage() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <Navbar />
      <div className="flex-1 relative z-10">
        <LeadMagnetHero />
        <LeadMagnetValue />
        <LeadMagnetSocialProof />
        <LeadMagnetForm />
        <LeadMagnetScarcity />
      </div>
      <BackgroundBeams className="opacity-20" />
      <Footer />
    </main>
  )
}
