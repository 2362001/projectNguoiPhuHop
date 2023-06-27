import banner from '../../assets/bg-vechungtoi.png'
import Banner from '../../components/Layout/Banner/Banner'
import FeedbackInput from '../../components/Layout/FeedbackInput/FeedbackInput'
import Footer from '../../components/Layout/Footer/Footer'
import Header from '../../components/Layout/Header/Header'
import Attractivejob from './Component/Attractivejob'
import './index.scss'

const HomePages = () => {
  return (
    <div className='HomePages'>
      <Header />
      <Banner img={banner} textBanner='NGƯỜI PHÙ HỢP JOHN HUNT' />
      {/* <Attractivejob /> */}
      <FeedbackInput />
      <Footer />
    </div>
  )
}

export default HomePages
