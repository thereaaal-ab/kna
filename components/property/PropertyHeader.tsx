'use client'

import { motion } from 'framer-motion'
import { MapPin, Tag } from 'lucide-react'
import { Property } from '@/types/property'

interface PropertyHeaderProps {
  property: Property
}

export default function PropertyHeader({ property }: PropertyHeaderProps) {
  const formatPrice = () => {
    if (property.priceType === 'rent') {
      return `${property.price} MAD/mois`
    }
    return `${property.price} MAD`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Status Badge */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="px-4 py-2 bg-luxury-gold text-luxury-black text-sm font-semibold rounded-full">
          {property.status}
        </span>
        <span className="px-4 py-2 bg-luxury-charcoal border border-luxury-white/20 text-luxury-white text-sm font-medium rounded-full">
          {property.type}
        </span>
        <div className="flex items-center gap-2 text-luxury-white/60 text-sm">
          <Tag className="w-4 h-4" />
          <span>Réf: {property.reference}</span>
        </div>
      </div>

      {/* Title */}
      <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-luxury-white leading-tight">
        {property.title}
      </h1>

      {/* Location */}
      <div className="flex items-center gap-2 text-luxury-white/80">
        <MapPin className="w-5 h-5 text-luxury-gold" />
        <span className="text-lg">{property.location}</span>
      </div>

      {/* Price */}
      <div className="pt-4 border-t border-luxury-white/10">
        <p className="text-luxury-white/60 text-sm mb-2">Prix</p>
        <p className="font-serif text-4xl sm:text-5xl font-bold text-luxury-gold">
          {formatPrice()}
        </p>
      </div>
    </motion.div>
  )
}

