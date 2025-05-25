import { Zap, BarChart3, Users, Clock } from "lucide-react"

interface LocationServicesProps {
  location: string
}

export function LocationServices({ location }: LocationServicesProps) {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Services in {location}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive suite of AI-powered growth solutions tailored to businesses in {location}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-secondary/30 rounded-lg p-6 flex flex-col h-full">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Automated Lead Generation</h3>
            <p className="text-muted-foreground">
              Our AI identifies and targets your ideal customers in {location} with precision, delivering a consistent
              flow of high-quality local leads.
            </p>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6 flex flex-col h-full">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI-Powered Sales Automation</h3>
            <p className="text-muted-foreground">
              Our system nurtures leads through the entire sales process, handling follow-ups and scheduling, optimized
              for businesses in {location}.
            </p>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6 flex flex-col h-full">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Local Market Expertise</h3>
            <p className="text-muted-foreground">
              Our team has deep knowledge of the {location} market, allowing us to create strategies that resonate with
              local customers and drive growth.
            </p>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6 flex flex-col h-full">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Compliance & Localization</h3>
            <p className="text-muted-foreground">
              Our solutions are fully compliant with {location}'s regulations and localized to meet the specific needs
              and preferences of your target market.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
