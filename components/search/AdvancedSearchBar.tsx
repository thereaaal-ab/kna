'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'

interface SearchFilters {
  propertyId: string
  propertyType: string
  propertyStatus: string
  location: string
}

export default function AdvancedSearchBar() {
  const [filters, setFilters] = useState<SearchFilters>({
    propertyId: '',
    propertyType: '',
    propertyStatus: '',
    location: '',
  })

  const propertyTypes = [
    'Tous les types',
    'Villa',
    'Maison',
    'Appartement',
    'Penthouse',
    'Terrain',
    'Bureau',
    'Commerce',
  ]

  const propertyStatuses = [
    'Tous les statuts',
    'À Vendre',
    'À Louer',
    'Vente ou Location',
  ]

  const locations = [
    'Toutes les régions',
    'Nord',
    'Sud',
    'Est',
    'Ouest',
    'Centre',
  ]

  const handleInputChange = (field: keyof SearchFilters, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }))
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log('Search filters:', filters)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      <form
        onSubmit={handleSearch}
        className="glass-morphism rounded-2xl p-6 sm:p-8 luxury-shadow"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Property ID Input */}
          <div className="lg:col-span-1">
            <label
              htmlFor="propertyId"
              className="block text-sm font-medium text-luxury-white/80 mb-2"
            >
              ID Propriété
            </label>
            <input
              type="text"
              id="propertyId"
              value={filters.propertyId}
              onChange={(e) => handleInputChange('propertyId', e.target.value)}
              placeholder="Ex: KNA-001"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-luxury-white placeholder:text-luxury-white/40 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all"
            />
          </div>

          {/* Property Type Dropdown */}
          <div className="lg:col-span-1">
            <label
              htmlFor="propertyType"
              className="block text-sm font-medium text-luxury-white/80 mb-2"
            >
              Type
            </label>
            <select
              id="propertyType"
              value={filters.propertyType}
              onChange={(e) => handleInputChange('propertyType', e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-luxury-white focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all appearance-none cursor-pointer"
            >
              {propertyTypes.map((type) => (
                <option key={type} value={type} className="bg-luxury-charcoal">
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Property Status Dropdown */}
          <div className="lg:col-span-1">
            <label
              htmlFor="propertyStatus"
              className="block text-sm font-medium text-luxury-white/80 mb-2"
            >
              Statut
            </label>
            <select
              id="propertyStatus"
              value={filters.propertyStatus}
              onChange={(e) => handleInputChange('propertyStatus', e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-luxury-white focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all appearance-none cursor-pointer"
            >
              {propertyStatuses.map((status) => (
                <option key={status} value={status} className="bg-luxury-charcoal">
                  {status}
                </option>
              ))}
            </select>
          </div>

          {/* Location Dropdown */}
          <div className="lg:col-span-1">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-luxury-white/80 mb-2"
            >
              Localisation
            </label>
            <select
              id="location"
              value={filters.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-luxury-white focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all appearance-none cursor-pointer"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc} className="bg-luxury-charcoal">
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <div className="lg:col-span-1 flex items-end">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-luxury-gold hover:bg-luxury-gold-light text-luxury-black font-semibold rounded-lg transition-all duration-300 luxury-shadow-gold hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              <span>Rechercher</span>
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  )
}

