'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const heroImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80',
    alt: 'Luxury Villa Exterior',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
    alt: 'Modern Luxury Home',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
    alt: 'Elegant Interior Design',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    alt: 'Luxury Penthouse',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80',
    alt: 'Premium Real Estate',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1920&q=80',
    alt: 'Exclusive Property',
  },
]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroImages[currentIndex].url})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/70 via-luxury-black/60 to-luxury-black/80" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 luxury-shadow"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-luxury-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 luxury-shadow"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-luxury-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 transition-all duration-300 ${
              index === currentIndex
                ? 'w-12 bg-luxury-gold'
                : 'w-1.5 bg-white/40 hover:bg-white/60'
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center px-4 sm:px-6 lg:px-8"
        >
          <motion.h1
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-luxury-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="text-luxury-gold">Excellence</span> Immobilière.
          </motion.h1>
          <motion.p
            className="font-serif text-2xl sm:text-3xl md:text-4xl text-luxury-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Élégance Marocaine.
          </motion.p>
          <motion.div
            className="w-24 h-0.5 bg-luxury-gold mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          />
        </motion.div>
      </div>
    </section>
  )
}

