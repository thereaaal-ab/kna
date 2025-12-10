import { notFound } from 'next/navigation'
import { getPropertyById } from '@/lib/properties'
import PropertyGallery from '@/components/property/PropertyGallery'
import PropertyHeader from '@/components/property/PropertyHeader'
import PropertyDescription from '@/components/property/PropertyDescription'
import FeaturesGrid from '@/components/property/FeaturesGrid'
import PropertyHighlights from '@/components/property/PropertyHighlights'
import ContactCard from '@/components/property/ContactCard'
import MapSection from '@/components/property/MapSection'
import RelatedProperties from '@/components/property/RelatedProperties'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

interface PropertyPageProps {
  params: {
    id: string
  }
}

export default function PropertyPage({ params }: PropertyPageProps) {
  const property = getPropertyById(params.id)

  if (!property) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-luxury-black">
      <Header />
      <div className="pt-20">
        {/* Hero Gallery */}
        <PropertyGallery images={property.images} title={property.title} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <PropertyHeader property={property} />
              <PropertyDescription description={property.description} />
              <FeaturesGrid features={property.features} />
              {property.highlights && property.highlights.length > 0 && (
                <PropertyHighlights highlights={property.highlights} />
              )}
              {property.coordinates && (
                <MapSection
                  coordinates={property.coordinates}
                  location={property.location}
                />
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ContactCard propertyId={property.id} propertyTitle={property.title} />
              </div>
            </div>
          </div>

          {/* Related Properties */}
          <div className="mt-16 lg:mt-24">
            <RelatedProperties currentPropertyId={property.id} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

