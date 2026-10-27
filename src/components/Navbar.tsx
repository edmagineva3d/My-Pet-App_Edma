import React from 'react'
import { PawPrint, Heart, Search, HelpCircle } from 'lucide-react'
import '../styles/navbar.css'

interface NavbarProps {
  favoritesCount?: number
  onNavigate?: (sectionId: string) => void
  onToggleFavorites?: () => void
  isFavoritesOpen?: boolean
}

export default function Navbar({
  favoritesCount = 0,
  onNavigate,
  onToggleFavorites,
  isFavoritesOpen = false,
}: NavbarProps) {
  const handleNavClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate(targetId)
    } else {
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className="site-navigation" aria-label="Main Navigation">
      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <div className="announcement-content">
          <span className="announcement-item">
            <span className="flower-icon">✿</span> Explore 140+ official dog breeds! (no code needed)
          </span>
          <span className="announcement-item">
            <span className="flower-icon">✿</span> Fetch unlimited photos from the Dog CEO API
          </span>
          <span className="announcement-item">
            <span className="flower-icon">✿</span> Save your favorite pups anytime
          </span>
        </div>
      </div>

      {/* Main Navbar Header */}
      <div className="navbar-main">
        {/* Logo */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={(e) => handleNavClick(e, 'home')}
          aria-label="My Pet App Home"
        >
          <div className="brand-logo-mark">
            <span className="brand-logo-sub">shop</span>
            <span className="brand-logo-main">
              p<PawPrint className="logo-paw-icon" size={14} />w
            </span>
          </div>
          <div className="brand-text">
            <span className="brand-title">my pet app</span>
          </div>
        </a>

        {/* Navigation Links */}
        <ul className="navbar-links">
          <li>
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="nav-link active"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#explorer"
              onClick={(e) => handleNavClick(e, 'explorer')}
              className="nav-link"
            >
              EXPLORE BREEDS
            </a>
          </li>
          <li>
            <button
              type="button"
              onClick={onToggleFavorites}
              className={`nav-link-btn ${isFavoritesOpen ? 'active' : ''}`}
              aria-label="View Favorites"
            >
              FAVORITES
              {favoritesCount > 0 && (
                <span className="nav-badge">{favoritesCount}</span>
              )}
            </button>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="nav-link"
            >
              ABOUT
            </a>
          </li>
        </ul>

        {/* Right Icon Actions */}
        <div className="navbar-actions">
          <a
            href="#explorer"
            className="action-btn"
            title="Search Breeds"
            aria-label="Search dog breeds"
          >
            <Search size={18} strokeWidth={2.2} />
          </a>

          <button
            type="button"
            className={`action-btn fav-btn ${favoritesCount > 0 ? 'has-favorites' : ''}`}
            onClick={onToggleFavorites}
            title="Favorite Dogs"
            aria-label={`Favorites: ${favoritesCount} saved`}
          >
            <Heart
              size={18}
              strokeWidth={2.2}
              fill={favoritesCount > 0 ? '#e05353' : 'none'}
              color={favoritesCount > 0 ? '#e05353' : 'currentColor'}
            />
            {favoritesCount > 0 && (
              <span className="action-counter">{favoritesCount}</span>
            )}
          </button>

          <a
            href="#about"
            className="action-btn"
            title="About Dog CEO API"
            aria-label="About this application"
          >
            <HelpCircle size={18} strokeWidth={2.2} />
          </a>
        </div>
      </div>

      {/* Scalloped Cloud Wave Separator into Sky */}
      <div className="navbar-scallop-divider" aria-hidden="true">
        <svg
          viewBox="0 0 1200 24"
          preserveAspectRatio="none"
          className="scallop-svg"
        >
          <path
            d="M 0,0 L 1200,0 L 1200,6 
               Q 1175,24 1150,6 Q 1125,24 1100,6 Q 1075,24 1050,6 Q 1025,24 1000,6
               Q 975,24 950,6 Q 925,24 900,6 Q 875,24 850,6 Q 825,24 800,6
               Q 775,24 750,6 Q 725,24 700,6 Q 675,24 650,6 Q 625,24 600,6
               Q 575,24 550,6 Q 525,24 500,6 Q 475,24 450,6 Q 425,24 400,6
               Q 375,24 350,6 Q 325,24 300,6 Q 275,24 250,6 Q 225,24 200,6
               Q 175,24 150,6 Q 125,24 100,6 Q 75,24 50,6 Q 25,24 0,6 Z"
            fill="#fcf8ef"
          />
        </svg>
      </div>
    </nav>
  )
}
