import { useState } from 'react'
import { Heart, Share2, Shuffle, Check, Sparkles } from 'lucide-react'
import '../styles/controls.css'

interface DogImageControlsProps {
  isFavorite: boolean
  onToggleFavorite: () => void
  imageUrl: string
  breedLabel: string
  onRandomBreed?: () => void
  disabled?: boolean
}

export default function DogImageControls({
  isFavorite,
  onToggleFavorite,
  imageUrl,
  breedLabel,
  onRandomBreed,
  disabled = false,
}: DogImageControlsProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = async () => {
    if (!imageUrl) return
    try {
      await navigator.clipboard.writeText(imageUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
  }

  return (
    <div className="dog-controls-toolbar">
      {/* Favorite Toggle Button */}
      <button
        type="button"
        className={`ctrl-btn fav-toggle-btn ${isFavorite ? 'is-fav' : ''}`}
        onClick={onToggleFavorite}
        disabled={disabled || !imageUrl}
        title={isFavorite ? `Remove ${breedLabel} from favorites` : `Add ${breedLabel} to favorites`}
        aria-label={isFavorite ? `Remove ${breedLabel} from favorites` : `Add ${breedLabel} to favorites`}
      >
        <Heart
          size={17}
          strokeWidth={2.4}
          fill={isFavorite ? '#e05353' : 'none'}
          color={isFavorite ? '#e05353' : 'currentColor'}
        />
        <span className="ctrl-btn-label">
          {isFavorite ? 'Saved Pup' : 'Favorite'}
        </span>
      </button>

      {/* Copy Image Link */}
      <button
        type="button"
        className="ctrl-btn copy-link-btn"
        onClick={handleCopyLink}
        disabled={disabled || !imageUrl}
        title="Copy dog image URL"
        aria-label="Copy dog image link"
      >
        {copied ? (
          <>
            <Check size={16} color="#357a38" />
            <span className="ctrl-btn-label copied-text">Copied!</span>
          </>
        ) : (
          <>
            <Share2 size={16} strokeWidth={2.2} />
            <span className="ctrl-btn-label">Share Link</span>
          </>
        )}
      </button>

      {/* Random / Surprise Breed Button */}
      {onRandomBreed && (
        <button
          type="button"
          className="ctrl-btn surprise-btn"
          onClick={onRandomBreed}
          disabled={disabled}
          title="Pick a surprise random breed"
          aria-label="Surprise breed"
        >
          <Shuffle size={16} strokeWidth={2.2} />
          <span className="ctrl-btn-label">Surprise Pup</span>
        </button>
      )}

      {/* Verified Badge */}
      <div className="verified-dog-badge" title="Verified by Petopia Standards">
        <Sparkles size={13} className="sparkle-gold" />
        <span>100% Good Dog</span>
      </div>
    </div>
  )
}
