import { PlayButton } from "@/components/ui/play-button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ServiceOverview() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              AI-Powered Growth Solutions: Your Business, Supercharged
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Our comprehensive suite of services is designed to transform your business operations, automate repetitive
              tasks, and drive consistent growth through cutting-edge AI technology.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              From lead generation to customer retention, we've built systems that work 24/7 to help local businesses
              compete and win in today's digital landscape.
            </p>

            <Link href="/get-started">
              <button className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all">
                See If Your Business Qualifies for Our System
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>

          <div className="relative">
            <div className="w-full aspect-video rounded-xl bg-black/60 backdrop-blur-sm border border-primary/20 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayButton />
              </div>

              {/* Placeholder for video thumbnail */}
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🚀</div>
                  <div className="text-sm text-gray-400">Watch Demo</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">How Our AI Solutions Work Together</h3>

          <div className="relative">
            {/* Interactive workflow diagram */}
            <div className="w-full h-[400px] bg-black/40 backdrop-blur-sm rounded-xl border border-primary/20 p-8 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 flex items-center justify-center">
                <div className="text-xl font-bold">Your Business</div>
              </div>

              {/* Orbiting services */}
              <div className="absolute top-[15%] left-[25%] w-[120px] h-[120px] rounded-full bg-black/60 border border-primary/40 flex items-center justify-center transform hover:scale-110 transition-all cursor-pointer">
                <Link href="/services/ai-employee-automation" className="text-center">
                  <div className="text-3xl mb-1">🤖</div>
                  <div className="text-sm">AI Employee</div>
                </Link>
              </div>

              <div className="absolute top-[15%] right-[25%] w-[120px] h-[120px] rounded-full bg-black/60 border border-primary/40 flex items-center justify-center transform hover:scale-110 transition-all cursor-pointer">
                <Link href="/services/marketing-automation" className="text-center">
                  <div className="text-3xl mb-1">📊</div>
                  <div className="text-sm">Marketing</div>
                </Link>
              </div>

              <div className="absolute bottom-[15%] left-[25%] w-[120px] h-[120px] rounded-full bg-black/60 border border-primary/40 flex items-center justify-center transform hover:scale-110 transition-all cursor-pointer">
                <div className="text-center">
                  <div className="text-3xl mb-1">🔍</div>
                  <div className="text-sm">SEO</div>
                </div>
              </div>

              <div className="absolute bottom-[15%] right-[25%] w-[120px] h-[120px] rounded-full bg-black/60 border border-primary/40 flex items-center justify-center transform hover:scale-110 transition-all cursor-pointer">
                <div className="text-center">
                  <div className="text-3xl mb-1">💬</div>
                  <div className="text-sm">CRM</div>
                </div>
              </div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <line
                  x1="50%"
                  y1="50%"
                  x2="25%"
                  y2="15%"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="75%"
                  y2="15%"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="25%"
                  y2="85%"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="75%"
                  y2="85%"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Trusted By</h3>

            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {/* Client logos - using placeholder grayscale boxes */}
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div key={index} className="w-32 h-16 bg-white/5 rounded-lg flex items-center justify-center">
                  <div className="text-gray-500 font-semibold">Client {index + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
