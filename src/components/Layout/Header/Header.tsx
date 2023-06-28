import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import './Header.scss'

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className='header'>
      <div className='header-left'>
        <div className='header-left-img'>
          <img src={logo} alt='#' />
        </div>
      </div>
      <div className='header-right'>
        <ul className='header-right-ul'>
          <li aria-hidden className='header-reight-ul-li' onClick={() => navigate('/')}>
            Trang chủ
          </li>
          <li aria-hidden className='header-reight-ul-li' onClick={() => navigate('/aboutme')}>
            Về chúng tôi
          </li>
          <li aria-hidden className='header-reight-ul-li' onClick={() => navigate('/vacancies')}>
            Vị trí tuyển dụng
          </li>
          <li className='header-reight-ul-li'>Blog</li>
          <li aria-hidden className='header-reight-ul-li' onClick={() => navigate('/contact')}>
            Liên hệ
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
