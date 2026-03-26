import React from 'react'
import { Link } from 'react-router-dom'
import { projects, research } from '../content'

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section id="home" className="bento-section">
        <div className="bento-card hero-card">
          <h2>
            Hello, my name is Eden. I’m a Cognitive Science and Computer Science student specializing
            in UX Research, HCI, and ML to build digital experiences.
          </h2>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ marginTop: 28 }}>
        <p className="section-label">Selected Projects</p>
        <div className="bento-grid" style={{ marginTop: 10 }}>
          {projects.map(p => (
            <Link key={p.slug} to={`/projects/${p.slug}`} className="bento-link col-span-4">
              <div className="bento-card project">
                <h3>{p.title}</h3>
                <p>{p.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" style={{ marginTop: 40 }}>
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
      </section>
    </div>
  )
}
