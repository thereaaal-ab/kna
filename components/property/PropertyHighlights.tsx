'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

interface PropertyHighlightsProps {
  highlights: string[]
}

export default function PropertyHighlights({ highlights }: PropertyHighlightsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-luxury-white">
        Points <span className="text-luxury-gold">Forts</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-start gap-3 bg-luxury-charcoal rounded-lg p-4 border border-luxury-white/10"
          >
            <Star className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
            <p className="text-luxury-white/80">{highlight}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

