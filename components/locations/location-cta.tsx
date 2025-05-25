import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { getCtaUrl, getCtaText } from "@/lib/content-helpers"

interface LocationCTAProps {
  location: string
  pageContent?: string
}

export function LocationCTA({ location, pageContent = "" }: LocationCTAProps) {
  // Get the appropriate CTA URL and text based on page content
  const ctaUrl = getCtaUrl(pageContent, location)
  const ctaText = getCtaText(pageContent)

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="bg-secondary/30 rounded-lg p-8 md:p-12">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Ready to Grow Your Business in {location}?
              </h2>
              <p className="text-muted-foreground mb-6">
                Take the first step toward automated, predictable growth with our AI-powered solutions tailored for
                businesses in {location}.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Local Market Expertise</p>
                    <p className="text-sm text-muted-foreground">
                      Our team understands the unique challenges and opportunities in the {location} market.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">Customized Growth Strategy</p>
                    <p className="text-sm text-muted-foreground">
                      Get a tailored growth plan designed specifically for your business in {location}.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium">60-Day Money-Back Guarantee</p>
                    <p className="text-sm text-muted-foreground">
                      If you're not seeing results within 60 days, we'll refund your investment.
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg">
                <Link href={ctaUrl}>{ctaText}</Link>
              </Button>
            </div>
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="bg-primary/10 rounded-full w-48 h-48 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">50%</p>
                  <p className="text-xl font-semibold">OFF</p>
                  <p className="text-sm text-muted-foreground">Limited Time Offer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
