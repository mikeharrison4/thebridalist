'use client'

import { useState } from 'react'

const testimonials = [
  {
    quote:
      "I couldn't recommend Kirsty enough for my wedding hair and make-up. She was incredibly organised, kept everything running smoothly, and somehow knew exactly what I wanted even when I wasn't sure myself. She brought such a calm, fun energy to the morning and made me feel like a Hollywood superstar. My make-up stayed flawless all day and night — even after tears and dancing — without feeling heavy or greasy. Truly amazing!",
    name: 'Sophie Radford',
    venue: 'Limkiln',
  },
  {
    quote:
      "I just wanted to say a massive thank you for everything you did for me and my bridal party for mine and Jose's wedding. You honestly made me feel a million dollars! The hair and makeup on all three of us was absolutely stunning and lasted all day (even with all the happy tears!) and looked amazing in photos. Thank you so much for being so lovely as well as working your magic. I honestly couldn't thank you enough!",
    name: 'Shannon Liau',
    venue: 'Pelham House',
  },
  {
    quote:
      'I cannot recommend Kirsty enough! Kirsty did mine, and my bridesmaids, hair and makeup for our wedding. Kirsty made me feel completely at ease on the day and in the lead up to the wedding. I spoke with Kirsty after my trial and so my hair and makeup on the wedding day was everything I had wanted! My hair stayed in perfect position for the whole day and night. Kirsty was so easy to talk to and I felt completely stress free on the wedding morning. Thank you so much!',
    name: 'Lucy Leach',
    venue: 'Tottington Manor',
  },
  {
    quote:
      'Kirsty did the makeup for my wedding day in April 2025. She did my make up as well as 4 bridesmaids and my mum and she did an amazing job. As someone who does not wear a lot of makeup and has only had my makeup done professionally a couple of times I was a bit nervous about how I would look with a full face of makeup but I did not need to worry at all. I had a trial with Kirsty a couple of months before the wedding and she was really helpful at talking through my ideas and took a lot of time to really understand the look I was wanting to go and what sort of makeup I like and dislike. I was really really pleased with my makeup both at the trial and on the morning of the wedding, Kirsty really helped me to look and feel my best. Throughout the wedding planning process Kirsty was also happy to help me with recommendations for skincare products and answer any questions that I had. Kirsty did a great job with the bridesmaids and we all felt amazing by the time we walked down the aisle. I was so pleased to have Kirsty with us as part of the wedding morning, she was professional and calming but it also felt like we had known her for ages and she slotted right in to the celebrations of the morning. I could not recommend Kirsty enough for anybody looking for bridal makeup. Thank you so much!',
    name: 'Alix',
    venue: 'Highly Manor',
  },
  {
    quote:
      'I absolutely loved my wedding hair, it was so perfect and made me feel like a real life princess on the day. We were all so so happy with our wedding hair and it made us feel so incredible on the day so thank you again so so much.',
    name: 'Nicole',
    venue: 'Botley Hill',
  },
]

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  )
}

export function Testimonials() {
  const [expanded, setExpanded] = useState(false)
  const visibleTestimonials = expanded ? testimonials : testimonials.slice(0, 3)

  return (
    <div id="testimonials" className="px-6 sm:px-28 md:px-48 py-16">
      <h2 className="text-3xl sm:text-4xl uppercase mb-4 tracking-wider text-center">
        Kind Words
      </h2>
      <p className="text-center tracking-wider text-gray-500 mb-12">
        From our wonderful brides
      </p>

      <div className="max-w-5xl mx-auto space-y-8">
        {visibleTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-[#f5f3f0] p-8 sm:p-10 rounded-lg"
          >
            <QuoteIcon className="absolute top-6 left-6 sm:top-8 sm:left-8 w-8 h-8 text-[#d4cfc9] opacity-60" />

            <div className="relative">
              <div className="flex gap-1 justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-4 h-4 text-[#c9a96e]"
                  />
                ))}
              </div>

              <blockquote className="tracking-wider leading-relaxed text-center text-gray-700 mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="text-center">
                <span className="block uppercase tracking-wider text-sm font-semibold">
                  {testimonial.name}
                </span>
                <span className="block text-sm tracking-wider text-gray-500 mt-1">
                  {testimonial.venue}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {testimonials.length > 3 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setExpanded(!expanded)}
            className="uppercase tracking-wider text-sm border border-gray-300 px-8 py-3 hover:bg-[#e8e4df] transition-colors duration-300 cursor-pointer"
          >
            {expanded ? 'Show Less' : 'Read More Reviews'}
          </button>
        </div>
      )}
    </div>
  )
}
