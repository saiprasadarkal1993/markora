const SERVICES = [
  {
    title: 'Brand Strategy',
    desc: 'Positioning, messaging, and identity systems that make your category leadership undeniable.',
    icon: (
      <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Paid Media & Performance',
    desc: 'High-efficiency acquisition across Meta, Google, TikTok, and programmatic — engineered for ROAS.',
    icon: (
      <path d="M4 19V5M4 19H20M8 15L11 11L14 13L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'SEO & Content Engine',
    desc: 'Organic visibility and content systems that compound authority and traffic month over month.',
    icon: (
      <path d="M11 18C14.866 18 18 14.866 18 11C18 7.134 14.866 4 11 4C7.134 4 4 7.134 4 11C4 14.866 7.134 18 11 18ZM18 18L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Creative & Design',
    desc: 'Scroll-stopping creative — video, static, and landing pages — built to convert, not just look good.',
    icon: (
      <path d="M4 16L8.5 11.5C9.3 10.7 10.6 10.7 11.4 11.5L16 16M14 14L15.5 12.5C16.3 11.7 17.6 11.7 18.4 12.5L20 14M7 8H7.01M4 5H20C20.55 5 21 5.45 21 6V18C21 18.55 20.55 19 20 19H4C3.45 19 3 18.55 3 18V6C3 5.45 3.45 5 4 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'Marketing Analytics',
    desc: 'Dashboards and attribution modeling that show you exactly what’s driving revenue.',
    icon: (
      <path d="M4 20V10M10 20V4M16 20V14M4 20H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: 'CRM & Lifecycle',
    desc: 'Email, SMS, and retention flows that turn one-time buyers into lifetime customers.',
    icon: (
      <path d="M4 6L12 13L20 6M4 6H20V18H4V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-ink py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Services
          </span>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl font-medium text-white sm:text-5xl">
            Full-spectrum growth marketing
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist">
            Every discipline required to take a brand from ambitious to unstoppable, under one
            roof.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="card-glow group relative overflow-hidden rounded-2xl border border-white/8 bg-surface-soft p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold-light/15 to-gold/15 text-gold-light">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  {service.icon}
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
