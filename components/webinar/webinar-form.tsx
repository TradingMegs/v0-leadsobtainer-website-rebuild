import { Calendar, Clock, User, Mail, Phone, Building, ChevronRight } from "lucide-react"
import { Label } from "@/components/ui/label"

const WebinarForm = () => {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">Reserve Your Spot Now</h3>
        <p className="opacity-90">Limited seats available for this exclusive webinar</p>

        <div className="mt-4 flex items-center gap-4">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2 opacity-80" />
            <span>May 15, 2023</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2 opacity-80" />
            <span>2:00 PM EST</span>
          </div>
        </div>
      </div>

      <form className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-gray-700">
              First Name*
            </Label>
            <div className="relative">
              <input
                id="firstName"
                type="text"
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="John"
                required
              />
              <User className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-gray-700">
              Last Name*
            </Label>
            <div className="relative">
              <input
                id="lastName"
                type="text"
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Doe"
                required
              />
              <User className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700">
            Email Address*
          </Label>
          <div className="relative">
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="john.doe@example.com"
              required
            />
            <Mail className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-gray-700">
            Phone Number
          </Label>
          <div className="relative">
            <input
              id="phone"
              type="tel"
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="+1 (555) 123-4567"
            />
            <Phone className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-gray-700">
            Company Name*
          </Label>
          <div className="relative">
            <input
              id="company"
              type="text"
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Acme Inc."
              required
            />
            <Building className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="jobTitle" className="text-gray-700">
            Job Title*
          </Label>
          <select
            id="jobTitle"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            required
          >
            <option value="">Select your job title</option>
            <option value="CEO/Founder">CEO/Founder</option>
            <option value="Marketing Director">Marketing Director</option>
            <option value="Sales Director">Sales Director</option>
            <option value="Operations Manager">Operations Manager</option>
            <option value="Business Development">Business Development</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="goals" className="text-gray-700">
            What are your primary goals for lead generation?
          </Label>
          <select
            id="goals"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="">Select your primary goal</option>
            <option value="Increase qualified leads">Increase qualified leads</option>
            <option value="Improve conversion rates">Improve conversion rates</option>
            <option value="Reduce cost per acquisition">Reduce cost per acquisition</option>
            <option value="Scale marketing operations">Scale marketing operations</option>
            <option value="Implement automation">Implement automation</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
          >
            Reserve My Seat
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-4">
          By registering, you agree to our{" "}
          <a href="/terms" className="text-emerald-600 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-emerald-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  )
}

export default WebinarForm
