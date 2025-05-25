import { Button } from "@/components/ui/button"

export function ElevateBusiness() {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Ready To Elevate Your Business?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their growth with LeadsObtainer.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6">
            Start Your Growth Journey
            <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </section>
  )
}
