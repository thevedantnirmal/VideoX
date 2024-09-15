import { userIcon } from '../utils/constants'

const ChatList = ({name,text}) => {
  return (
    <div>
        <div className='flex items-center shadow-lg p-1'>
            <img src={userIcon} alt='icon' className='h-8'/>
            <span className='px-2 font-semibold m-1'>{ name}</span>
            <span>{text}</span>
        </div>
    </div>
  )
}

export default ChatList