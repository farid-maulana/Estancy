import { faAngleDown, faBars, faBell, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='font-normal shadow-sm p-0 fixed top-0 z-20 flex flex-row items-center justify-between w-full h-16 bg-white'>
      <div className='w-60 text-center items-center justify-center hidden lg:block'>
        <h1 className='text-xl font-medium tracking-wide'>Estancy</h1>
      </div>
      <div className='w-full px-11 flex items-center justify-end'>
        <button className='rotate-0 transition text-gray-400'>
          <span><FontAwesomeIcon icon={faBars} /></span>
        </button>
        <ul className='items-center flex-row list-none hidden lg:block'>
          <li className='ml-8'>
            <form action="" className='relative flex w-full items-stretch border rounded-full'>
              <input type="text" className='rounded-full py-1.5 px-4 relative flex-auto font-thin focus:outline-none' placeholder='Search something here...' />
              <div className='ml-2 mr-2 flex'>
                <button className='text-gray-400'>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </form>
          </li>
        </ul>
        <ul className='items-center self-stretch flex flex-row list-none ml-auto'>
          <li className='ml-4 text-gray-600'>
            <FontAwesomeIcon icon={faBell} />
          </li>
          <li className='ml-8 flex items-center cursor-pointer text-gray-600'>
            <span className='mr-2'>Administrator</span>
            <img src={'logo192.png'} className='w-10 h-10 rounded-full mr-2' />
            <FontAwesomeIcon icon={faAngleDown} />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar