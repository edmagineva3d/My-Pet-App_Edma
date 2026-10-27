import React, { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import IllustratedLandscape from './components/IllustratedLandscape'
import './styles/layout.css'

export default function App() {
  const [favoritesCount, setFavoritesCount] = useState(0)
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false)

  return (
    <div className="app-frame">
      <div className="outer-credit-tag">
        MY PET APP • DOG CEO API EXPLORER
      </div>

      <div className="site-canvas">
        <header className="canvas-header-region">
          <Navbar
            favoritesCount={favoritesCount}
            onToggleFavorites={() => setIsFavoritesOpen(prev => !prev)}
            isFavoritesOpen={isFavoritesOpen}
          />
        </header>

        <section className="canvas-hero-region">
          <HeroSection>
            <IllustratedLandscape />
          </HeroSection>
        </section>

        <main className="canvas-content-region">
          {/* Editorial Dog Image Browsing Section */}
        </main>

        <footer className="canvas-footer-region">
          {/* Footer */}
        </footer>
      </div>
    </div>
  )
}
