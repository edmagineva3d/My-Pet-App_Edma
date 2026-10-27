import type { ReactNode } from 'react'
import '../styles/hero.css'

interface HeroSectionProps {
  children?: ReactNode
}

export default function HeroSection({ children }: HeroSectionProps) {
  return (
    <div className="hero-container" id="home">
      {/* Sky Background & Landscape Slot */}
      <div className="hero-landscape-slot">
        {children}
      </div>

      {/* Floating Center Hero Cloud Banner & Heading */}
      <div className="hero-content">
        <div className="hero-cloud-badge">
          <div className="hero-title-wrap">
            <span className="title-doodle title-doodle-left">~{`{`}</span>
            <h1 className="hero-heading">Meet Your Furry Friends</h1>
            <span className="title-doodle title-doodle-right">{`}`}~</span>
          </div>
        </div>

        <div className="hero-subtitle-box">
          <p className="hero-welcome">welcome to petopia!</p>
          <p className="hero-subtitle">
            Explore different breeds, one adorable photo at a time.
          </p>
        </div>
      </div>
    </div>
  )
}
