"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface PromoVideoProps {
  title: string
  videoUrl: string
  thumbnailSrc: string
  cta: {
    text: string
    props?: Record<string, any>
  }
  dataTest?: string
}

export function PromoVideo({ title, videoUrl, thumbnailSrc, cta, dataTest }: PromoVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)

    // Track video play event
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: "video_play",
        video_title: title,
        video_url: videoUrl,
      })
    }
  }

  return (
    <div data-test={dataTest}>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">{title}</h2>

      <div className="relative rounded-xl overflow-hidden">
        {!isPlaying ? (
          <div className="relative">
            <Image
              src={thumbnailSrc || "/placeholder.svg"}
              alt={title}
              width={1200}
              height={675}
              className="w-full h-auto"
              loading="lazy"
            />

            <motion.button
              className="absolute inset-0 flex items-center justify-center bg-black/40 group"
              onClick={handlePlay}
              whileHover={{ scale: 1.02 }}
              {...cta.props}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  className="w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-black"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </motion.div>
                <span className="mt-4 text-white text-lg font-medium bg-black/60 px-6 py-2 rounded-full">
                  {cta.text}
                </span>
              </div>
            </motion.button>
          </div>
        ) : (
          <div className="aspect-video">
            <iframe
              src={`${videoUrl}?autoplay=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  )
}
