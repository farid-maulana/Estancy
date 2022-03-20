import React from 'react'

const InputField = ({ type, id, placeholder, name }) => {
    return (
        <div className='mb-3'>
            <input className='bg-primary-100 rounded-lg p-5 w-full h-12 text-sm placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:primary'
        placeholder={placeholder} type={type} name={name} id={id} />
        </div>
        

    )
}

export default InputField;