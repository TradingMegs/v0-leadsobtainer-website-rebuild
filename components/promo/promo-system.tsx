import { StickyScrollReveal } from "@/components/ui/sticky-scroll-reveal"

const items = [
  {
    title: "Discovery Phase",
    description:
      "We analyze your business, market position, and competition to identify growth opportunities and challenges.",
    content: null,
  },
  {
    title: "Strategy Development",
    description:
      "Our team creates a customized lead generation strategy tailored to your specific business needs and goals.",
    content: null,
  },
  {
    title: "Implementation",
    description:
      "We deploy advanced AI tools and marketing automation to execute your strategy with precision and efficiency.",
    content: null,
  },
  {
    title: "Optimization",
    description: "Continuous monitoring and refinement of campaigns to maximize performance and ROI.",
    content: null,
  },
  {
    title: "Scaling",
    description:
      "Once we've established a consistent flow of qualified leads, we scale your campaigns to drive exponential growth.",
    content: null,
  },
]

export function PromoSystem() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">
            Your Path to High-Converting Leads
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven system transforms your business from struggling to find leads to having a consistent flow of
            high-quality prospects.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto">
          <StickyScrollReveal content={items} />
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-center mb-6">Results You Can Expect</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">300% Increase</h4>
              <p className="text-muted-foreground">In qualified lead generation within the first 90 days</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 2v20" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">40% Reduction</h4>
              <p className="text-muted-foreground">In customer acquisition costs through optimized targeting</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">85% Conversion</h4>
              <p className="text-muted-foreground">From qualified leads to sales opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
