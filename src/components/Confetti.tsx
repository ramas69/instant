'use client'
import { useEffect, useRef } from 'react'

export default function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = window.innerWidth
    let H = window.innerHeight
    const particles: Array<{
      x: number; y: number; w: number; h: number;
      color: string; speed: number; angle: number;
      spin: number; drift: number; opacity: number;
    }> = []
    const colors = ['#D4AF37', '#E8C547', '#064E3B', '#0A6B52', '#C5A044', '#FAF8F4']
    const total = 80

    function resize() {
      W = canvas!.width = window.innerWidth
      H = canvas!.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < total; i++) {
      particles.push({
        x: Math.random() * W, y: Math.random() * H - H,
        w: Math.random() * 8 + 4, h: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 3 + 2, angle: Math.random() * 360,
        spin: Math.random() * 6 - 3, drift: Math.random() * 2 - 1, opacity: 1,
      })
    }

    let frame = 0
    const maxFrames = 180

    function draw() {
      if (frame > maxFrames) { canvas!.style.display = 'none'; return }
      ctx!.clearRect(0, 0, W, H)
      const fadeStart = maxFrames * 0.7
      particles.forEach((p) => {
        p.y += p.speed; p.x += p.drift; p.angle += p.spin
        p.opacity = frame > fadeStart ? 1 - (frame - fadeStart) / (maxFrames - fadeStart) : 1
        ctx!.save()
        ctx!.translate(p.x, p.y)
        ctx!.rotate((p.angle * Math.PI) / 180)
        ctx!.globalAlpha = p.opacity
        ctx!.fillStyle = p.color
        ctx!.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
        ctx!.restore()
      })
      frame++
      requestAnimationFrame(draw)
    }
    draw()

    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 200 }}
    />
  )
}
