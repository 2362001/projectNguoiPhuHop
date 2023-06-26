import './Header.scss'
import logo from '../../../assets/logo.png'

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='header-left'>
          <div className='header-left-img'>
            <img src={logo} alt='#' />
          </div>
        </div>
        <div className='header-right'>
          <ul className='header-right-ul'>
            <li className='header-reight-ul-li'>Trang chủ</li>
            <li className='header-reight-ul-li'>Về chúng tôi</li>
            <li className='header-reight-ul-li'>Vị trí tuyển dụng</li>
            <li className='header-reight-ul-li'>Blog</li>
            <li className='header-reight-ul-li'>Liên hệ</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
