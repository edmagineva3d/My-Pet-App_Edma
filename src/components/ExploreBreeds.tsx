import React from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'
import '../styles/explore.css'

interface ExploreBreedsProps {
  onSelectBreed: (breedValue: string) => void
  currentBreed: string
}

const POPULAR_CURATED_BREEDS = [
  { value: 'corgi/cardigan', label: 'Cardigan Corgi', emoji: '🦊', desc: 'Short legs, huge personality' },
  { value: 'retriever/golden', label: 'Golden Retriever', emoji: '🦮', desc: 'Gentle, friendly, intelligent' },
  { value: 'husky', label: 'Husky', emoji: '🐺', desc: 'Vocal, energetic, snowy adventurer' },
  { value: 'pug', label: 'Pug', emoji: '🐶', desc: 'Charming, mischievous, wrinkled' },
  { value: 'beagle', label: 'Beagle', emoji: '🐕', desc: 'Curious hound with merry ears' },
  { value: 'shiba', label: 'Shiba Inu', emoji: '🦊', desc: 'Spirited, alert, doge legend' },
  { value: 'pomeranian', label: 'Pomeranian', emoji: '🦁', desc: 'Fluffy toy lion with happy strut' },
  { value: 'samoyed', label: 'Samoyed', emoji: '🐻', desc: 'Smiling cloud dog from the north' },
]

export default function ExploreBreeds({ onSelectBreed, currentBreed }: ExploreBreedsProps) {
  return (
    <section className="explore-section" id="explorer" aria-label="Explore Dog Breeds">
      <div className="explore-header">
        <div className="explore-title-box">
          <span className="section-eyebrow">
            <Sparkles size={13} className="eyebrow-sparkle" />
            CURATED SELECTION
          </span>
          <h2 className="explore-heading">Explore Popular Dog Breeds</h2>
        </div>
        <p className="explore-desc">
          Click any breed card below to immediately switch the main viewer and fetch its newest photo.
        </p>
      </div>

      <div className="explore-grid">
        {POPULAR_CURATED_BREEDS.map((breed) => {
          const isSelected = currentBreed === breed.value
          return (
            <button
              key={breed.value}
              type="button"
              className={`breed-chip-card ${isSelected ? 'active' : ''}`}
              onClick={() => onSelectBreed(breed.value)}
              aria-label={`Select ${breed.label}`}
            >
              <div className="chip-emoji-wrap">{breed.emoji}</div>
              <div className="chip-text-wrap">
                <span className="chip-name">{breed.label}</span>
                <span className="chip-desc">{breed.desc}</span>
              </div>
              <ArrowRight size={14} className="chip-arrow" />
            </button>
          )
        })}
      </div>
    </section>
  )
}
