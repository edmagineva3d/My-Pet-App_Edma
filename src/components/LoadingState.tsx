import React, { useState, useEffect } from 'react'
import { PawPrint } from 'lucide-react'
import '../styles/loading.css'

interface LoadingStateProps {
  message?: string
  subMessage?: string
  inline?: boolean
}

const PLAYFUL_MESSAGES = [
  'Sniffing out a good doggo...',
  'Fetching tail-wagging happiness...',
  'Warming up the cuddle engine...',
  'Looking for the fluffiest pup...',
  'Asking the puppy to smile for the camera...',
]

export default function LoadingState({
  message,
  subMessage = 'Powered by Dog CEO live API',
  inline = false,
}: LoadingStateProps) {
  const [activeMessageIndex, setActiveMessageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveMessageIndex((prev) => (prev + 1) % PLAYFUL_MESSAGES.length)
    }, 2800)
    return () => clearInterval(timer)
  }, [])

  const displayMessage = message || PLAYFUL_MESSAGES[activeMessageIndex]

  if (inline) {
    return (
      <div className="inline-loading-state" role="status" aria-live="polite">
        <PawPrint className="inline-paw-spinner" size={18} />
        <span>{displayMessage}</span>
      </div>
    )
  }

  return (
    <div className="full-loading-state" role="status" aria-live="polite">
      <div className="paw-bouncing-ring">
        <div className="paw-ring-pulse" />
        <PawPrint className="main-animated-paw" size={42} strokeWidth={2.2} />
      </div>

      <div className="loading-text-stack">
        <p className="loading-main-msg">{displayMessage}</p>
        <p className="loading-sub-msg">{subMessage}</p>
      </div>

      {/* Tiny stepping paw trail animation */}
      <div className="paw-stepping-trail" aria-hidden="true">
        <span className="step-dot step-1">🐾</span>
        <span className="step-dot step-2">🐾</span>
        <span className="step-dot step-3">🐾</span>
      </div>
    </div>
  )
}
