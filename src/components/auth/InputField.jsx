import React from 'react'

const InputField = ({ type, placeholder, nameId }) => {
  return (
    <div className="mb-3">
      <input type={type} className="form-control form-control-lg" id={nameId} name={nameId} placeholder={placeholder} aria-label={placeholder} />
    </div>
  )
}

export default InputField