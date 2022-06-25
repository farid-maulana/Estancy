import { getAuth } from 'firebase/auth'
import React from 'react'

const BubbleChat = ({ sender, content, time, status }) => {
  const auth = getAuth()
  const user = auth.currentUser
  return (
    <div className={`row ${sender === user.email ? 'justify-content-end text-right' : 'justify-content-start text-start' } mb-4`}>
      <div className='col-auto'>
        <div className={`card ${sender === user.email ? 'bg-gray-200' : '' }`}>
          <div className='card-body py-2 px-3'>
            <p className='mb-1'>
              {content}<br />
            </p>
            <div className='d-flex align-items-center justify-content-end text-sm opacity-6'>
              <i className={`ni ni-check-bold text-sm me-1 ${status === 'read' ? 'text-info' : ''}`}></i>
              <small>{new Date(time.seconds * 1000).toLocaleTimeString('en-US')}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BubbleChat