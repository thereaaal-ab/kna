'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { StaticImageData } from 'next/image'
import { MapPin, Bed, Bath, Square } from 'lucide-react'

interface Property {
  id: string
  title: string
  location: string
  price: string
  image: string
  bedrooms: number
  bathrooms: number
  area: number
  type: string
  status: string
}

const featuredProperties: Property[] = [
  {
    id: 'KNA-001',
    title: 'Villa Prestige avec Vue Panoramique',
    location: 'Casablanca, Anfa',
    price: '12,500,000 MAD',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    bedrooms: 5,
    bathrooms: 4,
    area: 450,
    type: 'Villa',
    status: 'À Vendre',
  },
  {
    id: 'KNA-002',
    title: 'Penthouse Moderne en Bord de Mer',
    location: 'Rabat, Hay Riad',
    price: '8,900,000 MAD',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
    type: 'Penthouse',
    status: 'À Vendre',
  },
  {
    id: 'KNA-003',
    title: 'Maison de Luxe avec Jardin Privé',
    location: 'Marrakech, Palmeraie',
    price: '15,200,000 MAD',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    bedrooms: 6,
    bathrooms: 5,
    area: 580,
    type: 'Maison',
    status: 'À Vendre',
  },
  {
    id: 'KNA-004',
    title: 'Appartement Élégant Centre-Ville',
    location: 'Tanger, Centre',
    price: '45,000 MAD/mois',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    type: 'Appartement',
    status: 'À Louer',
  },
]

export default function FeaturedProperties() {
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
            Propriétés <span className="text-luxury-gold">Sélectionnées</span>
          </h2>
          <p className="text-luxury-white/70 text-lg max-w-2xl mx-auto">
            Découvrez notre collection exclusive de biens immobiliers d'exception
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-luxury-charcoal rounded-2xl overflow-hidden luxury-shadow hover:luxury-shadow-gold transition-all duration-500 hover:-translate-y-2"
            >
              <Link href={`/property/${property.id}`}>
                <div className="relative h-64 overflow-hidden cursor-pointer">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-luxury-gold text-luxury-black text-xs font-semibold rounded-full">
                    {property.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-luxury-black/80 backdrop-blur-sm text-luxury-white text-xs font-medium rounded-full">
                    {property.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-luxury-white mb-2 group-hover:text-luxury-gold transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center text-luxury-white/60 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{property.location}</span>
                </div>

                <div className="flex items-center justify-between text-luxury-white/80 mb-4 pb-4 border-b border-luxury-white/10">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span className="text-sm">{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span className="text-sm">{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="w-4 h-4" />
                      <span className="text-sm">{property.area}m²</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl font-bold text-luxury-gold">
                    {property.price}
                  </span>
                  <span className="px-4 py-2 bg-luxury-gold/10 hover:bg-luxury-gold text-luxury-gold hover:text-luxury-black rounded-lg transition-all duration-300 text-sm font-medium inline-block">
                    Voir détails
                  </span>
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

