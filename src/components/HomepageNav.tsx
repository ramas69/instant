'use client'
import { useEffect } from 'react'

export default function HomepageNav() {
  useEffect(() => {
    const nav = document.getElementById('nav')
    const hero = document.querySelector('.hero')
    if (!nav || !hero) return
    const io = new IntersectionObserver(
      ([e]) => nav.classList.toggle('light', !e.isIntersecting),
      { threshold: 0.1 }
    )
    io.observe(hero)
    return () => io.disconnect()
  }, [])
  return null
}
