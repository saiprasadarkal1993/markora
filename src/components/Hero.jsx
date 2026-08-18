export default function Hero() {
  const handleCta = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-28 pb-20"
    >
      <div className="bg-noise absolute inset-0 opacity-40" />
      <div
        className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #d4af6a 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full opacity-20 blur-[100px] animate-float-slow"
        style={{ background: 'radial-gradient(circle, #7c6cf0 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-up mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-mist backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            ELITE MARKETING STRATEGY &amp; EXECUTION
          </div>

          <h1
            className="animate-fade-up text-balance font-[var(--font-display)] text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
            style={{ animationDelay: '80ms' }}
          >
            We architect brands that
            <span className="text-gradient-gold"> dominate their markets</span>
          </h1>

          <p
            className="animate-fade-up mx-auto mt-7 max-w-2xl text-balance text-lg leading-relaxed text-mist sm:text-xl"
            style={{ animationDelay: '160ms' }}
          >
            Markora LLC pairs boardroom-level strategy with relentless execution — turning
            ambitious companies into category leaders through data-driven growth marketing.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: '240ms' }}
          >
            <a
              href="#contact"
              onClick={handleCta}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-light to-gold px-8 py-4 text-base font-semibold text-ink shadow-xl shadow-gold/25 transition-all hover:scale-[1.03] hover:shadow-gold/40"
            >
              Book Your Strategy Call
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/5"
            >
              Explore Services
            </a>
          </div>

          <div
            className="animate-fade-up mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-10"
            style={{ animationDelay: '320ms' }}
          >
            {[
              ['3.4x', 'Avg. ROAS Lift'],
              ['120+', 'Brands Scaled'],
              ['$85M+', 'Revenue Generated'],
            ].map(([stat, label]) => (
              <div key={label}>
                <div className="font-[var(--font-display)] text-2xl font-medium text-white sm:text-3xl">
                  {stat}
                </div>
                <div className="mt-1 text-xs text-mist sm:text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
