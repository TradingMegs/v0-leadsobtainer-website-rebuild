"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Star } from "lucide-react"
import { useABTest } from "./ab-test-provider"

export function SocialProof() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { trackConversion } = useABTest()

  const testimonials = [
    {
      quote:
        '"Within 27 days/month after 3x Qualified Leads/day – AI Automated Their Local SEO Campaign is outperforming what we previously were paying weekly."',
      name: "John Smith",
      business: "Local Gym Owner",
    },
    {
      quote:
        '"We\'ve seen a 45% increase in qualified leads and our cost per acquisition dropped dramatically. This system actually delivers on its promises."',
      name: "Sarah Johnson",
      business: "Dental Practice",
    },
    {
      quote:
        '"I was skeptical at first, but the results speak for themselves. We\'re booking 3x more appointments with half the effort."',
      name: "Michael Williams",
      business: "Home Services",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    trackConversion("testimonial-next")
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    trackConversion("testimonial-prev")
  }

  return (
    <section className="py-16 md:py-24 px-4 bg-black text-white">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-4"
        >
          <div className="bg-[#c1ff00] text-black text-xs font-bold px-4 py-1 rounded-full">TESTIMONIALS</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-3xl font-bold text-center mb-4" data-test="social-proof-headline">
            Real Users. Real Results.
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Hear from business owners just like you who have experienced the breakthrough transformation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative bg-[#111] border border-[#333] rounded-2xl p-8 mb-12"
          data-test="testimonial-carousel"
        >
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#222] hover:bg-[#333] rounded-full p-2 z-10"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 bg-[#222] rounded-full mb-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="h-6 w-6 text-[#c1ff00] ml-1" />
              </div>
            </div>

            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-[#c1ff00]" fill="#c1ff00" />
              ))}
            </div>

            <p
              className="text-center mb-4 italic text-lg md:text-xl"
              data-test={`testimonial-quote-${currentTestimonial}`}
            >
              {testimonials[currentTestimonial].quote}
            </p>

            <p className="font-bold">{testimonials[currentTestimonial].name}</p>
            <p className="text-sm text-gray-400">{testimonials[currentTestimonial].business}</p>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#222] hover:bg-[#333] rounded-full p-2 z-10"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#111] border border-[#c1ff00]/30 rounded-2xl p-8"
          data-test="urgency-container"
        >
          <h3 className="text-2xl font-bold text-center mb-4">
            Only 5 Spots Left – Claim Your Breakthrough Blueprint Now!
          </h3>
          <p className="text-center text-gray-400 mb-8">
            The clock is ticking. Don't miss your chance to transform your local business.
          </p>

          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-[#222] p-4 rounded-lg text-center">
              <p className="text-2xl font-bold">02</p>
              <p className="text-xs text-gray-400">Days</p>
            </div>
            <div className="bg-[#222] p-4 rounded-lg text-center">
              <p className="text-2xl font-bold">23</p>
              <p className="text-xs text-gray-400">Hours</p>
            </div>
            <div className="bg-[#222] p-4 rounded-lg text-center">
              <p className="text-2xl font-bold">56</p>
              <p className="text-xs text-gray-400">Minutes</p>
            </div>
            <div className="bg-[#222] p-4 rounded-lg text-center">
              <p className="text-2xl font-bold">40</p>
              <p className="text-xs text-gray-400">Seconds</p>
            </div>
          </div>

          <p className="text-center text-gray-400 mb-6">The price will increase by 15% after the timer ends</p>
        </motion.div>
      </div>
    </section>
  )
}
