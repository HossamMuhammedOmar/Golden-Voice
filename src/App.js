// IMPORT React Lib
import { useState, useRef } from 'react'

// IMPORT Style
import './styles/app.scss'

// IMPORT Components
import Song from './components/Song'
import Player from './components/Player'
import Library from './components/Library'
import Nav from './components/Nav'

// IMPORT Data
import quranData from './data'

// IMPORT util
import { activeLibraryHandler } from './util'

function App() {
  // Ref
  const audioRef = useRef(null)
  // States
  const [quran, setQuran] = useState(quranData())
  const [currentQuran, setCurrentQuran] = useState(quran[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [libraryOpen, setLibraryOpen] = useState(false)

  const [soundInfo, setSoundInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  })

  // Handler
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

  const audioEndHandler = async () => {
    let indexOfCurrentAudio = quran.findIndex(
      quran => quran.id === currentQuran.id
    )

    // playNewAudio(
    //   quran,
    //   quran[(indexOfCurrentAudio + 1) % quran.length],
    //   setQuran
    // )

    activeLibraryHandler(
      quran,
      quran[(indexOfCurrentAudio + 1) % quran.length],
      setQuran,
      soundInfo
    )

    await setCurrentQuran(quran[(indexOfCurrentAudio + 1) % quran.length])

    if (isPlaying) {
      setTimeout(function () {
        audioRef.current.play()
      }, 150)
    }
  }

  return (
    <div className={`app ${libraryOpen ? 'library-active' : ''} `}>
      <Nav libraryOpen={libraryOpen} setLibraryOpen={setLibraryOpen} />
      <Song activeQuran={currentQuran} />
      <Player
        activeQuran={currentQuran}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        allQuran={quran}
        setQuran={setQuran}
        setCurrentQuran={setCurrentQuran}
        audioRef={audioRef}
        setSoundInfo={setSoundInfo}
        soundInfo={soundInfo}
      />
      <Library
        allQuran={quran}
        setCurrentQuran={setCurrentQuran}
        setIsPlaying={setIsPlaying}
        setQuran={setQuran}
        libraryOpen={libraryOpen}
        audioRef={audioRef}
        isPlaying={isPlaying}
        soundInfo={soundInfo}
      />

      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        type="audio/mp3"
        ref={audioRef}
        src={currentQuran.audio}
        onEnded={audioEndHandler}
      ></audio>
    </div>
  )
}

export default App
