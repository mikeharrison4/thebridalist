import Link from 'next/link'

export default function About() {
  return (
    <main className="font-libredisplay">
      <div className="px-6 sm:px-28 md:px-48 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-12 text-gray-600 hover:text-gray-900 transition-colors duration-200 tracking-wider uppercase text-sm"
        >
          <span>←</span>
          <span>Back to Home</span>
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl uppercase mb-8 tracking-wider text-center">
            About Me
          </h1>
          
          <div className="flex justify-center mb-12">
            <img
              src="/photos/kirsty-hollick.jpeg"
              className="h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] rounded-full object-cover"
              alt="Kirsty Hollick"
            />
          </div>

          <div className="space-y-6 tracking-wider leading-relaxed text-lg">
            <p>
              With years of experience in bridal beauty, I understand that your wedding day is one of the most important days of your life. My approach is all about creating a calm, relaxed atmosphere where you can truly be yourself.
            </p>
            
            <p>
              I specialise in natural, glowing makeup that enhances your features without looking overdone, and hairstyles that are both elegant and effortless. Whether you're dreaming of soft, romantic waves or a sophisticated updo, I work with you to create a look that reflects your personal style and makes you feel absolutely radiant.
            </p>
            
            <p>
              From our initial consultation through to your special day, I'm here to guide you every step of the way. My goal is simple: to help you look and feel your absolute best, so you can focus on what truly matters - celebrating your love story.
            </p>

            <div className="bg-[#e8e4df] p-8 rounded-lg mt-8">
              <h2 className="text-2xl sm:text-3xl uppercase mb-6 tracking-wider text-center">
                A Little More About Me
              </h2>
              <div className="space-y-4">
                <p>
                  Beyond my passion for bridal beauty, I'm a twin mum to two beautiful boys who keep me on my toes and fill my life with endless joy and laughter. Being a mother has taught me patience, attention to detail, and the importance of making every moment special - qualities I bring to every wedding I work on.
                </p>
                <p>
                  I'm also newly engaged to my lovely fiancé, which means I'm experiencing the wedding planning journey right alongside you! I'll be asking my brides all there is to know about weddings, learning from your experiences, and sharing in the excitement of this beautiful time in your life. This personal connection to the wedding world makes me even more passionate about helping you look and feel incredible on your special day.
                </p>
                <p>
                  And of course, I'm a huge dog lover! There's something about the unconditional love and joy that dogs bring that resonates with the happiness and love I see on every wedding day. Whether you're planning to include your furry friend in your wedding or just want to chat about our shared love of dogs, I'm always happy to talk!
                </p>
              </div>
            </div>

            <p className="mt-8 text-center">
              I'd love to hear your story and help make your wedding day absolutely perfect. Let's create something beautiful together.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
