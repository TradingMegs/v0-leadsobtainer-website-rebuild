"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Zap, BarChart3, Users, MessageSquare, Search, Mail } from "lucide-react"

interface SubLocationServicesProps {
  location: string
}

export function SubLocationServices({ location }: SubLocationServicesProps) {
  // Create get-started URL with location parameter
  const getStartedUrl = `/get-started?location=${encodeURIComponent(location)}`

  const services = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Local SEO",
      description: `Dominate local search results in ${location} with our AI-powered SEO strategies tailored to your specific market.`,
      learnMoreUrl: "/services/seo",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Lead Generation",
      description: `Attract high-quality leads from ${location} with our proven lead generation systems designed for your industry.`,
      learnMoreUrl: "/services/lead-generation",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Conversion Optimization",
      description: `Turn more visitors into customers with data-driven conversion strategies optimized for ${location} consumers.`,
      learnMoreUrl: "/services/conversion-optimization",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Social Media Marketing",
      description: `Build a strong social presence that resonates with your ${location} audience and drives engagement.`,
      learnMoreUrl: "/services/social-media-marketing",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Reputation Management",
      description: `Build and maintain a stellar online reputation in ${location} with our comprehensive review management system.`,
      learnMoreUrl: "/services/reputation-management",
    },
    {
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: "Email Marketing",
      description: `Nurture leads and drive repeat business with automated email campaigns tailored to ${location} customers.`,
      learnMoreUrl: "/services/email-marketing",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Our Services in {location}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive growth solutions tailored specifically for {location} businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-secondary/30 rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/10 rounded-full p-4 inline-block mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Link
                href={service.learnMoreUrl}
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
              >
                Learn more <span className="ml-1">→</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={getStartedUrl}
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get Your Free Growth Plan for {location}
          </Link>
        </div>
      </div>
    </section>
  )
}
