import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef, useState } from 'react'
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons'
import { playNewAudio } from '../util'

export default function Player({
  activeQuran,
  isPlaying,
  setIsPlaying,
  allQuran,
  setCurrentQuran,
  setQuran,
}) {
  // Ref
  const audioRef = useRef(null)

  // Event Handler
  const playHandler = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(!isPlaying)
    } else {
      audioRef.current.play()
      setIsPlaying(!isPlaying)
    }
  }

  const timeFormat = time => {
    if (time * 0 === 0) {
      return (
        Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
      )
    }
  }

  const timeUpdateHandler = e => {
    const current = e.target.currentTime
    const duration = e.target.duration
    const roundedCurrent = Math.round(current)
    const roundedDuration = Math.round(duration)
    const animation = Math.round((roundedCurrent / roundedDuration) * 100)
    setSoundInfo({
      ...soundInfo,
      currentTime: current,
      duration,
      animationPercentage: animation,
    })
  }

  const dragHandler = e => {
    audioRef.current.currentTime = e.target.value
    setSoundInfo({ ...soundInfo, currentTime: e.target.value })
  }

  const skipTrackHandler = dir => {
    let indexOfCurrentAudio = allQuran.findIndex(
      quran => quran.id === activeQuran.id
    )

    if (dir === 'skip-forward') {
      skipAudio(allQuran[(indexOfCurrentAudio + 1) % allQuran.length])
    }

    if (dir === 'skip-back') {
      if (indexOfCurrentAudio <= 0) {
        skipAudio(allQuran[allQuran.length - 1])
      } else {
        skipAudio(allQuran[indexOfCurrentAudio - 1])
      }
    }
  }

  const skipAudio = audio => {
    setCurrentQuran(audio)
    setIsPlaying(false)
    playNewAudio(allQuran, audio, setQuran)
  }

  // States
  const [soundInfo, setSoundInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  })

  // Animation Track
  const trackAnimation = {
    transform: `translateX(${soundInfo.animationPercentage}%)`,
  }

  return (
    <div className="player-container">
      <div className="time-control">
        <p>{timeFormat(soundInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${activeQuran.color[0]}, ${activeQuran.color[1]})`,
          }}
          className="track"
        >
          <input
            onChange={dragHandler}
            min={0}
            max={soundInfo.duration || 0}
            value={soundInfo.currentTime}
            type="range"
          />
          <div style={trackAnimation} className="track-animate"></div>
        </div>
        <p>{soundInfo.duration ? timeFormat(soundInfo.duration) : '0.00'} </p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          onClick={() => skipTrackHandler('skip-back')}
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          onClick={() => skipTrackHandler('skip-forward')}
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        type="audio/mp3"
        ref={audioRef}
        src={activeQuran.audio}
      ></audio>
    </div>
  )
}
