import { FileText } from "lucide-react"

export function BackupOffer() {
  return (
    <div className="rounded-lg bg-gray-800/50 p-6">
      <div className="mb-4 flex items-center gap-3">
        <FileText className="h-6 w-6 text-lime-400" />
        <h2 className="text-xl font-bold text-white">Can't Access the eBook?</h2>
      </div>

      <p className="mb-6 text-gray-300">
        If you're having trouble downloading the full eBook, get our bite-sized 'Top 10 AI Marketing Tips' cheat sheet
        instead. It contains the most actionable tips from the full playbook.
      </p>

      <a
        href="#cheatsheet"
        className="block w-full rounded-md border border-gray-600 bg-gray-700 px-6 py-3 text-center font-medium text-white transition-all hover:bg-gray-600"
      >
        Download Cheat Sheet Instead
      </a>

      <div className="mt-8 rounded-md bg-yellow-500/20 p-4 text-yellow-200">
        <p className="font-medium">
          <span className="font-bold">Important:</span> The replay of your eBook will only be available for 24 hours.
          Make sure to download it now!
        </p>
      </div>
    </div>
  )
}
