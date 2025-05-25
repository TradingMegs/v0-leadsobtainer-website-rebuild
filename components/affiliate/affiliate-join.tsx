"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AffiliateJoin() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    socialMedia: "",
    promotionMethod: "",
    experience: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePromotionMethodChange = (value: string) => {
    setFormData((prev) => ({ ...prev, promotionMethod: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Join Our Affiliate Program</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below to apply for our affiliate program. We'll review your application and get back to
            you within 48 hours.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 bg-secondary/30 rounded-lg p-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name*
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-secondary/50"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address*
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-secondary/50"
              />
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium mb-2">
                Website or Blog (if applicable)
              </label>
              <Input
                id="website"
                name="website"
                type="url"
                value={formData.website}
                onChange={handleChange}
                className="bg-secondary/50"
              />
            </div>

            <div>
              <label htmlFor="socialMedia" className="block text-sm font-medium mb-2">
                Social Media Profiles
              </label>
              <Input
                id="socialMedia"
                name="socialMedia"
                value={formData.socialMedia}
                onChange={handleChange}
                placeholder="LinkedIn, Twitter, Instagram, etc."
                className="bg-secondary/50"
              />
            </div>

            <div>
              <label htmlFor="promotionMethod" className="block text-sm font-medium mb-2">
                How do you plan to promote LeadsObtainer?*
              </label>
              <Select onValueChange={handlePromotionMethodChange} required>
                <SelectTrigger className="bg-secondary/50">
                  <SelectValue placeholder="Select promotion method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="blog">Blog Content</SelectItem>
                  <SelectItem value="social_media">Social Media</SelectItem>
                  <SelectItem value="email">Email Marketing</SelectItem>
                  <SelectItem value="youtube">YouTube Videos</SelectItem>
                  <SelectItem value="podcast">Podcast</SelectItem>
                  <SelectItem value="paid_ads">Paid Advertising</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium mb-2">
                Affiliate Marketing Experience
              </label>
              <Input
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Tell us about your experience with affiliate marketing"
                className="bg-secondary/50"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Additional Information
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="bg-secondary/50"
                placeholder="Tell us more about your audience and why you want to join our affiliate program"
              />
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Submit Application
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
