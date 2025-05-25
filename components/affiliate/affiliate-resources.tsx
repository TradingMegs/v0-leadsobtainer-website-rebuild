import { FileText, LinkIcon, ImageIcon, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AffiliateResources() {
  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Marketing Resources</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need to successfully promote LeadsObtainer to your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-secondary/30 rounded-lg p-6">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Content Templates</h3>
            <p className="text-muted-foreground mb-4">
              Ready-to-use blog posts, social media content, and email templates to promote LeadsObtainer.
            </p>
            <Button variant="link" className="text-primary p-0">
              Access Templates →
            </Button>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <LinkIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Tracking Links</h3>
            <p className="text-muted-foreground mb-4">
              Custom affiliate links and deep links to specific pages to maximize your conversion rates.
            </p>
            <Button variant="link" className="text-primary p-0">
              Generate Links →
            </Button>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <ImageIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Banners & Graphics</h3>
            <p className="text-muted-foreground mb-4">
              Professional banners, logos, and promotional graphics in various sizes and formats.
            </p>
            <Button variant="link" className="text-primary p-0">
              Download Graphics →
            </Button>
          </div>

          <div className="bg-secondary/30 rounded-lg p-6">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Dedicated Support</h3>
            <p className="text-muted-foreground mb-4">
              Get personalized support from our affiliate team to help you maximize your earnings.
            </p>
            <Button variant="link" className="text-primary p-0">
              Contact Support →
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
