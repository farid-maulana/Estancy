import React from 'react'

const InputFieldWithLabel = ({ type, nameId, label }) => {
  return (
    <div className='form-group'>
      <label>{label}</label>
      <div className="mb-3">
        <input type={type} className="form-control" id={nameId} name={nameId} placeholder={label} aria-label={label} />
      </div>
    </div>
  )}

export default InputFieldWithLabel