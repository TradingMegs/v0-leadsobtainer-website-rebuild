"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

export function PromoOffers() {
  const offers = [
    {
      title: "New Customer Special",
      description: "Perfect for businesses just getting started with AI-powered growth",
      originalPrice: "$797",
      discountedPrice: "$497",
      discount: "38% OFF",
      features: [
        "Full access to LeadsObtainer Pro plan",
        "Free strategy session ($997 value)",
        "30-day money-back guarantee",
        "Free migration from other platforms",
      ],
      limitations: ["Limited to first 50 customers", "One-time offer for new customers only"],
      cta: "Claim This Offer",
      popular: true,
    },
    {
      title: "Annual Plan Discount",
      description: "Save big when you commit to growing your business for a full year",
      originalPrice: "$9,564",
      discountedPrice: "$4,782",
      discount: "50% OFF",
      features: [
        "Full access to LeadsObtainer Pro plan",
        "Free strategy session ($997 value)",
        "Priority support",
        "Quarterly business review",
      ],
      limitations: ["Annual billing required", "Limited time offer"],
      cta: "Get Annual Discount",
      popular: false,
    },
    {
      title: "Agency Bundle",
      description: "Special pricing for marketing agencies and consultants",
      originalPrice: "$1,497",
      discountedPrice: "$997",
      discount: "33% OFF",
      features: ["3 client accounts included", "White-label reporting", "Agency dashboard", "Client management tools"],
      limitations: ["Must verify agency status", "Limited to 10 agencies"],
      cta: "Apply for Agency Bundle",
      popular: false,
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Current Promotions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take advantage of these limited-time offers before they expire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              className={`rounded-lg overflow-hidden border ${offer.popular ? "border-primary" : "border-border"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {offer.popular && (
                <div className="bg-primary text-primary-foreground text-center py-1 text-xs font-medium">
                  MOST POPULAR
                </div>
              )}
              <div className="p-6 bg-secondary/30">
                <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{offer.description}</p>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">{offer.discountedPrice}</span>
                  <span className="text-muted-foreground line-through ml-2">{offer.originalPrice}</span>
                  <span className="ml-2 bg-primary/20 text-primary text-xs px-2 py-1 rounded-full">
                    {offer.discount}
                  </span>
                </div>
                <Button
                  className={`w-full ${
                    offer.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary/50 hover:bg-secondary/70"
                  }`}
                >
                  {offer.cta}
                </Button>
              </div>
              <div className="p-6 bg-background">
                <p className="font-medium mb-4">What's included:</p>
                <ul className="space-y-3 mb-6">
                  {offer.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-medium mb-4">Limitations:</p>
                <ul className="space-y-3">
                  {offer.limitations.map((limitation, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
