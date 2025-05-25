"use client"

export function MinimalFooter() {
  return (
    <footer className="py-8 border-t border-gray-800 relative z-10" data-test="footer">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} LeadsObtainer. All rights reserved.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 mb-4 md:mb-0">
            <a
              href="#get-started"
              className="inline-flex h-10 items-center justify-center rounded-full bg-gradient-to-r from-lime-500 to-green-600 px-6 text-sm font-medium text-black transition-all hover:scale-105 hover:shadow-lg hover:shadow-lime-500/25 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2"
              data-variant="footer-cta"
              data-test="footer-cta"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dataLayer = window.dataLayer || []
                  window.dataLayer.push({
                    event: "cta_click",
                    cta_text: "Get Started Free",
                    cta_location: "footer",
                  })
                }
              }}
            >
              Get Started Free
            </a>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-lime-400"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>30-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-6 mt-4">
          <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
            Terms of Service
          </a>
          <a href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  )
}
