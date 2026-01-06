'use client'

import { useEffect, useState } from 'react'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const header = document.querySelector('header')
      const headerHeight = header ? header.offsetHeight : 120
      const navHeight = 60
      const offset = headerHeight + navHeight
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

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
    { label: 'Contact', id: 'contact' }
  ]

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-gray-100'
      }`}
    >
      <div className="px-6 sm:px-28 md:px-48 py-4">
        <div className="flex justify-center items-center gap-6 sm:gap-8 font-libredisplay">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="uppercase tracking-wider text-sm sm:text-base hover:text-gray-600 transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
