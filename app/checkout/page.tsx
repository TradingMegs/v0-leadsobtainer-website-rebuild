import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import CheckoutForm from "@/components/checkout/checkout-form"
import CheckoutSummary from "@/components/checkout/checkout-summary"
import { BackgroundBeams } from "@/components/ui/background-beams"

export const metadata = {
  title: "Checkout | LeadsObtainer - Complete Your Order",
  description: "Complete your order and start growing your business with LeadsObtainer's AI-powered solutions.",
}

export default function CheckoutPage() {
  return (
    <main className="min-h-screen flex flex-col relative bg-slate-950">
      <Navbar />
      <div className="flex-1 py-16 md:py-24 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600">
            Complete Your Order
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CheckoutForm />
            </div>

            <div className="lg:col-span-1">
              <CheckoutSummary />
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams className="opacity-20" />
      <Footer />
    </main>
  )
}
