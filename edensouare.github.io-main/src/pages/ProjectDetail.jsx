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
      {/* Title bento */}
      <header className="col-span-12">
        <div className="bento-card">
          <p className="section-label" style={{ marginTop: 0 }}>{isResearch ? 'Research' : 'Project'}</p>
          <h1 className="title-with-year" style={{ fontSize: '2rem', marginBottom: 6 }}>
            {entry.title} {entry.year && <span className="title-year">/{entry.year}</span>}
          </h1>
          <p className="text-muted" style={{ fontWeight: 600 }}>{entry.subtitle}</p>
        </div>
      </header>

      {/* Free text content below the title bento (no bento-card wrappers) */}
      <section className="col-span-12 detail-content">
        {entry.header && <h2 className="detail-header">{entry.header}</h2>}
        {Array.isArray(entry.tags) && entry.tags.length > 0 && (
          <div className="tag-list" aria-label="Tags">
            {entry.tags.map(tag => (
              <span className="tag-pill" key={tag}>{tag}</span>
            ))}
          </div>
        )}

        {/* My Role and Credits side by side when both exist */}
        {(entry.role || entry.credits) && (
          <div className="split-columns">
            {entry.role && (
              <div>
                <h3>My Role</h3>
                <ul style={{ paddingLeft: 18 }}>
                  {entry.role.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            )}
            {entry.credits && (
              <div>
                <h3>Credits</h3>
                <ul style={{ paddingLeft: 18 }}>
                  {entry.credits.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Motivation */}
        {Array.isArray(entry.motivation) && entry.motivation.length > 0 && (
          <div className="detail-section">
            <h3>Motivation</h3>
            {entry.motivation.map((m, i) => (
              <p key={i} style={{ marginTop: i === 0 ? 0 : 8 }}>{m}</p>
            ))}
          </div>
        )}

        {/* Images grid */}
        {Array.isArray(entry.images) && entry.images.length > 0 && (
          <div className="detail-section">
            <div className="image-grid">
              {entry.images.map((img, i) => (
                <div key={img + i} className="img-col-6">
                  <img className="detail-image" src={`/${img}`} alt="" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Approach */}
        {Array.isArray(entry.approach) && entry.approach.length > 0 && (
          <div className="detail-section">
            <h3>Approach</h3>
            {entry.approach.map((a, i) => (
              <div key={i} style={{ marginTop: i === 0 ? 0 : 12 }}>
                {a.heading && <h4 style={{ marginBottom: 6 }}>{a.heading}</h4>}
                {a.text && <p>{a.text}</p>}
                {Array.isArray(a.list) && (
                  <ul style={{ paddingLeft: 18, marginTop: 6 }}>
                    {a.list.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Links */}
        {Array.isArray(entry.links) && entry.links.length > 0 && (
          <div className="detail-section link-list">
            {entry.links.map((l, i) => (
              <div key={i} style={{ marginTop: i === 0 ? 0 : 12 }}>
                {l.label && <h3 style={{ marginBottom: 6 }}>{l.label}</h3>}
                <a href={l.href} target="_blank" rel="noreferrer noopener">Open →</a>
              </div>
            ))}
          </div>
        )}

        {/* Ongoing */}
        {Array.isArray(entry.ongoing) && entry.ongoing.length > 0 && (
          <div className="detail-section">
            <h3>Current/Ongoing</h3>
            <ul style={{ paddingLeft: 18 }}>
              {entry.ongoing.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Back links */}
        <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
          <Link className="nav-item" to={isResearch ? '/research' : '/projects'}>
            ← Back to {isResearch ? 'Research' : 'Projects'}
          </Link>
          <Link className="nav-item" to="/">Home</Link>
        </div>
      </section>
    </article>
  )
}
