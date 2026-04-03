import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Layout({ children }) {
  const location = useLocation()
  const isHome = location.pathname === '/'
  return (
    <div className="layout-wrapper">
      <aside className="sidebar">
        <div>
          <div className="profile-top">
            {isHome ? (
              <>
                <img
                  className="avatar-rect"
                  src="/profile.jpg"
                  alt="Portrait of Eden Souare"
                  loading="lazy"
                />
                <h1 style={{ fontSize: '1.5rem', marginTop: 12, marginBottom: 4 }}>Eden Souare</h1>
                <p className="text-muted">University Student</p>
              </>
            ) : (
              <>
                <h1 style={{ fontSize: '1.5rem', marginBottom: 4 }}>Eden Souare</h1>
                <p className="text-muted">University Student</p>
              </>
            )}
          </div>

          <nav className="nav-menu" aria-label="Primary">
            <NavLink to="/" end className="nav-item">Home</NavLink>
            <NavLink to="/projects" className="nav-item">Projects</NavLink>
            <NavLink to="/research" className="nav-item">Research</NavLink>
          </nav>
        </div>

        <div className="status-badge" aria-live="polite">
          <span className="dot" aria-hidden="true"></span> Open for Internships
        </div>
      </aside>

      {children}
    </div>
  )
}
