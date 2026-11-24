import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../content'

const mediaRoot = '/images/card-media/'
const previews = {
  'nasa-space-explorer': { still: mediaRoot + 'nasa-space-explorer.webp', animation: mediaRoot + 'nasa-space-explorer.gif' },
  'loreal-beauty-advisor': { still: mediaRoot + 'loreal-beauty-advisor.webp', animation: mediaRoot + 'loreal-beauty-advisor.gif' },
  'intel-sustainability': { still: mediaRoot + 'intel-sustainability.webp', animation: mediaRoot + 'intel-sustainability.gif' },
  'alzheimers-mri': { still: mediaRoot + 'alzheimers-mri.webp', animation: mediaRoot + 'alzheimers-mri.gif' },
  'seppit': { still: mediaRoot + 'seppit.webp', animation: mediaRoot + 'seppit.gif' },
  // 'jerry-can-relay': { still: mediaRoot + 'jerry-can-relay.jpg' },
  'access-as-ownership': {
    still: mediaRoot + 'access-as-ownership.png',
    largeStill: '/assets/logos/idHbIlOqaO_8696cccf.jpeg',
  },
  'comet-bites': { still: mediaRoot + 'comet-bites.webp', animation: mediaRoot + 'comet-bites.gif' },
  lookism: { still: '/images/lookism/lookismHumanAppearance.jpg' },
  // 'meal-hopper': { still: '/assets/logos/Logo-removebg-preview_265e765e.png' },
}

function CardPreview({ slug }) {
  const media = previews[slug]
  if (!media) return null
  return (
    <picture className={`project-card-media media-${slug}`}>
      {media.largeStill && <source media="(min-width: 901px)" srcSet={media.largeStill} />}
      {media.animation && <source media="(prefers-reduced-motion: no-preference)" srcSet={media.animation} />}
      <img src={media.still} loading="lazy" alt="" />
    </picture>
  )
}

export default function Projects() {
  return (
    <section className="projects-page">
      <p className="section-label">Selected Projects</p>
      <div className="bento-grid" style={{ marginTop: 10 }}>
        {projects.map(p => (
          <Link key={p.slug} to={`/projects/${p.slug}`} className="bento-link col-span-4">
            <article className="bento-card project">
              <CardPreview slug={p.slug} />
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
