'use client'

import { useEffect } from 'react'

export function NavScrollEffect() {
  useEffect(() => {
    const nav = document.querySelector('.v18-nav')
    if (!nav) return

    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      ;(nav as HTMLElement).style.setProperty('--v18-scroll-progress', String(progress))
      if (window.scrollY > 50) {
        nav.classList.add('scrolled')
      } else {
        nav.classList.remove('scrolled')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return null
}
