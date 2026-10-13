import { useEffect } from 'react'
import { PHONE_DISPLAY, PHONE_HREF, SUPPORT_EMAIL, ADDRESS_LINES } from '../lib/contact'

const UPDATED = 'October 12, 2026'

function LegalPage({ eyebrow, title, intro, children }) {
  useEffect(() => {
    document.title = `${title} | Markora LLC`
    window.scrollTo(0, 0)
  }, [title])

  return (
    <section className="relative bg-ink pb-24 pt-36">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</span>
        <h1 className="mt-4 font-[var(--font-display)] text-4xl font-medium text-white sm:text-5xl">{title}</h1>
        <p className="mt-4 text-sm text-mist/80">Last updated: {UPDATED}</p>
        <p className="mt-6 text-lg leading-relaxed text-mist">{intro}</p>
        <div className="legal mt-12 space-y-10">{children}</div>
        <a
          href="/"
          className="mt-16 inline-block rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
        >
          ← Back to home
        </a>
      </div>
    </section>
  )
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="font-[var(--font-display)] text-2xl font-medium text-white">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-mist [&_a]:text-gold-light [&_a]:underline [&_a]:underline-offset-4 [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
        {children}
      </div>
    </div>
  )
}

function ContactBlock() {
  return (
    <p>
      Markora LLC
      <br />
      {ADDRESS_LINES[0]}
      <br />
      {ADDRESS_LINES[1]}
      <br />
      Email: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      <br />
      Phone: <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
    </p>
  )
}

export function Terms() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      intro="These Terms & Conditions govern your use of markorallc.com and the marketing services provided by Markora LLC (“Markora,” “we,” “us,” or “our”). By using this website or engaging our services, you agree to these terms."
    >
      <Section title="1. Use of this website">
        <p>
          You may use this website for lawful purposes only. You agree not to misuse the site, attempt to gain
          unauthorized access to it, or interfere with its operation.
        </p>
      </Section>

      <Section title="2. Our services">
        <p>
          Markora provides marketing strategy and execution services, which may include brand strategy, paid media,
          SEO, creative, and analytics. The specific scope, deliverables, timeline, and fees for each client are set
          out in a written proposal, statement of work, or service agreement (an “Agreement”). If an Agreement
          conflicts with these terms, the Agreement controls.
        </p>
      </Section>

      <Section title="3. Pricing and payment">
        <ul>
          <li>Prices shown on this website are for general information and may change. Your final price is the one stated in your Agreement.</li>
          <li>Invoices are due on the terms stated in your Agreement. We may pause work on overdue accounts.</li>
          <li>Advertising spend paid to third-party platforms (for example, Google or Meta) is separate from our fees unless your Agreement says otherwise.</li>
        </ul>
      </Section>

      <Section title="4. Results">
        <p>
          Marketing results depend on many factors outside our control, including market conditions, competition,
          and third-party platform changes. We work to achieve your goals, but we do not guarantee specific results
          such as rankings, traffic, leads, or revenue.
        </p>
      </Section>

      <Section title="5. Client responsibilities">
        <p>
          You agree to provide accurate information, timely feedback, and any access or materials we reasonably need.
          You confirm that you have the rights to any content, trademarks, or materials you give us to use.
        </p>
      </Section>

      <Section title="6. Intellectual property">
        <p>
          The content of this website, including text, graphics, and logos, belongs to Markora LLC and may not be
          copied without permission. Ownership of work created for clients is set out in each Agreement; unless stated
          otherwise, final deliverables transfer to the client once paid in full, and Markora keeps its pre-existing
          tools, templates, and know-how.
        </p>
      </Section>

      <Section title="7. Confidentiality">
        <p>
          We keep client business information confidential and use it only to provide our services, except where
          disclosure is required by law.
        </p>
      </Section>

      <Section title="8. Cancellation">
        <p>
          Either party may end an engagement as described in the Agreement. Fees for work already performed remain
          payable.
        </p>
      </Section>

      <Section title="9. Limitation of liability">
        <p>
          To the fullest extent permitted by law, Markora is not liable for indirect, incidental, or consequential
          damages, including lost profits. Our total liability for any claim is limited to the fees you paid us for
          the services giving rise to the claim during the three months before the claim arose.
        </p>
      </Section>

      <Section title="10. Third-party links and platforms">
        <p>
          This website and our services may involve third-party sites and platforms. We are not responsible for their
          content, policies, or availability.
        </p>
      </Section>

      <Section title="11. Governing law">
        <p>
          These terms are governed by the laws of the State of California, without regard to conflict-of-law rules.
          Any dispute will be handled in the state or federal courts located in Los Angeles County, California.
        </p>
      </Section>

      <Section title="12. Changes to these terms">
        <p>
          We may update these terms from time to time. The “Last updated” date above shows when they last changed.
          Continued use of the website means you accept the updated terms.
        </p>
      </Section>

      <Section title="13. Contact us">
        <ContactBlock />
      </Section>
    </LegalPage>
  )
}

export function Privacy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="Markora LLC respects your privacy. This policy explains what information we collect through markorallc.com and our services, how we use it, and the choices you have."
    >
      <Section title="1. Information we collect">
        <ul>
          <li><strong className="text-white">Information you give us:</strong> your name, email address, phone number, business name, and any message you send when you contact us by form, email, or phone.</li>
          <li><strong className="text-white">Client information:</strong> details and account access you share with us so we can deliver services.</li>
          <li><strong className="text-white">Technical information:</strong> basic data such as IP address, browser type, and pages visited, collected automatically by our website host for security and performance.</li>
        </ul>
      </Section>

      <Section title="2. How we use your information">
        <ul>
          <li>To respond to your inquiries and provide proposals.</li>
          <li>To deliver, manage, and improve our services.</li>
          <li>To send service-related messages and invoices.</li>
          <li>To keep our website secure and working properly.</li>
          <li>To comply with legal obligations.</li>
        </ul>
      </Section>

      <Section title="3. We do not sell your information">
        <p>
          We do not sell or rent your personal information. We share it only with trusted service providers who help
          us run our business (such as website hosting and email providers), when you ask us to, or when required by
          law.
        </p>
      </Section>

      <Section title="4. Cookies">
        <p>
          Our website uses only the minimal technical data needed to run it. If we add analytics or advertising
          cookies in the future, we will update this policy.
        </p>
      </Section>

      <Section title="5. Data retention and security">
        <p>
          We keep personal information only as long as needed for the purposes above or as required by law, and we
          use reasonable measures to protect it. No method of transmission or storage is completely secure.
        </p>
      </Section>

      <Section title="6. Your rights">
        <p>
          You may ask us to access, correct, or delete the personal information we hold about you, or to stop
          contacting you. Depending on where you live (for example, California), you may have additional rights
          under local law. To make a request, email us at{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. We will not discriminate against you for
          exercising your rights.
        </p>
      </Section>

      <Section title="7. Children’s privacy">
        <p>
          Our website and services are intended for businesses and are not directed to children under 13. We do not
          knowingly collect information from children.
        </p>
      </Section>

      <Section title="8. Changes to this policy">
        <p>
          We may update this policy from time to time. The “Last updated” date above shows when it last changed.
        </p>
      </Section>

      <Section title="9. Contact us">
        <ContactBlock />
      </Section>
    </LegalPage>
  )
}
