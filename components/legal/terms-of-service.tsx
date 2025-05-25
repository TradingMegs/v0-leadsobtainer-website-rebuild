"use client"

import { motion } from "framer-motion"
import { GlowBackground } from "@/components/ui/glow-background"

export function TermsOfService() {
  return (
    <>
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <GlowBackground color="primary" intensity="low">
          <div className="container mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Last Updated: May 1, 2025</p>
            </motion.div>
          </div>
        </GlowBackground>
      </section>

      <section className="py-16 md:py-24 px-4 bg-secondary/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <p className="lead">
              Please read these Terms of Service ("Terms") carefully before using the LeadsObtainer website and
              services.
            </p>

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of
              the terms, you may not access the service.
            </p>

            <h2>Description of Service</h2>
            <p>
              LeadsObtainer provides AI-powered growth solutions for local businesses, including lead generation,
              marketing automation, and sales optimization services ("Service"). The Service is offered subject to your
              acceptance of these Terms.
            </p>

            <h2>User Accounts</h2>
            <p>
              When you create an account with us, you must provide accurate, complete, and current information. Failure
              to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
            </p>
            <p>
              You are responsible for safeguarding the password that you use to access the Service and for any
              activities or actions under your password. You agree not to disclose your password to any third party. You
              must notify us immediately upon becoming aware of any breach of security or unauthorized use of your
              account.
            </p>

            <h2>Billing and Payments</h2>
            <p>
              You agree to pay all fees or charges to your account based on the fee, charges, and billing terms in
              effect at the time a fee or charge is due and payable. If you dispute any charges you must let us know
              within sixty (60) days after the date that we invoice you.
            </p>
            <p>
              We reserve the right to change our prices. If we do change prices, we will provide notice of the change on
              the Site or by email, at our option, at least 30 days before the change is to take effect. Your continued
              use of the Service after the price change becomes effective constitutes your agreement to pay the changed
              amount.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive
              property of LeadsObtainer and its licensors. The Service is protected by copyright, trademark, and other
              laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in
              connection with any product or service without the prior written consent of LeadsObtainer.
            </p>

            <h2>User Content</h2>
            <p>
              Our Service allows you to post, link, store, share and otherwise make available certain information, text,
              graphics, videos, or other material ("Content"). You are responsible for the Content that you post to the
              Service, including its legality, reliability, and appropriateness.
            </p>
            <p>
              By posting Content to the Service, you grant us the right and license to use, modify, perform, display,
              reproduce, and distribute such Content on and through the Service. You retain any and all of your rights
              to any Content you submit, post or display on or through the Service and you are responsible for
              protecting those rights.
            </p>

            <h2>Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason
              whatsoever, including without limitation if you breach the Terms.
            </p>
            <p>
              Upon termination, your right to use the Service will immediately cease. If you wish to terminate your
              account, you may simply discontinue using the Service, or notify us that you wish to delete your account.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              In no event shall LeadsObtainer, nor its directors, employees, partners, agents, suppliers, or affiliates,
              be liable for any indirect, incidental, special, consequential or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your
              access to or use of or inability to access or use the Service; (ii) any conduct or content of any third
              party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or
              alteration of your transmissions or content, whether based on warranty, contract, tort (including
              negligence) or any other legal theory, whether or not we have been informed of the possibility of such
              damage.
            </p>

            <h2>Disclaimer</h2>
            <p>
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE"
              basis. The Service is provided without warranties of any kind, whether express or implied, including, but
              not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement
              or course of performance.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of Wyoming, United States, without
              regard to its conflict of law provisions.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material we will try to provide at least 30 days notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole discretion.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>
              Email: legal@leadsobtainer.com
              <br />
              Address: 30 N Gould St, Sheridan, WY, 82801, USA
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
