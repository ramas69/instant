'use client'
import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vis')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.rv,.rv-l,.rv-r').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return null
}
