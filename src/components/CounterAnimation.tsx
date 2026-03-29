'use client'
import { useEffect } from 'react'

export default function CounterAnimation() {
  useEffect(() => {
    function ease(t: number) { return 1 - Math.pow(1 - t, 4) }
    function count(el: HTMLElement, target: number, suffix: string) {
      const dur = 2200
      const s = performance.now()
      function tick(n: number) {
        const p = Math.min((n - s) / dur, 1)
        el.textContent = Math.floor(ease(p) * target) + suffix
        if (p < 1) requestAnimationFrame(tick)
      }
      tick(s)
    }
    const heroBottom = document.querySelector('.hero-bottom')
    if (!heroBottom) return
    const sobs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const s1 = document.getElementById('s1')
          const s2 = document.getElementById('s2')
          const s3 = document.getElementById('s3')
          if (s1) count(s1, 500, '+')
          if (s2) count(s2, 98, '%')
          if (s3) count(s3, 50, '+')
          sobs.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    sobs.observe(heroBottom)
    return () => sobs.disconnect()
  }, [])
  return null
}
