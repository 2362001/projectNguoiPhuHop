import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './FeedbackInput.scss'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
const FeedbackInput = () => {
  return (
    <div className='feedbackInput'>
      <div className='feedbackInputChild'>
        <div className='feedbackInputChild-left'>
          <span>Hãy để lại email để cập nhật những tin tức mới nhất từ JOHN HUNT nhé!</span>
        </div>
        <div className='feedbackInputChild-right'>
          <input type='text' placeholder='Email của bạn' />
          <div className='feedbackInputChild-right-btn'>
            <FontAwesomeIcon className='icon' icon={faPaperPlane} />
            Gửi
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackInput
