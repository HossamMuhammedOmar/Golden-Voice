import { playNewAudio } from '../util'

const LibraryQuran = ({
  quran,
  setCurrentQuran,
  setIsPlaying,
  allQuran,
  setQuran,
}) => {
  // Handlers
  const quranClickHandler = () => {
    setCurrentQuran(quran)
    setIsPlaying(false)
    playNewAudio(allQuran, quran, setQuran)
  }

  return (
    <div
      onClick={quranClickHandler}
      className={
        quran.active
          ? 'active-clip quran-library-container'
          : 'quran-library-container'
      }
    >
      <img src={quran.cover} alt={quran.name} />
      <div className="song-description">
        <h3>{quran.name}</h3>
        <h4>{quran.artist}</h4>
      </div>
    </div>
  )
}

export default LibraryQuran
