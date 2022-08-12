// IMPORT React Lib
import { useState } from 'react'

// IMPORT Style
import './styles/app.scss'

// IMPORT Components
import Song from './components/Song'
import Player from './components/Player'
import Library from './components/Library'
import Nav from './components/Nav'

// IMPORT Data
import quranData from './util'

function App() {
  // States
  const [quran, setQuran] = useState(quranData())
  const [currentQuran, setCurrentQuran] = useState(quran[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [libraryOpen, setLibraryOpen] = useState(false)

  return (
    <div className="App">
      <Nav libraryOpen={libraryOpen} setLibraryOpen={setLibraryOpen} />
      <Song activeQuran={currentQuran} />
      <Player
        activeQuran={currentQuran}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        allQuran={quran}
        setQuran={setQuran}
        setCurrentQuran={setCurrentQuran}
      />
      <Library
        allQuran={quran}
        setCurrentQuran={setCurrentQuran}
        setIsPlaying={setIsPlaying}
        setQuran={setQuran}
        libraryOpen={libraryOpen}
      />
    </div>
  )
}

export default App
