"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { useRouter } from "next/navigation"
import { CreditCard, Lock } from "lucide-react"
import Image from "next/image"

export default function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState("creditCard")
  const [installmentPlan, setInstallmentPlan] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/thank-you")
    }, 1500)
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        <Card className="border-emerald-500/20 bg-slate-900/80">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-white">Personal Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-gray-300">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  required
                  className="bg-slate-800 border-slate-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-gray-300">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  required
                  className="bg-slate-800 border-slate-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                  className="bg-slate-800 border-slate-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-300">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 123-4567"
                  required
                  className="bg-slate-800 border-slate-700 text-white"
                />
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Label htmlFor="address" className="text-gray-300">
                Address
              </Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="123 Main St"
                required
                className="bg-slate-800 border-slate-700 text-white"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="space-y-2">
                <Label htmlFor="city" className="text-gray-300">
                  City
                </Label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="New York"
                  required
                  className="bg-slate-800 border-slate-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="state" className="text-gray-300">
                  State/Province
                </Label>
                <Input
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="NY"
                  required
                  className="bg-slate-800 border-slate-700 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="zipCode" className="text-gray-300">
                  ZIP/Postal Code
                </Label>
                <Input
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  placeholder="10001"
                  required
                  className="bg-slate-800 border-slate-700 text-white"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-emerald-500/20 bg-slate-900/80">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6 text-white">Payment Method</h2>

            <div className="mb-6">
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3 rounded-lg border border-slate-700 p-4 cursor-pointer hover:bg-slate-800/50 transition-colors">
                  <RadioGroupItem value="creditCard" id="creditCard" className="text-emerald-500" />
                  <Label htmlFor="creditCard" className="flex items-center cursor-pointer">
                    <CreditCard className="h-5 w-5 mr-2 text-emerald-500" />
                    <span>Credit/Debit Card</span>
                  </Label>
                  <div className="ml-auto flex items-center space-x-2">
                    <Image
                      src="/placeholder.svg?height=30&width=45"
                      alt="Visa"
                      width={45}
                      height={30}
                      className="rounded"
                    />
                    <Image
                      src="/placeholder.svg?height=30&width=45"
                      alt="Mastercard"
                      width={45}
                      height={30}
                      className="rounded"
                    />
                    <Image
                      src="/placeholder.svg?height=30&width=45"
                      alt="Amex"
                      width={45}
                      height={30}
                      className="rounded"
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-3 rounded-lg border border-slate-700 p-4 cursor-pointer hover:bg-slate-800/50 transition-colors">
                  <RadioGroupItem value="paypal" id="paypal" className="text-emerald-500" />
                  <Label htmlFor="paypal" className="cursor-pointer">
                    <span>PayPal</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex items-center space-x-3 mb-6">
              <Switch
                id="installmentPlan"
                checked={installmentPlan}
                onCheckedChange={setInstallmentPlan}
                className="data-[state=checked]:bg-emerald-500"
              />
              <Label htmlFor="installmentPlan" className="cursor-pointer">
                Pay in 3 monthly installments
              </Label>
            </div>

            {paymentMethod === "creditCard" && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber" className="text-gray-300">
                    Card Number
                  </Label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    required
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate" className="text-gray-300">
                      Expiry Date
                    </Label>
                    <Input
                      id="expiryDate"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      required
                      className="bg-slate-800 border-slate-700 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cvv" className="text-gray-300">
                      CVV
                    </Label>
                    <Input
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      required
                      className="bg-slate-800 border-slate-700 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nameOnCard" className="text-gray-300">
                      Name on Card
                    </Label>
                    <Input
                      id="nameOnCard"
                      name="nameOnCard"
                      value={formData.nameOnCard}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="bg-slate-800 border-slate-700 text-white"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 flex items-center justify-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Lock className="h-5 w-5 mr-2" />
                    Complete Secure Purchase
                  </span>
                )}
              </Button>
            </div>

            <div className="mt-6 text-center text-sm text-gray-400 flex items-center justify-center">
              <Lock className="h-4 w-4 mr-1 text-emerald-500" />
              Your payment information is secure and encrypted
            </div>

            <div className="mt-4 flex items-center justify-center space-x-6">
              <Image src="/placeholder.svg?height=40&width=60" alt="Visa" width={60} height={40} className="rounded" />
              <Image
                src="/placeholder.svg?height=40&width=60"
                alt="Mastercard"
                width={60}
                height={40}
                className="rounded"
              />
              <Image src="/placeholder.svg?height=40&width=60" alt="Amex" width={60} height={40} className="rounded" />
              <Image
                src="/placeholder.svg?height=40&width=60"
                alt="PayPal"
                width={60}
                height={40}
                className="rounded"
              />
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  )
}
