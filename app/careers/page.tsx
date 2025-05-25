import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CareersHero } from "@/components/careers/careers-hero"
import { WhyJoinUs } from "@/components/careers/why-join-us"
import { OurValues } from "@/components/careers/our-values"
import JobDetails from "@/components/careers/job-details"
import { EmployeeBenefits } from "@/components/careers/employee-benefits"
import { ApplicationProcess } from "@/components/careers/application-process"

export const metadata = {
  title: "Careers | LeadsObtainer - Growth Solutions for Local Businesses",
  description: "Join our team and help transform local businesses with AI-powered growth solutions.",
}

export default function CareersPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <CareersHero />
      <WhyJoinUs />
      <OurValues />
      <JobDetails />
      <EmployeeBenefits />
      <ApplicationProcess />
      <Footer />
    </main>
  )
}
