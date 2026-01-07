'use client'

import { useState } from 'react'

export function Gallery() {
  const [showAll, setShowAll] = useState(false)
  const images = [
    '/photos/IMG_0146.JPG',
    '/photos/IMG_2268.JPG',
    '/photos/IMG_5985.JPG',
    '/photos/IMG_7018.JPG',
    '/photos/IMG_7019.JPG',
    '/photos/IMG_7020.JPG',
    '/photos/IMG_7958.JPG',
    '/photos/IMG_7959.JPG',
    '/photos/IMG_7960.JPG',
    '/photos/IMG_8477.JPG',
    '/photos/IMG_8478.JPG',
    '/photos/IMG_8479.JPG'
  ]

  const displayedImages = showAll ? images : images.slice(0, 6)

  return (
    <div id="gallery" className="px-6 sm:px-28 md:px-48 py-16">
      <h2 className="text-3xl sm:text-4xl uppercase mb-12 tracking-wider text-center">
        Gallery of Work
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Bridal hair and makeup work"
            className="w-full h-[300px] object-cover grayscale hover:grayscale-0 transition-all duration-300"
          />
        ))}
      </div>
      {images.length > 6 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 uppercase tracking-wider border border-gray-300 hover:bg-[#e8e4df] transition-colors duration-300 font-libredisplay"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  )
}
