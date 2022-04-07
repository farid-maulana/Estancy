import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='container p-10 flex h-screen mx-auto lg:p-10'>
      <div className='m-auto sm:w-3/5 md:w-3/5 lg:w-full lg:flex lg:justify-between'>
        <div className='text-center hidden lg:block lg:w-3/5 lg:mr-8 lg:mx-auto'>
          <img src='img/Illustration.png' alt='Illustration' className='mb-2 scale-90' />
          <h1 className='font-medium text-5xl mb-3 text-slate-800 tracking-wide'>Estancy</h1>
          <p className='font-thin text-lg w-3/5 mx-auto text-slate-600'>
            The shortest distance between paradise and the place you call home
          </p>
        </div>
        <div className='lg:ml-8 lg:w-2/5 lg:m-auto lg:p-8'>
          <h2 className='font-medium text-xl text-slate-700 mb-2 md:text-2xl'>Sign Up</h2>
          <p className='font-thin text-slate-500 mb-6 text-sm md:text-md'>Fill out this form to be a part of us</p>
          <form action="">
            <input type="name" id='name' name='name' placeholder='Full name' className='w-full bg-primary-100 text-slate-700 font-thin p-3 rounded-lg focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary mb-4 text-sm' />
            <input type="email" id='email' name='email' placeholder='Email' className='w-full bg-primary-100 text-slate-700 font-thin p-3 rounded-lg focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary mb-4 text-sm' />
            <input type="password" id='password' name='password' placeholder='Password' className='w-full bg-primary-100 text-slate-700 font-thin p-3 rounded-lg focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary mb-1 text-sm' />
            <input type="password" id='confirm_password' name='confirm_password' placeholder='Confirm Password' className='w-full bg-primary-100 text-slate-700 font-thin p-3 rounded-lg focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary mb-1 text-sm mt-3'/>
            <div className='flex justify-start mb-4 mt-3'>
              <button className='w-6 h-6 bg-primary rounded mr-2 text-white'>✔</button>
              <p className='text-slate-400 text-sm'>I agree the <a href="#" className='text-secondary text-sm'>Term and Conditions</a></p>
            </div>
            <Link to={'/'}>
              <button type='submit' className='w-full rounded-lg shadow-md bg-gradient-to-r from-primary to-[#846BE4] text-white text-sm font-medium tracking-wide uppercase p-3 mb-4 hover:shadow-lg hover:scale-101 active:opacity-90 transition'>
                Sign Up
              </button>
            </Link>
            <p className='mb-14 text-center text-slate-400 text-xs md:text-sm lg:text-md'>
              Already have an account? <Link to={'/login'} className='text-secondary hover:font-medium'>Sign in here!</Link>
            </p>
            <div className='flex items-center justify-between'>
              <hr className='w-1/3 mb-3.5 text-slate-400' />
              <p className='text-xs font-thin text-slate-400 text-center mb-4 lg:text-sm'>or sign in with</p>
              <hr className='w-1/3 mb-3.5 text-slate-400' />
            </div>
            <div className='flex justify-center sm:mb-10 md:mb-10'>
              <div className='border rounded-lg w-11 md:w-12 p-1 cursor-pointer shadow-sm hover:shadow-md hover:scale-102 transition'>
                <img src='img/icons/google.png' alt="Google" />
              </div>
              <div className='border rounded-xl w-11 md:w-12 p-1 mx-3 md:mx-4 cursor-pointer shadow-sm hover:shadow-md hover:scale-102 transition'>
                <img src='img/icons/apple.png' alt="Apple" />
              </div>
              <div className='border rounded-xl w-11 md:w-12 p-1 cursor-pointer shadow-sm hover:shadow-md hover:scale-102 transition'>
                <img src='img/icons/facebook.png' alt="Facebook" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register