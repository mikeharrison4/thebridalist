import { AiAssistant } from '@/app/components/AiAssistant/AiAssistant'
import { Hero } from '@/app/components/Hero'
import { Instagram } from '@/app/social-icons/Instagram'

export default function Home() {
  return (
    <>
      <div className="p-6 pt-8 flex justify-between items-center font-roboto">
        <div className="w-full flex flex-col text-center items-center sm:flex-row sm:text-left sm:mt-0">
          <img
            src="/wedding-bridal-hair-vector.svg"
            className="hidden sm:block w-[100px]"
            alt=""
          />
          <div>
            <h1 className="font-carattere text-5xl text-black">
              The Bridalist, <span className="text-2xl">Kirsty Hollick</span>
            </h1>
            <div className="text-3xl pb-4 sm:pr-4 sm:pb-0">
              <Instagram />
            </div>
          </div>
        </div>
        <AiAssistant />
      </div>
      <Hero />
      <div className="p-6 pt-12">
        <h2 className="font-carattere text-5xl">
          Check out what people have to say
        </h2>
      </div>
    </>
  )
}
