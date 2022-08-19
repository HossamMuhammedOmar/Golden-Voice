import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
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
  audioRef,
  setSoundInfo,
  soundInfo,
}) {
  useEffect(() => {
    playNewAudio(allQuran, activeQuran, setQuran)
    soundInfo.animationPercentage = 0
  }, [activeQuran])

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

  const dragHandler = e => {
    audioRef.current.currentTime = e.target.value
    setSoundInfo({ ...soundInfo, currentTime: e.target.value })
  }

  const skipTrackHandler = async dir => {
    let indexOfCurrentAudio = allQuran.findIndex(
      quran => quran.id === activeQuran.id
    )

    if (dir === 'skip-forward') {
      await skipAudio(allQuran[(indexOfCurrentAudio + 1) % allQuran.length])
    }

    if (dir === 'skip-back') {
      if (indexOfCurrentAudio <= 0) {
        await skipAudio(allQuran[allQuran.length - 1])
      } else {
        await skipAudio(allQuran[indexOfCurrentAudio - 1])
      }
    }

    setIsPlaying(true)
    audioRef.current.play()
  }

  const skipAudio = audio => {
    setCurrentQuran(audio)
    setIsPlaying(false)
    playNewAudio(allQuran, audio, setQuran)
  }

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
            background: `${
              isPlaying
                ? `linear-gradient(to right, ${activeQuran.color[0]}, ${activeQuran.color[1]})`
                : `background-color: rgb(204, 204, 204)`
            }`,
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
    </div>
  )
}
