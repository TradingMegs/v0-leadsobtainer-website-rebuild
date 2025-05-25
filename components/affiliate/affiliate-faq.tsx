"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function AffiliateFAQ() {
  const faqs = [
    {
      question: "How do I join the affiliate program?",
      answer:
        "Joining is simple! Click the 'Join Our Affiliate Program' button, fill out the application form, and our team will review your application. Once approved, you'll receive your unique affiliate links and access to our affiliate dashboard.",
    },
    {
      question: "When and how do I get paid?",
      answer:
        "We process payments on the 15th of each month for the previous month's commissions. You can choose to be paid via PayPal, direct bank transfer, or Wise. The minimum payout threshold is $100.",
    },
    {
      question: "What is the cookie duration?",
      answer:
        "We offer a 90-day cookie duration. This means that if someone clicks on your affiliate link, you'll receive credit for any purchase they make within the next 90 days.",
    },
    {
      question: "Can I promote LeadsObtainer on social media?",
      answer:
        "We encourage promotion on social media platforms, blogs, YouTube, podcasts, and email newsletters. We provide various marketing materials optimized for different channels.",
    },
    {
      question: "Are there any restrictions on how I can promote LeadsObtainer?",
      answer:
        "While we give you freedom to promote in your own style, we prohibit spam, misleading claims, and bidding on our brand terms in paid search. Please review our full affiliate terms for complete details.",
    },
    {
      question: "Do you offer exclusive promotions for affiliates?",
      answer:
        "Yes! We regularly create special offers and promotions exclusively for our affiliates to share with their audience. These can help increase your conversion rates and commissions.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our affiliate program.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
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
