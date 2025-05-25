"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import { useFormSubmission } from "@/hooks/use-form-submission"
import { submitFormToWebhook } from "@/lib/actions/form-actions"

export function GetStartedForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    location: "",
    businessCategory: "",
    usingPaidAds: "",
    adSpend: "",
    monthlyRevenue: "",
    usedAI: "",
    aiDescription: "",
    useSocialMedia: "",
    socialPlatforms: [] as string[],
    otherPlatform: "",
    biggestChallenge: "",
  })

  const totalSteps = 10

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (platform: string, checked: boolean) => {
    setFormData((prev) => {
      if (checked) {
        return { ...prev, socialPlatforms: [...prev.socialPlatforms, platform] }
      } else {
        return { ...prev, socialPlatforms: prev.socialPlatforms.filter((p) => p !== platform) }
      }
    })
  }

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [businessName, setBusinessName] = useState("")
  const [businessType, setBusinessType] = useState("")
  const [website, setWebsite] = useState("")
  const [usingPaidAds, setUsingPaidAds] = useState("")
  const [adSpend, setAdSpend] = useState("")
  const [monthlyRevenue, setMonthlyRevenue] = useState("")
  const [usedAI, setUsedAI] = useState("")
  const [aiDescription, setAiDescription] = useState("")
  const [useSocialMedia, setUseSocialMedia] = useState("")
  const [socialPlatforms, setSocialPlatforms] = useState<string[]>([])
  const [otherPlatform, setOtherPlatform] = useState("")
  const [biggestChallenge, setBiggestChallenge] = useState("")

  const resetForm = () => {
    setName("")
    setEmail("")
    setPhone("")
    setBusinessName("")
    setBusinessType("")
    setWebsite("")
    setUsingPaidAds("")
    setAdSpend("")
    setMonthlyRevenue("")
    setUsedAI("")
    setAiDescription("")
    setUseSocialMedia("")
    setSocialPlatforms([])
    setOtherPlatform("")
    setBiggestChallenge("")
  }

  const { submitForm, result } = useFormSubmission()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = {
      name,
      email,
      phone,
      businessName,
      businessType,
      website,
      usingPaidAds,
      adSpend,
      monthlyRevenue,
      usedAI,
      aiDescription,
      useSocialMedia,
      socialPlatforms,
      otherPlatform,
      biggestChallenge,
    }

    const result = await submitFormToWebhook(formData, "get-started")

    if (result.success) {
      setSubmissionStatus("success")
      // Reset form fields
      resetForm()
    } else {
      setSubmissionStatus("error")
    }

    setIsSubmitting(false)
  }

  const progressPercentage = ((currentStep + 1) / totalSteps) * 100

  const questions = [
    // Step 1
    <div key="step1" className="typeform-question">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">What's your name?</h2>
      <p className="text-muted-foreground mb-8">Let's get to know each other. What's your full name?</p>
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Enter your full name"
        className="typeform-input"
        required
      />
    </div>,

    // Step 2
    <div key="step2" className="typeform-question">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">What's your email address?</h2>
      <p className="text-muted-foreground mb-8">We'll use this to send you your personalized growth plan.</p>
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Enter your email address"
        className="typeform-input"
        required
      />
    </div>,

    // Step 3
    <div key="step3" className="typeform-question">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">What's your business website?</h2>
      <p className="text-muted-foreground mb-8">
        This helps us understand your business better. If you don't have a website, you can skip this question.
      </p>
      <Input
        type="url"
        name="website"
        value={formData.website}
        onChange={handleInputChange}
        placeholder="https://yourbusiness.com"
        className="typeform-input"
      />
    </div>,

    // Step 4
    <div key="step4" className="typeform-question">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Where is your business located?</h2>
      <p className="text-muted-foreground mb-8">Please enter your city and country.</p>
      <Input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleInputChange}
        placeholder="City, Country"
        className="typeform-input"
        required
      />
    </div>,

    // Step 5
    <div key="step5" className="typeform-question">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">What category best describes your business?</h2>
      <p className="text-muted-foreground mb-8">This helps us tailor our solutions to your specific industry needs.</p>
      <Input
        type="text"
        name="businessCategory"
        value={formData.businessCategory}
        onChange={handleInputChange}
        placeholder="E.g., E-commerce, SaaS, Retail"
        className="typeform-input"
        required
      />
    </div>,

    // Step 6
    <div key="step6" className="typeform-question">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Are you using paid advertising?</h2>
      <p className="text-muted-foreground mb-8">
        This helps us understand your current marketing strategy and identify opportunities.
      </p>
      <RadioGroup
        value={formData.usingPaidAds}
        onValueChange={(value) => handleRadioChange("usingPaidAds", value)}
        className="space-y-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Yes" id="paid-ads-yes" />
          <Label htmlFor="paid-ads-yes" className="text-lg">
            Yes
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="No" id="paid-ads-no" />
          <Label htmlFor="paid-ads-no" className="text-lg">
            No
          </Label>
        </div>
      </RadioGroup>

      {formData.usingPaidAds === "Yes" && (
        <div className="mt-6">
          <h3 className="text-xl font-medium mb-4">What's your average monthly ad spend?</h3>
          <Input
            type="text"
            name="adSpend"
            value={formData.adSpend}
            onChange={handleInputChange}
            placeholder="E.g., $1,000"
            className="typeform-input"
          />
        </div>
      )}
    </div>,

    // Step 7
    <div key="step7" className="typeform-question">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">What's your average monthly revenue?</h2>
      <p className="text-muted-foreground mb-8">
        This helps us understand the scale of your business and tailor our solutions accordingly.
      </p>
      <Input
        type="text"
        name="monthlyRevenue"
        value={formData.monthlyRevenue}
        onChange={handleInputChange}
        placeholder="E.g., $10,000"
        className="typeform-input"
        required
      />
    </div>,

    // Step 8
    <div key="step8" className="typeform-question">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Have you ever used AI automations?</h2>
      <p className="text-muted-foreground mb-8">
        This helps us gauge your familiarity with AI tools and tailor our onboarding process.
      </p>
      <RadioGroup
        value={formData.usedAI}
        onValueChange={(value) => handleRadioChange("usedAI", value)}
        className="space-y-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Yes" id="used-ai-yes" />
          <Label htmlFor="used-ai-yes" className="text-lg">
            Yes
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="No" id="used-ai-no" />
          <Label htmlFor="used-ai-no" className="text-lg">
            No
          </Label>
        </div>
      </RadioGroup>

      {formData.usedAI === "Yes" && (
        <div className="mt-6">
          <h3 className="text-xl font-medium mb-4">Briefly describe how you've used them</h3>
          <Textarea
            name="aiDescription"
            value={formData.aiDescription}
            onChange={handleInputChange}
            placeholder="E.g., chatbots, content tools, analytics"
            className="typeform-input"
            rows={4}
          />
        </div>
      )}
    </div>,

    // Step 9
    <div key="step9" className="typeform-question">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Do you use social media advertising?</h2>
      <p className="text-muted-foreground mb-8">
        This helps us understand your current marketing channels and identify opportunities.
      </p>
      <RadioGroup
        value={formData.useSocialMedia}
        onValueChange={(value) => handleRadioChange("useSocialMedia", value)}
        className="space-y-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Yes" id="social-media-yes" />
          <Label htmlFor="social-media-yes" className="text-lg">
            Yes
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="No" id="social-media-no" />
          <Label htmlFor="social-media-no" className="text-lg">
            No
          </Label>
        </div>
      </RadioGroup>

      {formData.useSocialMedia === "Yes" && (
        <div className="mt-6">
          <h3 className="text-xl font-medium mb-4">Which platforms? (Check all that apply)</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="meta"
                checked={formData.socialPlatforms.includes("Meta")}
                onCheckedChange={(checked) => handleCheckboxChange("Meta", checked as boolean)}
              />
              <Label htmlFor="meta" className="text-lg">
                Meta (Facebook/Instagram)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="google"
                checked={formData.socialPlatforms.includes("Google")}
                onCheckedChange={(checked) => handleCheckboxChange("Google", checked as boolean)}
              />
              <Label htmlFor="google" className="text-lg">
                Google
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="linkedin"
                checked={formData.socialPlatforms.includes("LinkedIn")}
                onCheckedChange={(checked) => handleCheckboxChange("LinkedIn", checked as boolean)}
              />
              <Label htmlFor="linkedin" className="text-lg">
                LinkedIn
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="tiktok"
                checked={formData.socialPlatforms.includes("TikTok")}
                onCheckedChange={(checked) => handleCheckboxChange("TikTok", checked as boolean)}
              />
              <Label htmlFor="tiktok" className="text-lg">
                TikTok
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="twitter"
                checked={formData.socialPlatforms.includes("X (Twitter)")}
                onCheckedChange={(checked) => handleCheckboxChange("X (Twitter)", checked as boolean)}
              />
              <Label htmlFor="twitter" className="text-lg">
                X (Twitter)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="other"
                checked={formData.socialPlatforms.includes("Other")}
                onCheckedChange={(checked) => handleCheckboxChange("Other", checked as boolean)}
              />
              <Label htmlFor="other" className="text-lg">
                Other
              </Label>
            </div>

            {formData.socialPlatforms.includes("Other") && (
              <div className="mt-2 ml-6">
                <Input
                  type="text"
                  name="otherPlatform"
                  value={formData.otherPlatform}
                  onChange={handleInputChange}
                  placeholder="Please specify"
                  className="typeform-input"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>,

    // Step 10
    <div key="step10" className="typeform-question">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">What is your biggest challenge in growing your business?</h2>
      <p className="text-muted-foreground mb-8">
        This helps us understand your specific pain points and tailor our solutions accordingly.
      </p>
      <Textarea
        name="biggestChallenge"
        value={formData.biggestChallenge}
        onChange={handleInputChange}
        placeholder="E.g., Competition, budget, low conversions, team capacity, etc."
        className="typeform-input"
        rows={6}
        required
      />
    </div>,
  ]

  // Thank you step
  const thankYouStep = (
    <div className="typeform-question text-center">
      <div className="bg-primary/10 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6">
        <CheckCircle className="h-10 w-10 text-primary" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Thank You for Your Submission!</h2>
      <p className="text-muted-foreground mb-8">
        We've received your information and will review it shortly. If your business qualifies, one of our growth
        specialists will contact you within 24-48 hours to discuss your personalized growth plan.
      </p>
      <Button
        className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg"
        onClick={() => (window.location.href = "/")}
      >
        Return to Homepage
      </Button>
    </div>
  )

  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/5 min-h-screen">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {currentStep < totalSteps && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  Question {currentStep + 1} of {totalSteps}
                </span>
                <span className="text-sm text-muted-foreground">{progressPercentage.toFixed(0)}% Complete</span>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-secondary/30 rounded-lg p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="typeform-container"
              >
                {currentStep < totalSteps ? questions[currentStep] : thankYouStep}
              </motion.div>
            </AnimatePresence>

            {currentStep < totalSteps && (
              <div className="flex justify-between mt-12">
                <Button type="button" onClick={prevStep} className="typeform-nav-button" disabled={currentStep === 0}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                {currentStep < totalSteps - 1 ? (
                  <Button type="button" onClick={nextStep} className="typeform-button">
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Submit Application"}
                  </Button>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
