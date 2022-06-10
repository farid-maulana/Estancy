import React from 'react'

const RadioButton = ({ nameId, text, value }) => {
  return (
    <div className='form-check mb-3 text-sm'>
      <input className='form-check-input' style={{ padding: '5px' }} type='radio' name={nameId} id={nameId} value={value} />
      <p className='custom-control-label' htmlFor={nameId}>{text}</p>
    </div>
  )
}

export default RadioButton