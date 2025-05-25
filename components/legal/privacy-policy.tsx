"use client"

import { motion } from "framer-motion"
import { GlowBackground } from "@/components/ui/glow-background"

export function PrivacyPolicy() {
  return (
    <>
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <GlowBackground color="primary" intensity="low">
          <div className="container mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Last Updated: May 1, 2025</p>
            </motion.div>
          </div>
        </GlowBackground>
      </section>

      <section className="py-16 md:py-24 px-4 bg-secondary/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <p className="lead">
              At LeadsObtainer, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you create an account, fill out a
              form, or communicate with us. This may include:
            </p>
            <ul>
              <li>Personal identifiers (name, email address, phone number)</li>
              <li>Business information (company name, job title)</li>
              <li>Payment information</li>
              <li>Communications you send to us</li>
            </ul>

            <p>We also automatically collect certain information when you visit our website, including:</p>
            <ul>
              <li>Log information (IP address, browser type, pages visited)</li>
              <li>Device information</li>
              <li>Location information</li>
              <li>Cookies and similar technologies</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices, updates, and administrative messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Communicate with you about products, services, offers, and events</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Personalize and improve your experience</li>
            </ul>

            <h2>Sharing of Information</h2>
            <p>We may share the information we collect in various ways, including:</p>
            <ul>
              <li>
                With vendors, consultants, and other service providers who need access to such information to carry out
                work on our behalf
              </li>
              <li>
                In response to a request for information if we believe disclosure is in accordance with, or required by,
                any applicable law, regulation, or legal process
              </li>
              <li>
                If we believe your actions are inconsistent with our user agreements or policies, or to protect the
                rights, property, and safety of LeadsObtainer or others
              </li>
              <li>
                In connection with, or during negotiations of, any merger, sale of company assets, financing, or
                acquisition of all or a portion of our business by another company
              </li>
              <li>With your consent or at your direction</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized
              access, disclosure, alteration, and destruction.
            </p>

            <h2>Your Choices</h2>
            <p>
              You can opt out of receiving promotional communications from us by following the instructions in those
              communications. If you opt out, we may still send you non-promotional communications, such as those about
              your account or our ongoing business relations.
            </p>

            <h2>Changes to this Privacy Policy</h2>
            <p>
              We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising
              the date at the top of the policy and, in some cases, we may provide you with additional notice.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>
              Email: privacy@leadsobtainer.com
              <br />
              Address: 30 N Gould St, Sheridan, WY, 82801, USA
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
