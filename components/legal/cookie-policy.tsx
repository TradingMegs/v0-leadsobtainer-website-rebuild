"use client"

import { motion } from "framer-motion"
import { GlowBackground } from "@/components/ui/glow-background"

export function CookiePolicy() {
  return (
    <>
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        <GlowBackground color="primary" intensity="low">
          <div className="container mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Last Updated: May 1, 2025</p>
            </motion.div>
          </div>
        </GlowBackground>
      </section>

      <section className="py-16 md:py-24 px-4 bg-secondary/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <p className="lead">
              This Cookie Policy explains how LeadsObtainer uses cookies and similar technologies to recognize you when
              you visit our website. It explains what these technologies are and why we use them, as well as your rights
              to control our use of them.
            </p>

            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website.
              Cookies are widely used by website owners in order to make their websites work, or to work more
              efficiently, as well as to provide reporting information.
            </p>
            <p>
              Cookies set by the website owner (in this case, LeadsObtainer) are called "first-party cookies." Cookies
              set by parties other than the website owner are called "third-party cookies." Third-party cookies enable
              third-party features or functionality to be provided on or through the website (e.g., advertising,
              interactive content, and analytics). The parties that set these third-party cookies can recognize your
              computer both when it visits the website in question and also when it visits certain other websites.
            </p>

            <h2>Why Do We Use Cookies?</h2>
            <p>
              We use first-party and third-party cookies for several reasons. Some cookies are required for technical
              reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary"
              cookies. Other cookies also enable us to track and target the interests of our users to enhance the
              experience on our website. Third parties serve cookies through our website for advertising, analytics, and
              other purposes.
            </p>

            <h2>Types of Cookies We Use</h2>
            <p>
              The specific types of first and third-party cookies served through our website and the purposes they
              perform include:
            </p>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> These cookies are strictly necessary to provide you with services
                available through our website and to use some of its features, such as access to secure areas.
              </li>
              <li>
                <strong>Performance and Functionality Cookies:</strong> These cookies are used to enhance the
                performance and functionality of our website but are non-essential to their use. However, without these
                cookies, certain functionality may become unavailable.
              </li>
              <li>
                <strong>Analytics and Customization Cookies:</strong> These cookies collect information that is used
                either in aggregate form to help us understand how our website is being used or how effective our
                marketing campaigns are, or to help us customize our website for you.
              </li>
              <li>
                <strong>Advertising Cookies:</strong> These cookies are used to make advertising messages more relevant
                to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that
                ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on
                your interests.
              </li>
              <li>
                <strong>Social Media Cookies:</strong> These cookies are used to enable you to share pages and content
                that you find interesting on our website through third-party social networking and other websites. These
                cookies may also be used for advertising purposes.
              </li>
            </ul>

            <h2>How Can You Control Cookies?</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by
              setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select
              which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are
              strictly necessary to provide you with services.
            </p>
            <p>
              You can also control cookies through your browser settings. Most web browsers automatically accept
              cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose
              to decline cookies, you may not be able to fully experience the interactive features of our website.
            </p>

            <h2>Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the
              cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this
              Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
            <p>The date at the top of this Cookie Policy indicates when it was last updated.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about our use of cookies or other technologies, please contact us at:</p>
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
