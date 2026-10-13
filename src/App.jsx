import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Terms, Privacy } from './components/Legal'

function Home() {
  useEffect(() => {
    const { hash } = window.location
    if (hash) {
      requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView({ block: 'start' }))
    }
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Contact />
    </>
  )
}

const PAGES = { '/terms': Terms, '/privacy': Privacy }

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const Page = PAGES[path] || Home

  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  )
}
