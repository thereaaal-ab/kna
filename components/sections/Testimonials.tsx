'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  location: string
  content: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ahmed Benali',
    role: 'Investisseur',
    location: 'Casablanca',
    content: 'KNA a transformé notre recherche immobilière. Leur expertise et leur professionnalisme sont exceptionnels. Nous avons trouvé la propriété parfaite grâce à leur accompagnement personnalisé.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sophie Martin',
    role: 'Acheteuse',
    location: 'Rabat',
    content: 'Service impeccable de A à Z. L\'équipe KNA a su comprendre nos besoins et nous présenter des biens d\'exception. Une expérience immobilière au-delà de nos attentes.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Youssef Alami',
    role: 'Propriétaire',
    location: 'Marrakech',
    content: 'Vendre ma propriété avec KNA a été un véritable plaisir. Leur réseau et leur savoir-faire ont permis une transaction rapide et transparente. Je recommande vivement.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Marie Dubois',
    role: 'Investisseuse',
    location: 'Tanger',
    content: 'L\'agence KNA représente l\'excellence immobilière. Leur portfolio exclusif et leur approche premium font toute la différence. Une référence dans le secteur.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-24 sm:py-32 bg-luxury-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-luxury-white mb-4">
            Témoignages <span className="text-luxury-gold">Clients</span>
          </h2>
          <p className="text-luxury-white/70 text-lg max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité absolue
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-luxury-black/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 luxury-shadow"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-luxury-gold">
                  <Quote className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <span key={i} className="text-luxury-gold text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-luxury-white/90 text-lg leading-relaxed mb-6">
                    "{testimonials[currentIndex].content}"
                  </p>
                  <div className="border-t border-luxury-white/10 pt-6">
                    <h4 className="font-serif text-xl font-bold text-luxury-white mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-luxury-white/60 text-sm">
                      {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full bg-luxury-gold/10 hover:bg-luxury-gold/20 border border-luxury-gold/20 text-luxury-gold transition-all duration-300 luxury-shadow"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-luxury-gold'
                      : 'w-2 bg-luxury-white/30 hover:bg-luxury-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-luxury-gold/10 hover:bg-luxury-gold/20 border border-luxury-gold/20 text-luxury-gold transition-all duration-300 luxury-shadow"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

