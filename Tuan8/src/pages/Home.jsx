import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/home/HeroSection'
import SummerRecipes from '../components/home/SummerRecipes'
import RecipesWithVideos from '../components/home/RecipesWithVideos'
import EditorsPick from '../components/home/EditorsPick'
import LoginModal from '../components/modals/LoginModal'
import DiscoverModal from '../components/modals/DiscoverModal'

export default function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showDiscoverModal, setShowDiscoverModal] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onLoginClick={() => setShowLoginModal(true)}
        onSubscribeClick={() => setShowDiscoverModal(true)}
      />
      
      <main>
        <HeroSection />
        <SummerRecipes />
        <RecipesWithVideos />
        <EditorsPick />
      </main>

      <Footer />

      {/* Modals */}
      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
      {showDiscoverModal && (
        <DiscoverModal onClose={() => setShowDiscoverModal(false)} />
      )}
    </div>
  )
}
