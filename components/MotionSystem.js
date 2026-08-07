'use client'

import { useEffect } from 'react'

export default function MotionSystem() {
  useEffect(() => {
    document.documentElement.classList.add('js')

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -4% 0px' })

    document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el))

    return () => revealObserver.disconnect()
  }, [])

  return null
}
