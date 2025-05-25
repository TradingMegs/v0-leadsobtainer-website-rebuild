"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"
import { generateAIResponse } from "@/lib/actions/ai-actions"

const commonQuestions = [
  "How does LeadsObtainer help local businesses?",
  "What is AI Employee Automation?",
  "How much does your service cost?",
  "How long until I see results?",
  "What makes you different from other marketing agencies?",
]

export function AIFaqSection() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleQuestionClick = async (q: string) => {
    if (isLoading) return
    setQuestion(q)
    setAnswer("")
    setIsLoading(true)

    try {
      const response = await generateAIResponse(q)
      setAnswer(response.text)
    } catch (error) {
      console.error("Error getting answer:", error)
      setAnswer("Sorry, I couldn't generate an answer at this time. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-600">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get instant answers to your questions about our services and how we can help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-black/40 backdrop-blur-sm border border-lime-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Common Questions</h3>
              <ul className="space-y-3">
                {commonQuestions.map((q, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleQuestionClick(q)}
                      className="text-left w-full px-4 py-2 rounded-lg hover:bg-lime-500/10 text-gray-300 hover:text-white transition-colors"
                    >
                      {q}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-black/40 backdrop-blur-sm border border-lime-500/20 rounded-xl p-6 h-full">
              {question ? (
                <>
                  <h3 className="text-xl font-bold mb-4">{question}</h3>
                  {isLoading ? (
                    <div className="flex items-center space-x-2 text-gray-400 py-8">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Generating answer...</span>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="prose prose-invert max-w-none"
                    >
                      <p className="text-gray-300 whitespace-pre-line">{answer}</p>
                    </motion.div>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="w-16 h-16 bg-lime-500/10 rounded-full flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-lime-500"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Have a Question?</h3>
                  <p className="text-gray-400 max-w-md">
                    Select a question from the list or use the AI chat button in the corner to ask anything about our
                    services.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
