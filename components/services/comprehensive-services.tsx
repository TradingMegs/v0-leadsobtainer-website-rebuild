import { Zap, Globe, BarChart3, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ComprehensiveServices() {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Comprehensive Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We help you turn your business into a growth machine across all aspects of your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-secondary/30 rounded-lg p-6 flex flex-col h-full">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Growth</h3>
            <p className="text-muted-foreground mb-4 flex-grow">
              Comprehensive strategies for business growth and customer acquisition.
            </p>
            <Button variant="link" className="text-primary p-0 justify-start">
              Learn More →
            </Button>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6 flex flex-col h-full">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Automation</h3>
            <p className="text-muted-foreground mb-4 flex-grow">
              Smart performance systems and workflows to streamline operations.
            </p>
            <Button variant="link" className="text-primary p-0 justify-start">
              Learn More →
            </Button>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6 flex flex-col h-full">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Optimization</h3>
            <p className="text-muted-foreground mb-4 flex-grow">
              Maximize your operations through continuous improvement and testing.
            </p>
            <Button variant="link" className="text-primary p-0 justify-start">
              Learn More →
            </Button>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6 flex flex-col h-full">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Marketing</h3>
            <p className="text-muted-foreground mb-4 flex-grow">
              Effective campaigns that drive qualified leads and conversions.
            </p>
            <Button variant="link" className="text-primary p-0 justify-start">
              Learn More →
            </Button>
          </div>
        </div>

        <div className="text-center">
          <Button variant="outline" className="bg-secondary/30">
            Comprehensive Solutions
          </Button>
        </div>
      </div>
    </section>
  )
}
