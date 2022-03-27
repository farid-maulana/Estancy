import React from 'react'

const OutlineButton = ({value}) => {
    return (
        <div className='mr-32 box-border drop-shadow-lg rounded-lg border border-primary'>
            <button className='left-3.5 top-2.5 grow font-medium px-3.5 py-1 font-normal text-base text-lg text-center text-primary'>{value}</button>
        </div>
    )
}

export default OutlineButton