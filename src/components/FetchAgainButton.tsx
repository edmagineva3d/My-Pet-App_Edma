import React from 'react'
import { RefreshCw, Sparkles } from 'lucide-react'
import '../styles/button.css'

interface FetchAgainButtonProps {
  onClick: () => void
  loading?: boolean
  disabled?: boolean
  breedLabel?: string
}

export default function FetchAgainButton({
  onClick,
  loading = false,
  disabled = false,
  breedLabel,
}: FetchAgainButtonProps) {
  return (
    <button
      type="button"
      className={`fetch-again-button ${loading ? 'is-loading' : ''}`}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={`Fetch another photo of ${breedLabel || 'this breed'}`}
    >
      <div className="button-inner-content">
        <RefreshCw
          size={16}
          strokeWidth={2.5}
          className={`fetch-icon ${loading ? 'spinning' : ''}`}
        />
        <span className="button-text">
          {loading ? 'FETCHING NEW PUP...' : 'FETCH AGAIN'}
        </span>
        <span className="button-divider">•</span>
        <span className="button-breed-tag">
          {loading ? 'WAIT A SEC' : 'NEW PHOTO 🐾'}
        </span>
      </div>

      <Sparkles size={14} className="button-sparkle-decor" aria-hidden="true" />
    </button>
  )
}
