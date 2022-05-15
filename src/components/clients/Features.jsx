import React from 'react'

const Features = ({ icon, name, description, color }) => {
  return (
    <div className='col-lg-4 col-md-6'>
      <div className='p-3 text-center'>
        <div className={'icon icon-shape bg-gradient-' + color + ' shadow mx-auto'}>
          <i className={icon} style={{ fontSize: '18px' }}></i>
        </div>
        <h5 className='mt-4'>{name}</h5>
        <p className='px-4'>{description}</p>
      </div>
    </div>
  )
}

export default Features