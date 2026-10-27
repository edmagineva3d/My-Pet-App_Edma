import React from 'react'
import { AlertCircle, RefreshCw, HelpCircle } from 'lucide-react'
import '../styles/error.css'

interface ErrorStateProps {
  title?: string
  message: string
  breedName?: string
  onRetry?: () => void
  isRetrying?: boolean
}

export default function ErrorState({
  title = 'Ruff! Something went wrong',
  message,
  breedName,
  onRetry,
  isRetrying = false,
}: ErrorStateProps) {
  return (
    <div className="error-card-state" role="alert">
      <div className="error-icon-badge">
        <AlertCircle size={28} className="error-badge-icon" />
      </div>

      <div className="error-text-content">
        <h3 className="error-heading">{title}</h3>
        <p className="error-description">
          {message || `We couldn't reach the Dog CEO API for ${breedName || 'this breed'}. Please verify your connection.`}
        </p>

        {breedName && (
          <p className="error-breed-hint">
            Current selection: <strong>{breedName}</strong> (will be preserved on retry)
          </p>
        )}
      </div>

      <div className="error-actions">
        {onRetry && (
          <button
            type="button"
            className="error-retry-action"
            onClick={onRetry}
            disabled={isRetrying}
            aria-label="Retry fetching dog photo"
          >
            <RefreshCw size={14} className={isRetrying ? 'spinning' : ''} />
            <span>{isRetrying ? 'Retrying...' : 'Try Again'}</span>
          </button>
        )}

        <a
          href="https://dog.ceo/dog-api/documentation/"
          target="_blank"
          rel="noreferrer"
          className="error-docs-link"
        >
          <HelpCircle size={14} />
          <span>API Status & Docs</span>
        </a>
      </div>
    </div>
  )
}
