export default function WebinarSocialProof() {
  const testimonials = [
    {
      quote:
        "This 10-minute masterclass completely changed how I approach lead generation. We've seen a 67% increase in qualified leads in just 30 days.",
      author: "Sarah T.",
      position: "Marketing Director, Local Dental Practice",
    },
    {
      quote:
        "I was skeptical about what could be taught in just 10 minutes, but the strategies were so actionable that we implemented them the same day.",
      author: "Michael R.",
      position: "Owner, Home Improvement Company",
    },
  ]

  const featuredIn = ["Forbes", "Entrepreneur", "Business Insider", "Inc.", "Fast Company"]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">What Others Are Saying:</h3>
        <div className="grid grid-cols-1 gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-secondary/20 p-4 rounded-lg">
              <p className="italic text-sm mb-2">"{testimonial.quote}"</p>
              <div className="text-sm">
                <span className="font-medium">{testimonial.author}</span>
                <span className="text-muted-foreground"> — {testimonial.position}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-muted-foreground mb-3">As Featured In:</h3>
        <div className="flex flex-wrap items-center gap-4">
          {featuredIn.map((publication, index) => (
            <div key={index} className="text-sm font-medium text-muted-foreground">
              {publication}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
