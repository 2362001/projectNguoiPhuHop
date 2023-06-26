import Banner from '../components/Layout/Header/Banner/Banner'
import Header from '../components/Layout/Header/Header'
import banner from '../assets/bg-vechungtoi.png'
import SearchInput from '../components/commonComponents/SearchInput/SearchInput'

const HomePages = () => {
  return (
    <div>
      <Header />
      <Banner img={banner} textBanner='NGƯỜI PHÙ HỢP JOHN HUNT' />
      <SearchInput />
    </div>
  )
}

export default HomePages
