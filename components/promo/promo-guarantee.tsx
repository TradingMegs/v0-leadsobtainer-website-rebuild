import { Shield } from "lucide-react"

export function PromoGuarantee() {
  return (
    <section className="py-12 px-4 bg-black text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="flex justify-center mb-4">
          <div className="bg-[#c1ff00] text-black text-xs font-bold px-4 py-1 rounded-full">RISK-FREE GUARANTEE</div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-4">
          💰 100% Money-Back Guarantee – Plus a Free Month If You're Not Thrilled!
        </h2>
        <p className="text-center text-gray-400 mb-12">
          We're So Confident, We'll Even Cover Your First Month If You're Not Completely Satisfied!
        </p>

        <div className="bg-[#111] border border-[#c1ff00]/30 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">Risk-Reversal Rocket Guarantee</h3>
          <p className="text-gray-400 mb-6">
            Our "Risk-Reversal Rocket Guarantee": Achieve measurable improvements in lead generation within your first
            30 days or get a month of personalized consulting from your dedicated team, plus a full refund if you're
            still completely unsatisfied.
          </p>

          <div className="flex items-start gap-6 mb-8">
            <div className="flex-shrink-0">
              <div className="bg-[#c1ff00]/20 rounded-full p-4">
                <Shield className="h-12 w-12 text-[#c1ff00]" />
              </div>
            </div>
            <div>
              <p className="text-gray-400 mb-4">
                This guarantee eliminates all risk, giving you complete confidence in the transformation we deliver.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-[#c1ff00]">✓</span>
                  <span>30-day performance guarantee</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c1ff00]">✓</span>
                  <span>Measurable improvements guaranteed</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c1ff00]">✓</span>
                  <span>Free extra month if not satisfied</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c1ff00]">✓</span>
                  <span>Full refund option available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12 mb-8">
          <div className="bg-[#c1ff00] text-black text-xs font-bold px-4 py-1 rounded-full">FAQ</div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <p className="text-center text-gray-400 mb-12">
          Get answers to the most common questions about our Elite program.
        </p>

        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="bg-[#111] border border-[#333] rounded-lg overflow-hidden">
            <button className="flex justify-between items-center w-full p-4 text-left">
              <span className="font-bold">How long does the AI Sales System work?</span>
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
                className="h-5 w-5"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>

          <div className="bg-[#111] border border-[#333] rounded-lg overflow-hidden">
            <button className="flex justify-between items-center w-full p-4 text-left">
              <span className="font-bold">Do I need technical skills to use the system?</span>
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
                className="h-5 w-5"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>

          <div className="bg-[#111] border border-[#333] rounded-lg overflow-hidden">
            <button className="flex justify-between items-center w-full p-4 text-left">
              <span className="font-bold">Can I customize the AI for my business needs?</span>
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
                className="h-5 w-5"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>

          <div className="bg-[#111] border border-[#333] rounded-lg overflow-hidden">
            <button className="flex justify-between items-center w-full p-4 text-left">
              <span className="font-bold">Is there a trial period for the Sales System?</span>
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
                className="h-5 w-5"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
