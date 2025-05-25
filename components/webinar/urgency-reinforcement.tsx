import { AlertTriangle, Clock } from "lucide-react"

export default function UrgencyReinforcement() {
  return (
    <div className="bg-primary/10 rounded-xl p-6">
      <div className="flex items-start mb-4">
        <AlertTriangle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold mb-1">Important Reminder</h3>
          <p className="text-sm text-muted-foreground">
            The replay will only be available for 24 hours after the live session. Make sure to attend live for the best
            experience and to ask questions!
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <Clock className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold mb-1">Join Early</h3>
          <p className="text-sm text-muted-foreground">
            We recommend joining 5 minutes before the start time to ensure your connection is working properly and to
            secure your spot.
          </p>
        </div>
      </div>
    </div>
  )
}
