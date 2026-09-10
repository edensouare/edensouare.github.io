import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../content'

export default function Projects() {
  return (
    <section className="projects-page">
      <p className="section-label">Selected Projects</p>
      <div className="bento-grid" style={{ marginTop: 10 }}>
        {[...projects].sort((a, b) => (
          a.slug === 'comet-bites' ? -1 : b.slug === 'comet-bites' ? 1 : 0
        )).map(p => (
          <Link key={p.slug} to={`/projects/${p.slug}`} className="bento-link col-span-4">
            <article className="bento-card project">
              <h3>
                {p.title} {p.year && <span className="title-year">/{p.year}</span>}
              </h3>
              <p>{p.subtitle}</p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}
