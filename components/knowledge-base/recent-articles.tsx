import { CalendarDays } from "lucide-react"
import Link from "next/link"

export function RecentArticles() {
  const articles = [
    {
      title: "New Feature: AI-Powered Lead Scoring",
      date: "May 1, 2025",
      excerpt: "Learn how our new AI-powered lead scoring system can help you prioritize your most promising leads.",
      slug: "ai-powered-lead-scoring",
    },
    {
      title: "How to Integrate LeadsObtainer with Your CRM",
      date: "April 28, 2025",
      excerpt:
        "Step-by-step guide to connecting LeadsObtainer with popular CRM platforms for seamless lead management.",
      slug: "integrate-with-crm",
    },
    {
      title: "Optimizing Your Email Follow-Up Sequences",
      date: "April 25, 2025",
      excerpt: "Best practices for creating effective email follow-up sequences that convert leads into customers.",
      slug: "email-follow-up-sequences",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Recently Published</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay up to date with our latest guides, tutorials, and feature announcements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-secondary/30 rounded-lg p-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-2 mb-3">
                <CalendarDays className="h-4 w-4 text-primary" />
                <span className="text-xs text-muted-foreground">{article.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
              <p className="text-muted-foreground mb-4">{article.excerpt}</p>
              <Link
                href={`/knowledge-base/article/${article.slug}`}
                className="text-primary font-medium hover:underline"
              >
                Read Full Article →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/knowledge-base/all-articles"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}
