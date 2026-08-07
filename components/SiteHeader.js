'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Logo from './Logo'

const nav = [
  ['/men', 'MEN'],
  ['/women', 'WOMEN'],
  ['/shop', 'SHOP'],
  ['/performance', 'PERFORMANCE'],
  ['/story', 'STORY'],
]

export default function SiteHeader({ theme = 'dark', absolute = false }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = menuOpen ? 'hidden' : previousOverflow

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <>
      <header className={`header ${absolute ? 'header-absolute' : ''} header-${theme} ${scrolled ? 'header-scrolled' : ''}`}>
        <Link href="/" className="header-logo" aria-label="BARBEAR home" onClick={() => setMenuOpen(false)}><Logo tone={theme === 'light' ? 'dark' : 'light'} /></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map(([href, label]) => <Link href={href} key={href}><span>{label}</span></Link>)}
        </nav>
        <div className="header-tools">
          <button className="plain-btn search-btn" aria-label="Search">SEARCH</button>
          <button className="bag-btn" aria-label="Shopping bag">BAG <b>0</b></button>
          <button className="menu-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            <span>{menuOpen ? 'CLOSE' : 'MENU'}</span>
            <i /><i />
          </button>
        </div>
      </header>
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-inner">
          {nav.map(([href, label], i) => (
            <Link href={href} key={href} onClick={() => setMenuOpen(false)}>
              <small>0{i + 1}</small><strong>{label}</strong><span>↗</span>
            </Link>
          ))}
          <div className="mobile-menu-meta"><span>DUBAI, UAE</span><span>BUILT IN THE EMIRATES</span></div>
        </div>
      </div>
    </>
  )
}
