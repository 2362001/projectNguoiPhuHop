import SearchInput from '../../commonComponents/SearchInput/SearchInput'
import './Banner.scss'

export interface IPropBanner {
  img: string
  textBanner: string
  isHaveSearchInput: boolean
}
const Banner = (props: IPropBanner) => {
  const { img, textBanner, isHaveSearchInput } = props

  return (
    <div className='banner'>
      <div className='banner-children'>
        <img className='banner-children-img' src={img} alt='' />
        <div className='banner-children-spanBanner'>{textBanner}</div>
        {isHaveSearchInput && (
          <div className='banner-children-searchinput'>
            <SearchInput />
          </div>
        )}
      </div>
    </div>
  )
}

export default Banner
