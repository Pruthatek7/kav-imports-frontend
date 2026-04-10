import { useEffect, useState } from 'react'
import { scrollToHash } from '../../utils/scrollToHash'

import logo from '../../assets/logo.png'

export type NavLink = { label: string; href: string }

export default function LandingHeader({
  links,
  mobileBottomCta = { label: 'Contact Us', href: '#contact' },
  contactNumber = 'Contact Number',
}: {
  links: NavLink[]
  mobileBottomCta?: { label: string; href: string }
  contactNumber?: string
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [menuOpen])

  return (
    <>
      {/* Top bar */}
      <div className="bg-black py-2.5 text-white">
        {/* Desktop Top Bar */}
        <div className="mx-auto hidden max-w-[1240px] items-center justify-between px-4 text-[13px] font-medium lg:flex lg:px-8">
          <span className='font-montserrat'>{contactNumber}</span>
          <div className="flex items-center gap-2.5">
            <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-[15px] font-bold transition hover:bg-blue-500">in</a>
            <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-[15px] font-bold transition hover:bg-blue-500">f</a>
            <a href="#" aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-full bg-white/15 text-[15px] font-bold transition hover:bg-blue-500">𝕏</a>
          </div>
        </div>
        {/* Mobile Top Bar */}
        <div className="flex items-center justify-center gap-4 lg:hidden">
          <a href="#" aria-label="LinkedIn" className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-[13px] font-bold transition hover:bg-blue-500">in</a>
          <a href="#" aria-label="Facebook" className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-[13px] font-bold transition hover:bg-blue-500">f</a>
          <a href="#" aria-label="Twitter" className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-[13px] font-bold transition hover:bg-blue-500">𝕏</a>
        </div>
      </div>

      {/* Main sticky nav */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md">
        {/* Desktop Header */}
        <div className="mx-auto hidden h-24 max-w-[1400px] items-center justify-between px-8 lg:flex">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            <img src={logo} alt="KAV Imports" className="h-12 w-auto lg:h-16" />
          </a>

          {/* Desktop nav */}
          <nav className="flex items-center gap-8" aria-label="Primary">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[15px] font-semibold text-slate-800 transition hover:text-blue-600"
                onClick={(e) => { e.preventDefault(); scrollToHash(l.href) }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Header */}
        <div className="grid h-20 w-full grid-cols-3 items-center px-4 lg:hidden">
          {/* Left: Hamburger */}
          <div className="flex justify-start">
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="text-[#1B2B48] transition"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Center: Logo */}
          <div className="flex justify-center">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            >
              <img src={logo} alt="KAV Imports" className="h-12 w-auto" />
            </a>
          </div>

          {/* Right: Search */}
          <div className="flex justify-end">
            <button
              type="button"
              aria-label="Search"
              className="grid h-10 w-10 place-items-center rounded-full bg-[#4285F4] text-white shadow-md transition hover:bg-blue-600"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[70] bg-black/95 lg:hidden" role="dialog" aria-modal>
          <div className="flex h-full flex-col px-6 pb-8 pt-6">
            <button
              type="button"
              aria-label="Close menu"
              className="mb-2 self-start grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-white/20"
              onClick={() => setMenuOpen(false)}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <nav className="mt-8 flex-1">
              {(() => {
                const hasHome = links.some((l) => l.label.toLowerCase() === 'home')
                const allLinks = hasHome ? links : [{ label: 'Home', href: '#top' }, ...links]
                return allLinks
                  .filter((l) => l.label !== mobileBottomCta.label)
                  .map((l, idx, arr) => (
                    <a
                      key={l.label + idx}
                      href={l.href}
                      className={`flex items-center justify-between py-4 text-xl font-semibold !text-white ${idx < arr.length - 1 ? 'border-b border-white/10' : ''}`}
                      onClick={(e) => {
                        e.preventDefault()
                        setMenuOpen(false)
                        l.href === '#top' ? window.scrollTo({ top: 0, behavior: 'smooth' }) : scrollToHash(l.href)
                      }}
                    >
                      {l.label}
                      <span className="text-white/40" aria-hidden>
                        →
                      </span>
                    </a>
                  ))
              })()}
            </nav>

            <a
              href={mobileBottomCta.href}
              className="mt-6 block w-full rounded-full bg-blue-500 py-4 text-center text-base font-semibold text-white shadow transition hover:bg-blue-600"
              onClick={(e) => {
                e.preventDefault()
                setMenuOpen(false)
                scrollToHash(mobileBottomCta.href)
              }}
            >
              {mobileBottomCta.label}
            </a>
          </div>
        </div>
      )}
    </>
  )
}
