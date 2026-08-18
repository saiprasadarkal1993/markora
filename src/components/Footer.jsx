import LogoMark from './Logo'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

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
          <p className="text-xs text-mist/70">
            © {new Date().getFullYear()} Markora LLC. All rights reserved.
          </p>
          <p className="text-xs text-mist/70">Elite marketing strategy &amp; execution.</p>
        </div>
      </div>
    </footer>
  )
}
