"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { useSearchParams } from "next/navigation"

export default function CheckoutSummary() {
  const searchParams = useSearchParams()
  const planParam = searchParams.get("plan")
  const [installmentPlan, setInstallmentPlan] = useState(false)

  // Listen for changes from the parent component
  useEffect(() => {
    const handleInstallmentChange = (event: CustomEvent) => {
      setInstallmentPlan(event.detail.installment)
    }

    window.addEventListener("installmentChange" as any, handleInstallmentChange)

    return () => {
      window.removeEventListener("installmentChange" as any, handleInstallmentChange)
    }
  }, [])

  // Determine plan details based on URL parameter
  const getPlanDetails = () => {
    switch (planParam) {
      case "starter":
        return {
          name: "Starter Plan",
          price: 997,
          features: ["AI Lead Generation Setup", "Basic Automation Tools", "30-Day Support", "Weekly Strategy Calls"],
        }
      case "professional":
        return {
          name: "Professional Plan",
          price: 1997,
          features: [
            "Advanced AI Lead Generation",
            "Full Automation Suite",
            "60-Day Priority Support",
            "Bi-Weekly Strategy Calls",
            "Custom Lead Nurturing Sequences",
          ],
        }
      case "enterprise":
        return {
          name: "Enterprise Plan",
          price: 4997,
          features: [
            "Premium AI Lead Generation",
            "Enterprise Automation Suite",
            "90-Day VIP Support",
            "Weekly Strategy Calls",
            "Custom Lead Nurturing Sequences",
            "Dedicated Account Manager",
            "ROI Performance Tracking",
          ],
        }
      default:
        return {
          name: "Professional Plan",
          price: 1997,
          features: [
            "Advanced AI Lead Generation",
            "Full Automation Suite",
            "60-Day Priority Support",
            "Bi-Weekly Strategy Calls",
            "Custom Lead Nurturing Sequences",
          ],
        }
    }
  }

  const plan = getPlanDetails()
  const installmentAmount = Math.round(plan.price / 3)

  return (
    <Card className="border-emerald-500/20 bg-slate-900/80 sticky top-6">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-white">Order Summary</h2>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">{plan.name}</span>
            <span className="font-semibold text-white">${plan.price}</span>
          </div>

          {installmentPlan && (
            <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-lg p-3">
              <p className="text-emerald-400 text-sm font-medium">3 monthly payments of ${installmentAmount}</p>
            </div>
          )}
        </div>

        <div className="border-t border-slate-700 my-6 pt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-300">Subtotal</span>
            <span className="font-semibold text-white">${plan.price}</span>
          </div>

          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-300">Tax</span>
            <span className="font-semibold text-white">$0</span>
          </div>

          <div className="flex justify-between items-center text-lg">
            <span className="font-bold text-white">Total</span>
            <span className="font-bold text-emerald-400">${plan.price}</span>
          </div>

          {installmentPlan && (
            <div className="text-sm text-gray-400 mt-2 text-right">First payment today: ${installmentAmount}</div>
          )}
        </div>

        <div className="border-t border-slate-700 pt-6">
          <h3 className="font-semibold mb-3 text-white">What's Included:</h3>
          <ul className="space-y-2">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 bg-slate-800 rounded-lg p-4">
          <h3 className="font-semibold mb-2 text-white">100% Satisfaction Guarantee</h3>
          <p className="text-sm text-gray-400">
            If you're not completely satisfied with our service within the first 14 days, we'll refund your payment in
            full.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
