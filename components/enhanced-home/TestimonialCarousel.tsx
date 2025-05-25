"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react"

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials = [
    {
      name: "Michael Johnson",
      position: "Owner",
      company: "Johnson Dental Care",
      quote:
        "We were struggling to keep up with leads and follow-ups. After implementing LeadsObtainer's system, our new patient bookings increased by 273% while I actually work fewer hours. The ROI has been incredible.",
      stars: 5,
      result: "273% increase in new patients",
      industry: "Dental",
    },
    {
      name: "Sarah Williams",
      position: "Managing Partner",
      company: "Williams Law Group",
      quote:
        "As attorneys, we know how to win cases, not how to market our firm. LeadsObtainer's system completely transformed our client acquisition process. We now have a consistent flow of qualified leads without the hassle of managing marketing campaigns.",
      stars: 5,
      result: "189% increase in case volume",
      industry: "Legal",
    },
    {
      name: "David Chen",
      position: "Broker/Owner",
      company: "Premier Real Estate",
      quote:
        "In the competitive real estate market, LeadsObtainer gave us the edge we needed. Their AI system consistently brings in qualified buyer and seller leads that convert at an impressive rate. Our agents are closing more deals with less effort.",
      stars: 5,
      result: "317% increase in transactions",
      industry: "Real Estate",
    },
    {
      name: "Jennifer Martinez",
      position: "Director",
      company: "Martinez Medical Clinic",
      quote:
        "The automated follow-up system is a game-changer. We no longer miss opportunities because of delayed responses. Our patient acquisition cost has dropped significantly while our schedule stays consistently full.",
      stars: 5,
      result: "42% reduction in acquisition costs",
      industry: "Healthcare",
    },
  ]

  // Get initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center px-3 py-1 rounded-full bg-lime-500/10 text-lime-500 border border-lime-500/20 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-medium">Success Stories</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-600">
              What Our Clients Are Saying
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Real results from real business owners just like you
          </motion.p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-black/40 backdrop-blur-sm border border-lime-500/20 rounded-xl p-8 md:p-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 items-center">
                  <div className="text-center md:text-left">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto md:mx-0 mb-4 bg-gradient-to-br from-lime-500/20 to-green-500/20 flex items-center justify-center">
                      <div className="text-2xl font-semibold text-lime-500">
                        {getInitials(testimonials[activeIndex].name)}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold">{testimonials[activeIndex].name}</h3>
                    <p className="text-gray-400 text-sm mb-2">
                      {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                    </p>

                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-lime-500/10 text-lime-500 border border-lime-500/20">
                      <span className="text-xs font-medium">{testimonials[activeIndex].industry}</span>
                    </div>
                  </div>

                  <div>
                    <div className="mb-6">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-lime-500/20"
                      >
                        <path
                          d="M14.4 24H8V16H16V24C16 32.8 8.8 32 8.8 32C8.8 32 14.4 32.8 14.4 40V48H8V40H0V24C0 19.6 4.4 16 9.6 16H14.4V24ZM38.4 24H32V16H40V24C40 32.8 32.8 32 32.8 32C32.8 32 38.4 32.8 38.4 40V48H32V40H24V24C24 19.6 28.4 16 33.6 16H38.4V24Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>

                    <p className="text-lg mb-6 italic">"{testimonials[activeIndex].quote}"</p>

                    <div className="bg-lime-500/10 border border-lime-500/20 rounded-lg p-4 inline-block">
                      <div className="text-sm text-gray-300">Result:</div>
                      <div className="text-xl font-bold text-lime-500">{testimonials[activeIndex].result}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-lime-500" : "bg-gray-600 hover:bg-gray-500"
                }`}
                onClick={() => {
                  setAutoplay(false)
                  setActiveIndex(index)
                }}
                aria-label={`View testimonial from ${testimonials[index].name}`}
              />
            ))}
          </div>

          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-lime-500/20 flex items-center justify-center text-white hover:bg-black/80 transition-all"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-lime-500/20 flex items-center justify-center text-white hover:bg-black/80 transition-all"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="text-center mt-12">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-lime-500 text-black font-medium hover:bg-lime-400 transition-all"
            data-umami-event="testimonial-cta"
          >
            Get Similar Results For Your Business
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
