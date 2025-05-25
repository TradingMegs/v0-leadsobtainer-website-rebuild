import Link from "next/link"
import { ArrowLeft, Search } from "lucide-react"

// This would typically come from a database or API
const getArticlesByCategory = (category: string) => {
  const categories = {
    "getting-started": [
      {
        id: 1,
        title: "How to Set Up Your Lead Generation Campaign",
        excerpt: "Learn the essential steps to launch your first lead generation campaign with our platform.",
        readTime: "5 min read",
      },
      {
        id: 2,
        title: "Understanding Your Dashboard Metrics",
        excerpt: "A comprehensive guide to interpreting your campaign performance metrics and analytics.",
        readTime: "7 min read",
      },
      {
        id: 3,
        title: "Setting Up Your First Automation Sequence",
        excerpt: "Step-by-step instructions for creating effective lead nurturing automation sequences.",
        readTime: "6 min read",
      },
    ],
    "lead-generation": [
      {
        id: 4,
        title: "Advanced Lead Qualification Strategies",
        excerpt: "Discover how to implement multi-layer qualification processes to improve lead quality.",
        readTime: "8 min read",
      },
      {
        id: 5,
        title: "Optimizing Landing Pages for Conversion",
        excerpt: "Best practices and techniques to maximize your landing page conversion rates.",
        readTime: "6 min read",
      },
      {
        id: 6,
        title: "Multi-Channel Lead Generation Tactics",
        excerpt: "How to effectively combine different channels for a comprehensive lead generation strategy.",
        readTime: "9 min read",
      },
    ],
    automation: [
      {
        id: 7,
        title: "Setting Up AI-Powered Email Sequences",
        excerpt: "Learn how to create dynamic email sequences that adapt based on recipient behavior.",
        readTime: "7 min read",
      },
      {
        id: 8,
        title: "Integrating CRM with Marketing Automation",
        excerpt: "A guide to seamlessly connecting your CRM with our automation tools for better lead management.",
        readTime: "5 min read",
      },
      {
        id: 9,
        title: "Creating Behavioral Triggers for Lead Nurturing",
        excerpt: "How to set up advanced behavioral triggers that respond to prospect actions.",
        readTime: "8 min read",
      },
    ],
    analytics: [
      {
        id: 10,
        title: "Understanding Attribution Models",
        excerpt: "A deep dive into different attribution models and how they affect your ROI calculations.",
        readTime: "10 min read",
      },
      {
        id: 11,
        title: "Creating Custom Reports",
        excerpt: "Step-by-step guide to building tailored reports that track your most important KPIs.",
        readTime: "6 min read",
      },
      {
        id: 12,
        title: "Analyzing Conversion Funnels",
        excerpt: "How to identify and fix leaks in your lead conversion funnel using our analytics tools.",
        readTime: "7 min read",
      },
    ],
    troubleshooting: [
      {
        id: 13,
        title: "Common Integration Issues and Solutions",
        excerpt: "Troubleshooting guide for resolving the most frequent integration challenges.",
        readTime: "5 min read",
      },
      {
        id: 14,
        title: "Fixing Tracking Problems",
        excerpt: "How to diagnose and resolve issues with lead tracking and attribution.",
        readTime: "6 min read",
      },
      {
        id: 15,
        title: "Resolving Automation Workflow Errors",
        excerpt: "Solutions for common automation sequence errors and how to prevent them.",
        readTime: "8 min read",
      },
    ],
  }

  return categories[category as keyof typeof categories] || []
}

const getCategoryName = (slug: string) => {
  const names = {
    "getting-started": "Getting Started",
    "lead-generation": "Lead Generation",
    automation: "Automation",
    analytics: "Analytics & Reporting",
    troubleshooting: "Troubleshooting",
  }

  return names[slug as keyof typeof names] || slug
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const articles = getArticlesByCategory(params.category)
  const categoryName = getCategoryName(params.category)

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link
            href="/knowledge-base"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Knowledge Base
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{categoryName}</h1>
          <p className="text-gray-600 max-w-3xl">
            Browse through our collection of articles, guides, and tutorials on {categoryName.toLowerCase()} to help you
            maximize your lead generation results.
          </p>
        </div>

        <div className="mb-10 max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder={`Search in ${categoryName}...`}
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-emerald-600 transition-colors">
                  <Link href={`/knowledge-base/article/${article.id}`}>{article.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                  <Link
                    href={`/knowledge-base/article/${article.id}`}
                    className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    Read Article →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
