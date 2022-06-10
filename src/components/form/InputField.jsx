import React from 'react'

const InputField = ({ type, placeholder, nameId, onChangeHandler, size }) => {
  return (
    <div className="mb-3">
      <input type={type} className={`form-control form-control-${size}`} id={nameId} name={nameId} placeholder={placeholder} aria-label={placeholder} onChange={onChangeHandler} />
    </div>
  )
}

export default InputField