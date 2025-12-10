'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send } from 'lucide-react'

interface ContactCardProps {
  propertyId: string
  propertyTitle: string
}

export default function ContactCard({ propertyId, propertyTitle }: ContactCardProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-luxury-charcoal rounded-2xl p-6 sm:p-8 luxury-shadow border border-luxury-white/10"
    >
      <h3 className="font-serif text-2xl font-bold text-luxury-white mb-2">
        Contacter l'<span className="text-luxury-gold">Agence</span>
      </h3>
      <p className="text-luxury-white/60 text-sm mb-6">
        Intéressé par cette propriété ? Contactez-nous pour plus d'informations.
      </p>

      {/* Quick Contact */}
      <div className="space-y-3 mb-6 pb-6 border-b border-luxury-white/10">
        <a
          href="tel:+212612345678"
          className="flex items-center gap-3 text-luxury-white/80 hover:text-luxury-gold transition-colors"
        >
          <Phone className="w-5 h-5 text-luxury-gold" />
          <span className="text-sm">+212 6 12 34 56 78</span>
        </a>
        <a
          href="mailto:contact@kna.ma"
          className="flex items-center gap-3 text-luxury-white/80 hover:text-luxury-gold transition-colors"
        >
          <Mail className="w-5 h-5 text-luxury-gold" />
          <span className="text-sm">contact@kna.ma</span>
        </a>
      </div>

      {/* Contact Form */}
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-luxury-gold/20 flex items-center justify-center">
            <Send className="w-8 h-8 text-luxury-gold" />
          </div>
          <p className="text-luxury-white font-semibold mb-2">Message envoyé !</p>
          <p className="text-luxury-white/60 text-sm">
            Nous vous répondrons dans les plus brefs délais.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-luxury-white/80 mb-2"
            >
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-luxury-black border border-luxury-white/20 rounded-lg text-luxury-white placeholder:text-luxury-white/40 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-luxury-white/80 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-luxury-black border border-luxury-white/20 rounded-lg text-luxury-white placeholder:text-luxury-white/40 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-luxury-white/80 mb-2"
            >
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-luxury-black border border-luxury-white/20 rounded-lg text-luxury-white placeholder:text-luxury-white/40 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all"
              placeholder="+212 6 12 34 56 78"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-luxury-white/80 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-4 py-3 bg-luxury-black border border-luxury-white/20 rounded-lg text-luxury-white placeholder:text-luxury-white/40 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all resize-none"
              placeholder="Votre message..."
            />
          </div>

          <input type="hidden" name="propertyId" value={propertyId} />
          <input type="hidden" name="propertyTitle" value={propertyTitle} />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-luxury-gold hover:bg-luxury-gold-light text-luxury-black font-semibold rounded-lg transition-all duration-300 luxury-shadow-gold hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin">⏳</span>
                <span>Envoi en cours...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Envoyer le message</span>
              </>
            )}
          </button>
        </form>
      )}
    </motion.div>
  )
}

