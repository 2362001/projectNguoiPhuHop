import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SearchInput.scss'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const SearchInput = () => {
  return (
    <div className='SearchInput'>
      <div>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default SearchInput
