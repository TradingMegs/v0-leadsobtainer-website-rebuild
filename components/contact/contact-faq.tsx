"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ContactFAQ() {
  const faqs = [
    {
      question: "What is your growth strategy?",
      answer:
        "Our growth strategy is tailored to each client's specific needs and goals. We use a combination of AI-powered lead generation, marketing automation, and sales optimization to drive measurable results. During our initial strategy session, we'll analyze your business and create a custom growth plan.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We measure success through key performance indicators (KPIs) that align with your business goals. These typically include metrics like lead generation rate, conversion rate, customer acquisition cost, return on ad spend, and revenue growth. We provide detailed reporting and analytics so you can see the impact of our work.",
    },
    {
      question: "What is your pricing?",
      answer:
        "We offer three main pricing tiers: Partner ($497/mo), Pro ($797/mo), and Elite ($979/mo). Each plan includes different features and levels of support. We also offer custom enterprise solutions for larger businesses. All plans come with our 60-day money-back guarantee.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="inline-flex items-center gap-2 bg-secondary/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
          <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm">Common Questions</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Frequently Asked Questions</h2>

        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-secondary/30 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
