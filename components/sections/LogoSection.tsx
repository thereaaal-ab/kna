'use client'

import { motion } from 'framer-motion'

export default function LogoSection() {
  return (
    <section className="py-16 bg-luxury-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center"
        >
          <div className="text-center">
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-luxury-gold mb-4 tracking-tight">
              KNA
            </h2>
            <p className="font-sans text-sm sm:text-base text-luxury-white/70 tracking-[0.3em] uppercase letter-spacing-wide">
              Agence Immobilière de Prestige
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

