import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <aside className="sidebar">
        <div>
          <div className="profile-top">
            <div className="avatar-circle" aria-hidden="true"></div>
            <h1 style={{ fontSize: '1.5rem', marginBottom: 4 }}>Eden Souare</h1>
            <p className="text-muted">University Student</p>
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
