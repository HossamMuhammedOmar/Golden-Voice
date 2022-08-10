import LibraryQuran from './LibraryQuran'

const Library = ({ allQuran, setCurrentQuran }) => {
  return (
    <div className="library">
      <h2>المكتبة</h2>
      <div className="library-quran">
        {allQuran.map(quran => (
          <LibraryQuran
            key={quran.id}
            allQuran={allQuran}
            quran={quran}
            setCurrentQuran={setCurrentQuran}
          />
        ))}
      </div>
    </div>
  )
}

export default Library
