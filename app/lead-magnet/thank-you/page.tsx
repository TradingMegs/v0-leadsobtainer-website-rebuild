import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThankYouMessage } from "@/components/lead-magnet/thank-you-message"
import { ImmediateAccess } from "@/components/lead-magnet/immediate-access"
import { SecondaryCTAs } from "@/components/lead-magnet/secondary-ctas"
import { BackupOffer } from "@/components/lead-magnet/backup-offer"

export const metadata = {
  title: "Thank You for Downloading | LeadsObtainer - AI & Automation Playbook",
  description:
    "Your free AI & Automation Playbook is ready! Access your download and discover how to transform your business with AI-powered marketing and sales automation.",
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-gradient-to-b from-black to-gray-900 py-16">
        <div className="container mx-auto px-4">
          <ThankYouMessage />
          <ImmediateAccess />
          <SecondaryCTAs />
          <BackupOffer />
        </div>
      </div>
      <Footer />
    </main>
  )
}
