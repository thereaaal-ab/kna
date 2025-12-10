'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Users, TrendingUp, Clock, Star } from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Excellence Reconnue',
    description: 'Plus de 15 ans d\'expérience dans le marché immobilier de luxe au Maroc',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Confiance Totale',
    description: 'Transactions sécurisées et accompagnement personnalisé à chaque étape',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Expertise Premium',
    description: 'Équipe de professionnels dédiés à votre satisfaction et réussite',
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Portfolio Exclusif',
    description: 'Accès privilégié aux propriétés les plus prestigieuses du marché',
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Service Rapide',
    description: 'Réactivité et efficacité pour répondre à vos besoins immédiats',
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: 'Qualité Garantie',
    description: 'Sélection rigoureuse de biens répondant aux plus hauts standards',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 bg-luxury-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-luxury-white mb-4">
            Pourquoi Nous <span className="text-luxury-gold">Choisir</span>
          </h2>
          <p className="text-luxury-white/70 text-lg max-w-2xl mx-auto">
            L'excellence immobilière au service de vos ambitions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 mb-6 group-hover:bg-luxury-gold/20 transition-all duration-300">
                <div className="text-luxury-gold">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-luxury-white mb-4 group-hover:text-luxury-gold transition-colors">
                {feature.title}
              </h3>
              <p className="text-luxury-white/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

