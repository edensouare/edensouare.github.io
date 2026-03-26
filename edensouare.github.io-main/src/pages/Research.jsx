import React from 'react'
import { Link } from 'react-router-dom'
import { research } from '../content'

export default function Research() {
  return (
    <div>
      <p className="section-label">Academic Research</p>
      <div className="bento-grid" style={{ marginTop: 10 }}>
        {research.map(r => (
          <Link key={r.slug} to={`/research/${r.slug}`} className="bento-link col-span-12">
            <div className="bento-card wide">
              <h3>{r.title}</h3>
              <p>{r.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
