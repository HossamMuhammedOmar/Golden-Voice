import LibraryQuran from './LibraryQuran'

const Library = ({
  allQuran,
  setCurrentQuran,
  setIsPlaying,
  setQuran,
  libraryOpen,
}) => {
  return (
    <div className={`library ${libraryOpen ? 'active-library-nav' : ''}`}>
      <h2>المكتبة</h2>
      <div className="library-quran">
        {allQuran.map(quran => (
          <LibraryQuran
            key={quran.id}
            quran={quran}
            setCurrentQuran={setCurrentQuran}
            setIsPlaying={setIsPlaying}
            allQuran={allQuran}
            setQuran={setQuran}
          />
        ))}
      </div>
    </div>
  )
}

export default Library
