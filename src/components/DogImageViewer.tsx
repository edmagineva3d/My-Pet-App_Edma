import React, { useState } from 'react'
import { PawPrint, ImageOff, RefreshCw, ZoomIn } from 'lucide-react'
import '../styles/viewer.css'

interface DogImageViewerProps {
  imageUrl: string
  breedName: string
  loading: boolean
  error: string | null
  thumbnails?: string[]
  onSelectThumbnail?: (url: string) => void
  onRetry?: () => void
}

export default function DogImageViewer({
  imageUrl,
  breedName,
  loading,
  error,
  thumbnails = [],
  onSelectThumbnail,
  onRetry,
}: DogImageViewerProps) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  return (
    <div className="dog-viewer-card" aria-label={`Dog photo showcase for ${breedName}`}>
      {/* Outer White Card Matting (matches reference product card) */}
      <div className="viewer-frame">
        <div className="main-image-container">
          {/* Main Dog Image */}
          {imageUrl && !error && (
            <img
              src={imageUrl}
              alt={`Adorable ${breedName} dog looking happy`}
              className={`main-dog-img ${imageLoaded && !loading ? 'loaded' : 'loading'} ${isZoomed ? 'zoomed' : ''}`}
              onLoad={handleImageLoad}
              onClick={() => setIsZoomed((prev) => !prev)}
              loading="eager"
            />
          )}

          {/* Loading Shimmer State */}
          {loading && (
            <div className="image-loading-overlay" aria-live="polite">
              <div className="paw-spinner">
                <PawPrint className="spinner-paw-icon" size={36} />
              </div>
              <span className="loading-text">Fetching a happy {breedName}...</span>
            </div>
          )}

          {/* Error / Fallback State */}
          {error && !loading && (
            <div className="image-error-fallback" role="alert">
              <ImageOff size={42} className="error-dog-icon" />
              <p className="error-title">Woof! Photo couldn't load</p>
              <p className="error-sub">{error}</p>
              {onRetry && (
                <button type="button" className="retry-image-btn" onClick={onRetry}>
                  <RefreshCw size={14} /> Try Another Photo
                </button>
              )}
            </div>
          )}

          {/* Quick Zoom Indicator Badge */}
          {imageUrl && !loading && !error && (
            <button
              type="button"
              className="zoom-hint-badge"
              onClick={() => setIsZoomed((prev) => !prev)}
              title={isZoomed ? 'Zoom out' : 'Click to inspect dog photo'}
              aria-label={isZoomed ? 'Zoom out' : 'Click to inspect dog photo'}
            >
              <ZoomIn size={14} />
            </button>
          )}
        </div>

        {/* Thumbnail Preview Strip below main photo (exactly 7 thumbnails like reference!) */}
        {thumbnails.length > 0 && (
          <div className="thumbnail-strip-wrap">
            <span className="thumbnail-strip-label">RECENT FETCHES & SNAPSHOTS</span>
            <div className="thumbnail-strip" role="group" aria-label="Recent photo gallery">
              {thumbnails.map((thumbUrl, idx) => {
                const isSelected = thumbUrl === imageUrl
                return (
                  <button
                    key={`${thumbUrl}-${idx}`}
                    type="button"
                    className={`thumb-box ${isSelected ? 'active' : ''}`}
                    onClick={() => onSelectThumbnail?.(thumbUrl)}
                    aria-label={`View photo snapshot ${idx + 1}`}
                  >
                    <img
                      src={thumbUrl}
                      alt={`${breedName} thumbnail ${idx + 1}`}
                      className="thumb-img"
                      loading="lazy"
                    />
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
