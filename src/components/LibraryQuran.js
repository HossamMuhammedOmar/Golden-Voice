const LibraryQuran = ({
  quran,
  setCurrentQuran,
  setIsPlaying,
  allQuran,
  setQuran,
}) => {
  // Handlers
  const quranClickHandler = e => {
    setCurrentQuran(quran)
    setIsPlaying(false)
    const newClip = allQuran.map(q => {
      if (quran.id === q.id) {
        return {
          ...q,
          active: true,
        }
      } else {
        return {
          ...q,
          active: false,
        }
      }
    })

    setQuran(newClip)
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
      <img src={quran.cover} />
      <div className="song-description">
        <h3>{quran.name}</h3>
        <h4>{quran.artist}</h4>
      </div>
    </div>
  )
}

export default LibraryQuran
