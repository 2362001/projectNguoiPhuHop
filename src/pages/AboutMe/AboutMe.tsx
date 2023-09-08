import { Header } from '../../components'
import banner from '../../assets/bg-vechungtoi.png'
import imghunt from '../../assets/4-pzvdr5xkqxuy7d6fv13rldvjorezq23ro1qjfowoj4.jpg'
import imgprovide from '../../assets/3-pzvdpwtbmw56q2zz6hlo9p9f69ldgl4nhuf8eerkts.jpg'
import img1 from '../../assets/number_1-removebg-preview-1.png'
import img2 from '../../assets/number_2-removebg-preview.png'
import img3 from '../../assets/number_3-removebg-preview.png'
import img4 from '../../assets/number_4-removebg-preview.png'
import img5 from '../../assets/number_5-removebg-preview.png'
import './index.scss'
import { CheckCircleOutlined } from '@ant-design/icons'
import { Button, Col, Row, Watermark } from 'antd'

const AboutMe = () => {
  const style: React.CSSProperties = {
    padding: '8px 0',
    height: '150px',
    borderRadius: '20px',
    boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
  }
  return (
    <div className='AboutMe'>
      <Watermark content='nguoiphuhop'>
        <Header />
      </Watermark>
      <div className='banner'>
        <div className='banner-children'>
          <img className='banner-children-img' src={banner} alt='' />
          <div className='banner-children-spanBanner'>NGƯỜI PHÙ HỢP JOHN HUNT</div>
        </div>
      </div>
      <Watermark content='nguoiphuhop'>
        <div className='about-me'>
          <div className='infor'>
            <div className='infor-img-hunt'>
              <img src={imghunt} alt='' />
            </div>
            <div className='infor-about-hunt'>
              <h1>Lịch sử hình thành</h1>
              <p>
                J.O.H.N ACADEMY là Học viện Quản trị đúng được sáng lập bởi Anh Mai Xuân Đạt với sứ mệnh: “Đưa những lý
                thuyết đúng đắn, chính quy của thế giới về với Việt Nam, nhằm phát triển năng suất của các doanh nghiệp
                và mang lại cuộc sống hạnh phúc cho doanh nhân”.Từ khi thành lập tới nay, J.O.H.N ACADEMY đã thành công
                đào tạo, huấn luyện cho hàng ngàn học viên, là chủ cũng như thành viên nòng cốt của hàng trăm doanh
                nghiệp Việt Nam. Nhiều chủ doanh nghiệp đã tìm ra con đường quản trị đúng đắn, phù hợp dưới sự hỗ trợ
                của anh Mai Xuân Đạt & cộng sự.
              </p>
              <p>
                Trong cuốn sách quản trị kinh điển “Từ tốt đến vĩ đại”, tác giả Jim Collins đã nói rằng: “Tài sản lớn
                nhất của doanh nghiệp không phải là con người, mà là người phù hợp”. Mọi chủ doanh nghiệp đều nhận thức
                được rằng, dù chiến lược có đẹp đẽ, hoành tráng đến mấy mà không có người thực thi thì cũng thành vô
                nghĩa. Vì vậy, để hoàn thiện vòng tròn giá trị mà J.O.H.N ACADEMY muốn trao đến cho doanh nghiệp, chúng
                tôi quyết định ra mắt JOHN HUNT, từ quý II/2022.
              </p>
            </div>
          </div>
        </div>
        <div className='about-me-provide'>
          <div className='infor-provide'>
            <div className='infor-about-provide'>
              <h1>Chúng tôi cung cấp</h1>
              <p>
                Với niềm tin “Tìm người phù hợp là bước đầu tiên của mọi kế hoạch vĩ đại trong doanh nghiệp”, chúng tôi
                hy vọng với sự hỗ trợ của mình, doanh nghiệp sẽ ngày càng vững vàng hơn trên con đường: Tuyển đúng để
                Tìm người phù hợp!
              </p>
              <ul className='list-provide'>
                JOHN HUNT cung cấp cho quý doanh nghiệp những dịch vụ như sau:
                <li className='provide'>
                  <CheckCircleOutlined />
                  Đào tạo về tuyển dụng nhân sự
                </li>
                <li className='provide'>
                  {' '}
                  <CheckCircleOutlined />
                  Tư vấn, xây dựng hệ thống tuyển dụng cho doanh nghiệp SMEs
                </li>
                <li className='provide'>
                  {' '}
                  <CheckCircleOutlined />
                  Setup phòng Tuyển dụng
                </li>
                <li className='provide'>
                  {' '}
                  <CheckCircleOutlined />
                  Tuyển dụng nhân lực theo yêu cầu
                </li>
              </ul>
              <Button type='primary' shape='round' size='large'>
                Tìm việc phù hợp với bạn
              </Button>
            </div>
            <div className='infor-img-hunt-provide'>
              <img src={imgprovide} alt='' />
            </div>
          </div>
        </div>
        <div className='work-phil'>
          <div className='work-phil-container'>
            <h2>Triết lý làm việc</h2>
            <p className='descreption'>
              Chúng tôi tuân thủ kỷ luật tuyển dụng nhân sự dựa theo mô hình CWC. Theo đó, một ứng viên được gọi là phù
              hợp khi thỏa mãn 3 yếu tố:
            </p>
            <div className='work-phil-content'>
              <div className='can-do'>
                <ul>
                  CAN DO NĂNG LỰC
                  <li>Công việc đúng</li>
                  <li>Vị trí đúng</li>
                  <li>Kỹ năng đúng</li>
                </ul>
              </div>
              <div className='will-do'>
                <ul>
                  WILL DO MONG MUỐN & CAM KẾT
                  <li>Công việc đúng</li>
                  <li>Vị trí đúng</li>
                  <li>Kỹ năng đúng</li>
                </ul>
              </div>
              <div className='current-fit'>
                <ul>
                  CULTURE FIT SỰ PHÙ HỢP VĂN HÓA
                  <li>Công việc đúng</li>
                  <li>Vị trí đúng</li>
                  <li>Kỹ năng đúng</li>
                </ul>
              </div>
            </div>
            <p className='content'>
              Chính vì vậy, để có thể mang tới dịch vụ tuyển dụng chất lượng cao nhất tới khách hàng, quy trình tuyển
              dụng của chúng tôi sẽ diễn ra như sau:
            </p>
            <div className='step-phil'>
              <Row gutter={[16, 24]}>
                <Col className='gutter-row' span={6}>
                  <div style={style}>
                    <div>
                      <img src={img1} alt='' />
                    </div>
                    <span>Bước 1</span>
                    <p>Làm rõ yêu cầu tuyển dụng & Xây dựng chân dung ứng viên</p>
                  </div>
                </Col>
                <Col className='gutter-row' span={6}>
                  <div style={style}>
                    <div>
                      <img src={img2} alt='' />
                    </div>
                    <span>Bước 1</span>
                    <p>Làm rõ yêu cầu tuyển dụng & Xây dựng chân dung ứng viên</p>
                  </div>
                </Col>
                <Col className='gutter-row' span={6}>
                  <div style={style}>
                    <div>
                      <img src={img3} alt='' />
                    </div>
                    <span>Bước 1</span>
                    <p>Làm rõ yêu cầu tuyển dụng & Xây dựng chân dung ứng viên</p>
                  </div>
                </Col>
                <Col className='gutter-row' span={6}>
                  <div style={style}>
                    <div>
                      <img src={img4} alt='' />
                    </div>
                    <span>Bước 1</span>
                    <p>Làm rõ yêu cầu tuyển dụng & Xây dựng chân dung ứng viên</p>
                  </div>
                </Col>
                <Col className='gutter-row' span={6}>
                  <div style={style}>
                    <div>
                      <img src={img5} alt='' />
                    </div>
                    <span>Bước 1</span>
                    <p>Làm rõ yêu cầu tuyển dụng & Xây dựng chân dung ứng viên</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Watermark>
    </div>
  )
}

export default AboutMe
