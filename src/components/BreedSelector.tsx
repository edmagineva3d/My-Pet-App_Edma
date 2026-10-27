import { useId, type ChangeEvent } from 'react'
import { ChevronDown, Sparkles, AlertCircle, RefreshCw } from 'lucide-react'
import type { BreedOption } from '../types/dog'
import '../styles/selector.css'

interface BreedSelectorProps {
  breeds: BreedOption[]
  selectedBreed: string
  onSelectBreed: (breedValue: string) => void
  disabled?: boolean
  loading?: boolean
  error?: string | null
  onRetry?: () => void
}

export default function BreedSelector({
  breeds,
  selectedBreed,
  onSelectBreed,
  disabled = false,
  loading = false,
  error = null,
  onRetry,
}: BreedSelectorProps) {
  const selectId = useId()

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onSelectBreed(e.target.value)
  }

  return (
    <div className="breed-selector-container">
      <div className="breed-selector-header">
        <label htmlFor={selectId} className="breed-selector-label">
          <Sparkles size={14} className="label-sparkle-icon" />
          Choose a Dog Breed
        </label>
        <span className="breed-count-badge">
          {loading ? 'Loading breeds...' : `${breeds.length} breeds available`}
        </span>
      </div>

      <div className="select-wrapper">
        <select
          id={selectId}
          value={selectedBreed}
          onChange={handleChange}
          disabled={disabled || loading}
          className="breed-dropdown"
          aria-label="Choose a dog breed from Dog CEO API"
        >
          {breeds.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <div className="select-chevron-wrap" aria-hidden="true">
          <ChevronDown size={18} strokeWidth={2.4} />
        </div>
      </div>

      {error && (
        <div className="breed-load-error" role="alert">
          <AlertCircle size={14} />
          <span>Could not refresh breed list. Showing popular presets.</span>
          {onRetry && (
            <button
              type="button"
              className="retry-breeds-btn"
              onClick={onRetry}
              aria-label="Retry loading breeds"
            >
              <RefreshCw size={12} /> Retry
            </button>
          )}
        </div>
      )}
    </div>
  )
}
