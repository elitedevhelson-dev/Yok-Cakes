import dynamic from 'next/dynamic'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'

const About = dynamic(() => import('@/components/sections/About'))
const WhyUs = dynamic(() => import('@/components/sections/WhyUs'))
const Gallery = dynamic(() => import('@/components/sections/Gallery'))
const Flavors = dynamic(() => import('@/components/sections/Flavors'))
const Pricing = dynamic(() => import('@/components/sections/Pricing'))
const Extras = dynamic(() => import('@/components/sections/Extras'))
const Process = dynamic(() => import('@/components/sections/Process'))
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'))
const FAQ = dynamic(() => import('@/components/sections/FAQ'))
const Contact = dynamic(() => import('@/components/sections/Contact'))
const WhatsAppButton = dynamic(() => import('@/components/ui/WhatsAppButton'))

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Gallery />
        <Flavors />
        <Pricing />
        <Extras />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
