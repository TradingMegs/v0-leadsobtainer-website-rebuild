import { BackgroundBeams } from "@/components/ui/background-beams"
import { RippleButton } from "@/components/ui/ripple-button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AiEmployeeHero() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-black">
      <BackgroundBeams className="opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your 24/7 AI Employee: Automate Tasks, Scale Growth
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-xl">
              From lead qualification to social media management, let AI handle the heavy lifting while you focus on
              growth.
            </p>
            <Link href="/get-started">
              <RippleButton className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3 rounded-full inline-flex items-center gap-2">
                Get Your Free Growth Plan
                <ArrowRight className="h-4 w-4" />
              </RippleButton>
            </Link>
          </div>
          <div className="relative">
            <div className="w-full h-[400px] rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm flex items-center justify-center">
              <div className="relative w-[300px] h-[300px]">
                {/* Animated AI assistant visualization */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full bg-black flex items-center justify-center">
                  <div className="text-6xl">🤖</div>
                </div>

                {/* Orbiting elements */}
                <div className="absolute w-14 h-14 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center animate-orbit-1 shadow-lg">
                  <span className="text-2xl">📅</span>
                </div>
                <div
                  className="absolute w-14 h-14 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center animate-orbit-2 shadow-lg"
                  style={{ animationDelay: "0.5s" }}
                >
                  <span className="text-2xl">📊</span>
                </div>
                <div
                  className="absolute w-14 h-14 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center animate-orbit-3 shadow-lg"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="text-2xl">📱</span>
                </div>
                <div
                  className="absolute w-14 h-14 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center animate-orbit-4 shadow-lg"
                  style={{ animationDelay: "1.5s" }}
                >
                  <span className="text-2xl">💬</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
