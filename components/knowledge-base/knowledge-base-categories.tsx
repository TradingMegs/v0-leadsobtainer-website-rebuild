"use client"

import { motion } from "framer-motion"
import { Zap, Users, Settings, HelpCircle, BarChart3, Shield } from "lucide-react"
import Link from "next/link"

export function KnowledgeBaseCategories() {
  const categories = [
    {
      title: "Getting Started",
      description: "Learn the basics of LeadsObtainer and how to set up your account.",
      icon: Zap,
      articles: 12,
      slug: "getting-started",
    },
    {
      title: "Lead Generation",
      description: "Discover how to generate high-quality leads for your business.",
      icon: Users,
      articles: 18,
      slug: "lead-generation",
    },
    {
      title: "Account Settings",
      description: "Manage your account, billing, and subscription settings.",
      icon: Settings,
      articles: 9,
      slug: "account-settings",
    },
    {
      title: "Troubleshooting",
      description: "Find solutions to common issues and technical problems.",
      icon: HelpCircle,
      articles: 15,
      slug: "troubleshooting",
    },
    {
      title: "Analytics & Reporting",
      description: "Learn how to track and analyze your growth metrics.",
      icon: BarChart3,
      articles: 11,
      slug: "analytics-reporting",
    },
    {
      title: "Security & Privacy",
      description: "Understand how we protect your data and ensure privacy.",
      icon: Shield,
      articles: 7,
      slug: "security-privacy",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Browse by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the information you need by exploring our knowledge base categories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-secondary/30 rounded-lg p-6 hover:shadow-lg transition-all"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{category.articles} articles</span>
                <Link
                  href={`/knowledge-base/category/${category.slug}`}
                  className="text-primary text-sm font-medium hover:underline"
                >
                  View Articles →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
