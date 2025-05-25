"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  animationType?: "wave" | "gradient" | "typing"
}

export function AnimatedText({ text, className = "", animationType = "wave" }: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (animationType === "typing") {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + text[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        }, 100)
        return () => clearTimeout(timeout)
      }
    }
  }, [currentIndex, text, animationType])

  if (animationType === "wave") {
    return (
      <span className={className}>
        {text.split("").map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            initial={{ y: 0 }}
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 0.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              delay: index * 0.05,
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    )
  }

  if (animationType === "gradient") {
    return (
      <motion.span
        className={`bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-600 ${className}`}
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
      >
        {text}
      </motion.span>
    )
  }

  if (animationType === "typing") {
    return (
      <span className={className}>
        {displayText}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
          className="inline-block w-[2px] h-[1em] bg-current ml-[2px] align-middle"
        />
      </span>
    )
  }

  return <span className={className}>{text}</span>
}
