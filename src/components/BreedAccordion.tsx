import { useState } from 'react'
import '../styles/accordion.css'

interface BreedAccordionProps {
  breedName: string
}

export default function BreedAccordion({ breedName }: BreedAccordionProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    traits: true,
    heritage: false,
    care: false,
  })

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className="editorial-accordions" aria-label={`${breedName} details and traits`}>
      {/* 1. Features & Traits */}
      <div className={`accordion-item ${openSections.traits ? 'open' : ''}`}>
        <button
          type="button"
          className="accordion-trigger"
          onClick={() => toggleSection('traits')}
          aria-expanded={openSections.traits}
        >
          <div className="accordion-title-wrap">
            <span className="accordion-icon-badge">🐾</span>
            <span className="accordion-title">Signature Traits & Temperament</span>
          </div>
          <span className="accordion-toggle-symbol">
            {openSections.traits ? '−' : '+'}
          </span>
        </button>

        {openSections.traits && (
          <div className="accordion-body">
            <p>
              {breedName}s are celebrated for their affectionate demeanor, high intelligence, and playful curiosity. Whether accompanying their humans on a meadow hike or curling up for evening snuggles, they radiate warmth and cheerfulness.
            </p>
            <ul className="traits-bullet-list">
              <li><strong>Loyalty Score:</strong> 10/10 unconditional affection</li>
              <li><strong>Energy Level:</strong> Playful & spirited</li>
              <li><strong>Good with Families:</strong> Excellent companion pup</li>
            </ul>
          </div>
        )}
      </div>

      {/* 2. Breed Facts & Origin (like "Materials" in reference) */}
      <div className={`accordion-item ${openSections.heritage ? 'open' : ''}`}>
        <button
          type="button"
          className="accordion-trigger"
          onClick={() => toggleSection('heritage')}
          aria-expanded={openSections.heritage}
        >
          <div className="accordion-title-wrap">
            <span className="accordion-icon-badge">🦴</span>
            <span className="accordion-title">Breed Heritage & Facts</span>
          </div>
          <span className="accordion-toggle-symbol">
            {openSections.heritage ? '−' : '+'}
          </span>
        </button>

        {openSections.heritage && (
          <div className="accordion-body">
            <p>
              Cataloged and verified by the open-source Dog CEO API. Each photo is retrieved from public domain dog archives curated by dog enthusiasts worldwide.
            </p>
            <p className="sub-fact">
              <strong>Official API Identifier:</strong> <code>/breed/{breedName.toLowerCase().replace(/\s+/g, '/')}/images/random</code>
            </p>
          </div>
        )}
      </div>

      {/* 3. Care & Cuddle Tips (like "Dimensions" in reference) */}
      <div className={`accordion-item ${openSections.care ? 'open' : ''}`}>
        <button
          type="button"
          className="accordion-trigger"
          onClick={() => toggleSection('care')}
          aria-expanded={openSections.care}
        >
          <div className="accordion-title-wrap">
            <span className="accordion-icon-badge">💖</span>
            <span className="accordion-title">Care & Happiness Guide</span>
          </div>
          <span className="accordion-toggle-symbol">
            {openSections.care ? '−' : '+'}
          </span>
        </button>

        {openSections.care && (
          <div className="accordion-body">
            <p>
              Keep your {breedName} flourishing with balanced nutrition, daily walkies, regular brushies, and plenty of squeaky toys. Remember: a tired dog is a happy dog!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
