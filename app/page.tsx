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
            Your wedding day should feel magical, not overwhelming. At The Bridalist, I create effortless, glowing makeup and elegant hairstyles tailored just for you. My goal is to bring out your unique beauty and ensure you feel confident, radiant, and truly yourself as you celebrate this special moment.
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
