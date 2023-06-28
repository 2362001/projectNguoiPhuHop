import { faHandshakeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Row } from 'antd'

const Attractivejob = () => {
  const style: React.CSSProperties = {
    padding: '8px 0',
    height: '150px',
    borderRadius: '20px',
    boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
  }
  return (
    <div className='Attractivejob'>
      <span>Việc làm hấp dẫn</span>
      <div className='AttractivejobChild'>
        <Row gutter={[16, 24]}>
          <Col className='gutter-row' span={6}>
            <div style={style}>
              <div>
                <FontAwesomeIcon icon={faHandshakeSlash} />
              </div>
              <span>Marketing</span>
              <p>10 Jobs Available</p>
            </div>
          </Col>
          <Col className='gutter-row' span={6}>
            <div style={style}>
              <div>
                <FontAwesomeIcon icon={faHandshakeSlash} />
              </div>
              <span>Kinh doanh</span>
              <p>10 Jobs Available</p>
            </div>
          </Col>
          <Col className='gutter-row' span={6}>
            <div style={style}>
              <div>
                <FontAwesomeIcon icon={faHandshakeSlash} />
              </div>
              <span>Nhân sự</span>
              <p>10 Jobs Available</p>
            </div>
          </Col>
          <Col className='gutter-row' span={6}>
            <div style={style}>
              <div>
                <FontAwesomeIcon icon={faHandshakeSlash} />
              </div>
              <span>Tài chính kế toán</span>
              <p>10 Jobs Available</p>
            </div>
          </Col>
          <Col className='gutter-row' span={6}>
            <div style={style}>
              <div>
                <FontAwesomeIcon icon={faHandshakeSlash} />
              </div>
              <span>Trợ lý & thư kí</span>
              <p>10 Jobs Available</p>
            </div>
          </Col>
          <Col className='gutter-row' span={6}>
            <div style={style}>
              <div>
                <FontAwesomeIcon icon={faHandshakeSlash} />
              </div>
              <span>Chăm sóc khách hàng</span>
              <p>10 Jobs Available</p>
            </div>
          </Col>
          <Col className='gutter-row' span={6}>
            <div style={style}>
              <div>
                <FontAwesomeIcon icon={faHandshakeSlash} />
              </div>
              <span>Nghiên cứu và phát triển sản phẩm</span>
              <p>10 Jobs Available</p>
            </div>
          </Col>
          <Col className='gutter-row' span={6}>
            <div style={style}>
              <div>
                <FontAwesomeIcon icon={faHandshakeSlash} />
              </div>
              <span>Admin & hành chính</span>
              <p>10 Jobs Available</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Attractivejob
