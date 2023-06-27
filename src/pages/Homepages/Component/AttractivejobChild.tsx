import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface IAttractivejobChild {
  iconName: IconProp
  text: string
  description: string
}
const AttractivejobChild = (props: IAttractivejobChild) => {
  const { iconName, text, description } = props
  return (
    <div className='AttractivejobChildCom'>
      <div>
        <FontAwesomeIcon icon={iconName} />
      </div>
      <div>
        <span>{text}</span>
      </div>
      <div>{description}</div>
    </div>
  )
}

export default AttractivejobChild
