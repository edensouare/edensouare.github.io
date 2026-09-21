import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const academicHubLetters = 'Academic hub'.split('')

function findFemaleVoice(voices) {
  return voices.find(voice => /child|kid|junior/i.test(voice.name))
    || voices.find(voice => /female|samantha|victoria|karen|zira|moira|susan|ava|allison|siri/i.test(voice.name))
    || voices.find(voice => /en[-_]/i.test(voice.lang))
    || voices[0]
}

function speakLetter(letter, voices) {
  if (!('speechSynthesis' in window) || letter === ' ') return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(letter)
  const femaleVoice = findFemaleVoice(voices)
  if (femaleVoice) utterance.voice = femaleVoice
  utterance.rate = 1
  utterance.pitch = 1.05
  window.speechSynthesis.speak(utterance)
}

export default function Home() {
  const voices = useRef([])

  useEffect(() => {
    if (!('speechSynthesis' in window)) return undefined
    const updateVoices = () => { voices.current = window.speechSynthesis.getVoices() }
    updateVoices()
    window.speechSynthesis.addEventListener('voiceschanged', updateVoices)
    return () => {
      window.speechSynthesis.cancel()
      window.speechSynthesis.removeEventListener('voiceschanged', updateVoices)
    }
  }, [])

  const stopSpeech = () => window.speechSynthesis?.cancel()

  return (
    <main className="about-page">
      <header className="about-banner">
        <div className="about-banner-overlay">
          <p className="section-label">Eden-Net</p>
          <h2 className="speech-title" aria-label="Academic hub">
            {academicHubLetters.map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className={letter === ' ' ? 'speech-letter speech-space' : 'speech-letter'}
                aria-hidden="true"
                onMouseEnter={() => speakLetter(letter, voices.current)}
                onMouseLeave={stopSpeech}
              >
                {letter === ' ' ? '\u00a0' : letter}
              </span>
            ))}
          </h2>
          <p className="about-banner-copy">A small archive of my ideas, experiments, and human-centered systems.</p>
        </div>
      </header>

      <div className="about-layout">
        <article className="about-main">
          <p className="section-label">About</p>
          <h1>Welcome to my corner of the internet.</h1>
          <p><strong>Hello, I'm Eden, a Cognitive Science and Computer Science student.</strong></p>
          <p>I design human-centered digital systems at the intersection of UX Research, Human-Computer Interaction, and Machine Learning. My work asks how people think, build trust, and make meaning while interacting with technology.</p>
          <p>I care about thoughtful interfaces, accessible experiences, and research that turns complicated questions into useful, everyday tools.</p>
          <p>Browse the <Link to="/projects">projects</Link> and <Link to="/research">research</Link> pages to see the work showcased on this website.</p>

          <section className="about-note">
            <p className="section-label">Currently exploring</p>
            <p>
              - Web development standards used in real-world front-end and client-facing projects. Check out my unoffical w.i.p. for Intel's sustainability timeline:{' '}
              <a href="https://edensouare.github.io/02-prj-intel-sustainability/" target="_blank" rel="noreferrer">https://edensouare.github.io/02-prj-intel-sustainability/</a>
            </p>
            <p>- Interfaces that can communicate dense information while maintaining visual & aesthetic appeal</p>
            <p>...This space will keep changing as new experiments and ideas find their way in.</p>
          </section>
        </article>

        <aside className="about-sidebar">
          <section className="about-box">
            <h2>Updates</h2>
            <p>Currently applying inclusive design practices, responsive layouts, and accessibility standards to this site.</p>
            <ul>
              <li>Added carousel components to consolidate images in each Project and Research page</li>
              <li>Added accordion components to improve readability of Approach sections</li>
            </ul>
          </section>

          <section className="about-links-panel">
            <h2>Explore</h2>
            <ul className="about-links">
              <li><Link to="/projects">Selected projects</Link></li>
              <li><Link to="/research">Academic research</Link></li>
              <li><a href="mailto:edensouare@gmail.com">Get in touch</a></li>
            </ul>
          </section>
        </aside>
      </div>

      <footer className="about-footer">Eden-Net / 2026</footer>
    </main>
  )
}
