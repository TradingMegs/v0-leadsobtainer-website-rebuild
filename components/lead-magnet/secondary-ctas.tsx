import { Calendar, Share2 } from "lucide-react"

export function SecondaryCTAs() {
  return (
    <div className="mb-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-lg bg-gray-800/50 p-6">
          <div className="mb-4 flex items-center gap-3">
            <Calendar className="h-6 w-6 text-lime-400" />
            <h2 className="text-xl font-bold text-white">Want Personalized Guidance?</h2>
          </div>

          <p className="mb-6 text-gray-300">
            Book a free 15-minute strategy call with one of our AI marketing specialists to get personalized advice for
            your specific business needs.
          </p>

          <a
            href="/booking"
            className="block w-full rounded-md border border-lime-400 bg-transparent px-6 py-3 text-center font-bold text-lime-400 transition-all hover:bg-lime-400/10"
          >
            Book Your Free Strategy Call
          </a>
        </div>

        <div className="rounded-lg bg-gray-800/50 p-6">
          <div className="mb-4 flex items-center gap-3">
            <Share2 className="h-6 w-6 text-lime-400" />
            <h2 className="text-xl font-bold text-white">Share With Colleagues</h2>
          </div>

          <p className="mb-6 text-gray-300">
            Share this eBook with 3 colleagues and get our premium 'AI Tools for Beginners' checklist free. Just copy
            the link below and send it to them.
          </p>

          <div className="mb-4 flex items-center gap-2">
            <input
              type="text"
              value="https://leadsobtainer.com/ai-playbook-share"
              readOnly
              className="w-full rounded-md border border-gray-600 bg-gray-700 px-4 py-2 text-sm text-white"
            />
            <button className="whitespace-nowrap rounded-md bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-500">
              Copy
            </button>
          </div>

          <p className="text-sm text-gray-400">
            We'll automatically detect when your colleagues download the eBook and send you the bonus checklist.
          </p>
        </div>
      </div>
    </div>
  )
}
