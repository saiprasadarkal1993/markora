import { useState } from 'react'

const initialForm = { name: '', email: '', business: '', message: '' }

function Field({ label, id, type = 'text', value, onChange, placeholder, textarea }) {
  const shared =
    'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-mist/60 outline-none transition-colors focus:border-gold/50 focus:bg-white/[0.06]'

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-mist">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          required
          rows={5}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${shared} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          required
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={shared}
        />
      )}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setForm(initialForm)
    setSubmitted(false)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-28">
      <div
        className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #d4af6a 0%, transparent 70%)' }}
      />
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Contact
          </span>
          <h2 className="mt-4 font-[var(--font-display)] text-4xl font-medium text-white sm:text-5xl">
            Let's build something elite
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-mist">
            Tell us about your business and goals — our team will follow up with next steps.
          </p>
        </div>

        <div className="card-glow mt-14 rounded-3xl border border-white/8 bg-surface p-6 sm:p-10">
          {submitted ? (
            <div className="animate-fade-up flex flex-col items-center py-10 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold shadow-lg shadow-gold/25">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13L9.5 17.5L19 7" stroke="#05060A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mt-6 font-[var(--font-display)] text-2xl font-medium text-white">
                Success!
              </h3>
              <p className="mt-3 max-w-sm text-mist">
                Our team will reach out shortly.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-8 rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Name"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Jordan Rivera"
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="jordan@company.com"
                />
              </div>
              <Field
                id="business"
                label="Business Name"
                value={form.business}
                onChange={update('business')}
                placeholder="Acme Co."
              />
              <Field
                id="message"
                label="Message"
                textarea
                value={form.message}
                onChange={update('message')}
                placeholder="Tell us about your goals..."
              />
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-gold-light to-gold px-6 py-4 text-base font-semibold text-ink shadow-lg shadow-gold/20 transition-transform hover:scale-[1.01]"
              >
                Send Message
              </button>
              <p className="text-center text-xs text-mist/70">
                This form does not transmit data anywhere — it's a frontend demo.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
