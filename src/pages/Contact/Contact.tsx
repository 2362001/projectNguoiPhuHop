import { faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Form, Input, Watermark } from 'antd'
import { useState } from 'react'
import userImg from '../../assets/lh-images.png'
import { Footer, Header } from '../../components'
import './Contact.scss'

type LayoutType = Parameters<typeof Form>[0]['layout']
const Contact = () => {
  const [form] = Form.useForm()
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal')

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout)
  }

  const formItemLayout = formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null

  return (
    <Watermark content='Sena dz'>
      <Header />
      <div className='contact'>
        <div>
          <span className='span1'>LIÊN HỆ NGAY VỚI CHÚNG TÔI</span>
        </div>
        <div className='contact-content'>
          <div className='contact-content-item item1'>
            <span className='spancontent'>Địa chỉ</span>
            <ul>
              <li>
                <FontAwesomeIcon icon={faLocationDot} /> Tầng 3, số 32 Nam Đồng, Đống Đa, Hà Nội
              </li>
              <li>
                <FontAwesomeIcon icon={faLocation} /> 096 962 0550
              </li>
              <li>
                <FontAwesomeIcon icon={faLocation} /> nguoiphuhop@johnhunt.vn
              </li>
              <li>
                <FontAwesomeIcon icon={faLocation} /> https://nguoiphuhop.com/
              </li>
            </ul>
            <div className='item1-img'>
              <img src={userImg} alt='useImg' />
            </div>
          </div>
          <div className='contact-content-item item2'>
            <span className='spancontent'>Gửi lại thông tin</span>
            <p>Hãy để lại thông tin chúng tôi sẽ liên hệ lại ngay</p>
            <Form
              {...formItemLayout}
              layout={formLayout}
              form={form}
              initialValues={{ layout: formLayout }}
              onValuesChange={onFormLayoutChange}
              style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
            >
              <div className='input'>
                <Input style={{ width: '100%' }} placeholder='Họ tên' />
              </div>
              <div className='input'>
                <Input placeholder='Email' />
              </div>
              <div className='input'>
                <Input placeholder='Số điện thoại' />
              </div>
              <div className='input'>
                <Input placeholder='Lời nhắn' />
              </div>
              <Button type='primary'>Gửi ngay</Button>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </Watermark>
  )
}

export default Contact
