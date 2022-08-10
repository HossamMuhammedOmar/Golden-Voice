import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ setLibraryOpen, libraryOpen }) => {
  return (
    <nav>
      <button onClick={() => setLibraryOpen(!libraryOpen)}>
        المكتبة &nbsp;&nbsp;&nbsp;&nbsp;
        <FontAwesomeIcon icon={faBookOpen} />
      </button>
      <h1>تلاوات خاشعة</h1>
    </nav>
  )
}

export default Nav
