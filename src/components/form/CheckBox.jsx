import React from 'react'

const CheckBox = ({ nameId, value, text }) => {
  return (
    <div className='form-check text-sm'>
      <input className='form-check-input' style={{ paddingTop: '1px' }} type='checkbox' name={nameId} id={nameId} value={value} />
      <p className='custom-control-label' htmlFor={nameId}>{text}</p>
    </div>
  )
}

export default CheckBox