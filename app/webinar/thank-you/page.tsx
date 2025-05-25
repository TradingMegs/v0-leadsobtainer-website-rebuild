import type { Metadata } from "next"
import ThankYouMessage from "@/components/webinar/thank-you-message"
import CalendarIntegration from "@/components/webinar/calendar-integration"
import SecondaryIncentives from "@/components/webinar/secondary-incentives"
import UrgencyReinforcement from "@/components/webinar/urgency-reinforcement"
import GlowBackground from "@/components/ui/glow-background"

export const metadata: Metadata = {
  title: "You're In! Webinar Confirmation | LeadsObtainer",
  description:
    "Thank you for registering for our lead generation masterclass. Add it to your calendar and prepare for actionable strategies to grow your business.",
  keywords: "webinar confirmation, lead generation masterclass, business growth strategies",
}

export default function ThankYouPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <GlowBackground className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <ThankYouMessage />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div>
                <CalendarIntegration />
              </div>
              <div>
                <SecondaryIncentives />
                <UrgencyReinforcement />
              </div>
            </div>
          </div>
        </div>
      </GlowBackground>
    </main>
  )
}
