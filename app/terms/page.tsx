import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TermsOfService } from "@/components/legal/terms-of-service"

export const metadata = {
  title: "Terms of Service | LeadsObtainer - Growth Solutions for Local Businesses",
  description: "Read the terms and conditions governing the use of LeadsObtainer services.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <TermsOfService />
      <Footer />
    </main>
  )
}
