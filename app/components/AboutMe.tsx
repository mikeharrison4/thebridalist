import Link from 'next/link'

export function AboutMe() {
  return (
    <div id="about" className="bg-[#e8e4df] px-6 sm:px-28 md:px-48 py-16">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-12">
        <img
          src="/photos/kirsty-hollick.jpeg"
          className="h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] rounded-full object-cover flex-shrink-0"
          alt="Kirsty Hollick"
        />
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl uppercase mb-6 tracking-wider">About me</h2>
          <div className="space-y-4 tracking-wider leading-relaxed">
            <p>
              With years of experience in bridal beauty, I understand that your wedding day is one of the most important days of your life. My approach is all about creating a calm, relaxed atmosphere where you can truly be yourself.
            </p>
            <p>
              I specialise in natural, glowing makeup that enhances your features without looking overdone, and hairstyles that are both elegant and effortless. Whether you're dreaming of soft, romantic waves or a sophisticated updo, I work with you to create a look that reflects your personal style and makes you feel absolutely radiant.
            </p>
            <p>
              From our initial consultation through to your special day, I'm here to guide you every step of the way. My goal is simple: to help you look and feel your absolute best, so you can focus on what truly matters - celebrating your love story.
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-block uppercase tracking-wider text-sm border-b border-gray-600 hover:border-gray-900 transition-colors duration-200"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
