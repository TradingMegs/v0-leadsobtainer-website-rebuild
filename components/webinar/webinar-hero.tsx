"use client"

import { Button } from "@/components/ui/button"
import { PlayCircle, Calendar, Clock, Users } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function WebinarHero() {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
          How to Build Your AI-Powered Sales Machine in 90 Days or Less
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Join 10,000+ local business owners who've boosted their client acquisition by 45% with our quick, actionable
          training.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2" />
            <span>Taught by Mark Johnson, Lead Generation Expert</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>On-Demand Training</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <span>45 Minutes</span>
          </div>
        </div>

        <div className="relative aspect-video max-w-3xl mx-auto mb-8 rounded-xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <div className="bg-black/50 p-4 rounded-full backdrop-blur-sm">
              <PlayCircle className="h-16 w-16 text-primary" />
            </div>
          </div>
          <img
            src="/placeholder.svg?height=720&width=1280"
            alt="Webinar preview"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Link href="#webinar-form">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Register Now - Free Access
            </Button>
          </Link>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </motion.div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">What You Will Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-secondary/10 p-6 rounded-lg border border-border">
            <h3 className="font-semibold mb-2">What is an AI Employee</h3>
            <p className="text-muted-foreground">
              Discover how AI can work as a virtual team member, handling tasks 24/7 without breaks or benefits.
            </p>
          </div>
          <div className="bg-secondary/10 p-6 rounded-lg border border-border">
            <h3 className="font-semibold mb-2">Why Automation Saves Time and Money</h3>
            <p className="text-muted-foreground">
              Learn how businesses are cutting costs by 35% while increasing productivity through smart automation.
            </p>
          </div>
          <div className="bg-secondary/10 p-6 rounded-lg border border-border">
            <h3 className="font-semibold mb-2">How the Sales Machine Website Works</h3>
            <p className="text-muted-foreground">
              See our proven system in action with real examples of businesses that have doubled their leads.
            </p>
          </div>
          <div className="bg-secondary/10 p-6 rounded-lg border border-border">
            <h3 className="font-semibold mb-2">What's Included in Our System</h3>
            <p className="text-muted-foreground">
              Ebook creation, AI employee setup, advanced automations, and everything you need for success.
            </p>
          </div>
          <div className="bg-secondary/10 p-6 rounded-lg border border-border">
            <h3 className="font-semibold mb-2">Bonus: Free Lead Generation Ebook</h3>
            <p className="text-muted-foreground">
              Get our comprehensive guide to modern lead generation strategies as a free bonus.
            </p>
          </div>
          <div className="bg-primary/10 p-6 rounded-lg border border-primary/30">
            <h3 className="font-semibold mb-2">Limited-Time Offer</h3>
            <p className="text-muted-foreground">
              Register now to receive exclusive access to our implementation checklist ($197 value).
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
