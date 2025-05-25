import Link from "next/link"
import { Shield, Lock } from "lucide-react"

export function MinimalFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 bg-black border-t border-gray-800">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <Shield className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm text-gray-400">100% Satisfaction Guarantee</span>
          </div>

          <div className="flex items-center">
            <Lock className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm text-gray-400">Secure Payment</span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">© {currentYear} LeadsObtainer. All rights reserved.</p>

          <div className="flex justify-center space-x-6">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-xs text-gray-500 hover:text-primary">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
