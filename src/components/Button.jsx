import React from 'react'

const Button = ({value}) => {
  return (
      <div className='mb-3'>
          <button className='bg-gradient-to-r from-primary to-[#1877F2] w-full h-12 rounded-lg text-white text-lg text-center'>{value}</button>
      </div>
  )
}

export default Button