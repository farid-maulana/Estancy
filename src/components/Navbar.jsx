import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex items-center justify-evenly flex-wrap h-32'>
            <h1 className='not-italic text-4xl font-semibold w-32 h-11 left-32 top-10 absolute'>Estancy</h1>
            <div className='flex w-1/5'></div>
            <Link to={'/'} className='ml-14 h-6 font-normal text-base'>Home</Link>
            <a href="#" className='h-6 font-normal text-base'>Property</a>
            <Link to={'/about-us'} className='h-6 font-normal text-base'>About Us</Link>
            <Link to={'/contact-us'} className='mr-28 h-6 font-normal text-base '>Contact Us</Link>
            <div className='mr-32 drop-shadow-lg rounded-lg bg-primary'>
                <Link to={'/login'}>
                    <button className='left-3.5 top-2.5 grow font-medium px-4 py-2.5 text-base text-lg
                text-center text-white'>Get Started</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;