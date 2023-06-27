import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Divider, MenuProps, Space } from 'antd'
import Dropdown from 'antd/es/dropdown/dropdown'
import React from 'react'
import './SearchInput.scss'

const SearchInput = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target='_blank' rel='noopener noreferrer' href='https://www.antgroup.com'>
          1st menu item
        </a>
      )
    },
    {
      key: '2',
      label: (
        <a target='_blank' rel='noopener noreferrer' href='https://www.aliyun.com'>
          2nd menu item (disabled)
        </a>
      ),
      disabled: true
    },
    {
      key: '3',
      label: (
        <a target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
          3rd menu item (disabled)
        </a>
      ),
      disabled: true
    }
  ]
  return (
    <div className='SearchInput'>
      <div className='SearchInputChild'>
        <div className='SearchInputChild-search'>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className='SearchInputChild-input'>
          <input type='text' placeholder='Tên công việc' />
        </div>
        <div className='dropdown'>
          <Dropdown
            menu={{ items }}
            dropdownRender={(menu) => (
              <div>
                {React.cloneElement(menu as React.ReactElement)}
                <Divider style={{ margin: 0 }} />
              </div>
            )}
          >
            <div>
              <Space>Lĩnh vực</Space>
            </div>
          </Dropdown>
        </div>
        <div className='dropdown'>
          <Dropdown
            menu={{ items }}
            dropdownRender={(menu) => (
              <div>
                {React.cloneElement(menu as React.ReactElement)}
                <Divider style={{ margin: 0 }} />
              </div>
            )}
          >
            <div>
              <Space>Khu vực</Space>
            </div>
          </Dropdown>
        </div>
        <div className='dropdown'>
          <Dropdown
            menu={{ items }}
            dropdownRender={(menu) => (
              <div>
                {React.cloneElement(menu as React.ReactElement)}
                <Divider style={{ margin: 0 }} />
              </div>
            )}
          >
            <div>
              <Space>Kinh nghiệm</Space>
            </div>
          </Dropdown>
        </div>
        <div className='SearchButton'>Tìm kiếm</div>
      </div>
    </div>
  )
}

export default SearchInput
