'use client'

import { useEffect, useState } from 'react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const nav = document.querySelector('nav')
      const navHeight = nav ? nav.offsetHeight : 0
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' }
  ]

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-[#e8e4df]'
      }`}
    >
      <div className="px-6 sm:px-28 md:px-48 py-4">
        {/* Desktop nav */}
        <div className="hidden sm:flex justify-center items-center gap-8 font-libredisplay">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="uppercase tracking-wider text-base hover:text-gray-600 transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <div className="flex sm:hidden justify-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 uppercase tracking-wider text-sm font-libredisplay"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="flex flex-col justify-center gap-[5px] w-5 h-5">
              <span
                className={`block h-[1.5px] w-full bg-current transition-all duration-300 origin-center ${
                  isMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
                }`}
              />
              <span
                className={`block h-[1.5px] w-full bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-[1.5px] w-full bg-current transition-all duration-300 origin-center ${
                  isMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
                }`}
              />
            </div>
            <span>Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col items-center gap-1 pb-4 font-libredisplay">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="w-full py-3 uppercase tracking-wider text-sm hover:bg-black/5 transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
