import { getAuth } from 'firebase/auth'
import { addDoc, collection, onSnapshot, query, Timestamp, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../firebase/config'
import BubbleChat from './BubbleChat'

const RoomChat = ({ name }) => {
  const auth = getAuth()
  const user = auth.currentUser
  const [newMessage, setNewMessage] = useState('')
  const [fromMessages, setFromMessages] = useState([])
  const [toMessages, setToMessages] = useState([])
  const [messages, setMessages] = useState([])

  const inputChangeHandler = (event) => {
    const { name, value } = event.target
    setNewMessage({ ...newMessage, [name]: value })
  }

  const createDataHandler = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'messages'), {
        content: newMessage.content,
        status: 'pending',
        from: user.email,
        to: 'faridmaulana1921@gmail.com',
        created: Timestamp.now(),
      })
    } catch (err) {
      alert(err)
    }
  }

  useEffect(() => {
      const from = query(collection(db, 'messages'), where('from', '==', user.email))
      onSnapshot(from, (querySnapshot) => {
        const fromData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        }))
        setFromMessages(fromData)
      })
      const to = query(collection(db, 'messages'), where('to', '==', user.email))
      onSnapshot(to, (querySnapshot) => {
        const toData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        }))
        setToMessages(toData)
      })
    const mergeMessages = () => {
      setMessages([...fromMessages, ...toMessages])
    }
    mergeMessages()
  }, [])

  return (
    <div className='card blur shadow-blur max-height-vh-80 min-vh-80'>
      <div className='card-header shadow px-4' style={{ paddingTop: '0.7rem', paddingBottom: '0.7rem' }}>
        <div className='row'>
          <div className='col-md-10'>
            <div className='d-flex align-items-center'>
              <img alt='profile' src='/img/team-2.jpg' className='avatar' />
              <div className='ms-3'>
                <h6 className='mb-0 d-block'>{name}</h6>
                <span className='text-sm text-dark opacity-8'>last seen today at 1:53am</span>
              </div>
            </div>
          </div>
          <div className='col-1 my-auto pe-0'>
            <button className='btn btn-icon-only shadow-none text-dark mb-0 me-3 me-sm-0' type='button' data-bs-toggle='tooltip' data-bs-placement='top' title='' data-bs-original-title='Video call'>
              <i className='ni ni-camera-compact'></i>
            </button>
          </div>
          <div className='col-1 my-auto ps-0'>
            <div className='dropdown'>
              <button className='btn btn-icon-only shadow-none text-dark mb-0' type='button' data-bs-toggle='dropdown'>
                <i className='ni ni-settings'></i>
              </button>
              <ul className='dropdown-menu dropdown-menu-end me-sm-n2 p-2' aria-labelledby='chatmsg'>
                <li>
                  <Link to={'#'} className='dropdown-item border-radius-md'>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to={'#'} className='dropdown-item border-radius-md'>
                    Mute conversation
                  </Link>
                </li>
                <li>
                  <Link to={'#'} className='dropdown-item border-radius-md'>
                    Block
                  </Link>
                </li>
                <li>
                  <Link to={'#'} className='dropdown-item border-radius-md'>
                    Clear chat
                  </Link>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <Link to={'#'} className='dropdown-item border-radius-md text-danger'>
                    Delete chat
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='card-body overflow-auto overflow-x-hidden'>
        {
          messages && messages.sort((a, b) => a.data.created - b.data.created).map((message, index) => {
            return <BubbleChat
              key={index}
              sender={message.data.from}
              content={message.data.content}
              time={message.data.created}
              status={message.data.status} />
          })
        }
      </div>
      <div className='card-footer d-block'>
        <form className='align-items-center'>
          <div className='d-flex'>
            <div className='input-group'>
              <input type='text' className='form-control' name='content' id='content' placeholder='Type here' aria-label='Message example input' onChange={inputChangeHandler} />
            </div>
            <button className='btn bg-gradient-primary mb-0 ms-2' onClick={createDataHandler}>
              <i className='ni ni-send'></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RoomChat