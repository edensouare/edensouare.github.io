import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../content'

export default function Projects() {
  return (
    <div>
      <p className="section-label">Selected Projects</p>
      <div className="bento-grid" style={{ marginTop: 10 }}>
        {projects.map(p => (
          <Link key={p.slug} to={`/projects/${p.slug}`} className="bento-link col-span-4">
            <div className="bento-card project">
              <h3>
                {p.title} {p.year && <span className="title-year">/{p.year}</span>}
              </h3>
              <p>{p.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
