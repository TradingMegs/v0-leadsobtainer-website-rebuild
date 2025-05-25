"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Star, Shield, Award, ThumbsUp } from "lucide-react"
import { useExperiment } from "./experiment-provider"
import { promoContent } from "@/lib/promo-content"

export function DynamicSocialProof() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const { trackEvent } = useExperiment()

  // Autoplay testimonials
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % promoContent.testimonials.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [autoplay])

  const nextTestimonial = () => {
    setAutoplay(false)
    setCurrentTestimonial((prev) => (prev + 1) % promoContent.testimonials.length)
    trackEvent("testimonial_next")
  }

  const prevTestimonial = () => {
    setAutoplay(false)
    setCurrentTestimonial((prev) => (prev - 1 + promoContent.testimonials.length) % promoContent.testimonials.length)
    trackEvent("testimonial_prev")
  }

  return (
    <section className="py-16 md:py-24 px-4 bg-black text-white" data-section="social-proof">
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
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#222] hover:bg-[#333] rounded-full p-2 z-10 focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex flex-col items-center">
            <div
              className="relative w-16 h-16 bg-[#222] rounded-full mb-6 cursor-pointer group"
              onClick={() => trackEvent("testimonial_video_click")}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="h-6 w-6 text-[#c1ff00] ml-1 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 border-2 border-[#c1ff00] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
            </div>

            <div className="flex mb-4">
              {[...Array(promoContent.testimonials[currentTestimonial].stars)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-[#c1ff00]" fill="#c1ff00" />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <p className="mb-4 italic text-lg md:text-xl" data-test={`testimonial-quote-${currentTestimonial}`}>
                  {promoContent.testimonials[currentTestimonial].quote}
                </p>

                <p className="font-bold">{promoContent.testimonials[currentTestimonial].name}</p>
                <p className="text-sm text-gray-400">{promoContent.testimonials[currentTestimonial].business}</p>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial navigation dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {promoContent.testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full focus:outline-none ${
                    index === currentTestimonial ? "bg-primary" : "bg-gray-600"
                  }`}
                  onClick={() => {
                    setAutoplay(false)
                    setCurrentTestimonial(index)
                    trackEvent("testimonial_dot_click", { index })
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#222] hover:bg-[#333] rounded-full p-2 z-10 focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </motion.div>

        {/* Trust badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#111] border border-[#333] rounded-2xl p-6 text-center"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="flex justify-center mb-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Shield className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">100% Money-Back Guarantee</h3>
            <p className="text-sm text-gray-400">
              If you don't see results within 60 days, we'll refund your investment in full.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#111] border border-[#333] rounded-2xl p-6 text-center"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="flex justify-center mb-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <Award className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">Award-Winning System</h3>
            <p className="text-sm text-gray-400">
              Recognized as the top lead generation solution for local businesses in 2023.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#111] border border-[#333] rounded-2xl p-6 text-center"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="flex justify-center mb-4">
              <div className="bg-primary/20 p-3 rounded-full">
                <ThumbsUp className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">500+ Success Stories</h3>
            <p className="text-sm text-gray-400">
              Join hundreds of business owners who have transformed their growth with our system.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
