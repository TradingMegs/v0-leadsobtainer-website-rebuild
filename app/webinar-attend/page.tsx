import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, Download, MessageSquare, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Webinar: Triple Your Local Business Revenue in 90 Days | LeadsObtainer",
  description:
    "Join our live webinar to learn how our AI-powered growth system can help you triple your local business revenue in just 90 days.",
  openGraph: {
    title: "Webinar: Triple Your Local Business Revenue in 90 Days | LeadsObtainer",
    description:
      "Join our live webinar to learn how our AI-powered growth system can help you triple your local business revenue in just 90 days.",
    url: "https://leadsobtainer.com/webinar-attend",
    siteName: "LeadsObtainer",
    locale: "en_US",
    type: "website",
  },
}

export default function WebinarAttendPage() {
  // This would typically come from a database or API
  const webinar = {
    title: "Triple Your Local Business Revenue in 90 Days",
    date: "August 15, 2023",
    time: "2:00 PM - 3:30 PM EST",
    host: "John Smith",
    hostTitle: "Founder & CEO, LeadsObtainer",
    attendees: 247,
    description:
      "In this exclusive webinar, you'll discover how our AI-powered growth system is helping local businesses across the country triple their revenue in just 90 days. Learn the exact strategies and systems we use to automate marketing, sales, and client acquisition for predictable growth.",
    topics: [
      "The 3 biggest mistakes local businesses make that cost them customers",
      "How to leverage AI to automate your marketing and sales processes",
      "The exact 5-step system we use to generate qualified leads on autopilot",
      "Case studies: How businesses like yours achieved 3X revenue growth",
      "Live Q&A session with our founder and lead strategists",
    ],
    bonuses: [
      {
        title: "Local Business Growth Blueprint",
        description: "A comprehensive guide to scaling your local business using AI-powered strategies",
        value: "$997",
      },
      {
        title: "Competitor Analysis Template",
        description: "Identify your competitors' weaknesses and turn them into your strengths",
        value: "$497",
      },
      {
        title: "30-Minute Strategy Session",
        description: "One-on-one consultation with one of our growth strategists",
        value: "$500",
      },
    ],
  }

  // JSON-LD Schema for Event
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: webinar.title,
    startDate: `${webinar.date}T14:00:00-05:00`,
    endDate: `${webinar.date}T15:30:00-05:00`,
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "VirtualLocation",
      url: "https://leadsobtainer.com/webinar-attend",
    },
    image: ["https://leadsobtainer.com/images/webinar-cover.jpg"],
    description: webinar.description,
    organizer: {
      "@type": "Organization",
      name: "LeadsObtainer",
      url: "https://leadsobtainer.com",
    },
    performer: {
      "@type": "Person",
      name: webinar.host,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      validFrom: "2023-07-01T00:00:00-05:00",
      url: "https://leadsobtainer.com/webinar",
    },
  }

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />

      <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          {/* Webinar Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              LIVE WEBINAR
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">{webinar.title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">{webinar.description}</p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-primary" />
                <span>{webinar.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                <span>{webinar.time}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-primary" />
                <span>{webinar.attendees} Registered</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Join Webinar Now
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
                <Calendar className="mr-2 h-4 w-4" /> Add to Calendar
              </Button>
            </div>

            <div className="text-sm text-gray-400">
              <p>Can't make it live? Register anyway and we'll send you the recording.</p>
            </div>
          </div>

          {/* Webinar Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              {/* Video Player Placeholder */}
              <div className="bg-gray-800 rounded-xl aspect-video flex items-center justify-center mb-8">
                <div className="text-center">
                  <p className="text-xl font-medium mb-4">Webinar will begin shortly</p>
                  <p className="text-gray-400 mb-6">The stream will start automatically when the webinar begins</p>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Test Your Audio & Video
                  </Button>
                </div>
              </div>

              {/* Webinar Details */}
              <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                <ul className="space-y-3">
                  {webinar.topics.map((topic, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Host Info */}
              <div className="bg-gray-800/50 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4">Your Host</h2>
                <div className="flex items-center">
                  <div className="w-20 h-20 rounded-full bg-gray-700 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold">{webinar.host}</h3>
                    <p className="text-gray-400">{webinar.hostTitle}</p>
                    <p className="text-sm text-gray-400 mt-2">
                      John has helped over 500 local businesses implement AI-powered growth systems, resulting in an
                      average of 3.7x revenue increase within the first year.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {/* Webinar Controls */}
              <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Webinar Controls</h3>
                <div className="space-y-4">
                  <Button className="w-full flex items-center justify-center" variant="outline">
                    <MessageSquare className="mr-2 h-4 w-4" /> Open Chat
                  </Button>
                  <Button className="w-full flex items-center justify-center" variant="outline">
                    <Download className="mr-2 h-4 w-4" /> Download Slides
                  </Button>
                  <div className="p-4 bg-gray-700/50 rounded-lg">
                    <h4 className="font-medium mb-2">Having Technical Issues?</h4>
                    <p className="text-sm text-gray-400 mb-3">
                      Try refreshing your browser or click below for support.
                    </p>
                    <Link href="#" className="text-primary text-sm hover:underline">
                      Get Technical Support
                    </Link>
                  </div>
                </div>
              </div>

              {/* Free Bonuses */}
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Free Bonuses for Attendees</h3>
                <div className="space-y-4">
                  {webinar.bonuses.map((bonus, index) => (
                    <div key={index} className="bg-black/30 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{bonus.title}</h4>
                        <span className="text-primary font-bold">{bonus.value}</span>
                      </div>
                      <p className="text-sm text-gray-400">{bonus.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-5">
                <h3 className="font-medium mb-2">Will I receive a recording of the webinar?</h3>
                <p className="text-gray-400 text-sm">
                  Yes, all registered attendees will receive a recording of the webinar within 24 hours after the live
                  event.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-5">
                <h3 className="font-medium mb-2">How can I ask questions during the webinar?</h3>
                <p className="text-gray-400 text-sm">
                  You can use the chat feature during the webinar to submit your questions. We'll have a dedicated Q&A
                  session at the end.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-5">
                <h3 className="font-medium mb-2">Will I receive the bonus materials if I watch the recording?</h3>
                <p className="text-gray-400 text-sm">
                  Yes, all registered attendees will receive the bonus materials regardless of whether you attend live
                  or watch the recording.
                </p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-5">
                <h3 className="font-medium mb-2">How long will I have access to the recording?</h3>
                <p className="text-gray-400 text-sm">
                  You'll have lifetime access to the webinar recording and all bonus materials.
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Join us for this exclusive webinar and discover how to triple your local business revenue in just 90 days.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Join Webinar Now
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
