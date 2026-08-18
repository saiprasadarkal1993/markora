const TEAM = [
  { name: 'Saiprasad Arkal', role: 'Chief Strategy Officer', dept: 'Leadership' },
  { name: 'Yifan Wu', role: 'Head of Growth Marketing', dept: 'Growth' },
  { name: 'Engin Dogusoy', role: 'Creative Director', dept: 'Brand' },
  { name: 'Ann Lee', role: 'Senior Paid Media Strategist', dept: 'Performance' },
  { name: 'Seongmin Park', role: 'SEO & Content Lead', dept: 'Organic' },
  { name: 'Saiprasad Arkal', role: 'Marketing Analytics Lead', dept: 'Data' },
  { name: 'Jessica Alvarez', role: 'Brand Partnerships Manager', dept: 'Partnerships' },
  { name: 'Ezgi Sultan', role: 'Client Success Director', dept: 'Success' },
  { name: 'Aditi Alaganan', role: 'Lifecycle & CRM Strategist', dept: 'Retention' },
]

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function Avatar({ name, index }) {
  const gradients = [
    'from-gold-light to-gold',
    'from-violet to-[#5a4bd6]',
    'from-gold to-[#b98a4b]',
    'from-[#9aa1b5] to-[#4a4f63]',
  ]
  const gradient = gradients[index % gradients.length]

  return (
    <div
      className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-lg`}
    >
      <span className="font-[var(--font-display)] text-2xl font-medium text-ink/80">
        {initials(name)}
      </span>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative bg-ink-soft py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            About Us
          </span>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl font-medium text-white sm:text-5xl">
            The people behind Markora
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist">
            A world-class bench of strategists, creatives, and analysts — assembled to run your
            growth like it's our own.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, i) => (
            <div
              key={`${member.name}-${member.role}`}
              className="card-glow group rounded-2xl border border-white/8 bg-surface p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/30"
            >
              <Avatar name={member.name} index={i} />
              <h3 className="mt-6 text-base font-semibold text-white">{member.name}</h3>
              <p className="mt-1.5 text-sm font-medium text-gold-light">{member.role}</p>
              <span className="mt-4 inline-block rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-mist">
                {member.dept}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
