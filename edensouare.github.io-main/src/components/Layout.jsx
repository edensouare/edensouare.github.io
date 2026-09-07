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
            <p className="text-muted">University Student</p>
          </div>

          <nav className="nav-menu" aria-label="Primary">
            <NavLink to="/home" end className="nav-item">Home</NavLink>
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
