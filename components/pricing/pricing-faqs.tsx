"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function PricingFAQs() {
  const faqs = [
    {
      question: "What's included in the setup fee?",
      answer:
        "The setup fee covers the initial strategy session, business analysis, custom growth plan creation, and the implementation of all systems and automations needed for your growth plan.",
    },
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be available immediately. If you downgrade, the changes will take effect at the start of your next billing cycle.",
    },
    {
      question: "Is there a money-back guarantee?",
      answer:
        "Yes, we offer a 60-day money-back guarantee. If you're not satisfied with our service within the first 60 days, we'll refund your investment in full.",
    },
    {
      question: "How long does the initial setup process take?",
      answer:
        "The initial setup typically takes 2-3 weeks, depending on the complexity of your business and the plan you choose. We'll provide you with a detailed timeline during your strategy session.",
    },
    {
      question: "Do I need to sign a long-term contract?",
      answer:
        "No, all our plans are month-to-month with no long-term contracts. You can cancel at any time without any cancellation fees.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "All plans include email support. Pro and Elite plans include priority support with faster response times. The Elite plan includes a dedicated account manager for personalized support.",
    },
    {
      question: "Do you offer custom payment terms for larger businesses?",
      answer:
        "Yes, we offer custom payment terms for enterprise clients. Please contact our sales team to discuss your specific needs.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, ACH transfers, and PayPal. For annual plans, we also offer invoice payment options.",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Pricing & Billing FAQs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our pricing and billing.
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
