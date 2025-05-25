export function ProblemSolution() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Tired of Repetitive Tasks Eating Your Time?
          </h2>
          <div className="space-y-6 text-lg">
            <p>
              Manual lead follow-ups, scheduling conflicts, and inconsistent marketing efforts are costing you revenue
              and efficiency. Our AI Employee automates these workflows, ensuring zero missed opportunities.
            </p>
            <p>From instant WhatsApp responses to smart SEO enhancements, we turn chaos into seamless operations.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-primary/20">
            <h3 className="text-xl font-semibold mb-4 text-white">Before AI Automation</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl">⚠️</span>
                <span>Hours spent on manual lead follow-ups</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl">⚠️</span>
                <span>Missed opportunities due to delayed responses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl">⚠️</span>
                <span>Inconsistent social media presence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl">⚠️</span>
                <span>Scheduling conflicts and double-bookings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl">⚠️</span>
                <span>Unorganized customer data</span>
              </li>
            </ul>
          </div>

          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-primary/20">
            <h3 className="text-xl font-semibold mb-4 text-white">After AI Automation</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>24/7 automated lead qualification and follow-up</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Instant responses across all communication channels</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Consistent, optimized social media content</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Smart scheduling with conflict prevention</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl">✓</span>
                <span>Organized, segmented customer database</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
