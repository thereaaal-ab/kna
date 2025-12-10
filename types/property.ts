export interface Property {
  id: string
  title: string
  location: string
  price: string
  priceType: 'sale' | 'rent'
  status: 'À Vendre' | 'À Louer'
  type: 'Villa' | 'Maison' | 'Appartement' | 'Penthouse' | 'Terrain' | 'Bureau' | 'Commerce'
  description: string
  images: string[]
  features: {
    surfaceInterieure?: number // m²
    surfaceTerrain?: number // m²
    chambres: number
    sallesDeBain: number
    piscine?: boolean
    jardin?: boolean
    garage?: boolean | number // number of parking spaces
    etage?: number
    ascenseur?: boolean
    climatisation?: boolean
    chauffage?: boolean
    securite?: boolean
  }
  highlights?: string[]
  coordinates?: {
    lat: number
    lng: number
  }
  reference: string
  createdAt?: string
  updatedAt?: string
}

