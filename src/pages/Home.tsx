import Nav from '@/sections/Nav'
import Hero from '@/sections/Hero'
import Models, { Ticker } from '@/sections/Models'
import Features from '@/sections/Features'
import Steps from '@/sections/Steps'
import Clients from '@/sections/Clients'
import Faq from '@/sections/Faq'
import Cta from '@/sections/Cta'
import Footer from '@/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Ticker />
      <Models />
      <Features />
      <Steps />
      <Clients />
      <Faq />
      <Cta />
      <Footer />
    </main>
  )
}
