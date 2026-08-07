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
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })

    document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el))

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    let raf = 0

    const onScroll = () => {
      if (media.matches) return
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const y = window.scrollY
        document.documentElement.style.setProperty('--scroll-y', `${y}px`)
        document.querySelectorAll('[data-parallax]').forEach((el) => {
          const rect = el.getBoundingClientRect()
          if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return
          const speed = Number(el.dataset.parallax || 0.12)
          const delta = (window.innerHeight * 0.5 - (rect.top + rect.height * 0.5)) * speed
          el.style.setProperty('--parallax-y', `${delta}px`)
        })
        document.querySelectorAll('[data-progress]').forEach((el) => {
          const rect = el.getBoundingClientRect()
          const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)))
          el.style.setProperty('--progress', progress.toFixed(4))
        })
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      revealObserver.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return null
}
