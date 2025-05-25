"use client"

import { useEffect, useRef } from "react"

export function GlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create gradient spots
    const spots = [
      { x: canvas.width * 0.2, y: canvas.height * 0.3, radius: 300, color: "rgba(132, 204, 22, 0.15)" },
      { x: canvas.width * 0.8, y: canvas.height * 0.7, radius: 250, color: "rgba(34, 197, 94, 0.15)" },
      { x: canvas.width * 0.5, y: canvas.height * 0.5, radius: 350, color: "rgba(132, 204, 22, 0.1)" },
    ]

    // Animation variables
    let animationFrameId: number
    let time = 0

    // Animation function
    const animate = () => {
      time += 0.005

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient spots with movement
      spots.forEach((spot, index) => {
        const x = spot.x + Math.sin(time + index) * 50
        const y = spot.y + Math.cos(time + index * 0.5) * 50

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, spot.radius)
        gradient.addColorStop(0, spot.color)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(x, y, spot.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" aria-hidden="true" />
}
