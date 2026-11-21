import React from 'react'
import { Link } from 'react-router-dom'
import { research } from '../content'

export default function Research() {
  return (
    <section className="research-page">
      <p className="section-label">Academic Research</p>
      <div className="bento-grid" style={{ marginTop: 10 }}>
        {research.map(r => (
          <Link key={r.slug} to={`/research/${r.slug}`} className="bento-link col-span-12">
            <article className="bento-card wide">
              <h3>
                {r.title} {r.year && <span className="title-year">/{r.year}</span>}
              </h3>
              <p>{r.subtitle}</p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}
