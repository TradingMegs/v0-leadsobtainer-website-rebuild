"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { X, Send, Loader2, MessageSquare } from "lucide-react"
import { generateAIResponse } from "@/lib/actions/ai-actions"
import { AIMessage } from "./AIMessage"

interface Message {
  role: "user" | "assistant"
  content: string
}

interface AIChatDialogProps {
  onClose: () => void
}

export function AIChatDialog({ onClose }: AIChatDialogProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! I'm the LeadsObtainer AI assistant. How can I help you grow your business today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")
    setIsLoading(true)

    // Add user message to chat
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])

    try {
      // Get AI response
      const response = await generateAIResponse(userMessage)

      // Add AI response to chat
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response.success ? response.text : "Sorry, I'm having trouble right now. Please try again later.",
        },
      ])
    } catch (error) {
      console.error("Error in chat:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I'm having trouble right now. Please try again later.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative h-[600px] w-full max-w-md flex flex-col rounded-xl bg-black border border-lime-500/20 shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-lime-500/20 bg-black/90 px-4 py-3">
          <div className="flex items-center">
            <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-lime-500/10">
              <MessageSquare className="h-4 w-4 text-lime-500" />
            </div>
            <div>
              <h3 className="font-medium">LeadsObtainer AI Assistant</h3>
              <p className="text-xs text-gray-400">Powered by Groq</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-gray-400 hover:bg-gray-800 hover:text-white"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <AIMessage key={index} message={message} />
          ))}
          {isLoading && (
            <div className="flex items-center space-x-2 text-gray-400">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">Thinking...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="border-t border-lime-500/20 bg-black/90 p-4">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our services..."
              className="flex-1 rounded-lg border border-lime-500/20 bg-black/60 px-4 py-2 text-white placeholder:text-gray-500 focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500/30"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-lime-500 text-black hover:bg-lime-400 disabled:opacity-50"
              disabled={!input.trim() || isLoading}
            >
              {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}
