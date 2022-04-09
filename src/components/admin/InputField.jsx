import React from 'react'

const InputField = ({ type, id, name, title, onChange, value }) => {
  return (
    <div className='w-full mb-6'>
      <label htmlFor={id} className='text-sm'>{title}</label>
      <input type={type} id={id} name={name} onChange={onChange} value={value} className='form-control' />
    </div>
  )
}

export default InputField