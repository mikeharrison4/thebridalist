import { AiAssistant } from '@/app/components/AiAssistant/AiAssistant'
import { Hero } from '@/app/components/Hero'

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
          <div className="flex bg-gray-100 px-6 sm:px-28 md:px-48 py-12">
            <img
              src="/photos/kirsty-hollick.jpeg"
              className="h-[200px] w-[200px] rounded-full"
              alt="Kirsty Hollick"
            />
            <div className="flex-1/2 ml-8 text-right">
              <h2 className="text-2xl uppercase mb-4">About me</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
