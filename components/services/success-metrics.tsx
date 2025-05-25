import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export function SuccessMetrics() {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Success Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Real results from real businesses just like yours.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-12 mb-16 text-center">
          <div>
            <p className="text-5xl font-bold text-primary mb-2">4X</p>
            <p className="text-muted-foreground">Return on Investment</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-primary mb-2">89%</p>
            <p className="text-muted-foreground">Lead-to-Client Conversion</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-primary mb-2">60 Days</p>
            <p className="text-muted-foreground">Average Time to Results</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-secondary/30 rounded-lg p-6">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-primary" fill="currentColor" />
              ))}
            </div>
            <p className="text-muted-foreground mb-6">
              "LeadsObtainer helped us increase appointment bookings and capture more customers. Automated follow-up
              increased 50% conversion within 90 days."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full"></div>
              <div>
                <p className="font-medium">Local Gym</p>
                <p className="text-xs text-muted-foreground">Client since 2022</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-primary" fill="currentColor" />
              ))}
            </div>
            <p className="text-muted-foreground mb-6">
              "Doubled our monthly appointments, and our staff saved 15 hours per week on administrative tasks thanks to
              LeadsObtainer's automation systems."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full"></div>
              <div>
                <p className="font-medium">Dental Clinic</p>
                <p className="text-xs text-muted-foreground">Client since 2021</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-primary" fill="currentColor" />
              ))}
            </div>
            <p className="text-muted-foreground mb-6">
              "Since working with LeadsObtainer, our cost per lead dropped by 40% while our conversion rate increased by
              25%. The ROI has been incredible."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full"></div>
              <div>
                <p className="font-medium">Real Estate Agency</p>
                <p className="text-xs text-muted-foreground">Client since 2023</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="link" className="text-primary">
            Read more stories →
          </Button>
        </div>
      </div>
    </section>
  )
}
