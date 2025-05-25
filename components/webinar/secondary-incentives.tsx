import { Share2, Gift, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SecondaryIncentives() {
  return (
    <div className="bg-secondary/30 rounded-xl p-6 mb-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Share2 className="w-5 h-5 mr-2 text-primary" />
          Share & Get Bonus Resources
        </h3>

        <p className="text-sm text-muted-foreground mb-4">
          Share this webinar with 3 colleagues and get our exclusive "Advanced Lead Generation Playbook" (valued at
          $197)
        </p>

        <div className="flex space-x-2">
          <Input
            readOnly
            value="https://leadsobtainer.com/webinar?ref=share"
            className="bg-background/50 border-0 text-sm"
          />
          <Button variant="outline" className="flex-shrink-0">
            Copy Link
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Gift className="w-5 h-5 mr-2 text-primary" />
          Can't Attend Live?
        </h3>

        <p className="text-sm text-muted-foreground mb-4">
          We understand you might have a busy schedule. Download our free "5-Minute Lead Generation Cheat Sheet" to get
          started right away.
        </p>

        <Button variant="outline" className="w-full flex items-center justify-center">
          <Download className="w-4 h-4 mr-2" />
          Download Free Cheat Sheet
        </Button>
      </div>
    </div>
  )
}
