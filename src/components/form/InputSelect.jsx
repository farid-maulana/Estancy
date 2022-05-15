import React from 'react'

const InputSelect = ({ label, nameId, options, value, onChangeHandler }) => {
  return (
    <div className='form-group'>
      <label>{label}</label>
      <select id={nameId} name={nameId} className="form-select" value={value} onChange={onChangeHandler}>
        <option value="" selected disabled>Choose...</option>
        {
          options.map((opt) => {
            return <option value={opt}>{opt.charAt(0).toUpperCase() + opt.slice(1)}</option>
          })
        }
      </select>
    </div>
  )
}

export default InputSelect