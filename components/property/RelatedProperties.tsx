'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { getRelatedProperties } from '@/lib/properties'
import { MapPin, Bed, Bath, Square } from 'lucide-react'

interface RelatedPropertiesProps {
  currentPropertyId: string
}

export default function RelatedProperties({ currentPropertyId }: RelatedPropertiesProps) {
  const relatedProperties = getRelatedProperties(currentPropertyId, 3)

  if (relatedProperties.length === 0) {
    return null
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-luxury-white mb-2">
          Propriétés <span className="text-luxury-gold">Similaires</span>
        </h2>
        <p className="text-luxury-white/60">
          Découvrez d'autres biens qui pourraient vous intéresser
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {relatedProperties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group bg-luxury-charcoal rounded-2xl overflow-hidden luxury-shadow hover:luxury-shadow-gold transition-all duration-500 hover:-translate-y-2"
          >
            <Link href={`/property/${property.id}`}>
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={property.images[0]}
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
                <h3 className="font-serif text-xl font-bold text-luxury-white mb-2 group-hover:text-luxury-gold transition-colors line-clamp-2">
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
                      <span className="text-sm">{property.features.chambres}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span className="text-sm">{property.features.sallesDeBain}</span>
                    </div>
                    {property.features.surfaceInterieure && (
                      <div className="flex items-center gap-1">
                        <Square className="w-4 h-4" />
                        <span className="text-sm">{property.features.surfaceInterieure}m²</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl font-bold text-luxury-gold">
                    {property.priceType === 'rent'
                      ? `${property.price} MAD/mois`
                      : `${property.price} MAD`}
                  </span>
                  <span className="text-luxury-gold text-sm font-medium group-hover:gap-2 transition-all inline-flex items-center gap-1">
                    Voir détails
                    <span>→</span>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

