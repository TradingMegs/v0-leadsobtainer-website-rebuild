"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function PromoFAQ() {
  const faqs = [
    {
      question: "How long will this promotion be available?",
      answer:
        "This promotion is available for a limited time only. The countdown timer on our page shows exactly how much time is left before this offer expires. We recommend taking advantage of it as soon as possible as we limit the number of new clients we accept each month.",
    },
    {
      question: "What happens after the promotional period ends?",
      answer:
        "If you purchase during the promotional period, you'll lock in the discounted rate of $397/month for as long as you remain a customer. After the promotional period ends, new customers will pay the regular price of $797/month.",
    },
    {
      question: "Is there a money-back guarantee?",
      answer:
        "Yes, we offer a 60-day money-back guarantee. If you're not satisfied with our service within the first 60 days, we'll refund your investment in full. We're confident in our ability to deliver results, which is why we can offer this guarantee.",
    },
    {
      question: "Do I need technical skills to use LeadsObtainer?",
      answer:
        "Not at all. Our platform is designed to be user-friendly and intuitive. Plus, our team handles the setup and implementation for you, so you can focus on running your business. We provide full training and support to ensure you get the most out of our system.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Most clients start seeing results within the first 30 days. However, the exact timeline can vary depending on your industry, market, and current business situation. During your strategy call, we'll provide a more specific timeline based on your unique circumstances.",
    },
    {
      question: "Is this suitable for my type of business?",
      answer:
        "Our system is designed to work for a wide range of local businesses, including dental practices, fitness studios, real estate agents, home services, and more. During your strategy call, we'll determine if our system is a good fit for your specific business and industry.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our promotional offer? Find answers below.
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
