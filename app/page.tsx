export const dynamic = 'force-dynamic'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Photography from './components/Photography'
import BeyondCode from './components/BeyondCode'
import Gratitude from './components/Gratitude'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main
      style={{
        background: 'var(--bg)',
        color: 'var(--text)',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Achievements />
      <Photography />
      <BeyondCode />
      <Gratitude />
      <Footer />
    </main>
  )
}
