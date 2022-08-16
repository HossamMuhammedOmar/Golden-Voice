import { playNewAudio } from '../util'

const LibraryQuran = ({
  quran,
  setCurrentQuran,
  setIsPlaying,
  allQuran,
  setQuran,
  audioRef,
  isPlaying,
}) => {
  // Handlers
  const quranClickHandler = () => {
    setCurrentQuran(quran)
    setIsPlaying(false)
    playNewAudio(allQuran, quran, setQuran)
    const promiseAudio = audioRef.current.play()
    if (promiseAudio !== undefined) {
      promiseAudio.then(_ => {
        audioRef.current.play()
        setIsPlaying(true)
      })
    }
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
