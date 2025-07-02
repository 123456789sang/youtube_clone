import React from 'react'

const ChatMessage = ({name,message}) => {
  return (

    <div className='flex items-center  space-x-2 p-1 '>
        <img  className='h-6 w-6 rounded-full'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" alt="user"/>
        <span className='font-bold leading-none'>{name}</span>
        <span className='leading-none '>{message}</span>
    </div>
  )
}

export default ChatMessage;