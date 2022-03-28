import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex items-center justify-evenly flex-wrap h-32'>
            <h1 className='not-italic text-4xl font-semibold w-32 h-11 left-32 top-10 absolute'>Estancy</h1>
            <div className='flex w-3/5'></div>
            <Link to={'/'} className='mx-2.5 w-10 h-6 font-normal text-base'>Home</Link>
            <a href="#" className='flex-w-12 h-6 font-normal text-base'>Property</a>
            <Link to={'/about-us'} className='flex-w-10 h-6 font-normal text-base'>About Us</Link>
            <a href="#" className='flex-w-10 h-6 font-normal text-base'>Contact Us</a>
            <div className='mr-32 box-border drop-shadow-lg rounded-lg border border-primary'>
                <Link to={'/login'}>
                    <button className='left-3.5 top-2.5 grow font-medium px-3.5 py-1 text-base
                text-center text-primary'>Login</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;