const MONTHLY = [
  {
    name: 'Starter',
    price: '$500',
    desc: 'For early-stage brands ready to build momentum.',
    features: ['1 core channel management', 'Monthly strategy call', 'Performance reporting', 'Email support'],
  },
  {
    name: 'Growth',
    price: '$2,500',
    desc: 'For scaling brands that need multi-channel firepower.',
    features: [
      'Up to 4 channels managed',
      'Bi-weekly strategy calls',
      'Creative production included',
      'Dedicated growth lead',
      'Priority support',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '$7,000',
    desc: 'For category leaders demanding full-funnel dominance.',
    features: [
      'Unlimited channels managed',
      'Weekly executive strategy',
      'Full creative & content team',
      'Custom analytics dashboard',
      '24/7 dedicated support',
    ],
  },
]

const PROJECT = [
  {
    name: 'Launch',
    price: '$7,000',
    desc: 'Brand & campaign launch, delivered flat-rate.',
    features: ['Brand strategy sprint', 'Landing page build', 'Launch campaign creative', '4-week delivery'],
  },
  {
    name: 'Scale',
    price: '$18,000',
    desc: 'A complete go-to-market system, built and handed off.',
    features: [
      'Full brand & positioning system',
      'Multi-channel campaign build',
      'Content & creative library',
      'Analytics & tracking setup',
      '8-week delivery',
    ],
    featured: true,
  },
  {
    name: 'Full Execution',
    price: '$35,000',
    desc: 'End-to-end growth infrastructure, built for scale.',
    features: [
      'Complete brand transformation',
      'Full-funnel campaign architecture',
      'Custom creative & content suite',
      'CRM & lifecycle systems',
      'Executive strategy partnership',
      '12-week delivery',
    ],
  },
]

function PricingCard({ plan, accent }) {
  return (
    <div
      className={`card-glow relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
        plan.featured
          ? 'border-gold/40 bg-gradient-to-b from-surface-soft to-surface'
          : 'border-white/8 bg-surface'
      }`}
    >
      {plan.featured && (
        <span
          className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink ${
            accent === 'gold' ? 'bg-gradient-to-r from-gold-light to-gold' : 'bg-gradient-to-r from-violet to-[#9d90ff] text-white'
          }`}
        >
          Most Popular
        </span>
      )}
      <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
      <p className="mt-2 text-sm text-mist">{plan.desc}</p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-[var(--font-display)] text-4xl font-medium text-white">
          {plan.price}
        </span>
        {accent === 'gold' && <span className="text-sm text-mist">/mo</span>}
      </div>
      <ul className="mt-7 flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-mist">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className={`mt-0.5 shrink-0 ${accent === 'gold' ? 'text-gold' : 'text-violet'}`}
            >
              <path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault()
          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
        }}
        className={`mt-8 block rounded-full px-6 py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
          plan.featured
            ? accent === 'gold'
              ? 'bg-gradient-to-r from-gold-light to-gold text-ink'
              : 'bg-gradient-to-r from-violet to-[#9d90ff] text-white'
            : 'border border-white/15 text-white hover:bg-white/5'
        }`}
      >
        Get Started
      </a>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-ink-soft py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Pricing
          </span>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl font-medium text-white sm:text-5xl">
            Two ways to work with us
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist">
            Ongoing growth partnership, or a flat-rate project — built around how your business
            actually operates.
          </p>
        </div>

        <div className="mt-20">
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/40 to-gold/40" />
            <h3 className="whitespace-nowrap font-[var(--font-display)] text-2xl font-medium text-gold-light">
              Monthly Growth Packages
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold/40 to-gold/40" />
          </div>
          <p className="mx-auto -mt-4 mb-10 max-w-xl text-center text-sm text-mist">
            Ongoing management starting from $500/month up to $7,000/month.
          </p>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {MONTHLY.map((plan) => (
              <PricingCard key={plan.name} plan={plan} accent="gold" />
            ))}
          </div>
        </div>

        <div className="mt-24">
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet/50 to-violet/50" />
            <h3 className="whitespace-nowrap font-[var(--font-display)] text-2xl font-medium text-[#b3a9ff]">
              Full Project Execution
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-violet/50 to-violet/50" />
          </div>
          <p className="mx-auto -mt-4 mb-10 max-w-xl text-center text-sm text-mist">
            Flat-rate project packages from $7,000 to $35,000 per project.
          </p>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PROJECT.map((plan) => (
              <PricingCard key={plan.name} plan={plan} accent="violet" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
