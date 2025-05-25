import { DollarSign, Users, BarChart3, Award } from "lucide-react"

export function AffiliateProgram() {
  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Why Join Our Affiliate Program?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our affiliate program offers competitive commissions, long cookie duration, and comprehensive support to
            help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-secondary/30 rounded-lg p-6 flex flex-col h-full">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">High Commissions</h3>
            <p className="text-muted-foreground">
              Earn up to 30% recurring commission on all referred customers for the lifetime of their subscription.
            </p>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6 flex flex-col h-full">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">90-Day Cookie</h3>
            <p className="text-muted-foreground">
              Our 90-day cookie duration ensures you get credit for referrals even if they don't sign up immediately.
            </p>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6 flex flex-col h-full">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Real-Time Tracking</h3>
            <p className="text-muted-foreground">
              Access a comprehensive dashboard with real-time tracking of clicks, conversions, and commissions.
            </p>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6 flex flex-col h-full">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Premium Support</h3>
            <p className="text-muted-foreground">
              Get dedicated support, marketing materials, and strategies to maximize your affiliate earnings.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
