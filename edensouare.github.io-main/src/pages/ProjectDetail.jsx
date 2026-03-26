import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getEntryBySlug } from '../content'

export default function ProjectDetail({ isResearch = false }) {
  const { slug } = useParams()
  const entry = getEntryBySlug(slug)

  if (!entry) {
    return (
      <div className="bento-card">
        <h2 style={{ marginBottom: 8 }}>Not found</h2>
        <p className="text-muted">We couldn't find that {isResearch ? 'research' : 'project'} entry.</p>
        <div style={{ marginTop: 16 }}>
          <Link className="nav-item" to={isResearch ? '/research' : '/projects'}>
            ← Back to {isResearch ? 'Research' : 'Projects'}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="bento-grid">
      <header className="col-span-12">
        <div className="bento-card">
          <p className="section-label" style={{ marginTop: 0 }}>{isResearch ? 'Research' : 'Project'}</p>
          <h1 style={{ fontSize: '2rem', marginBottom: 6 }}>{entry.title}</h1>
          <p className="text-muted" style={{ fontWeight: 600 }}>{entry.subtitle}</p>
        </div>
      </header>

      <section className="col-span-8">
        <div className="bento-card">
          <h3 style={{ marginBottom: 8 }}>Overview</h3>
          <p>{entry.summary}</p>
        </div>
      </section>

      <aside className="col-span-4">
        <div className="bento-card">
          <h3 style={{ marginBottom: 8 }}>Details</h3>
          <ul style={{ paddingLeft: 18, color: 'var(--text-secondary)', fontWeight: 600 }}>
            <li>Role: UX / Research</li>
            <li>Year: 2026</li>
            <li>Stack: React, Vite</li>
          </ul>
        </div>
      </aside>

      <footer className="col-span-12">
        <div className="bento-card" style={{ display: 'flex', gap: 12 }}>
          <Link className="nav-item" to={isResearch ? '/research' : '/projects'}>
            ← Back to {isResearch ? 'Research' : 'Projects'}
          </Link>
          <Link className="nav-item" to="/">Home</Link>
        </div>
      </footer>
    </article>
  )
}
