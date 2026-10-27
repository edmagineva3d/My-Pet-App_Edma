import React, { useState, useEffect, useMemo, useCallback } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import IllustratedLandscape from './components/IllustratedLandscape'
import BreedSelector from './components/BreedSelector'
import DogImageViewer from './components/DogImageViewer'
import FetchAgainButton from './components/FetchAgainButton'
import DogImageControls from './components/DogImageControls'
import BreedAccordion from './components/BreedAccordion'
import ExploreBreeds from './components/ExploreBreeds'
import FavoriteDogs from './components/FavoriteDogs'
import Footer from './components/Footer'
import ErrorState from './components/ErrorState'
import { useDogBreeds } from './hooks/useDogBreeds'
import { useDogImage } from './hooks/useDogImage'
import { formatBreedLabel } from './services/dogApi'
import type { FavoriteDog } from './types/dog'
import './styles/layout.css'

const FAVORITES_STORAGE_KEY = 'my_pet_app_saved_favorites'

function loadSavedFavorites(): FavoriteDog[] {
  try {
    const raw = localStorage.getItem(FAVORITES_STORAGE_KEY)
    if (raw) {
      return JSON.parse(raw) as FavoriteDog[]
    }
  } catch {
    // fallback if localStorage is disabled or throws
  }
  return []
}

export default function App() {
  const { breeds, loadingBreeds, breedsError, reloadBreeds } = useDogBreeds()
  const [selectedBreed, setSelectedBreed] = useState<string>('corgi/cardigan')
  const { imageUrl, loading, error, thumbnails, fetchAgain, selectThumbnail, retryFetch } =
    useDogImage(selectedBreed)

  const [favorites, setFavorites] = useState<FavoriteDog[]>(loadSavedFavorites)
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false)

  // Persist favorites whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites))
    } catch {
      // storage quota or private browsing
    }
  }, [favorites])

  // Derive human-friendly name for current breed
  const currentBreedLabel = useMemo(() => {
    const found = breeds.find((b) => b.value === selectedBreed)
    if (found) return found.label

    const parts = selectedBreed.split('/')
    if (parts.length === 2) {
      return formatBreedLabel(parts[0], parts[1])
    }
    return formatBreedLabel(selectedBreed)
  }, [breeds, selectedBreed])

  const isCurrentFavorite = useMemo(() => {
    if (!imageUrl) return false
    return favorites.some((f) => f.url === imageUrl)
  }, [favorites, imageUrl])

  const handleToggleFavorite = useCallback(() => {
    if (!imageUrl) return

    setFavorites((prev) => {
      const exists = prev.some((f) => f.url === imageUrl)
      if (exists) {
        return prev.filter((f) => f.url !== imageUrl)
      } else {
        const newFav: FavoriteDog = {
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
          url: imageUrl,
          breed: selectedBreed,
          breedLabel: currentBreedLabel,
          savedAt: Date.now(),
        }
        return [newFav, ...prev]
      }
    })
  }, [imageUrl, selectedBreed, currentBreedLabel])

  const handleRemoveFavorite = useCallback((id: string) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id))
  }, [])

  const handleClearFavorites = useCallback(() => {
    setFavorites([])
  }, [])

  const handleSelectFavoriteCard = useCallback(
    (fav: FavoriteDog) => {
      if (fav.breed && fav.breed !== selectedBreed) {
        setSelectedBreed(fav.breed)
      }
      selectThumbnail(fav.url)
      // Scroll smoothly to showcase viewer
      document.getElementById('showcase-area')?.scrollIntoView({ behavior: 'smooth' })
    },
    [selectedBreed, selectThumbnail]
  )

  const handleSurpriseBreed = useCallback(() => {
    if (!breeds.length) return
    const randomIndex = Math.floor(Math.random() * breeds.length)
    setSelectedBreed(breeds[randomIndex].value)
  }, [breeds])

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app-frame">
      <div className="outer-credit-tag">
        MY PET APP • DOG CEO API EXPLORER
      </div>

      <div className="site-canvas">
        {/* Navigation Bar & Announcement Header */}
        <header className="canvas-header-region">
          <Navbar
            favoritesCount={favorites.length}
            onNavigate={handleScrollTo}
            onToggleFavorites={() => {
              setIsFavoritesOpen((prev) => !prev)
              handleScrollTo('favorites')
            }}
            isFavoritesOpen={isFavoritesOpen}
          />
        </header>

        {/* Illustrated Hero Section */}
        <section className="canvas-hero-region">
          <HeroSection>
            <IllustratedLandscape />
          </HeroSection>
        </section>

        {/* Meadow Editorial & Product Browsing Content Area */}
        <main className="canvas-content-region">
          {/* Meadow Intro Story (matches reference text block) */}
          <section className="meadow-story-block" aria-label="Welcome message">
            <h2 className="intro-story-heading">In the sunny meadows of Petopia...</h2>
            <p className="intro-story-body">
              Every pup has been drawn together by nature's playful strokes! Explore dozens of purebred and mixed-breed dogs from the official Dog CEO API. With every fetch, discover delightful companion traits, save your heart's favorites, and brighten your day with canine joy.
            </p>
          </section>

          {/* Main Dog Showcase & Editorial Controls (Two-Column Product Layout) */}
          <section
            className="dog-product-showcase-layout"
            id="showcase-area"
            aria-label="Dog Image Showcase"
          >
            {/* Left Column: Framed Dog Image Card & 7 Thumbnails */}
            <div className="showcase-left-col">
              <DogImageViewer
                imageUrl={imageUrl}
                breedName={currentBreedLabel}
                loading={loading}
                error={error}
                thumbnails={thumbnails}
                onSelectThumbnail={selectThumbnail}
                onRetry={retryFetch}
              />
            </div>

            {/* Right Column: Editorial Details, Selector & Actions */}
            <div className="showcase-right-col">
              {/* Product-style Header with Watering Can / Paw Badge */}
              <div className="editorial-title-row">
                <div>
                  <h1 className="editorial-breed-title">{currentBreedLabel}</h1>
                  <span className="editorial-breed-subtitle">Petopia Good Dog Collection</span>
                </div>
                {/* Cute yellow watering can / dog bowl badge (matches reference emblem!) */}
                <div className="watering-can-badge" title="Certified Petopia Pup" aria-hidden="true">
                  <svg viewBox="0 0 36 36" width="34" height="34" fill="none">
                    <path
                      d="M 8,14 L 14,28 Q 24,30 28,26 L 30,14 Z"
                      fill="#fad02c"
                      stroke="#3c4722"
                      strokeWidth="2"
                    />
                    {/* Spout */}
                    <path d="M 28,16 L 35,11 L 33,9 L 26,13 Z" fill="#fad02c" stroke="#3c4722" strokeWidth="1.8" />
                    {/* Handle */}
                    <path
                      d="M 10,14 Q 2,12 5,22 Q 8,26 12,26"
                      stroke="#3c4722"
                      strokeWidth="2.2"
                      fill="none"
                    />
                    {/* Little Flower in bowl */}
                    <circle cx="20" cy="21" r="3" fill="#3c4722" />
                  </svg>
                </div>
              </div>

              {/* Price / Status Tag */}
              <div className="editorial-price-tag">
                <span className="price-amount">100% Good Dog</span>
                <span className="price-sub">• Free to love</span>
              </div>

              {/* Choose a Dog Breed Dropdown */}
              <BreedSelector
                breeds={breeds}
                selectedBreed={selectedBreed}
                onSelectBreed={(val) => setSelectedBreed(val)}
                disabled={loading}
                loading={loadingBreeds}
                error={breedsError}
                onRetry={reloadBreeds}
              />

              {/* Primary Action Button ("FETCH AGAIN" - matching reference "Add to Cart") */}
              <div className="action-button-row">
                <FetchAgainButton
                  onClick={fetchAgain}
                  loading={loading}
                  disabled={loading}
                  breedLabel={currentBreedLabel}
                />
              </div>

              {/* Secondary Controls (Favorite, Share Link, Surprise) */}
              <DogImageControls
                isFavorite={isCurrentFavorite}
                onToggleFavorite={handleToggleFavorite}
                imageUrl={imageUrl}
                breedLabel={currentBreedLabel}
                onRandomBreed={handleSurpriseBreed}
                disabled={loading}
              />

              {/* Editorial Description Text (matches reference paragraphs) */}
              <div className="editorial-narrative">
                <p>
                  Step into Petopia and spend your afternoon with the wonderful {currentBreedLabel}! Sourced directly from dog lovers worldwide, this breed brings infinite smiles, playful head-tilts, and loyal companionship.
                </p>

                <div className="editorial-features-box">
                  <span className="features-box-title">Featuring:</span>
                  <ul className="features-list">
                    <li>100% verified good pup according to official standards</li>
                    <li>High-resolution photo fetched live from the Dog CEO API</li>
                    <li>Save to your personal favorites collection anytime</li>
                    <li>One-click link sharing to spread canine smiles with friends</li>
                  </ul>
                </div>
              </div>

              {/* Expandable Accordions (Traits, Heritage, Care) */}
              <BreedAccordion breedName={currentBreedLabel} />
            </div>
          </section>

          {/* Explore More Breeds Shortcuts */}
          <ExploreBreeds
            currentBreed={selectedBreed}
            onSelectBreed={(val) => {
              setSelectedBreed(val)
              handleScrollTo('showcase-area')
            }}
          />

          {/* Favorite Dogs Section */}
          <FavoriteDogs
            favorites={favorites}
            onSelectFavorite={handleSelectFavoriteCard}
            onRemoveFavorite={handleRemoveFavorite}
            onClearAll={handleClearFavorites}
          />
        </main>

        {/* Footer with Dog CEO API Documentation & Credits */}
        <footer className="canvas-footer-region">
          <Footer />
        </footer>
      </div>
    </div>
  )
}
