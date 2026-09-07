import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MusicPlayer from './MusicPlayer'

export default function WelcomeMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const navigate = useNavigate()
  const navigationTimer = useRef(null)

  useEffect(() => () => clearTimeout(navigationTimer.current), [])

  const navigateFromMenu = (event, path) => {
    event.preventDefault()
    if (isExiting) return
    setIsExiting(true)
    setIsOpen(false)
    navigationTimer.current = setTimeout(() => navigate(path), 420)
  }

  return (
    <main className="welcome-screen">
      <div className={`welcome-stage ${isOpen ? 'is-open' : ''} ${isExiting ? 'is-exiting' : ''}`}>
        <p className="welcome-kicker">A small corner of the internet</p>
        <div className="welcome-orbit" aria-label="Site menu">
          <button
            className="welcome-core"
            type="button"
            aria-expanded={isOpen}
            aria-controls="welcome-menu-links"
            onClick={() => setIsOpen(open => !open)}
          >
            <svg className="welcome-name-ring" viewBox="0 0 100 100" aria-label="Eden Tioko Souare">
              <defs>
                <path id="welcome-name-circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              </defs>
              <text>
                <textPath href="#welcome-name-circle"> edenet explorer </textPath>
              </text>
            </svg>
            <span className="welcome-core-action">{isOpen ? 'close' : ' '}</span>
          </button>

          <div id="welcome-menu-links" className="welcome-links">
            <Link className="welcome-link welcome-link-about" to="/home" onClick={event => navigateFromMenu(event, '/home')}>
              <span>01</span> <mark>About</mark>
            </Link>
            <Link className="welcome-link welcome-link-projects" to="/projects" onClick={event => navigateFromMenu(event, '/projects')}>
              <span>02</span> <mark>Projects</mark>
            </Link>
            <Link className="welcome-link welcome-link-research" to="/research" onClick={event => navigateFromMenu(event, '/research')}>
              <span>03</span> <mark>Research</mark>
            </Link>
          </div>
        </div>

        <p className="welcome-hint">Click the center to open the menu</p>

        <MusicPlayer />
      </div>
    </main>
  )
}
