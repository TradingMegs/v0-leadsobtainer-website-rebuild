import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { KnowledgeBaseHero } from "@/components/knowledge-base/knowledge-base-hero"
import { SearchKnowledgeBase } from "@/components/knowledge-base/search-knowledge-base"
import { KnowledgeBaseCategories } from "@/components/knowledge-base/knowledge-base-categories"
import KnowledgeBaseContent from "@/components/knowledge-base/knowledge-base-content"

export const metadata = {
  title: "Knowledge Base | LeadsObtainer - Growth Solutions for Local Businesses",
  description:
    "Find answers to common questions and learn how to get the most out of LeadsObtainer's growth solutions.",
}

export default function KnowledgeBasePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <KnowledgeBaseHero />
      <SearchKnowledgeBase />
      <KnowledgeBaseCategories />
      <KnowledgeBaseContent />
      <Footer />
    </main>
  )
}
