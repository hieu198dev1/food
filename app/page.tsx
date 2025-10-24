// app/page.tsx
import Hero from '../components/Hero'
import About from '../components/About'
import Menu from '../components/Menu'
import HowToEat from '../components/HowToEat'
import Testimonials from '../components/Testimonials'
import Location from '../components/Location'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <HowToEat />
      <Testimonials />
      <Location />
      <Footer />
    </>
  )
}