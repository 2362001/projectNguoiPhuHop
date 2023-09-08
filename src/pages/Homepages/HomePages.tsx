import { Watermark } from 'antd'
import banner from '../../assets/bg-vechungtoi.png'
import Banner from '../../components/Layout/Banner/Banner'
import Header from '../../components/Layout/Header/Header'
import './index.scss'

const HomePages = () => {
  return (
    <Watermark content='sena'>
      <div className='HomePages'>
        <Header />
        <Banner img={banner} textBanner='NGƯỜI PHÙ HỢP JOHN HUNT' isHaveSearchInput />
        {/* <Attractivejob />
        <OurCustomer />
        <OurCustomer />
        <FeedbackInput />
        <Footer /> */}
      </div>
    </Watermark>
  )
}

export default HomePages
