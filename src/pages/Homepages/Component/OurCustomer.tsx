import { Carousel } from 'antd'

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
}

const OurCustomer = () => {
  return (
    <div className='OurCustomer'>
      <span>Khách hàng của chúng tôi</span>
      <div className='OurCustomerChild'>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              <div>Tôi rất bất ngờ với cách làm việc Chị Thái Hà và JOHN HUNT</div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <div>Tôi rất bất ngờ với cách làm việc Chị Thái Hà và JOHN HUNT</div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <div>Tôi rất bất ngờ với cách làm việc Chị Thái Hà và JOHN HUNT</div>
            </h3>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default OurCustomer
