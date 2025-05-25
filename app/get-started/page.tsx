import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GetStartedForm } from "@/components/get-started/get-started-form"

export const metadata = {
  title: "Get Started | LeadsObtainer - Growth Solutions for Local Businesses",
  description: "Answer a few quick questions to see if your business qualifies for our AI-powered growth solutions.",
}

export default function GetStartedPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <GetStartedForm />
      <Footer />
    </main>
  )
}
