import { PawPrint, ExternalLink, Github, Code2, Globe } from 'lucide-react'
import '../styles/footer.css'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer" id="about" aria-label="Application Footer and API Details">
      <div className="footer-container">
        {/* Top Info Grid */}
        <div className="footer-info-grid">
          {/* Column 1: App Identity */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <PawPrint size={22} className="footer-paw-icon" />
              <span className="footer-brand-name">My Pet App</span>
            </div>
            <p className="footer-tagline">
              A whimsical illustrated showcase connecting dog enthusiasts with hundreds of adorable dog breeds through the free, open-source Dog CEO API.
            </p>
            <div className="author-pill">
              <span>Crafted by <strong>edmagineva3d</strong></span>
              <span className="author-dot">•</span>
              <span>2026 Edition</span>
            </div>
          </div>

          {/* Column 2: Official API Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Dog CEO API Integration</h4>
            <ul className="footer-links-list">
              <li>
                <a
                  href="https://dog.ceo/dog-api/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                >
                  <Globe size={14} />
                  <span>Dog CEO API Homepage</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://dog.ceo/dog-api/documentation/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                >
                  <Code2 size={14} />
                  <span>API Documentation</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://dog.ceo/api/breeds/list/all"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                >
                  <code>/api/breeds/list/all</code>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Technologies Used */}
          <div className="footer-col">
            <h4 className="footer-heading">Built With</h4>
            <div className="tech-tags-wrap">
              <span className="tech-tag">React 18</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Vite</span>
              <span className="tech-tag">Lucide Icons</span>
              <span className="tech-tag">CSS Keyframes</span>
              <span className="tech-tag">Dog CEO API</span>
            </div>

            <div className="github-profile-link-wrap">
              <a
                href="https://github.com/edmagineva3d"
                target="_blank"
                rel="noreferrer"
                className="github-btn"
              >
                <Github size={15} />
                <span>GitHub @edmagineva3d</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copy">
            © 2026 My Pet App. Inspired by whimsical illustrated picture-books. Every pup is 100% loved.
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to top 🐾</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
