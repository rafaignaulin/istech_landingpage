import Hero from '@/components/Hero'
import About from '@/components/About'
import Mission from '@/components/Mission'
import Highlights from '@/components/Highlights'
import Results from '@/components/Results'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Results />
      <Mission />
      <Highlights />
      <Contact />
    </main>
  )
}
