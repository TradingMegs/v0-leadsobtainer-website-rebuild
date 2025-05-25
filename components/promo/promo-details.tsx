"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Clock } from "lucide-react"

export function PromoDetails() {
  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Limited Time Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take advantage of our special promotion and save 50% on our Pro Growth Plan.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <motion.div
            className="w-full lg:w-1/2 bg-secondary/30 rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold">Pro Growth Plan</h3>
                <p className="text-muted-foreground">Complete AI-powered growth solution</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground line-through">$797/month</div>
                <div className="text-3xl font-bold text-primary">$397/month</div>
              </div>
            </div>

            <div className="bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full inline-block mb-6">
              50% OFF - Limited Time Only
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">AI-Powered Lead Generation</p>
                  <p className="text-sm text-muted-foreground">
                    Automated system that identifies and targets your ideal customers
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Sales Automation</p>
                  <p className="text-sm text-muted-foreground">
                    Nurture leads through the entire sales process automatically
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Client Retention Engine</p>
                  <p className="text-sm text-muted-foreground">Keep clients longer and increase their lifetime value</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Custom Growth Strategy</p>
                  <p className="text-sm text-muted-foreground">Tailored specifically to your business and market</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Weekly Performance Reports</p>
                  <p className="text-sm text-muted-foreground">Track your growth metrics and ROI</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Priority Support</p>
                  <p className="text-sm text-muted-foreground">Get help when you need it most</p>
                </div>
              </div>
            </div>

            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Claim Your 50% Discount
            </Button>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 bg-secondary/30 rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">What You Get</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <p className="font-medium">Complete Growth System</p>
                  <p className="text-sm text-muted-foreground">
                    Our AI-powered system handles your marketing, sales, and client retention automatically.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <p className="font-medium">Strategy Session ($997 Value)</p>
                  <p className="text-sm text-muted-foreground">
                    A 90-minute deep dive into your business to create your custom growth plan.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <p className="font-medium">Implementation ($1,500 Value)</p>
                  <p className="text-sm text-muted-foreground">
                    Our team handles the complete setup and implementation of your growth system.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">4</span>
                </div>
                <div>
                  <p className="font-medium">60-Day Money-Back Guarantee</p>
                  <p className="text-sm text-muted-foreground">
                    If you're not seeing results within 60 days, we'll refund your investment.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/20 rounded-full p-1 mt-1">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Limited Time Offer</p>
                  <p className="text-sm text-muted-foreground">
                    This 50% discount is only available for the next 7 days or until all spots are filled.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
