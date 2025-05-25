import { Users, Shield, TrendingUp, Award } from "lucide-react"

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 px-4 bg-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Why Local Businesses Choose Growth Elevate Magic
              </h2>
              <p className="text-muted-foreground">
                Unlike other marketing agencies that promise the world but deliver little, we've built our entire
                business model around getting you real results.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Business Growth Guarantee</h3>
                  <p className="text-muted-foreground">
                    If you don't see measurable growth within 90 days, you don't pay. It's that simple.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Complete Sales Automation</h3>
                  <p className="text-muted-foreground">
                    Our AI system handles everything from lead generation to closing deals, freeing up your time.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proprietary Growth Technology</h3>
                  <p className="text-muted-foreground">
                    Our custom-built AI systems deliver results that traditional marketing agencies simply can't match.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Dedicated Growth Team</h3>
                  <p className="text-muted-foreground">
                    You'll have a team of growth experts working behind the scenes to optimize your results.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#get-started"
                className="inline-flex h-12 items-center justify-center rounded-md bg-lime-400 px-6 text-lg font-medium text-black transition-colors hover:bg-lime-300 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2"
              >
                Get Your Growth Plan
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-secondary/30 rounded-lg p-6 flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-primary mb-2">347%</div>
              <div className="text-sm text-muted-foreground">Average Revenue Increase</div>
            </div>

            <div className="bg-secondary/30 rounded-lg p-6 flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-primary mb-2">89%</div>
              <div className="text-sm text-muted-foreground">Reduction in Marketing Costs</div>
            </div>

            <div className="bg-secondary/30 rounded-lg p-6 flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-primary mb-2">76%</div>
              <div className="text-sm text-muted-foreground">Time Saved on Marketing</div>
            </div>

            <div className="bg-secondary/30 rounded-lg p-6 flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-primary mb-2">63%</div>
              <div className="text-sm text-muted-foreground">Increase in Customer Retention</div>
            </div>

            <div className="col-span-2 bg-secondary/30 rounded-lg p-4 text-center">
              <p className="text-xs text-muted-foreground">*Results based on average client performance in 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
