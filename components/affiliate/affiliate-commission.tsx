import { CheckCircle } from "lucide-react"

export function AffiliateCommission() {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Commission Structure</h2>
            <p className="text-muted-foreground mb-8">
              Our tiered commission structure rewards you for bringing in more customers. The more you refer, the higher
              your commission rate.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Standard Tier: 20% Commission</p>
                  <p className="text-sm text-muted-foreground">
                    Start earning 20% recurring commission on all referrals from day one.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Silver Tier: 25% Commission</p>
                  <p className="text-sm text-muted-foreground">
                    After 5 successful referrals, your commission rate increases to 25%.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Gold Tier: 30% Commission</p>
                  <p className="text-sm text-muted-foreground">
                    After 10 successful referrals, enjoy our maximum commission rate of 30%.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Lifetime Commissions</p>
                  <p className="text-sm text-muted-foreground">
                    Earn commissions for as long as your referred customers remain subscribed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-secondary/30 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Earning Potential</h3>
              <div className="space-y-6">
                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="font-medium mb-2">Example 1: Small Agency</p>
                  <p className="text-sm text-muted-foreground mb-2">Refer 5 clients on the Pro Plan ($797/month)</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Monthly Commission:</span>
                    <span className="text-xl font-bold text-primary">$996.25</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Annual Commission:</span>
                    <span className="text-xl font-bold text-primary">$11,955</span>
                  </div>
                </div>

                <div className="bg-secondary/50 rounded-lg p-4">
                  <p className="font-medium mb-2">Example 2: Marketing Consultant</p>
                  <p className="text-sm text-muted-foreground mb-2">Refer 10 clients on the Elite Plan ($979/month)</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Monthly Commission:</span>
                    <span className="text-xl font-bold text-primary">$2,937</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Annual Commission:</span>
                    <span className="text-xl font-bold text-primary">$35,244</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
