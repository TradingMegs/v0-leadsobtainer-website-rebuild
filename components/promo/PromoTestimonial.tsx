"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

interface Testimonial {
  quote: string
  name: string
  photoSrc: string
}

interface Logo {
  src: string
  alt: string
}

interface PromoTestimonialProps {
  testimonials: Testimonial[]
  logos: Logo[]
  dataTest?: string
}

export function PromoTestimonial({ testimonials, logos, dataTest }: PromoTestimonialProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div data-test={dataTest}>
      <div className="mb-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-black/40 backdrop-blur-sm border border-primary/20 rounded-xl p-8 relative"
          >
            <div className="absolute -top-5 left-8 text-5xl text-primary">"</div>

            <p className="text-xl md:text-2xl font-medium mb-6 text-center">{testimonials[activeIndex].quote}</p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                <Image
                  src={testimonials[activeIndex].photoSrc || "/placeholder.svg"}
                  alt={testimonials[activeIndex].name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium">{testimonials[activeIndex].name}</div>
                <div className="text-sm text-gray-400">Verified Customer</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-primary" : "bg-gray-600"}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ opacity: 1 }}
            className="grayscale hover:grayscale-0 transition-all"
          >
            <Image src={logo.src || "/placeholder.svg"} alt={logo.alt} width={120} height={40} className="h-8 w-auto" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
