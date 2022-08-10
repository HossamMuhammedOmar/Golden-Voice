const LibraryQuran = ({ quran, allQuran, setCurrentQuran }) => {
  // Handlers
  const quranClickHandler = e => {
    setCurrentQuran(quran)
  }

  return (
    <div onClick={quranClickHandler} className="quran-library-container">
      <img src={quran.cover} />
      <div className="song-description">
        <h3>{quran.name}</h3>
        <h4>{quran.artist}</h4>
      </div>
    </div>
  )
}

export default LibraryQuran
