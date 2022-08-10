// IMPORT React Lib
import { useState } from 'react'

// IMPORT Style
import './styles/app.scss'

// IMPORT Components
import Song from './components/Song'
import Player from './components/Player'
import Library from './components/Library'

// IMPORT Data
import quranData from './util'

function App() {
  // States
  const [quran, setQuran] = useState(quranData())
  const [currentQuran, setCurrentQuran] = useState(quran[0])
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="App">
      <Song activeQuran={currentQuran} />
      <Player
        activeQuran={currentQuran}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library
        allQuran={quran}
        setCurrentQuran={setCurrentQuran}
        setIsPlaying={setIsPlaying}
        setQuran={setQuran}
      />
    </div>
  )
}

export default App
