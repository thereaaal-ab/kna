'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { ArrowRight } from 'lucide-react'

interface Location {
  id: string
  name: string
  description: string
  image: string
  propertyCount: number
}

const locations: Location[] = [
  {
    id: 'casablanca',
    name: 'Casablanca',
    description: 'Cœur économique du Maroc',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    propertyCount: 45,
  },
  {
    id: 'rabat',
    name: 'Rabat',
    description: 'Capitale administrative',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    propertyCount: 32,
  },
  {
    id: 'marrakech',
    name: 'Marrakech',
    description: 'Perle du Sud',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80',
    propertyCount: 38,
  },
  {
    id: 'tanger',
    name: 'Tanger',
    description: 'Porte de l\'Europe',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
    propertyCount: 28,
  },
  {
    id: 'agadir',
    name: 'Agadir',
    description: 'Riviera marocaine',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
    propertyCount: 22,
  },
  {
    id: 'fes',
    name: 'Fès',
    description: 'Cité impériale',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
    propertyCount: 19,
  },
]

export default function ExploreLocations() {
  return (
    <section className="py-24 sm:py-32 bg-luxury-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-luxury-white mb-4">
            Explorez Nos <span className="text-luxury-gold">Régions</span>
          </h2>
          <p className="text-luxury-white/70 text-lg max-w-2xl mx-auto">
            Découvrez les plus belles destinations immobilières du Maroc
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-96 rounded-2xl overflow-hidden luxury-shadow hover:luxury-shadow-gold transition-all duration-500 cursor-pointer"
            >
              <div className="absolute inset-0">
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/50 to-transparent" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                <div className="mb-2">
                  <span className="text-luxury-gold text-sm font-medium">
                    {location.propertyCount} propriétés
                  </span>
                </div>
                <h3 className="font-serif text-3xl font-bold text-luxury-white mb-2 group-hover:text-luxury-gold transition-colors">
                  {location.name}
                </h3>
                <p className="text-luxury-white/80 mb-4">
                  {location.description}
                </p>
                <button className="inline-flex items-center gap-2 text-luxury-gold font-medium group-hover:gap-4 transition-all duration-300">
                  <span>Explorer</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

