"use client"

import { useEffect, useRef, useState } from "react"

interface BackgroundBeamsProps {
  className?: string
}

export function BackgroundBeams({ className = "" }: BackgroundBeamsProps) {
  const [opacity, setOpacity] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create beams
    const beams: Beam[] = []
    const beamCount = 20

    class Beam {
      x: number
      y: number
      width: number
      height: number
      speed: number
      color: string
      opacity: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.width = Math.random() * 2 + 0.5
        this.height = Math.random() * canvas.height
        this.speed = Math.random() * 0.5 + 0.1
        this.color = "#c1ff00"
        this.opacity = Math.random() * 0.1 + 0.05
      }

      update() {
        this.y -= this.speed
        if (this.y + this.height < 0) {
          this.y = canvas.height
          this.x = Math.random() * canvas.width
        }
      }

      draw() {
        if (!ctx) return
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
      }
    }

    // Initialize beams
    for (let i = 0; i < beamCount; i++) {
      beams.push(new Beam())
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      beams.forEach((beam) => {
        beam.update()
        beam.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()
    setOpacity(1)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 transition-opacity duration-1000 ${className}`}
      style={{ opacity }}
    />
  )
}
