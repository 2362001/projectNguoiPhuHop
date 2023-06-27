import { useState } from 'react'
import { Footer, Header } from '../../components'
import './Contact.scss'
import { Button, Form, Input, Radio } from 'antd'

type LayoutType = Parameters<typeof Form>[0]['layout']
const Contact = () => {
  const [form] = Form.useForm()
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal')

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout)
  }

  const formItemLayout = formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null

  const buttonItemLayout = formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null
  return (
    <>
      <Header />
      <div className='contact'>
        <div>
          <span>LIÊN HỆ NGAY VỚI CHÚNG TÔI</span>
        </div>
        <div className='contact-content'>
          <div className='contact-content-item item1'>
            <span>Địa chỉ</span>
            <ul>
              <li>Tầng 3, số 32 Nam Đồng, Đống Đa, Hà Nội</li>
              <li>096 962 0550</li>
              <li>nguoiphuhop@johnhunt.vn</li>
              <li>https://nguoiphuhop.com/</li>
            </ul>
          </div>
          <div className='contact-content-item item2'>
            <span>Gửi lại thông tin</span>
            <p>Hãy để lại thông tin chúng tôi sẽ liên hệ lại ngay</p>
            <Form
              {...formItemLayout}
              layout={formLayout}
              form={form}
              initialValues={{ layout: formLayout }}
              onValuesChange={onFormLayoutChange}
              style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
            >
              <Form.Item style={{ width: '100%' }}>
                <Input placeholder='Họ tên' />
              </Form.Item>
              <Form.Item style={{ width: '100%' }}>
                <Input placeholder='Email' />
              </Form.Item>
              <Form.Item style={{ width: '100%' }}>
                <Input placeholder='Số điện thoại' />
              </Form.Item>
              <Form.Item style={{ width: '100%' }}>
                <Input placeholder='Lời nhắn' />
              </Form.Item>
              <Form.Item {...buttonItemLayout}>
                <Button type='primary'>Submit</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
