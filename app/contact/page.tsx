import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { TrustedBy } from "@/components/contact/trusted-by"
import { ContactDetails } from "@/components/contact/contact-details"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactFAQ } from "@/components/contact/contact-faq"
import { PremiumSolutions } from "@/components/premium-solutions"

export const metadata = {
  title: "Contact Us | LeadsObtainer - Growth Solutions for Local Businesses",
  description: "Get in touch with LeadsObtainer. Our team is ready to help you achieve explosive growth.",
}

// Apply alternating background colors to Contact page sections
export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <ContactHero />
      <TrustedBy />
      <div className="py-16 md:py-24 px-4 bg-secondary/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactDetails />
            <ContactForm />
          </div>
        </div>
      </div>
      <ContactFAQ />
      <PremiumSolutions />
      <Footer />
    </main>
  )
}
