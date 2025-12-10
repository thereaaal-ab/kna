'use client'

import { motion } from 'framer-motion'

interface PropertyDescriptionProps {
  description: string
}

export default function PropertyDescription({ description }: PropertyDescriptionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-luxury-white">
        Description du <span className="text-luxury-gold">Bien</span>
      </h2>
      <div className="prose prose-invert max-w-none">
        <p className="text-luxury-white/80 leading-relaxed text-lg whitespace-pre-line">
          {description}
        </p>
      </div>
    </motion.section>
  )
}

