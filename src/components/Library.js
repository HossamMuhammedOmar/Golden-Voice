import LibraryQuran from './LibraryQuran'

const Library = ({ allQuran }) => {
  return (
    <div className="library">
      <h2>المكتبة</h2>
      <div className="library-quran">
        {allQuran.map(quran => (
          <LibraryQuran quran={quran} />
        ))}
      </div>
    </div>
  )
}

export default Library
