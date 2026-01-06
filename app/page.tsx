import { AiAssistant } from '@/app/components/AiAssistant/AiAssistant'
import { AboutMe } from '@/app/components/AboutMe'
import { Contact } from '@/app/components/Contact'
import { Gallery } from '@/app/components/Gallery'
import { Hero } from '@/app/components/Hero'
import { Pricing } from '@/app/components/Pricing'

export default function Home() {
  return (
    <>
      <main className="font-libredisplay">
        <Hero />
        <div className="my-20 flex flex-col gap-20">
          <div className="block sm:hidden">
            <AiAssistant />
          </div>
          <p className="text-center tracking-wider mx-6 sm:mx-28 md:mx-48">
            Planning your wedding should be exciting, not stressful. At Petal
            Blush, I specialise in natural, timeless bridal makeup and elegant,
            effortless hairstyles that enhance your natural beauty. Every detail
            is designed to make you feel like the very best version of yourself
            - confident, radiant, and truly you.
          </p>
          <AboutMe />
          <Gallery />
          <Pricing />
          <Contact />
        </div>
      </main>
    </>
  )
}
