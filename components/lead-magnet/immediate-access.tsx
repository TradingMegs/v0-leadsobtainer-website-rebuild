"use client"

import { useState, useRef } from "react"
import { Download, Play, Pause } from "lucide-react"

export function ImmediateAccess() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="mb-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-lg bg-gray-800/50 p-6">
          <h2 className="mb-4 text-xl font-bold text-white">Download Your Free Playbook</h2>

          <p className="mb-6 text-gray-300">
            Your AI & Automation Playbook is ready to download. Click the button below to get instant access to the PDF
            and bonus templates.
          </p>

          <a
            href="#download"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-lime-400 px-6 py-3 text-center font-bold text-black transition-all hover:bg-lime-500"
          >
            <Download className="h-5 w-5" />
            Download Your Free Playbook (PDF + Bonus Templates)
          </a>
        </div>

        <div className="rounded-lg bg-gray-800/50 p-6">
          <h2 className="mb-4 text-xl font-bold text-white">Quick Tip: How to Set Up Your First Automation Workflow</h2>

          <div className="relative mb-4 aspect-video overflow-hidden rounded-md bg-black">
            {/* Placeholder for video - in a real implementation, use an actual video */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={togglePlay}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-400 text-black transition-all hover:bg-lime-500"
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 pl-1" />}
              </button>
            </div>
            <video
              ref={videoRef}
              className="h-full w-full"
              poster="/placeholder.svg?height=200&width=350"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="#" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <p className="text-sm text-gray-300">
            This 15-second video shows you how to set up your first automation workflow using the templates included in
            your playbook.
          </p>
        </div>
      </div>
    </div>
  )
}
