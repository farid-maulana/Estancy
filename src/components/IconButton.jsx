import React from 'react'

const IconButton = ({ img }) => {
  return (
    <button className='rounded-lg border border-solid border-[#A3ADB8] py-1 px-3'>
      <img srcSet={img} className='w-8'/>
    </button>
  )
}

export default IconButton