'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
  ]

  const quickLinks = [
    { label: 'À Propos', href: '#' },
    { label: 'Nos Services', href: '#' },
    { label: 'Propriétés', href: '#' },
    { label: 'Contact', href: '#' },
  ]

  const legalLinks = [
    { label: 'Mentions Légales', href: '#' },
    { label: 'Politique de Confidentialité', href: '#' },
    { label: 'CGV', href: '#' },
  ]

  return (
    <footer className="bg-luxury-charcoal border-t border-luxury-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-3xl font-bold text-luxury-gold mb-4">KNA</h3>
            <p className="text-luxury-white/70 text-sm leading-relaxed mb-6">
              Excellence Immobilière. Élégance Marocaine. Votre partenaire de confiance pour l'immobilier de prestige au Maroc.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-luxury-black border border-luxury-white/10 hover:border-luxury-gold hover:bg-luxury-gold/10 text-luxury-white/70 hover:text-luxury-gold transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-serif text-lg font-bold text-luxury-white mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-luxury-white/70 hover:text-luxury-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-serif text-lg font-bold text-luxury-white mb-6">Informations Légales</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-luxury-white/70 hover:text-luxury-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-serif text-lg font-bold text-luxury-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                <span className="text-luxury-white/70 text-sm">
                  123 Avenue Mohammed V<br />
                  Casablanca, Maroc
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <a
                  href="tel:+212612345678"
                  className="text-luxury-white/70 hover:text-luxury-gold transition-colors duration-300 text-sm"
                >
                  +212 6 12 34 56 78
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <a
                  href="mailto:contact@kna.ma"
                  className="text-luxury-white/70 hover:text-luxury-gold transition-colors duration-300 text-sm"
                >
                  contact@kna.ma
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-luxury-white/10 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-luxury-white/50 text-sm text-center md:text-left">
              © {currentYear} KNA Agence Immobilière. Tous droits réservés.
            </p>
            <p className="text-luxury-white/50 text-sm text-center md:text-right">
              Conçu avec <span className="text-luxury-gold">excellence</span> au Maroc
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

