import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getEntryBySlug } from '../content'

export default function ProjectDetail({ isResearch = false }) {
  const { slug } = useParams()
  const entry = getEntryBySlug(slug)

  useEffect(() => {
    if (!slug || typeof window === 'undefined') return undefined

    const jquerySrc = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'
    const scriptId = 'scrolltotop-inline-script'
    const noscriptId = 'scrolltotop-noscript'

    const appendInlineScript = () => {
      if (document.getElementById(scriptId)) return

      const script = document.createElement('script')
      script.id = scriptId
      script.type = 'text/javascript'
      script.textContent = `var scrolltotop={setting:{startline:100,scrollto:0,scrollduration:1e3,fadeduration:[500,100]},controlHTML:'<img src="https://lh3.googleusercontent.com/pw/AM-JKLU78dKyQvhwE4C_b2ve9nCM_ISy3suvm1pufBsyx07_Ti2tel6lKAzu0bGpyYZM6ZdZ62UxiQ7jZ4CNA-KgijgrjoJUUzWN6s8PEl3Dua5BREcclrNCa4kmhN05z1k3TZu9emkB6slwdOMxqoavJppA=w48-h46-no" />',controlattrs:{offsetx:5,offsety:5},anchorkeyword:"#top",state:{isvisible:!1,shouldvisible:!1},scrollup:function(){this.cssfixedsupport||this.$control.css({opacity:0});var t=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);t="string"==typeof t&&1==jQuery("#"+t).length?jQuery("#"+t).offset().top:0,this.$body.animate({scrollTop:t},this.setting.scrollduration)},keepfixed:function(){var t=jQuery(window),o=t.scrollLeft()+t.width()-this.$control.width()-this.controlattrs.offsetx,s=t.scrollTop()+t.height()-this.$control.height()-this.controlattrs.offsety;this.$control.css({left:o+"px",top:s+"px"})},togglecontrol:function(){var t=jQuery(window).scrollTop();this.cssfixedsupport||this.keepfixed(),this.state.shouldvisible=t>=this.setting.startline?!0:!1,this.state.shouldvisible&&!this.state.isvisible?(this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]),this.state.isvisible=!0):0==this.state.shouldvisible&&this.state.isvisible&&(this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]),this.state.isvisible=!1)},init:function(){jQuery(document).ready(function(t){var o=scrolltotop,s=document.all;o.cssfixedsupport=!s||s&&"CSS1Compat"==document.compatMode&&window.XMLHttpRequest,o.$body=t(window.opera?"CSS1Compat"==document.compatMode?"html":"body":"html,body"),o.$control=t('<div id="topcontrol">'+o.controlHTML+"</div>").css({position:o.cssfixedsupport?"fixed":"absolute",bottom:o.controlattrs.offsety,right:o.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"Scroll to Top"}).click(function(){return o.scrollup(),!1}).appendTo("body"),document.all&&!window.XMLHttpRequest&&""!=o.$control.text()&&o.$control.css({width:o.$control.width()}),o.togglecontrol(),t('a[href="'+o.anchorkeyword+'"]').click(function(){return o.scrollup(),!1}),t(window).bind("scroll resize",function(t){o.togglecontrol()})})}};scrolltotop.init();`
      document.body.appendChild(script)

      if (!document.getElementById(noscriptId)) {
        const noscript = document.createElement('noscript')
        noscript.id = noscriptId
        noscript.innerHTML = 'Not seeing a <a href="https://www.scrolltotop.com/">Scroll to Top Button</a>? Go to our FAQ page for more info.'
        document.body.appendChild(noscript)
      }
    }

    const existingJquery = document.querySelector(`script[src="${jquerySrc}"]`)
    if (window.jQuery) {
      appendInlineScript()
      return undefined
    }

    if (existingJquery) {
      existingJquery.addEventListener('load', appendInlineScript, { once: true })
      return undefined
    }

    const jqueryScript = document.createElement('script')
    jqueryScript.src = jquerySrc
    jqueryScript.async = true
    jqueryScript.defer = true
    jqueryScript.onload = appendInlineScript
    document.body.appendChild(jqueryScript)

    return undefined
  }, [slug, isResearch])

  if (!entry) {
    return (
      <article className="bento-card">
        <h2 style={{ marginBottom: 8 }}>Not found</h2>
        <p className="text-muted">We couldn't find that {isResearch ? 'research' : 'project'} entry.</p>
        <div style={{ marginTop: 16 }}>
          <Link className="nav-item" to={isResearch ? '/research' : '/projects'}>
            ← Back to {isResearch ? 'Research' : 'Projects'}
          </Link>
        </div>
      </article>
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

        {/* Embedded prototype */}
        {entry.prototypeUrl && (
          <div className="detail-section">
            <h3>Hi-fi Prototype</h3>
            <div className="prototype-frame">
              <iframe
                src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(entry.prototypeUrl)}`}
                title={`${entry.title} hi-fi prototype`}
                allowFullScreen
                loading="lazy"
              />
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
