import React from 'react'
import { Heart, Trash2, ExternalLink, Sparkles } from 'lucide-react'
import type { FavoriteDog } from '../types/dog'
import '../styles/favorites.css'

interface FavoriteDogsProps {
  favorites: FavoriteDog[]
  onSelectFavorite: (favorite: FavoriteDog) => void
  onRemoveFavorite: (id: string) => void
  onClearAll?: () => void
}

export default function FavoriteDogs({
  favorites,
  onSelectFavorite,
  onRemoveFavorite,
  onClearAll,
}: FavoriteDogsProps) {
  return (
    <section className="favorites-section" id="favorites" aria-label="Your Favorite Dogs">
      <div className="favorites-header">
        <div className="favorites-title-wrap">
          <div className="favorites-icon-pill">
            <Heart size={16} fill="#e05353" color="#e05353" />
          </div>
          <div>
            <h2 className="favorites-heading">My Favorite Dogs</h2>
            <p className="favorites-subtitle">
              Saved directly to your browser for quick cuddles anytime
            </p>
          </div>
        </div>

        {favorites.length > 0 && onClearAll && (
          <button
            type="button"
            className="clear-all-favs-btn"
            onClick={onClearAll}
            title="Clear all saved favorites"
          >
            Clear All
          </button>
        )}
      </div>

      {favorites.length === 0 ? (
        <div className="empty-favorites-box">
          <div className="empty-heart-ring">
            <Heart size={32} strokeWidth={1.8} className="empty-heart-icon" />
          </div>
          <h3 className="empty-fav-title">No favorite pups yet!</h3>
          <p className="empty-fav-desc">
            Tap the heart button on any dog photo to save your favorite furry companions right here.
          </p>
        </div>
      ) : (
        <div className="favorites-grid">
          {favorites.map((fav) => (
            <div key={fav.id} className="favorite-card">
              <div className="fav-image-wrap">
                <img
                  src={fav.url}
                  alt={`Saved ${fav.breedLabel}`}
                  className="fav-card-img"
                  loading="lazy"
                />
                <button
                  type="button"
                  className="fav-remove-badge"
                  onClick={() => onRemoveFavorite(fav.id)}
                  title={`Remove ${fav.breedLabel} from favorites`}
                  aria-label={`Remove ${fav.breedLabel} from favorites`}
                >
                  <Trash2 size={13} />
                </button>
              </div>

              <div className="fav-card-info">
                <span className="fav-card-breed">{fav.breedLabel}</span>
                <button
                  type="button"
                  className="fav-view-btn"
                  onClick={() => onSelectFavorite(fav)}
                >
                  <span>View photo</span>
                  <ExternalLink size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
