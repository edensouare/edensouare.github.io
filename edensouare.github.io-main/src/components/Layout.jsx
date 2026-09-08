import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Layout({ children }) {
  const location = useLocation()
  if (location.pathname === '/') return children

  return (
    <div className="layout-wrapper">
      <aside className="sidebar">
        <div>
          <div className="profile-top">
            <h1>Eden Souare</h1>
            <p className="text-muted">Exploring ML, HCI, and UX📍Dallas, Texas, USA</p>
          </div>

          <nav className="nav-menu" aria-label="Primary">
            <NavLink to="/home" end className="nav-item">About</NavLink>
            <NavLink to="/projects" className="nav-item">Projects</NavLink>
            <NavLink to="/research" className="nav-item">Research</NavLink>
          </nav>
        </div>

        <div className="status-badge" aria-live="polite">
          <span className="dot" aria-hidden="true"></span> Open for Work
        </div>
      </aside>

      {children}
    </div>
  )
}
