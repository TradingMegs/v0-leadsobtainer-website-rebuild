import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How quickly can I expect to see results from your lead generation services?",
    answer:
      "Most clients start seeing initial results within 2-4 weeks of implementation. However, the full impact of our strategies typically becomes apparent after 1-3 months as we optimize campaigns based on data and performance metrics.",
  },
  {
    question: "What industries do you specialize in for lead generation?",
    answer:
      "We specialize in B2B and high-value B2C industries including SaaS, professional services, healthcare, finance, real estate, education, manufacturing, and technology. Our methodologies are adaptable to various sectors with customized approaches for each.",
  },
  {
    question: "How do you ensure the quality of leads generated?",
    answer:
      "We implement multi-layer qualification processes including intent-based targeting, behavioral analysis, and custom qualification criteria specific to your business. Our AI systems continuously learn from conversion patterns to improve lead quality over time.",
  },
  {
    question: "What makes your lead generation approach different from others?",
    answer:
      "Our proprietary AI-driven approach combines advanced data analytics, multi-channel strategies, and automation to create highly targeted campaigns. Unlike traditional agencies, we focus on quality over quantity and provide transparent reporting with clear ROI metrics.",
  },
  {
    question: "Do you offer guarantees on lead generation results?",
    answer:
      "Yes, we offer performance guarantees based on agreed-upon KPIs during our initial consultation. Our risk-free partnership model ensures you only pay for results that meet your specific criteria.",
  },
  {
    question: "How do you handle lead nurturing and follow-up?",
    answer:
      "We implement automated nurturing sequences customized to your sales process, with behavioral triggers and personalized content. Our systems integrate with your CRM for seamless lead handoff and tracking throughout the customer journey.",
  },
  {
    question: "Can you integrate with our existing CRM and marketing tools?",
    answer:
      "Absolutely. We integrate with all major CRM platforms (Salesforce, HubSpot, Zoho, etc.) and marketing automation tools. Our technical team will ensure smooth data flow between systems for optimal lead management.",
  },
  {
    question: "What reporting and analytics do you provide?",
    answer:
      "We provide comprehensive dashboards with real-time metrics on campaign performance, lead quality, conversion rates, and ROI. Regular strategy calls review these metrics and discuss optimization opportunities.",
  },
]

const KnowledgeBaseFAQ = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-gray-800 hover:text-emerald-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions? We're here to help.</p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KnowledgeBaseFAQ
