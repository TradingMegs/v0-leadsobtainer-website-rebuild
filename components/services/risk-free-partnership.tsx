import { Button } from "@/components/ui/button"

export function RiskFreePartnership() {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="bg-secondary/30 rounded-lg p-8 md:p-12">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Risk-Free Partnership</h2>
              <p className="text-muted-foreground mb-6">
                We're so confident in our ability to deliver results that we offer a risk-free partnership. If we don't
                meet the agreed-upon KPIs, you don't pay.
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Schedule Your Strategy Call
              </Button>
            </div>
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="bg-primary/10 rounded-full w-32 h-32 flex items-center justify-center">
                <svg
                  className="h-16 w-16 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
