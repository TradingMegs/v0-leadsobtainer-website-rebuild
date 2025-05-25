import { Check } from "lucide-react"

export function LeadMagnetValue() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">What You'll Discover Inside</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4 rounded-lg bg-gray-800/50 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-400">
                <Check className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  Step-by-step guide to building a 24/7 sales machine using AI tools
                </h3>
                <p className="text-gray-300">
                  Follow our proven framework to create an automated sales system that works around the clock,
                  generating leads and closing deals while you focus on growing your business.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg bg-gray-800/50 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-400">
                <Check className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  Automate repetitive tasks with Zapier, Make (Integromat), and AI chatbots
                </h3>
                <p className="text-gray-300">
                  Learn how to connect your favorite tools and create powerful workflows that save you hours every week,
                  with step-by-step tutorials anyone can follow.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg bg-gray-800/50 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-400">
                <Check className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  Proven templates for high-converting email sequences and landing pages
                </h3>
                <p className="text-gray-300">
                  Get instant access to our library of templates that have generated millions in revenue for our clients
                  – just copy, customize, and deploy.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg bg-gray-800/50 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-400">
                <Check className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  Case studies: How businesses doubled revenue using these tactics
                </h3>
                <p className="text-gray-300">
                  See real-world examples of local businesses that transformed their operations with our AI and
                  automation strategies, with detailed breakdowns of what worked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
