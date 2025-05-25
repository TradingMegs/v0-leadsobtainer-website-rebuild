"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, ArrowRight, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function KnowledgeBaseContent() {
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    {
      id: "getting-started",
      name: "Getting Started",
      articles: [
        {
          id: "gs-1",
          title: "How to set up your LeadsObtainer account",
          excerpt: "Learn how to create and configure your LeadsObtainer account for optimal results.",
          readTime: "5 min read",
        },
        {
          id: "gs-2",
          title: "Understanding your dashboard",
          excerpt: "A comprehensive guide to navigating and using your LeadsObtainer dashboard.",
          readTime: "7 min read",
        },
        {
          id: "gs-3",
          title: "Setting up your first lead generation campaign",
          excerpt: "Step-by-step instructions for creating your first lead generation campaign.",
          readTime: "10 min read",
        },
        {
          id: "gs-4",
          title: "Connecting your CRM system",
          excerpt: "Learn how to integrate your existing CRM with LeadsObtainer for seamless lead management.",
          readTime: "6 min read",
        },
      ],
    },
    {
      id: "lead-generation",
      name: "Lead Generation",
      articles: [
        {
          id: "lg-1",
          title: "AI-powered lead targeting strategies",
          excerpt: "Discover how our AI identifies and targets your ideal customers for maximum conversion.",
          readTime: "8 min read",
        },
        {
          id: "lg-2",
          title: "Creating effective lead magnets",
          excerpt: "Learn how to create compelling lead magnets that attract high-quality prospects.",
          readTime: "9 min read",
        },
        {
          id: "lg-3",
          title: "Optimizing landing pages for conversion",
          excerpt: "Best practices for designing landing pages that convert visitors into leads.",
          readTime: "12 min read",
        },
        {
          id: "lg-4",
          title: "Multi-channel lead generation tactics",
          excerpt: "How to leverage multiple channels to create a comprehensive lead generation strategy.",
          readTime: "11 min read",
        },
      ],
    },
    {
      id: "marketing-automation",
      name: "Marketing Automation",
      articles: [
        {
          id: "ma-1",
          title: "Setting up automated email sequences",
          excerpt: "Step-by-step guide to creating effective email nurture sequences for your leads.",
          readTime: "9 min read",
        },
        {
          id: "ma-2",
          title: "SMS marketing automation best practices",
          excerpt: "Learn how to implement SMS marketing automation that complies with regulations and drives results.",
          readTime: "7 min read",
        },
        {
          id: "ma-3",
          title: "Creating personalized customer journeys",
          excerpt: "How to design personalized customer journeys that increase engagement and conversion.",
          readTime: "10 min read",
        },
        {
          id: "ma-4",
          title: "Automation triggers and conditions",
          excerpt: "Understanding how to use triggers and conditions to create sophisticated automation workflows.",
          readTime: "8 min read",
        },
      ],
    },
    {
      id: "ai-chatbots",
      name: "AI Chatbots",
      articles: [
        {
          id: "ac-1",
          title: "Setting up your AI chatbot",
          excerpt: "Learn how to configure and deploy your AI chatbot for lead generation and customer support.",
          readTime: "6 min read",
        },
        {
          id: "ac-2",
          title: "Training your chatbot with custom data",
          excerpt: "How to train your AI chatbot with your business data for more accurate responses.",
          readTime: "11 min read",
        },
        {
          id: "ac-3",
          title: "Creating effective conversation flows",
          excerpt: "Design conversation flows that guide users toward conversion while providing value.",
          readTime: "9 min read",
        },
        {
          id: "ac-4",
          title: "Integrating your chatbot with other systems",
          excerpt: "How to connect your AI chatbot with your CRM, calendar, and other business tools.",
          readTime: "8 min read",
        },
      ],
    },
    {
      id: "analytics-reporting",
      name: "Analytics & Reporting",
      articles: [
        {
          id: "ar-1",
          title: "Understanding your lead generation metrics",
          excerpt: "A guide to the key metrics that matter for measuring lead generation success.",
          readTime: "7 min read",
        },
        {
          id: "ar-2",
          title: "Creating custom reports",
          excerpt: "Learn how to create custom reports that track the KPIs most important to your business.",
          readTime: "8 min read",
        },
        {
          id: "ar-3",
          title: "Analyzing campaign performance",
          excerpt: "How to analyze your campaign performance and make data-driven optimizations.",
          readTime: "10 min read",
        },
        {
          id: "ar-4",
          title: "ROI tracking and calculation",
          excerpt: "Methods for accurately tracking and calculating the ROI of your lead generation efforts.",
          readTime: "9 min read",
        },
      ],
    },
    {
      id: "billing-account",
      name: "Billing & Account",
      articles: [
        {
          id: "ba-1",
          title: "Managing your subscription",
          excerpt: "How to view, change, or cancel your LeadsObtainer subscription.",
          readTime: "4 min read",
        },
        {
          id: "ba-2",
          title: "Understanding your billing cycle",
          excerpt: "Information about billing dates, payment methods, and invoice access.",
          readTime: "5 min read",
        },
        {
          id: "ba-3",
          title: "Adding team members to your account",
          excerpt: "Learn how to add and manage team members with different permission levels.",
          readTime: "6 min read",
        },
        {
          id: "ba-4",
          title: "Security and privacy settings",
          excerpt: "How to configure security settings and manage your data privacy preferences.",
          readTime: "7 min read",
        },
      ],
    },
  ]

  const faqs = [
    {
      question: "What is LeadsObtainer?",
      answer:
        "LeadsObtainer is an AI-powered growth platform designed to help local businesses generate high-quality leads, automate their marketing, and scale their operations. Our system combines advanced AI technology with proven marketing strategies to deliver predictable growth for businesses of all sizes.",
    },
    {
      question: "How does the 60-day money-back guarantee work?",
      answer:
        "Our 60-day money-back guarantee is simple: if you don't see measurable results within 60 days of implementing our system, we'll refund your investment in full. We define 'measurable results' as a significant increase in qualified leads or a positive ROI on your marketing spend. This guarantee reflects our confidence in our system and our commitment to your success.",
    },
    {
      question: "Do I need technical skills to use LeadsObtainer?",
      answer:
        "No technical skills are required. LeadsObtainer is designed to be user-friendly and accessible to business owners regardless of their technical background. Our onboarding process includes comprehensive training, and our customer success team is always available to provide support. Additionally, if you prefer, we can handle the technical setup and management for you.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Most clients begin seeing initial results within 2-4 weeks of implementing our system. However, the timeline can vary based on your industry, market competition, and how quickly you implement our recommendations. Our goal is to help you achieve sustainable, long-term growth, not just quick wins. We focus on building systems that deliver consistent results over time.",
    },
    {
      question: "Can LeadsObtainer work for my specific industry?",
      answer:
        "Yes, LeadsObtainer is designed to work across a wide range of industries. We've helped businesses in healthcare, professional services, home services, retail, restaurants, real estate, automotive, financial services, education, fitness, legal services, and many more. Our AI system adapts to your specific industry and target audience to deliver relevant leads and effective marketing strategies.",
    },
    {
      question: "What makes LeadsObtainer different from other marketing agencies?",
      answer:
        "Unlike traditional marketing agencies, LeadsObtainer combines advanced AI technology with proven marketing strategies to deliver predictable results. We don't just run ads or create content; we build comprehensive growth systems tailored to your business. Our approach is data-driven, our strategies are continuously optimized by AI, and we focus on measurable ROI rather than vanity metrics.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="articles">Knowledge Base Articles</TabsTrigger>
            <TabsTrigger value="faqs">Frequently Asked Questions</TabsTrigger>
            <TabsTrigger value="contact">Contact Support</TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="space-y-8">
            {categories.map((category) => (
              <div key={category.id} className="space-y-4">
                <h2 className="text-2xl font-bold">{category.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.articles.map((article) => (
                    <Card key={article.id} className="bg-background/50 hover:shadow-lg transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="bg-primary/10 p-2 rounded-full mr-4">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">{article.title}</h3>
                            <p className="text-sm text-muted-foreground mb-3">{article.excerpt}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-muted-foreground">{article.readTime}</span>
                              <Button variant="link" size="sm" className="p-0 h-auto">
                                Read Article <ArrowRight className="ml-1 h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="faqs">
            <div className="bg-background/50 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Don't see your question here? Our support team is ready to help.
                </p>
                <Button asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="contact">
            <div className="bg-background/50 rounded-lg p-8">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch with Our Support Team</h2>
                <p className="text-center text-muted-foreground mb-8">
                  Our dedicated support team is available to help you with any questions or issues you may have.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-secondary/20 p-6 rounded-lg text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Email Support</h3>
                    <p className="text-muted-foreground mb-4">
                      Send us an email and we'll get back to you within 24 hours.
                    </p>
                    <Button variant="outline" asChild>
                      <a href="mailto:support@leadsobtainer.com">support@leadsobtainer.com</a>
                    </Button>
                  </div>

                  <div className="bg-secondary/20 p-6 rounded-lg text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Phone Support</h3>
                    <p className="text-muted-foreground mb-4">
                      Call us directly for immediate assistance with urgent issues.
                    </p>
                    <Button variant="outline" asChild>
                      <a href="tel:+15551234567">(555) 123-4567</a>
                    </Button>
                  </div>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="font-semibold mb-4 text-center">Support Hours</h3>
                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                    <div>
                      <p className="font-medium">Monday - Friday</p>
                      <p className="text-muted-foreground">9:00 AM - 8:00 PM EST</p>
                    </div>
                    <div>
                      <p className="font-medium">Saturday</p>
                      <p className="text-muted-foreground">10:00 AM - 4:00 PM EST</p>
                    </div>
                    <div>
                      <p className="font-medium">Sunday</p>
                      <p className="text-muted-foreground">Closed</p>
                    </div>
                    <div>
                      <p className="font-medium">Holidays</p>
                      <p className="text-muted-foreground">Hours may vary</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
