import Header from '@/components/layout/Header'
import HeroSection from '@/components/sections/HeroSection'
import LogoSection from '@/components/sections/LogoSection'
import AdvancedSearchBar from '@/components/search/AdvancedSearchBar'
import FeaturedProperties from '@/components/sections/FeaturedProperties'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Testimonials from '@/components/sections/Testimonials'
import ContactCTA from '@/components/sections/ContactCTA'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <LogoSection />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <AdvancedSearchBar />
      </div>
      <FeaturedProperties />
      <WhyChooseUs />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  )
}

