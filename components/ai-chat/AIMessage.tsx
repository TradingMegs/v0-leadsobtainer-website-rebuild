"use client"

import { motion } from "framer-motion"
import { User, Bot } from "lucide-react"

interface AIMessageProps {
  message: {
    role: "user" | "assistant"
    content: string
  }
}

export function AIMessage({ message }: AIMessageProps) {
  const isUser = message.role === "user"

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`flex max-w-[80%] items-start space-x-2 rounded-lg ${
          isUser ? "bg-lime-500/10 text-white" : "bg-black/40 border border-lime-500/10 text-white"
        } p-3`}
      >
        {!isUser && (
          <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lime-500/10">
            <Bot className="h-3.5 w-3.5 text-lime-500" />
          </div>
        )}
        <div className="space-y-1">
          <div className="text-sm">{message.content}</div>
        </div>
        {isUser && (
          <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lime-500/20">
            <User className="h-3.5 w-3.5 text-lime-500" />
          </div>
        )}
      </div>
    </motion.div>
  )
}
