import React from 'react'

const InputFieldWithLabel = ({ type, nameId, label, value, onChangeHandler }) => {
  return (
    <div className='form-group'>
      <label>{label}</label>
      <input type={type} className="form-control" id={nameId} name={nameId} placeholder={label} aria-label={label} value={value} onChange={onChangeHandler} />
    </div>
  )}

export default InputFieldWithLabel