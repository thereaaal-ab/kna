'use client'

import { motion } from 'framer-motion'
import {
  Home,
  MapPin,
  Bed,
  Bath,
  Droplets,
  TreePine,
  Car,
  Building2,
  Wind,
  Flame,
  Shield,
  ArrowUpDown,
} from 'lucide-react'
import { Property } from '@/types/property'

interface FeaturesGridProps {
  features: Property['features']
}

export default function FeaturesGrid({ features }: FeaturesGridProps) {
  const featureItems = [
    features.surfaceInterieure && {
      icon: <Home className="w-6 h-6" />,
      label: 'Surface intérieure',
      value: `${features.surfaceInterieure} m²`,
    },
    features.surfaceTerrain && {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Surface terrain',
      value: `${features.surfaceTerrain} m²`,
    },
    {
      icon: <Bed className="w-6 h-6" />,
      label: 'Chambres',
      value: features.chambres.toString(),
    },
    {
      icon: <Bath className="w-6 h-6" />,
      label: 'Salles de bain',
      value: features.sallesDeBain.toString(),
    },
    features.etage && {
      icon: <Building2 className="w-6 h-6" />,
      label: 'Étage',
      value: features.etage.toString(),
    },
    features.piscine && {
      icon: <Droplets className="w-6 h-6" />,
      label: 'Piscine',
      value: 'Oui',
    },
    features.jardin && {
      icon: <TreePine className="w-6 h-6" />,
      label: 'Jardin',
      value: 'Oui',
    },
    features.garage && {
      icon: <Car className="w-6 h-6" />,
      label: typeof features.garage === 'number' ? 'Places de parking' : 'Garage',
      value: typeof features.garage === 'number' ? features.garage.toString() : 'Oui',
    },
    features.ascenseur && {
      icon: <ArrowUpDown className="w-6 h-6" />,
      label: 'Ascenseur',
      value: 'Oui',
    },
    features.climatisation && {
      icon: <Wind className="w-6 h-6" />,
      label: 'Climatisation',
      value: 'Oui',
    },
    features.chauffage && {
      icon: <Flame className="w-6 h-6" />,
      label: 'Chauffage',
      value: 'Oui',
    },
    features.securite && {
      icon: <Shield className="w-6 h-6" />,
      label: 'Sécurité',
      value: 'Oui',
    },
  ].filter(Boolean) as Array<{
    icon: React.ReactNode
    label: string
    value: string
  }>

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-luxury-white">
        Caractéristiques <span className="text-luxury-gold">Principales</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {featureItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-luxury-charcoal rounded-xl p-4 sm:p-6 border border-luxury-white/10 hover:border-luxury-gold/30 transition-all duration-300 luxury-shadow"
          >
            <div className="text-luxury-gold mb-3">{item.icon}</div>
            <p className="text-luxury-white/60 text-sm mb-1">{item.label}</p>
            <p className="text-luxury-white font-semibold text-lg">{item.value}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

