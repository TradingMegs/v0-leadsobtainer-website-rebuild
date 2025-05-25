import { Star } from "lucide-react"

interface LocationTestimonialsProps {
  location: string
}

export function LocationTestimonials({ location }: LocationTestimonialsProps) {
  // Dynamically generate testimonials based on location
  const testimonials = [
    {
      text: `"LeadsObtainer transformed our business in ${location}. We saw a 43% increase in qualified leads and a 27% boost in conversions within just 30 days. Their understanding of the local market made all the difference."`,
      name: "Michael Rodriguez",
      business: `Local Business Owner, ${location}`,
    },
    {
      text: `"As a small business in ${location}, we were struggling to compete with larger companies. LeadsObtainer's AI-powered system leveled the playing field, and now we're booking twice as many appointments with half the effort."`,
      name: "Sarah Johnson",
      business: `Service Provider, ${location}`,
    },
    {
      text: `"The team at LeadsObtainer truly understands the ${location} market. Their localized approach to lead generation and client acquisition has helped us reach customers we never could before, resulting in a 34% increase in revenue."`,
      name: "David Thompson",
      business: `Entrepreneur, ${location}`,
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/30 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Star className="h-4 w-4 text-primary" fill="currentColor" />
            <span className="text-sm">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Client Success Stories in {location}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how businesses like yours in {location} have achieved remarkable growth with LeadsObtainer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-secondary/30 rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary" fill="currentColor" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full"></div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
