import React from 'react'

const InputWithLabelIcon = ({ label, icon, type, nameId, placeholder }) => {
  return (
    <>
      <label>{label}</label>
      <div className='input-group'>
        <span className='input-group-text'><i className={icon}></i></span>
        <input className='form-control ps-1' type={type} name={nameId} id={nameId} placeholder={placeholder} />
      </div>
    </>
  )
}

export default InputWithLabelIcon