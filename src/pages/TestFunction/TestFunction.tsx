import { SettingOutlined, WifiOutlined } from '@ant-design/icons'
import { Checkbox, Table, Tooltip } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import React from 'react'
import './index.scss'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const columns: ColumnsType<DataType> = [
  {
    title: (
      <div className=''>
        <SettingOutlined style={{ marginRight: '20px', color: '#4361EE' }} />
        <Checkbox indeterminate />
        <span style={{ marginLeft: '30px' }}>Mã phiếu</span>
      </div>
    ),
    dataIndex: 'name',
    width: '201px',
    render: (text) => (
      <div className='' style={{ display: 'flex' }}>
        <div style={{ marginLeft: '34px' }}>
          <Checkbox />
        </div>
        <Tooltip title={text}>
          <span style={{ marginLeft: '30px' }}>{text}</span>
        </Tooltip>
      </div>
    )
  },
  {
    title: (
      <div className='' style={{ display: 'flex', justifyContent: 'space-between' }}>
        Tên sản phẩm
        <WifiOutlined style={{ color: '#4361EE' }} />
      </div>
    ),
    dataIndex: 'age',
    width: '553px',
    render: (text) => (
      <div className='' style={{ color: '#007AFF' }}>
        <Tooltip title={text}>
          <span>{text}</span>
        </Tooltip>
      </div>
    )
  },
  {
    title: (
      <div className='' style={{ display: 'flex' }}>
        <span style={{ marginRight: '8px' }}>Giá bán</span>
        <WifiOutlined style={{ color: '#939393' }} />
      </div>
    ),
    width: '135px',
    dataIndex: 'address',
    render: (text) => (
      <Tooltip title={text}>
        <span style={{ color: '#007AFF' }}>{text}</span>
      </Tooltip>
    )
  },
  {
    title: 'Kho',
    width: '155px',
    dataIndex: 'address'
  },
  {
    title: 'Mã phiếu dịch vụ',
    width: '150px',
    dataIndex: 'address',
    render: (text) => (
      <Tooltip title={text}>
        <span style={{ color: '#007AFF' }}>{text}</span>
      </Tooltip>
    )
  },
  {
    title: 'Trạng thái',
    width: '255px',
    dataIndex: 'address'
  },
  {
    title: 'Loại',
    width: '122px',
    dataIndex: 'address'
  },
  {
    title: 'Kỹ thuật',
    width: '132px',
    dataIndex: 'address'
  }
]

const data: DataType[] = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward  ${i}`,
    age: 32,
    address: `London ${i}`
  })
}
const TestFunction = () => {
  return (
    <div className='testfuntion'>
      <Table
        style={{
          width: '100%'
        }}
        columns={columns}
        dataSource={data}
        pagination={{
          pageSizeOptions: ['10', '20', '30'],
          showTotal: (total, range) => `Hiển thị ${range[0]}-${range[1]} của ${total}`,
          locale: { items_per_page: '' },
          showSizeChanger: true
        }}
      />
    </div>
  )
}

export default TestFunction
