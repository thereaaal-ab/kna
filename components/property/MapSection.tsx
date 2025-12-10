'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

interface MapSectionProps {
  coordinates: {
    lat: number
    lng: number
  }
  location: string
}

export default function MapSection({ coordinates, location }: MapSectionProps) {
  // Using Google Maps Embed API - Replace with your API key in production
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${coordinates.lat},${coordinates.lng}&zoom=15`

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-luxury-white">
        Localisation <span className="text-luxury-gold">Approximative</span>
      </h2>
      <div className="relative w-full h-96 rounded-2xl overflow-hidden luxury-shadow border border-luxury-white/10">
        {/* Placeholder Map - Replace with actual Google Maps embed or Leaflet */}
        <div className="absolute inset-0 bg-luxury-charcoal flex items-center justify-center">
          <div className="text-center space-y-4">
            <MapPin className="w-16 h-16 text-luxury-gold mx-auto" />
            <p className="text-luxury-white/80 text-lg">{location}</p>
            <p className="text-luxury-white/60 text-sm">
              Coordonnées: {coordinates.lat.toFixed(4)}, {coordinates.lng.toFixed(4)}
            </p>
            <p className="text-luxury-white/40 text-xs">
              Intégrez Google Maps ou Leaflet pour afficher la carte
            </p>
          </div>
        </div>
        {/* Uncomment and add your Google Maps API key to use actual map
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
        */}
      </div>
      <p className="text-luxury-white/60 text-sm">
        * Localisation approximative. Contactez-nous pour obtenir l'adresse exacte.
      </p>
    </motion.section>
  )
}

