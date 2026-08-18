import { useEffect, useState } from 'react'
import LogoMark from './Logo'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <nav
          className={`flex items-center justify-between rounded-2xl border px-5 py-3 backdrop-blur-xl transition-all duration-300 ${
            scrolled
              ? 'border-white/10 bg-ink/70 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]'
              : 'border-white/5 bg-white/[0.03]'
          }`}
        >
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="flex items-center gap-2.5"
          >
            <LogoMark />
            <span className="text-lg font-semibold tracking-tight text-white">
              Markora <span className="text-mist font-medium">LLC</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-mist transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={(e) => handleClick(e, '#contact')}
            className="hidden rounded-full bg-gradient-to-r from-gold-light to-gold px-5 py-2.5 text-sm font-semibold text-ink shadow-lg shadow-gold/20 transition-transform hover:scale-[1.03] md:inline-block"
          >
            Get Started
          </a>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white md:hidden"
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              {open ? (
                <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M1 4.5H17M1 9H17M1 13.5H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </nav>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-ink/95 p-3 backdrop-blur-xl md:hidden">
            <ul className="flex flex-col gap-1">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-mist transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <a
                  href="#contact"
                  onClick={(e) => handleClick(e, '#contact')}
                  className="block rounded-full bg-gradient-to-r from-gold-light to-gold px-4 py-3 text-center text-sm font-semibold text-ink"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
