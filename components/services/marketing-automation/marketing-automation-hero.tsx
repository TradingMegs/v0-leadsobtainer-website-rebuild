import { BackgroundBeams } from "@/components/ui/background-beams"
import { RippleButton } from "@/components/ui/ripple-button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function MarketingAutomationHero() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-black">
      <BackgroundBeams className="opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Turn Clicks into Customers with Automated Marketing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-xl">
              From lead capture to retention, our AI-driven systems drive conversions 24/7.
            </p>
            <Link href="/get-started">
              <RippleButton className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-full inline-flex items-center gap-2">
                Get Your Free Growth Plan
                <ArrowRight className="h-4 w-4" />
              </RippleButton>
            </Link>
          </div>
          <div className="relative">
            <div className="w-full h-[400px] rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm flex items-center justify-center overflow-hidden">
              {/* Marketing automation visualization */}
              <div className="relative w-full h-full">
                {/* Funnel visualization */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[20%] bg-gradient-to-b from-primary/40 to-primary/20 rounded-t-lg"></div>
                <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-[70%] h-[20%] bg-gradient-to-b from-primary/50 to-primary/30 flex items-center justify-center">
                  <span className="text-white text-sm">Lead Capture</span>
                </div>
                <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 w-[60%] h-[20%] bg-gradient-to-b from-primary/60 to-primary/40 flex items-center justify-center">
                  <span className="text-white text-sm">Nurturing</span>
                </div>
                <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 w-[50%] h-[20%] bg-gradient-to-b from-primary/70 to-primary/50 flex items-center justify-center">
                  <span className="text-white text-sm">Conversion</span>
                </div>
                <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 w-[40%] h-[20%] bg-gradient-to-b from-primary/80 to-primary/60 rounded-b-lg flex items-center justify-center">
                  <span className="text-white text-sm">Retention</span>
                </div>

                {/* Animated elements */}
                <div
                  className="absolute top-[5%] left-[10%] w-8 h-8 rounded-full bg-white/20 animate-ping"
                  style={{ animationDuration: "3s" }}
                ></div>
                <div
                  className="absolute top-[25%] left-[15%] w-6 h-6 rounded-full bg-white/20 animate-ping"
                  style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute top-[45%] right-[15%] w-7 h-7 rounded-full bg-white/20 animate-ping"
                  style={{ animationDuration: "3.5s", animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute top-[65%] right-[10%] w-5 h-5 rounded-full bg-white/20 animate-ping"
                  style={{ animationDuration: "3s", animationDelay: "1.5s" }}
                ></div>

                {/* Platform icons */}
                <div className="absolute top-[10%] right-[20%] w-12 h-12 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <div className="absolute top-[30%] left-[20%] w-12 h-12 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📧</span>
                </div>
                <div className="absolute top-[50%] right-[25%] w-12 h-12 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🔍</span>
                </div>
                <div className="absolute top-[70%] left-[25%] w-12 h-12 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
