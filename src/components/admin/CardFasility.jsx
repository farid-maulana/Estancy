import React from 'react'

const CardFasility = ({ icon, name, value }) => {
  return (
    <div className='col-lg-4 col-md-3 mb-4'>
      <div className='d-flex align-items-center'>
        <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
          <i className={icon} style={{ fontSize: '13px' }}></i>
        </div>
        <div className='d-flex flex-column'>
          <p className="text-sm mb-0 text-secondary font-weight-bold">{name}</p>
          <span className="text-sm font-weight-bolder text-capitalize">{value}</span>
        </div>
      </div>
    </div>
  )
}

export default CardFasility