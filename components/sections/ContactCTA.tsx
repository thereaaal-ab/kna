'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="py-24 sm:py-32 bg-luxury-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-luxury-white mb-6">
            Prêt à Trouver Votre <span className="text-luxury-gold">Propriété de Rêve</span> ?
          </h2>
          <p className="text-luxury-white/70 text-lg mb-12 max-w-2xl mx-auto">
            Contactez notre équipe d'experts pour une consultation personnalisée et découvrez notre sélection exclusive de biens immobiliers d'exception.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <motion.a
              href="tel:+212612345678"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-luxury-gold hover:bg-luxury-gold-light text-luxury-black font-semibold rounded-lg transition-all duration-300 luxury-shadow-gold hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span>+212 6 12 34 56 78</span>
            </motion.a>
            <motion.a
              href="mailto:contact@kna.ma"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-luxury-charcoal hover:bg-luxury-dark text-luxury-white border border-luxury-gold/30 hover:border-luxury-gold font-semibold rounded-lg transition-all duration-300 luxury-shadow"
            >
              <Mail className="w-5 h-5" />
              <span>contact@kna.ma</span>
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 mb-4">
                <Phone className="w-6 h-6 text-luxury-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-luxury-white mb-2">Appelez-nous</h3>
              <p className="text-luxury-white/60 text-sm">Disponible 7j/7</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 mb-4">
                <Mail className="w-6 h-6 text-luxury-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-luxury-white mb-2">Écrivez-nous</h3>
              <p className="text-luxury-white/60 text-sm">Réponse sous 24h</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 mb-4">
                <MapPin className="w-6 h-6 text-luxury-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold text-luxury-white mb-2">Visitez-nous</h3>
              <p className="text-luxury-white/60 text-sm">Sur rendez-vous</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-luxury-gold hover:bg-luxury-gold-light text-luxury-black font-bold text-lg rounded-lg transition-all duration-300 luxury-shadow-gold hover:shadow-xl"
            >
              <span>Demander une Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

