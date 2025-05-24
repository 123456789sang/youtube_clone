import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='p-2 mx-2 my-2 rounded-md bg-gray-200 break-keep'>{name}</button>
    </div>
  )
}

export default Button;