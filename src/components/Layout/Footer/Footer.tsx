import logowhite from '../../../assets/logowhite.png'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='ft1 commont-ft'>
        <div className='ft1-img'>
          <img src={logowhite} alt='#' />
        </div>
        <div>
          <span>
            Với niềm tin <span>“Tìm người phù hợp là bước đầu tiên của mọi kế hoạch vĩ đại trong doanh nghiệp”</span> ,
            chúng tôi hy vọng với sự hỗ trợ của mình, doanh nghiệp sẽ ngày càng vững vàng hơn trên con đường tìm kiếm
            “người phù hợp” với năng lực và hiệu suất công việc cao!
          </span>
        </div>
      </div>
      <div className='ft2 commont-ft'>
        <ul>
          <li>Menu</li>
          <li>
            <a href='/'>Trang chủ</a>
          </li>
          <li>
            <a href='/'>Vị trí tuyển dụng</a>
          </li>
          <li>
            <a href='/'>Về chúng tôi</a>
          </li>
          <li>
            <a href='/'>Liên hệ</a>
          </li>
        </ul>
      </div>
      <div className='ft3 commont-ft'>
        <ul>
          <li>Menu</li>
          <li>
            <a href='/'>Trang chủ</a>
          </li>
          <li>
            <a href='/'>Vị trí tuyển dụng</a>
          </li>
          <li>
            <a href='/'>Về chúng tôi</a>
          </li>
          <li>
            <a href='/'>Liên hệ</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
