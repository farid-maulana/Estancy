import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = ({ name, onClickHandler }) => {
  return (
    <NavLink to={'#'} onClick={(data) => onClickHandler(data)} className='d-block p-2'>
      <div className='d-flex p-2'>
        <img alt='profile' src='/img/team-5.jpg' className='avatar shadow' />
        <div className='ms-3'>
          <h6 className='mb-0'>{name}</h6>
          <p className='text-muted text-xs mb-2'>1 hour ago</p>
          <span className='text-muted text-sm col-11 p-0 text-truncate d-block'>Computer users and programmers</span>
        </div>
      </div>
    </NavLink>
  )
}

export default Contact