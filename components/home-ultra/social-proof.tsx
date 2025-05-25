"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface Testimonial {
  name: string
  position: string
  company: string
  quote: string
  stars: number
  result: string
}

interface SocialProofProps {
  testimonials?: Testimonial[]
  compact?: boolean
}

export function SocialProof({ testimonials = [], compact = false }: SocialProofProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Use default testimonials if none provided
  const defaultTestimonials: Testimonial[] = [
    {
      name: "Michael Johnson",
      position: "Owner",
      company: "Johnson Dental Care",
      quote:
        "We were struggling to keep up with leads and follow-ups. After implementing LeadsObtainer's system, our new patient bookings increased by 273% while I actually work fewer hours. The ROI has been incredible.",
      stars: 5,
      result: "273% increase in new patients",
    },
    {
      name: "Sarah Williams",
      position: "Managing Partner",
      company: "Williams Law Group",
      quote:
        "As attorneys, we know how to win cases, not how to market our firm. LeadsObtainer's system completely transformed our client acquisition process. We now have a consistent flow of qualified leads without the hassle of managing marketing campaigns.",
      stars: 5,
      result: "189% increase in case volume",
    },
    {
      name: "David Chen",
      position: "Broker/Owner",
      company: "Premier Real Estate",
      quote:
        "In the competitive real estate market, LeadsObtainer gave us the edge we needed. Their AI system consistently brings in qualified buyer and seller leads that convert at an impressive rate. Our agents are closing more deals with less effort.",
      stars: 5,
      result: "317% increase in transactions",
    },
    {
      name: "Jennifer Martinez",
      position: "Director",
      company: "Martinez Medical Clinic",
      quote:
        "The automated follow-up system is a game-changer. We no longer miss opportunities because of delayed responses. Our patient acquisition cost has dropped significantly while our schedule stays consistently full.",
      stars: 5,
      result: "42% reduction in acquisition costs",
    },
  ]

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials

  // Handle autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayTimerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % displayTestimonials.length)
      }, 5000)
    }

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current)
      }
    }
  }, [autoplay, displayTestimonials.length])

  // Pause autoplay on hover
  const pauseAutoplay = () => setAutoplay(false)
  const resumeAutoplay = () => setAutoplay(true)

  // Navigate to specific testimonial
  const goToTestimonial = (index: number) => {
    setActiveIndex(index)
    setAutoplay(false)

    // Track testimonial view
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: "testimonial_view",
        testimonial_name: displayTestimonials[index].name,
        testimonial_company: displayTestimonials[index].company,
      })
    }

    // Resume autoplay after 8 seconds of inactivity
    if (autoplayTimerRef.current) {
      clearTimeout(autoplayTimerRef.current)
    }

    autoplayTimerRef.current = setTimeout(() => {
      setAutoplay(true)
    }, 8000)
  }

  // Render stars
  const renderStars = (count: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < count ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={i < count ? "text-yellow-400" : "text-gray-600"}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ))
  }

  // Get initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  // If compact mode, render a simplified version
  if (compact) {
    const testimonial = displayTestimonials[activeIndex]

    return (
      <motion.div
        className="rounded-xl border border-lime-400/20 bg-black/40 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        onMouseEnter={pauseAutoplay}
        onMouseLeave={resumeAutoplay}
        data-test="social-proof-compact"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-lime-400/20 to-green-400/20 flex items-center justify-center text-lime-400 font-medium">
            {getInitials(testimonial.name)}
          </div>
          <div>
            <p className="font-medium text-white">{testimonial.name}</p>
            <p className="text-xs text-gray-400">{testimonial.position}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 mb-2">{renderStars(testimonial.stars)}</div>

        <p className="text-sm text-gray-300 italic mb-2">"{testimonial.quote.substring(0, 100)}..."</p>

        <p className="text-xs text-lime-400 font-medium">Result: {testimonial.result}</p>

        <div className="flex justify-center mt-3">
          {displayTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2 h-2 mx-1 rounded-full ${index === activeIndex ? "bg-lime-400" : "bg-gray-600"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    )
  }

  // Full testimonial section
  return (
    <section className="py-16 relative z-10" data-test="social-proof-section">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-variant="testimonials-headline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join over 1,000 businesses that have transformed their growth with our AI-powered system. Here's what some
            of our clients have to say about their experience and results.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto" onMouseEnter={pauseAutoplay} onMouseLeave={resumeAutoplay}>
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-all duration-500 ease-in-out"
              initial={{ opacity: 1 }}
              animate={{
                x: `-${activeIndex * 100}%`,
              }}
              transition={{ duration: 0.5 }}
            >
              {displayTestimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4" data-test={`testimonial-${index}`}>
                  <div className="rounded-2xl border border-lime-400/20 bg-black/40 backdrop-blur-sm p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="md:w-1/4 flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-lime-400/20 to-green-400/20 mb-4 flex items-center justify-center">
                          <div className="text-2xl font-semibold text-lime-400">{getInitials(testimonial.name)}</div>
                        </div>
                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                        <p className="text-sm text-gray-400">{testimonial.position}</p>
                        <p className="text-sm text-gray-400">{testimonial.company}</p>

                        <div className="flex items-center justify-center gap-1 mt-2">
                          {renderStars(testimonial.stars)}
                        </div>
                      </div>

                      <div className="md:w-3/4">
                        <div className="text-4xl text-lime-400 font-serif mb-4">"</div>
                        <p className="text-lg text-gray-300 italic mb-4">{testimonial.quote}</p>
                        <div className="text-right text-4xl text-lime-400 font-serif">"</div>

                        <div className="mt-6 p-4 rounded-lg bg-lime-400/10 border border-lime-400/20">
                          <p className="text-sm text-gray-300">
                            <span className="font-semibold text-lime-400">Result: </span>
                            {testimonial.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {displayTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-lime-400 w-6" : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={() =>
                goToTestimonial((activeIndex - 1 + displayTestimonials.length) % displayTestimonials.length)
              }
              className="p-2 rounded-full bg-black/40 border border-lime-400/20 text-lime-400 hover:bg-lime-400/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={() => goToTestimonial((activeIndex + 1) % displayTestimonials.length)}
              className="p-2 rounded-full bg-black/40 border border-lime-400/20 text-lime-400 hover:bg-lime-400/10 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          data-test="trust-badges"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-full max-w-[150px] h-16 flex items-center justify-center">
            <div className="text-white font-bold">TrustPilot</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-full max-w-[150px] h-16 flex items-center justify-center">
            <div className="text-white font-bold">Google</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-full max-w-[150px] h-16 flex items-center justify-center">
            <div className="text-white font-bold">Clutch</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-full max-w-[150px] h-16 flex items-center justify-center">
            <div className="text-white font-bold">Capterra</div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#get-started"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-lime-500 to-green-600 px-8 text-lg font-medium text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-lime-500/25 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2"
            data-variant="testimonials-cta"
            data-test="testimonials-cta"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.dataLayer = window.dataLayer || []
                window.dataLayer.push({
                  event: "cta_click",
                  cta_text: "Get Started Free",
                  cta_location: "Testimonials Section",
                })
              }
            }}
          >
            Get Started Free
          </a>
        </motion.div>
      </div>
    </section>
  )
}
