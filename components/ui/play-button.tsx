"use client"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { cn } from "@/lib/utils"

interface PlayButtonProps {
  className?: string
  onClick?: () => void
  size?: "sm" | "md" | "lg"
}

export function PlayButton({ className, onClick, size = "md" }: PlayButtonProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  }

  return (
    <motion.button
      className={cn(
        "relative flex items-center justify-center rounded-full bg-primary/20 group",
        sizeClasses[size],
        className,
      )}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/20"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/10"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          delay: 0.3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <Play className="h-1/2 w-1/2 text-primary fill-current" />
    </motion.button>
  )
}
