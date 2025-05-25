import Link from "next/link"
import { ArrowLeft, ThumbsUp, ThumbsDown, Share2, Bookmark, Printer } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

// This would typically come from a database or API
const getArticleById = (id: string) => {
  const articles = {
    "1": {
      id: 1,
      title: "How to Set Up Your Lead Generation Campaign",
      category: "Getting Started",
      categorySlug: "getting-started",
      author: "Sarah Johnson",
      authorRole: "Lead Generation Specialist",
      publishDate: "May 15, 2023",
      readTime: "5 min read",
      content: `
        <h2>Getting Started with Your First Campaign</h2>
        <p>Setting up an effective lead generation campaign requires careful planning and strategic implementation. This guide will walk you through the essential steps to launch your first campaign on our platform.</p>
        
        <h3>Step 1: Define Your Target Audience</h3>
        <p>Before creating any campaign assets, it's crucial to clearly define who you're trying to reach. Create detailed buyer personas that include:</p>
        <ul>
          <li>Demographics (age, location, job title, industry)</li>
          <li>Pain points and challenges</li>
          <li>Goals and motivations</li>
          <li>Preferred communication channels</li>
          <li>Decision-making factors</li>
        </ul>
        
        <h3>Step 2: Set Clear Campaign Objectives</h3>
        <p>Establish specific, measurable goals for your campaign. Examples include:</p>
        <ul>
          <li>Generate X number of qualified leads</li>
          <li>Achieve a X% conversion rate on landing pages</li>
          <li>Reduce cost per lead to $X</li>
          <li>Increase sales-qualified leads by X%</li>
        </ul>
        
        <h3>Step 3: Create Compelling Offers</h3>
        <p>Develop valuable content or offers that address your audience's pain points. Effective lead magnets include:</p>
        <ul>
          <li>Industry reports or whitepapers</li>
          <li>Free tools or templates</li>
          <li>Educational webinars</li>
          <li>Product demos or free trials</li>
          <li>Assessments or quizzes</li>
        </ul>
        
        <h3>Step 4: Build Optimized Landing Pages</h3>
        <p>Design landing pages focused on conversion with these key elements:</p>
        <ul>
          <li>Clear, benefit-driven headline</li>
          <li>Concise, persuasive copy</li>
          <li>Prominent call-to-action</li>
          <li>Minimal navigation to reduce distractions</li>
          <li>Social proof (testimonials, client logos, etc.)</li>
          <li>Mobile-responsive design</li>
        </ul>
        
        <h3>Step 5: Set Up Lead Capture and Tracking</h3>
        <p>Configure your forms and tracking systems to collect the right information:</p>
        <ul>
          <li>Keep forms as short as possible (3-5 fields recommended)</li>
          <li>Implement progressive profiling for returning visitors</li>
          <li>Set up proper UTM parameters for all campaign links</li>
          <li>Configure conversion tracking in analytics</li>
          <li>Integrate with your CRM system</li>
        </ul>
        
        <h3>Step 6: Launch and Monitor</h3>
        <p>After launching your campaign, closely monitor these key metrics:</p>
        <ul>
          <li>Traffic sources and volume</li>
          <li>Landing page conversion rates</li>
          <li>Form completion rates</li>
          <li>Lead quality scores</li>
          <li>Cost per lead</li>
          <li>Campaign ROI</li>
        </ul>
        
        <h3>Step 7: Optimize Based on Data</h3>
        <p>Use the insights gathered to continuously improve your campaign:</p>
        <ul>
          <li>A/B test landing page elements</li>
          <li>Refine targeting parameters</li>
          <li>Adjust ad copy and creative</li>
          <li>Modify form fields if needed</li>
          <li>Reallocate budget to top-performing channels</li>
        </ul>
      `,
      relatedArticles: [2, 3, 5],
    },
    "2": {
      id: 2,
      title: "Understanding Your Dashboard Metrics",
      category: "Getting Started",
      categorySlug: "getting-started",
      author: "Michael Chen",
      authorRole: "Data Analytics Specialist",
      publishDate: "June 2, 2023",
      readTime: "7 min read",
      content: `
        <h2>Making Sense of Your Dashboard Metrics</h2>
        <p>Your LeadsObtainer dashboard provides a wealth of information about your campaigns and lead generation efforts. This guide will help you understand what each metric means and how to use this data to improve your results.</p>
        
        <h3>Key Performance Indicators (KPIs)</h3>
        <p>Your dashboard highlights these essential KPIs that give you a quick overview of campaign performance:</p>
        <ul>
          <li><strong>Total Leads Generated:</strong> The overall number of leads captured across all campaigns</li>
          <li><strong>Lead Conversion Rate:</strong> The percentage of visitors who become leads</li>
          <li><strong>Cost Per Lead (CPL):</strong> The average cost to acquire each lead</li>
          <li><strong>Lead Quality Score:</strong> Our proprietary scoring system that rates lead quality</li>
          <li><strong>ROI:</strong> Return on investment calculated from your campaign costs and conversion data</li>
        </ul>
        
        <h3>Traffic Analytics</h3>
        <p>Understanding your traffic sources helps optimize your acquisition strategy:</p>
        <ul>
          <li><strong>Traffic by Source:</strong> Breakdown of where your visitors are coming from</li>
          <li><strong>Traffic by Device:</strong> Distribution across desktop, mobile, and tablet</li>
          <li><strong>Geographic Distribution:</strong> Where your visitors are located</li>
          <li><strong>New vs. Returning Visitors:</strong> Balance between first-time and repeat visitors</li>
        </ul>
        
        <h3>Conversion Funnel Metrics</h3>
        <p>These metrics help you identify where prospects drop off in your funnel:</p>
        <ul>
          <li><strong>Landing Page Views:</strong> Number of visitors who reach your landing pages</li>
          <li><strong>Form Starts:</strong> Visitors who begin filling out your forms</li>
          <li><strong>Form Completions:</strong> Successful form submissions</li>
          <li><strong>Abandonment Rate:</strong> Percentage of visitors who start but don't complete forms</li>
        </ul>
        
        <h3>Lead Quality Metrics</h3>
        <p>Not all leads are created equal. These metrics help you assess lead quality:</p>
        <ul>
          <li><strong>Lead Scoring:</strong> Numerical values assigned to leads based on fit and engagement</li>
          <li><strong>Marketing Qualified Leads (MQLs):</strong> Leads that meet your qualification criteria</li>
          <li><strong>Sales Qualified Leads (SQLs):</strong> Leads that have been vetted and passed to sales</li>
          <li><strong>Lead-to-Customer Conversion Rate:</strong> Percentage of leads that become customers</li>
        </ul>
        
        <h3>Campaign Comparison</h3>
        <p>Compare performance across different campaigns to identify what's working best:</p>
        <ul>
          <li><strong>Campaign Effectiveness:</strong> Side-by-side comparison of key metrics</li>
          <li><strong>A/B Test Results:</strong> Performance differences between test variations</li>
          <li><strong>Historical Trends:</strong> How current campaigns compare to past performance</li>
        </ul>
        
        <h3>Using Dashboard Data for Optimization</h3>
        <p>Here's how to apply these insights to improve your campaigns:</p>
        <ul>
          <li>Identify your highest-converting traffic sources and increase investment there</li>
          <li>Spot form fields with high abandonment rates and simplify them</li>
          <li>Recognize your highest-quality lead segments and refine targeting</li>
          <li>Compare messaging across campaigns to identify the most effective approaches</li>
          <li>Set up custom alerts for metrics that fall below your targets</li>
        </ul>
      `,
      relatedArticles: [1, 3, 11],
    },
    "3": {
      id: 3,
      title: "Setting Up Your First Automation Sequence",
      category: "Getting Started",
      categorySlug: "getting-started",
      author: "Jessica Williams",
      authorRole: "Marketing Automation Expert",
      publishDate: "June 10, 2023",
      readTime: "6 min read",
      content: `
        <h2>Creating Effective Automation Sequences</h2>
        <p>Automation sequences are the backbone of efficient lead nurturing. This guide will walk you through creating your first sequence that converts leads into customers.</p>
        
        <h3>What is an Automation Sequence?</h3>
        <p>An automation sequence is a series of pre-planned communications (emails, SMS, etc.) that are automatically sent to leads based on specific triggers and timing. Effective sequences deliver the right content at the right time, moving prospects through your sales funnel.</p>
        
        <h3>Step 1: Define Your Sequence Goal</h3>
        <p>Every sequence should have a clear objective:</p>
        <ul>
          <li>Welcome and onboard new leads</li>
          <li>Nurture leads with educational content</li>
          <li>Re-engage inactive leads</li>
          <li>Convert leads to customers</li>
          <li>Upsell or cross-sell existing customers</li>
        </ul>
        
        <h3>Step 2: Map Your Customer Journey</h3>
        <p>Before building your sequence, map out the ideal path for your leads:</p>
        <ul>
          <li>Identify key touchpoints and decision moments</li>
          <li>Determine what information is needed at each stage</li>
          <li>Plan content that addresses common objections</li>
          <li>Set ideal timeframes between communications</li>
        </ul>
        
        <h3>Step 3: Set Up Trigger Events</h3>
        <p>Determine what actions will initiate your sequence:</p>
        <ul>
          <li>Form submission (lead magnet download, contact request)</li>
          <li>Website behavior (visited pricing page, viewed product demo)</li>
          <li>Email engagement (opened email, clicked specific link)</li>
          <li>Purchase activity (completed or abandoned purchase)</li>
          <li>Time-based triggers (days since last engagement)</li>
        </ul>
        
        <h3>Step 4: Create Your Content</h3>
        <p>Develop the content for each step in your sequence:</p>
        <ul>
          <li>Write compelling subject lines that drive opens</li>
          <li>Craft message content that delivers value</li>
          <li>Include clear, action-oriented CTAs</li>
          <li>Personalize content using lead data</li>
          <li>Ensure mobile-friendly formatting</li>
        </ul>
        
        <h3>Step 5: Set Timing and Conditions</h3>
        <p>Determine when each message will be sent:</p>
        <ul>
          <li>Immediate responses for high-intent actions</li>
          <li>Appropriate delays between messages (typically 2-5 days)</li>
          <li>Optimal send times based on audience behavior</li>
          <li>Conditional logic (if/then rules) for personalized paths</li>
        </ul>
        
        <h3>Step 6: Implement Exit Conditions</h3>
        <p>Define when leads should exit the sequence:</p>
        <ul>
          <li>Completed desired action (made purchase, scheduled demo)</li>
          <li>Reached end of sequence</li>
          <li>Unsubscribed or marked as spam</li>
          <li>Qualified for a different sequence</li>
        </ul>
        
        <h3>Step 7: Test and Launch</h3>
        <p>Before activating your sequence:</p>
        <ul>
          <li>Send test messages to yourself and colleagues</li>
          <li>Check all links and tracking parameters</li>
          <li>Verify personalization tags are working correctly</li>
          <li>Confirm conditional logic functions as expected</li>
          <li>Test on multiple devices and email clients</li>
        </ul>
        
        <h3>Step 8: Monitor and Optimize</h3>
        <p>Once your sequence is live, track these key metrics:</p>
        <ul>
          <li>Open rates and click-through rates</li>
          <li>Conversion rates at each step</li>
          <li>Overall sequence completion rate</li>
          <li>Time to conversion</li>
          <li>Unsubscribe and complaint rates</li>
        </ul>
      `,
      relatedArticles: [1, 2, 7],
    },
    // Additional articles would be defined here
    "5": {
      id: 5,
      title: "Optimizing Landing Pages for Conversion",
      category: "Lead Generation",
      categorySlug: "lead-generation",
      author: "David Rodriguez",
      authorRole: "Conversion Rate Optimization Specialist",
      publishDate: "July 5, 2023",
      readTime: "6 min read",
      content: `
        <h2>Maximizing Landing Page Conversion Rates</h2>
        <p>Your landing pages are critical conversion points in your lead generation strategy. This guide covers proven techniques to optimize your landing pages for maximum conversions.</p>
        
        <h3>The Anatomy of a High-Converting Landing Page</h3>
        <p>Effective landing pages typically include these key elements:</p>
        <ul>
          <li>Compelling headline that clearly communicates value</li>
          <li>Supportive subheadline that expands on the main promise</li>
          <li>Engaging hero image or video that reinforces your message</li>
          <li>Concise benefit-focused copy</li>
          <li>Social proof elements (testimonials, logos, statistics)</li>
          <li>Clear, prominent call-to-action</li>
          <li>Minimal navigation to prevent distractions</li>
        </ul>
        
        <h3>Headline Optimization</h3>
        <p>Your headline is the most important element on your landing page:</p>
        <ul>
          <li>Focus on the primary benefit to the visitor</li>
          <li>Use numbers and specific data when possible</li>
          <li>Create a sense of urgency or exclusivity</li>
          <li>Keep it concise (typically under 10 words)</li>
          <li>Ensure it aligns with your ad or referral source messaging</li>
        </ul>
        
        <h3>Form Optimization</h3>
        <p>Your form is where conversion happens—optimize it carefully:</p>
        <ul>
          <li>Request only essential information (3-5 fields for initial conversion)</li>
          <li>Use single-column layouts for better completion rates</li>
          <li>Implement inline validation to reduce errors</li>
          <li>Consider multi-step forms for complex offers</li>
          <li>Use clear, benefit-focused submit buttons ("Get My Free Guide" vs. "Submit")</li>
        </ul>
        
        <h3>Visual Hierarchy and Layout</h3>
        <p>Guide visitors' attention to your conversion elements:</p>
        <ul>
          <li>Place your most important elements "above the fold"</li>
          <li>Use directional cues (arrows, eye gaze) to point to CTAs</li>
          <li>Create white space around key elements</li>
          <li>Use contrasting colors for buttons and CTAs</li>
          <li>Ensure mobile-responsive design with touch-friendly elements</li>
        </ul>
        
        <h3>Social Proof Elements</h3>
        <p>Build trust and credibility with these elements:</p>
        <ul>
          <li>Customer testimonials with photos and specific results</li>
          <li>Case studies highlighting relevant success stories</li>
          <li>Trust badges and security certifications</li>
          <li>Client logos or partner brands</li>
          <li>Review ratings and user statistics</li>
        </ul>
        
        <h3>A/B Testing Strategy</h3>
        <p>Continuously improve through systematic testing:</p>
        <ul>
          <li>Test one element at a time for clear results</li>
          <li>Prioritize high-impact elements first (headline, CTA, form)</li>
          <li>Run tests until you reach statistical significance</li>
          <li>Document all tests and results for future reference</li>
          <li>Implement winning variations quickly</li>
        </ul>
        
        <h3>Page Speed Optimization</h3>
        <p>Faster pages convert better—optimize for speed:</p>
        <ul>
          <li>Compress and optimize images</li>
          <li>Minimize HTTP requests</li>
          <li>Enable browser caching</li>
          <li>Use content delivery networks (CDNs)</li>
          <li>Eliminate render-blocking resources</li>
        </ul>
        
        <h3>Common Landing Page Mistakes to Avoid</h3>
        <ul>
          <li>Too many navigation options or exit points</li>
          <li>Misalignment between ad messaging and landing page content</li>
          <li>Unclear or buried call-to-action</li>
          <li>Excessive form fields creating friction</li>
          <li>Slow page load times causing abandonment</li>
          <li>Generic copy that doesn't address specific pain points</li>
        </ul>
      `,
      relatedArticles: [1, 4, 6],
    },
  }

  return articles[id as keyof typeof articles] || null
}

// Function to get related articles
const getRelatedArticles = (ids: number[]) => {
  const allArticles = {
    1: {
      id: 1,
      title: "How to Set Up Your Lead Generation Campaign",
      category: "Getting Started",
      readTime: "5 min read",
    },
    2: { id: 2, title: "Understanding Your Dashboard Metrics", category: "Getting Started", readTime: "7 min read" },
    3: {
      id: 3,
      title: "Setting Up Your First Automation Sequence",
      category: "Getting Started",
      readTime: "6 min read",
    },
    4: { id: 4, title: "Advanced Lead Qualification Strategies", category: "Lead Generation", readTime: "8 min read" },
    5: { id: 5, title: "Optimizing Landing Pages for Conversion", category: "Lead Generation", readTime: "6 min read" },
    6: { id: 6, title: "Multi-Channel Lead Generation Tactics", category: "Lead Generation", readTime: "9 min read" },
    7: { id: 7, title: "Setting Up AI-Powered Email Sequences", category: "Automation", readTime: "7 min read" },
    11: { id: 11, title: "Creating Custom Reports", category: "Analytics", readTime: "6 min read" },
    // Additional articles would be defined here
  }

  return ids.map((id) => allArticles[id as keyof typeof allArticles]).filter(Boolean)
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const article = getArticleById(params.id)

  if (!article) {
    return {
      title: "Article Not Found | LeadsObtainer Knowledge Base",
      description: "The article you're looking for doesn't exist or has been moved.",
    }
  }

  return {
    title: `${article.title} | LeadsObtainer Knowledge Base`,
    description: `Learn about ${article.title.toLowerCase()} in our comprehensive guide. ${article.readTime}.`,
    openGraph: {
      title: `${article.title} | LeadsObtainer Knowledge Base`,
      description: `Learn about ${article.title.toLowerCase()} in our comprehensive guide. ${article.readTime}.`,
      url: `https://leadsobtainer.com/knowledge-base/article/${article.id}`,
      siteName: "LeadsObtainer",
      locale: "en_US",
      type: "article",
      publishedTime: article.publishDate,
      authors: [article.author],
    },
  }
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = getArticleById(params.id)

  if (!article) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been moved.</p>
          <Link
            href="/knowledge-base"
            className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
          >
            Return to Knowledge Base
          </Link>
        </div>
        <Footer />
      </>
    )
  }

  const relatedArticles = getRelatedArticles(article.relatedArticles)

  // JSON-LD Schema for Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: `Learn about ${article.title.toLowerCase()} in our comprehensive guide.`,
    author: {
      "@type": "Person",
      name: article.author,
      jobTitle: article.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "LeadsObtainer",
      logo: {
        "@type": "ImageObject",
        url: "https://leadsobtainer.com/logo.png",
      },
    },
    datePublished: article.publishDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://leadsobtainer.com/knowledge-base/article/${article.id}`,
    },
  }

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <Link
              href={`/knowledge-base/${article.categorySlug}`}
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {article.category}
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <article className="bg-white rounded-lg border border-gray-200 p-6 lg:p-8 shadow-sm">
                <header className="mb-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>
                  <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
                    <span>
                      By {article.author}, {article.authorRole}
                    </span>
                    <span>•</span>
                    <span>Published: {article.publishDate}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </header>

                <div
                  className="prose prose-emerald max-w-none mb-8"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                <div className="border-t border-gray-200 pt-6 mt-8">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-600">Was this article helpful?</span>
                      <button className="inline-flex items-center text-gray-500 hover:text-emerald-600 transition-colors">
                        <ThumbsUp className="w-5 h-5 mr-1" />
                        <span className="text-sm">Yes</span>
                      </button>
                      <button className="inline-flex items-center text-gray-500 hover:text-red-600 transition-colors">
                        <ThumbsDown className="w-5 h-5 mr-1" />
                        <span className="text-sm">No</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-3">
                      <button className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors">
                        <Share2 className="w-5 h-5 mr-1" />
                        <span className="text-sm">Share</span>
                      </button>
                      <button className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors">
                        <Bookmark className="w-5 h-5 mr-1" />
                        <span className="text-sm">Save</span>
                      </button>
                      <button className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors">
                        <Printer className="w-5 h-5 mr-1" />
                        <span className="text-sm">Print</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
                <ul className="space-y-4">
                  {relatedArticles.map((related) => (
                    <li key={related.id}>
                      <Link
                        href={`/knowledge-base/article/${related.id}`}
                        className="block text-emerald-600 hover:text-emerald-700 transition-colors"
                      >
                        {related.title}
                      </Link>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <span>{related.category}</span>
                        <span className="mx-2">•</span>
                        <span>{related.readTime}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-50 rounded-lg border border-emerald-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Need More Help?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Can't find what you're looking for or have a specific question? Our support team is here to help.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
