import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Michael Chen",
      business: "Bright Smile Dental",
      quote:
        "The AI-powered system from LeadsObtainer has completely transformed my dental practice. We've seen a 215% increase in new patients within just 90 days!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Sarah Johnson",
      business: "Johnson Family Law",
      quote:
        "I was skeptical at first, but the results speak for themselves. The lead quality is exceptional, and our conversion rate has doubled since implementing their system.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Michael Davis",
      business: "Luxe Real Estate",
      quote:
        "As a real estate agent, I've tried every marketing solution out there. Nothing has delivered results like LeadsObtainer. My business has grown 187% in just 6 months.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-sm">Trusted by 500+ Local Businesses</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Client Success Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about the results they've achieved with
            our AI-powered growth system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-secondary/30 rounded-lg p-6 flex flex-col h-full border border-lime-400/20">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 flex-grow">{testimonial.quote}</p>

              <div className="flex items-center mt-auto">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="text-primary hover:underline">
            Read more success stories →
          </a>
        </div>
      </div>
    </section>
  )
}
