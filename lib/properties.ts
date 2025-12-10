import { Property } from '@/types/property'

// Sample property data - In production, this would come from an API or database
export const properties: Property[] = [
  {
    id: 'KNA-001',
    title: 'Villa Prestige avec Vue Panoramique',
    location: 'Casablanca, Anfa',
    price: '12,500,000',
    priceType: 'sale',
    status: 'À Vendre',
    type: 'Villa',
    reference: 'KNA-001',
    description: `Cette magnifique villa de prestige située dans le quartier exclusif d'Anfa à Casablanca représente l'excellence immobilière. Construite sur un terrain de 800m², cette propriété d'exception offre un espace de vie de 450m² réparti sur deux niveaux.

La villa dispose d'un grand salon avec cheminée, d'une salle à manger spacieuse, d'une cuisine moderne entièrement équipée, et de 5 chambres dont une suite parentale avec dressing et salle de bain privative. Chaque détail a été pensé pour offrir un confort optimal.

La propriété bénéficie d'un jardin paysager de 600m² avec piscine, d'un garage pour 2 voitures, et d'un système de sécurité avancé. L'architecture moderne allie élégance et fonctionnalité, avec de grandes baies vitrées offrant une luminosité exceptionnelle.

Située à proximité des meilleures écoles internationales, des centres commerciaux et des plages, cette villa représente une opportunité unique d'acquérir une propriété de prestige dans l'un des quartiers les plus recherchés de Casablanca.`,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80',
    ],
    features: {
      surfaceInterieure: 450,
      surfaceTerrain: 800,
      chambres: 5,
      sallesDeBain: 4,
      piscine: true,
      jardin: true,
      garage: 2,
      etage: 2,
      climatisation: true,
      chauffage: true,
      securite: true,
    },
    highlights: [
      'Vue panoramique exceptionnelle',
      'Quartier prestigieux et sécurisé',
      'Architecture moderne de haute qualité',
      'Proche des écoles internationales',
      'Jardin paysager avec piscine',
    ],
    coordinates: {
      lat: 33.5731,
      lng: -7.5898,
    },
  },
  {
    id: 'KNA-002',
    title: 'Penthouse Moderne en Bord de Mer',
    location: 'Rabat, Hay Riad',
    price: '8,900,000',
    priceType: 'sale',
    status: 'À Vendre',
    type: 'Penthouse',
    reference: 'KNA-002',
    description: `Exceptionnel penthouse situé dans une résidence de standing en bord de mer à Rabat. Cette propriété unique offre une vue imprenable sur l'océan Atlantique et bénéficie d'un accès direct à la plage.

Le penthouse s'étend sur 320m² et comprend un vaste séjour avec terrasse panoramique de 80m², une cuisine moderne ouverte, 4 chambres dont une suite parentale, et 3 salles de bain. Les finitions sont de très haut niveau avec des matériaux nobles.

La résidence dispose de services hôteliers : conciergerie, piscine, salle de sport, et parking privé. Idéal pour les amateurs de luxe et de tranquillité, à quelques minutes du centre-ville de Rabat.`,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80',
    ],
    features: {
      surfaceInterieure: 320,
      chambres: 4,
      sallesDeBain: 3,
      garage: 2,
      etage: 12,
      ascenseur: true,
      climatisation: true,
      chauffage: true,
      securite: true,
    },
    highlights: [
      'Vue mer exceptionnelle',
      'Terrasse panoramique de 80m²',
      'Accès direct à la plage',
      'Services hôteliers inclus',
      'Résidence de standing',
    ],
    coordinates: {
      lat: 34.0209,
      lng: -6.8416,
    },
  },
  {
    id: 'KNA-003',
    title: 'Maison de Luxe avec Jardin Privé',
    location: 'Marrakech, Palmeraie',
    price: '15,200,000',
    priceType: 'sale',
    status: 'À Vendre',
    type: 'Maison',
    reference: 'KNA-003',
    description: `Superbe maison de maître située dans la prestigieuse Palmeraie de Marrakech. Cette propriété d'exception s'étend sur un terrain de 1000m² avec un jardin luxuriant et une piscine de 12m.

La maison de 580m² comprend un grand salon avec cheminée marocaine, une salle à manger, une cuisine équipée, 6 chambres dont 2 suites, 5 salles de bain, un bureau, et un hammam privé. L'architecture allie tradition marocaine et modernité.

Le jardin paysager de 800m² est un véritable havre de paix avec oliviers, palmiers, et espaces de détente. Garage pour 3 voitures, système de sécurité, et domotique complète.`,
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1920&q=80',
    ],
    features: {
      surfaceInterieure: 580,
      surfaceTerrain: 1000,
      chambres: 6,
      sallesDeBain: 5,
      piscine: true,
      jardin: true,
      garage: 3,
      climatisation: true,
      chauffage: true,
      securite: true,
    },
    highlights: [
      'Palmeraie de Marrakech',
      'Jardin luxuriant de 800m²',
      'Hammam privé',
      'Architecture traditionnelle et moderne',
      'Domotique complète',
    ],
    coordinates: {
      lat: 31.6295,
      lng: -7.9811,
    },
  },
  {
    id: 'KNA-004',
    title: 'Appartement Élégant Centre-Ville',
    location: 'Tanger, Centre',
    price: '45,000',
    priceType: 'rent',
    status: 'À Louer',
    type: 'Appartement',
    reference: 'KNA-004',
    description: `Magnifique appartement de standing en location dans le centre-ville de Tanger. Situé dans une résidence récente et sécurisée, cet appartement de 180m² offre un confort moderne et une localisation exceptionnelle.

L'appartement comprend un séjour lumineux avec balcon, une cuisine équipée, 3 chambres, 2 salles de bain, et un dressing. Les finitions sont soignées avec parquet, double vitrage, et climatisation réversible.

Idéalement situé à proximité des commerces, restaurants, et plages. Parking privé inclus. Location meublée ou non meublée selon demande.`,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1920&q=80',
    ],
    features: {
      surfaceInterieure: 180,
      chambres: 3,
      sallesDeBain: 2,
      garage: 1,
      etage: 5,
      ascenseur: true,
      climatisation: true,
      chauffage: true,
      securite: true,
    },
    highlights: [
      'Centre-ville de Tanger',
      'Résidence récente et sécurisée',
      'Proche commerces et plages',
      'Location meublée possible',
      'Parking privé inclus',
    ],
    coordinates: {
      lat: 35.7595,
      lng: -5.8339,
    },
  },
]

export function getPropertyById(id: string): Property | undefined {
  return properties.find((property) => property.id === id)
}

export function getRelatedProperties(currentId: string, limit: number = 3): Property[] {
  const currentProperty = getPropertyById(currentId)
  if (!currentProperty) return []

  return properties
    .filter((p) => p.id !== currentId && p.type === currentProperty.type)
    .slice(0, limit)
}

