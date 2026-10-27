import React from 'react'

export default function DogThemedDecor() {
  return (
    <div className="dog-decorations-layer" aria-hidden="true">
      {/* Floating Paw Print 1 */}
      <div className="decor-item decor-paw paw-pos-1">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#526435" opacity="0.65">
          <ellipse cx="12" cy="15" rx="6" ry="5" />
          <circle cx="6" cy="9" r="2.4" />
          <circle cx="10" cy="6" r="2.4" />
          <circle cx="14" cy="6" r="2.4" />
          <circle cx="18" cy="9" r="2.4" />
        </svg>
      </div>

      {/* Floating Paw Print 2 */}
      <div className="decor-item decor-paw paw-pos-2">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#526435" opacity="0.5">
          <ellipse cx="12" cy="15" rx="6" ry="5" />
          <circle cx="6" cy="9" r="2.4" />
          <circle cx="10" cy="6" r="2.4" />
          <circle cx="14" cy="6" r="2.4" />
          <circle cx="18" cy="9" r="2.4" />
        </svg>
      </div>

      {/* Floating Bone */}
      <div className="decor-item decor-bone bone-pos-1">
        <svg viewBox="0 0 34 16" width="28" height="14" fill="#fcf8ef" stroke="#3c4722" strokeWidth="1.8">
          <rect x="6" y="5" width="22" height="6" rx="2" fill="#fcf8ef" />
          <circle cx="6" cy="4" r="3.2" />
          <circle cx="6" cy="12" r="3.2" />
          <circle cx="28" cy="4" r="3.2" />
          <circle cx="28" cy="12" r="3.2" />
        </svg>
      </div>

      {/* Little Daisy Flower */}
      <div className="decor-item decor-flower flower-pos-1">
        <svg viewBox="0 0 24 24" width="20" height="20">
          <circle cx="12" cy="6" r="3.5" fill="#ffffff" />
          <circle cx="12" cy="18" r="3.5" fill="#ffffff" />
          <circle cx="6" cy="12" r="3.5" fill="#ffffff" />
          <circle cx="18" cy="12" r="3.5" fill="#ffffff" />
          <circle cx="12" cy="12" r="4" fill="#fad02c" stroke="#3c4722" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Twinkling Sparkle */}
      <div className="decor-item decor-sparkle sparkle-pos-1">
        <svg viewBox="0 0 20 20" width="16" height="16" fill="#fad02c">
          <path d="M 10,0 L 12,8 L 20,10 L 12,12 L 10,20 L 8,12 L 0,10 L 8,8 Z" />
        </svg>
      </div>
    </div>
  )
}
