import { Watermark } from 'antd'
import banner from '../../assets/bg-vechungtoi.png'
import Banner from '../../components/Layout/Banner/Banner'
import FeedbackInput from '../../components/Layout/FeedbackInput/FeedbackInput'
import Footer from '../../components/Layout/Footer/Footer'
import Header from '../../components/Layout/Header/Header'
import { OurCustomer } from '../../routes/routes'
import Attractivejob from './Component/Attractivejob'
import './index.scss'

const HomePages = () => {
  return (
    <Watermark content='sena'>
      <div className='HomePages'>
        <Header />
        <Banner img={banner} textBanner='NGƯỜI PHÙ HỢP JOHN HUNT' isHaveSearchInput />
        <Attractivejob />
        {/* <OurCustomer />
        <OurCustomer />
        <FeedbackInput />
        <Footer /> */}
      </div>
    </Watermark>
  )
}

export default HomePages
