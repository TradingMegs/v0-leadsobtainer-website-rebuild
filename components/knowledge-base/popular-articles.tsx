"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"
import Link from "next/link"

export function PopularArticles() {
  const articles = [
    {
      title: "How to Set Up Your First Lead Generation Campaign",
      category: "Lead Generation",
      readTime: "5 min read",
      slug: "set-up-lead-generation-campaign",
    },
    {
      title: "Understanding Your Growth Analytics Dashboard",
      category: "Analytics & Reporting",
      readTime: "4 min read",
      slug: "understanding-growth-analytics",
    },
    {
      title: "Troubleshooting Common Integration Issues",
      category: "Troubleshooting",
      readTime: "7 min read",
      slug: "troubleshooting-integration-issues",
    },
    {
      title: "Best Practices for Converting Leads to Customers",
      category: "Lead Generation",
      readTime: "6 min read",
      slug: "converting-leads-to-customers",
    },
    {
      title: "How to Update Your Billing Information",
      category: "Account Settings",
      readTime: "3 min read",
      slug: "update-billing-information",
    },
    {
      title: "Setting Up Multi-User Access for Your Account",
      category: "Account Settings",
      readTime: "4 min read",
      slug: "multi-user-access",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Popular Articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our most frequently read guides and tutorials to help you get the most out of LeadsObtainer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="bg-secondary/30 rounded-lg p-6 hover:shadow-lg transition-all"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-5 w-5 text-primary" />
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{article.category}</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">{article.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{article.readTime}</span>
                <Link
                  href={`/knowledge-base/article/${article.slug}`}
                  className="text-primary text-sm font-medium hover:underline"
                >
                  Read Article →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/knowledge-base/all-articles" className="text-primary font-medium hover:underline">
            View All Articles →
          </Link>
        </div>
      </div>
    </section>
  )
}
