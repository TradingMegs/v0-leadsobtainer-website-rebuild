"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Clock, DollarSign } from "lucide-react"

export function CaseStudyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const caseStudies = [
    {
      industry: "Dental Clinic",
      title: "Saved 15 hours/week on admin tasks",
      quote:
        "The AI booking system has been a game-changer. Our front desk staff now focuses on patient care instead of juggling phone calls.",
      metrics: [
        { icon: Clock, value: "15 hours", label: "Weekly time saved" },
        { icon: DollarSign, value: "$2,800", label: "Monthly cost savings" },
      ],
    },
    {
      industry: "Real Estate Agency",
      title: "Increased lead response rate by 78%",
      quote:
        "Our AI employee responds to property inquiries within seconds, 24/7. We've seen a dramatic increase in qualified showings.",
      metrics: [
        { icon: Clock, value: "12 hours", label: "Weekly time saved" },
        { icon: DollarSign, value: "$3,500", label: "Monthly revenue increase" },
      ],
    },
    {
      industry: "E-commerce Store",
      title: "Recovered 35% of abandoned carts",
      quote:
        "The automated follow-up sequences have recovered sales we would have otherwise lost. It pays for itself many times over.",
      metrics: [
        { icon: Clock, value: "20 hours", label: "Weekly time saved" },
        { icon: DollarSign, value: "$4,200", label: "Monthly recovered revenue" },
      ],
    },
    {
      industry: "Law Firm",
      title: "Qualified leads 24/7 without staffing costs",
      quote:
        "Our AI intake system pre-qualifies potential clients and schedules consultations automatically. It's like having another paralegal.",
      metrics: [
        { icon: Clock, value: "18 hours", label: "Weekly time saved" },
        { icon: DollarSign, value: "$3,800", label: "Monthly cost savings" },
      ],
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % caseStudies.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [caseStudies.length])

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + caseStudies.length) % caseStudies.length)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">
          Real Results Through Automation
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {caseStudies.map((study, index) => (
                <div key={index} className="min-w-full">
                  <div className="bg-black/60 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-primary/20">
                    <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                      {study.industry}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-6">{study.title}</h3>

                    <blockquote className="text-lg md:text-xl text-gray-300 mb-8 italic">"{study.quote}"</blockquote>

                    <div className="grid grid-cols-2 gap-6">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-4">
                          <div className="flex items-center gap-3 mb-2">
                            <metric.icon className="h-5 w-5 text-primary" />
                            <span className="text-sm text-gray-400">{metric.label}</span>
                          </div>
                          <div className="text-2xl font-bold text-white">{metric.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? "bg-primary w-6" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
