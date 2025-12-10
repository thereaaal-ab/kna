import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-luxury-black">
      <Header />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-6xl sm:text-8xl font-bold text-luxury-white mb-4">
            404
          </h1>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-luxury-white mb-4">
            Propriété <span className="text-luxury-gold">Introuvable</span>
          </h2>
          <p className="text-luxury-white/70 text-lg mb-8 max-w-2xl mx-auto">
            La propriété que vous recherchez n'existe pas ou a été supprimée.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-luxury-gold hover:bg-luxury-gold-light text-luxury-black font-semibold rounded-lg transition-all duration-300 luxury-shadow-gold hover:shadow-xl"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}

