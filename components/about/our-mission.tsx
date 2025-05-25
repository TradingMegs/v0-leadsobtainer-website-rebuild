import { Zap, Users, TrendingUp } from "lucide-react"

export function OurMission() {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Mission</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to help 10,000 local businesses triple their revenue through AI-powered growth systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary/30 rounded-lg p-6 flex flex-col h-full">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Empower Local Businesses</h3>
            <p className="text-muted-foreground">
              We believe local businesses are the backbone of communities. Our mission is to give them the tools and
              strategies to compete and thrive in the digital age.
            </p>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6 flex flex-col h-full">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Drive Measurable Growth</h3>
            <p className="text-muted-foreground">
              We're obsessed with results. Every strategy, tactic, and system we implement is designed to drive
              measurable growth for our clients.
            </p>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6 flex flex-col h-full">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Build Long-Term Partnerships</h3>
            <p className="text-muted-foreground">
              We're not interested in quick wins. We build long-term partnerships with our clients, becoming an
              extension of their team and a trusted advisor for their growth journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
