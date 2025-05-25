"use client"

import { PromoHero } from "@/components/promo/PromoHero"
import { PromoMetricStrip } from "@/components/promo/PromoMetricStrip"
import { PromoFeature } from "@/components/promo/PromoFeature"
import { PromoTestimonial } from "@/components/promo/PromoTestimonial"
import { PromoVideo } from "@/components/promo/PromoVideo"
import { LeadForm } from "@/components/promo/LeadForm"
import { CountdownTimer } from "@/components/promo/CountdownTimer"
import { GlowBackground } from "@/components/ui/glow-background"

export function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white relative overflow-hidden">
      <GlowBackground color="accent" intensity="medium" position="top" />

      {/* Hero Section */}
      <PromoHero
        headline="Qualified B2B Leads in 24 Hours"
        subheadline="No guesswork. Instant, AI-driven lead delivery—start closing faster."
        primaryCta={{
          text: "Start My Free Trial",
          href: "#lead-form",
          props: { "aria-label": "Start free trial – LeadsObtainer", loading: "lazy" },
        }}
        visualSrc="/dashboard-animation.gif"
        visualAlt="Animated dashboard showing live lead funnel"
        dataTest="hero-section"
      />

      {/* Urgency & Metrics Banner */}
      <PromoMetricStrip
        metrics={[
          { label: "Leads Delivered", value: "50,000+" },
          { label: "Avg. MQL Lift", value: "30%+" },
        ]}
        microcopy="Limited audit slots—only 10 left this week!"
        dataTest="metrics-banner"
      />

      {/* Feature Grid */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            AI-Powered Lead Generation That <span className="text-primary">Actually Works</span>
          </h2>

          <PromoFeature
            columns={3}
            features={[
              {
                icon: "score",
                title: "AI-Driven Lead Scoring",
                desc: "Rank prospects instantly—boost conversions by up to 75%.",
              },
              {
                icon: "omni-channel",
                title: "Omni-Channel Outreach",
                desc: "Email, LinkedIn & SMS sequences that generate 3× more responses.",
              },
              {
                icon: "analytics",
                title: "Real-Time Analytics",
                desc: "Optimize on the fly—improve campaign ROI by 20%.",
              },
            ]}
            secondaryCta={{
              text: "Download Feature Sheet",
              href: "/resources/feature-sheet.pdf",
              props: { variant: "secondary" },
            }}
            dataTest="feature-grid"
          />
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 bg-black/40 backdrop-blur-sm relative z-10">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>

          <PromoTestimonial
            testimonials={[
              {
                quote: "DOUBLED our pipeline in two weeks—game-changer.",
                name: "Sarah L., VP Sales at Acme Corp",
                photoSrc: "/testimonials/sarah.jpg",
              },
              {
                quote: "61% of our MQLs convert to SQLs thanks to AI scoring.",
                name: "Jason M., Head of Growth at BetaTech",
                photoSrc: "/testimonials/jason.jpg",
              },
            ]}
            logos={[
              { src: "/logos/logo-acme.png", alt: "Acme Corp" },
              { src: "/logos/logo-betatech.png", alt: "BetaTech" },
              { src: "/logos/logo-globalco.png", alt: "GlobalCo" },
            ]}
            dataTest="testimonials"
          />
        </div>
      </section>

      {/* Data-Backed Insight */}
      <PromoMetricStrip
        headline="Lead Gen Is Top Priority"
        stats={[{ label: "Marketers prioritizing lead gen", value: "34%" }]}
        link={{
          text: "Read the 2025 Lead Gen Report",
          href: "/resources/2025-report.pdf",
        }}
        dataTest="data-insight"
      />

      {/* Explainer Video */}
      <section className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <PromoVideo
            title="How It Works in 60 Seconds"
            videoUrl="https://youtu.be/ExampleID"
            thumbnailSrc="/video-thumbnail.jpg"
            cta={{
              text: "Watch Demo",
              props: { "aria-label": "Watch demo video" },
            }}
            dataTest="explainer-video"
          />
        </div>
      </section>

      {/* Lead Capture */}
      <section id="lead-form" className="py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-black/40 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
            <LeadForm
              title="Get Your Free Lead Gen Audit"
              fields={[
                { name: "fullName", label: "Name", type: "text", required: true },
                { name: "workEmail", label: "Work Email", type: "email", required: true },
                { name: "company", label: "Company", type: "text", required: true },
              ]}
              submit={{
                text: "Get Audit Now",
                props: { "aria-label": "Get free audit" },
              }}
              microcopy="No credit card required. Unsubscribe anytime."
              dataTest="lead-form"
            />

            {/* Scarcity & Guarantee */}
            <div className="mt-8 border-t border-primary/20 pt-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-center md:text-left text-white/80">
                  Only 10 audit slots left—100% satisfaction guaranteed or money back.
                </p>
                <CountdownTimer endDate="2025-05-16T23:59:59Z" label="Offer expires in:" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 relative z-10 bg-gradient-to-b from-transparent to-black/60">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Lead Generation?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join over 500 B2B companies already using LeadsObtainer to drive qualified leads and accelerate their sales
            pipeline.
          </p>
          <a
            href="#lead-form"
            className="inline-flex h-14 items-center justify-center rounded-full bg-primary hover:bg-primary/90 px-8 text-lg font-medium text-black transition-all hover:scale-105"
            aria-label="Start free trial now"
          >
            Start My Free Trial
          </a>
        </div>
      </section>
    </main>
  )
}
