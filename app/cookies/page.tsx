import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CookiePolicy } from "@/components/legal/cookie-policy"

export const metadata = {
  title: "Cookie Policy | LeadsObtainer - Growth Solutions for Local Businesses",
  description: "Learn about how LeadsObtainer uses cookies and similar technologies.",
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <CookiePolicy />
      <Footer />
    </main>
  )
}
