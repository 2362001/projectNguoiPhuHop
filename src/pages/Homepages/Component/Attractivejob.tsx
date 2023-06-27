import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import AttractivejobChild from './AttractivejobChild'

const Attractivejob = () => {
  return (
    <div className='Attractivejob'>
      <div className='AttractivejobChild'>
        <div className='AttractivejobChild-1'>
          <span>Việc làm hấp dẫn</span>
        </div>
        <div className='AttractivejobChild-2'>
          <AttractivejobChild iconName={faHandshake} text='Marketing' description='10 Jobs Avaiable' />
          <AttractivejobChild iconName={faHandshake} text='Marketing' description='10 Jobs Avaiable' />
          <AttractivejobChild iconName={faHandshake} text='Marketing' description='10 Jobs Avaiable' />
          <AttractivejobChild iconName={faHandshake} text='Marketing' description='10 Jobs Avaiable' />
          <AttractivejobChild iconName={faHandshake} text='Marketing' description='10 Jobs Avaiable' />
          <AttractivejobChild iconName={faHandshake} text='Marketing' description='10 Jobs Avaiable' />
        </div>
      </div>
    </div>
  )
}

export default Attractivejob
