import Image from "next/image"
import { RippleButton } from "@/components/ui/ripple-button"

export function LeadMagnetHero() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Unlock the Future of Marketing: Get Your Free AI & Automation Playbook Today
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              Discover actionable strategies to automate your sales funnel, boost conversions, and scale with AI – no
              tech skills required!
            </p>
            <RippleButton
              href="#opt-in-form"
              className="rounded-md bg-lime-400 px-8 py-4 text-lg font-bold text-black transition-all hover:bg-lime-500"
            >
              Download My Free Playbook Now
            </RippleButton>
          </div>
          <div className="flex justify-center">
            <div className="relative h-[500px] w-[350px] overflow-hidden rounded-lg shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 to-cyan-500/20"></div>
              <Image
                src="/placeholder.svg?height=500&width=350"
                alt="AI & Automation Playbook Cover"
                width={350}
                height={500}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4 text-center">
                <span className="text-sm font-bold text-lime-400">Worth $199 - Yours FREE Today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
