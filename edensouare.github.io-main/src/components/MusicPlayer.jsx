import React, { useEffect, useRef, useState } from 'react'

const trackList = [
  { name: 'Brakhage - Stereolab', path: 'https://files.catbox.moe/dk8nyw.mp3' },
  { name: 'true perspective - lostrushi', path: 'https://files.catbox.moe/3lz6il.mp3' }
]

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '0:00'
  return `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`
}

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [trackIndex, setTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isShuffle, setIsShuffle] = useState(false)
  const [isRepeat, setIsRepeat] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return undefined
    audio.src = trackList[trackIndex].path
    audio.load()
    setCurrentTime(0)
    setDuration(0)
    return () => audio.pause()
  }, [trackIndex])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return undefined

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const stopPlaying = () => setIsPlaying(false)
    const finishTrack = () => {
      if (isRepeat) {
        audio.currentTime = 0
        audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
        return
      }

      setTrackIndex(index => {
        if (isShuffle && trackList.length > 1) {
          let nextIndex = index
          while (nextIndex === index) nextIndex = Math.floor(Math.random() * trackList.length)
          return nextIndex
        }
        return (index + 1) % trackList.length
      })
    }

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('pause', stopPlaying)
    audio.addEventListener('ended', finishTrack)
    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('pause', stopPlaying)
      audio.removeEventListener('ended', finishTrack)
    }
  }, [isRepeat, isShuffle])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return undefined

    const stopWhenLeaving = () => {
      audio.pause()
      setIsPlaying(false)
    }

    const handleVisibilityChange = () => {
      if (document.hidden) stopWhenLeaving()
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('blur', stopWhenLeaving)
    window.addEventListener('pagehide', stopWhenLeaving)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('blur', stopWhenLeaving)
      window.removeEventListener('pagehide', stopWhenLeaving)
    }
  }, [])

  const playPause = async () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch {
        setIsPlaying(false)
      }
    } else {
      audio.pause()
    }
  }

  const changeTrack = direction => {
    setTrackIndex(index => (index + direction + trackList.length) % trackList.length)
    setIsPlaying(false)
  }

  const changeVolume = amount => {
    const nextVolume = Math.min(1, Math.max(0, volume + amount))
    setVolume(nextVolume)
    if (audioRef.current) audioRef.current.volume = nextVolume
  }

  const seek = event => {
    const nextTime = Number(event.target.value)
    setCurrentTime(nextTime)
    if (audioRef.current) audioRef.current.currentTime = nextTime
  }

  return (
    <div className="player" aria-label="Music player">
      <div className="window">
        <div className="window-body">
          <div className="flex">
            <div className="wheel">
              <div className="wheelcontrols">
                <button className="fas fa-plus" type="button" onClick={() => changeVolume(0.2)} aria-label="Increase volume"></button>
              </div>
              <table className="wheelcontrols">
                <tbody><tr>
                  <th><button className="fas fa-backward" type="button" onClick={() => changeTrack(-1)} aria-label="Previous track"></button></th>
                  <th className="innerwheel"><button className={`playpause-track fas ${isPlaying ? 'fa-pause is-playing' : 'fa-play'}`} type="button" onClick={playPause} aria-label={isPlaying ? 'Pause track' : 'Play track'}></button></th>
                  <th><button className="fas fa-forward" type="button" onClick={() => changeTrack(1)} aria-label="Next track"></button></th>
                </tr></tbody>
              </table>
              <div className="wheelcontrols">
                <button className="fas fa-minus" type="button" onClick={() => changeVolume(-0.2)} aria-label="Decrease volume"></button>
              </div>
            </div>

            <div id="musicplayer">
              <div className="flex"><marquee scrollamount="4" className="songtitle">{trackList[trackIndex].name}</marquee></div>
              <div className="seeking">
                <div className="current-time">{formatTime(currentTime)}</div>
                <input type="range" min="0" max={duration || 0} value={Math.min(currentTime, duration || 0)} className="seek_slider" onChange={seek} aria-label="Seek track" />
                <div className="total-duration">{formatTime(duration)}</div>
              </div>
              <table className="controls"><tbody><tr>
                <td><button className={isRepeat ? 'is-active' : ''} type="button" onClick={() => setIsRepeat(value => !value)} aria-label="Repeat track" aria-pressed={isRepeat}><div className="fas fa-sync"></div></button></td>
                <td><button type="button" aria-label="Music track"><div className="fas fa-music"></div></button></td>
                <td><button className={isShuffle ? 'is-active' : ''} type="button" onClick={() => setIsShuffle(value => !value)} aria-label="Shuffle tracks" aria-pressed={isShuffle}><div className="fas fa-random"></div></button></td>
              </tr></tbody></table>
            </div>
          </div>
        </div>
      </div>
      <audio ref={audioRef} preload="metadata" />
    </div>
  )
}