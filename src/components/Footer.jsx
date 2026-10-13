import LogoMark from './Logo'
import { goToSection } from '../lib/nav'
import { PHONE_DISPLAY, PHONE_HREF, SUPPORT_EMAIL, ADDRESS_LINES } from '../lib/contact'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleClick = goToSection

  return (
    <footer className="border-t border-white/8 bg-ink-soft py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <a href="#home" onClick={(e) => handleClick(e, '#home')} className="flex items-center gap-2.5">
            <LogoMark />
            <span className="text-lg font-semibold tracking-tight text-white">
              Markora <span className="text-mist font-medium">LLC</span>
            </span>
          </a>

          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-sm font-medium text-mist transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <div className="text-center text-xs text-mist/70 sm:text-left">
            <p>© {new Date().getFullYear()} Markora LLC. All rights reserved.</p>
            <p className="mt-1">{ADDRESS_LINES.join(', ')}</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-mist/70">
            <a href={PHONE_HREF} className="transition-colors hover:text-white">{PHONE_DISPLAY}</a>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="transition-colors hover:text-white">{SUPPORT_EMAIL}</a>
            <a href="/terms" className="transition-colors hover:text-white">Terms &amp; Conditions</a>
            <a href="/privacy" className="transition-colors hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
