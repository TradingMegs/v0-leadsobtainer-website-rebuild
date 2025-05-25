import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PrivacyPolicy } from "@/components/legal/privacy-policy"

export const metadata = {
  title: "Privacy Policy | LeadsObtainer - Growth Solutions for Local Businesses",
  description: "Learn about how LeadsObtainer collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </main>
  )
}
