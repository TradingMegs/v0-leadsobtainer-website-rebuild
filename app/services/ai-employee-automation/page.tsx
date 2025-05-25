import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AiEmployeeHero } from "@/components/services/ai-employee/ai-employee-hero"
import { ProblemSolution } from "@/components/services/ai-employee/problem-solution"
import { FeatureBreakdown } from "@/components/services/ai-employee/feature-breakdown"
import { CaseStudyCarousel } from "@/components/services/ai-employee/case-study-carousel"
import { ScaleBusiness } from "@/components/scale-business"
import { PremiumSolutions } from "@/components/premium-solutions"

export const metadata = {
  title: "AI Employee Automation | LeadsObtainer - Growth Solutions for Local Businesses",
  description:
    "Automate repetitive tasks with your 24/7 AI employee. From lead qualification to social media management, let AI handle the heavy lifting.",
}

export default function AiEmployeeAutomationPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <AiEmployeeHero />
      <ProblemSolution />
      <FeatureBreakdown />
      <CaseStudyCarousel />
      <ScaleBusiness />
      <PremiumSolutions />
      <Footer />
    </main>
  )
}
