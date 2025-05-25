import { GlowBackground } from "@/components/ui/glow-background"
import WebinarHero from "@/components/webinar/webinar-hero"
import WebinarValueStack from "@/components/webinar/webinar-value-stack"
import WebinarSocialProof from "@/components/webinar/webinar-social-proof"
import WebinarForm from "@/components/webinar/webinar-form"
import WebinarUrgency from "@/components/webinar/webinar-urgency"

export default function WebinarPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <GlowBackground className="py-20">
        <div className="container max-w-5xl mx-auto px-4">
          <WebinarHero />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            <div className="space-y-12">
              <WebinarValueStack />
              <WebinarSocialProof />
            </div>

            <div className="lg:sticky lg:top-24 h-fit">
              <div className="bg-background/80 backdrop-blur-sm border rounded-xl p-6 shadow-lg">
                <WebinarForm />
                <WebinarUrgency />
              </div>
            </div>
          </div>
        </div>
      </GlowBackground>
    </main>
  )
}
