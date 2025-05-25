import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookingCalendar } from "@/components/booking/booking-calendar"

export const metadata = {
  title: "Book a Strategy Session | LeadsObtainer - Growth Solutions for Local Businesses",
  description: "Schedule your free strategy session with one of our growth specialists.",
}

export default function BookingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <BookingCalendar />
      <Footer />
    </main>
  )
}
