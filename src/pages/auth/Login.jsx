import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
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
          <h2 className='font-medium text-xl text-slate-700 mb-2 md:text-2xl'>Sign In</h2>
          <p className='font-thin text-slate-500 mb-6 text-sm md:text-md'>Enter your credentials to start your journey.</p>
          <form action="">
            <input type="email" id='email' name='email' placeholder='Enter your email' className='w-full bg-primary-100 text-slate-700 font-thin p-3 rounded-lg focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary mb-4 text-sm' />
            <input type="password" id='password' name='password' placeholder='Enter your password' className='w-full bg-primary-100 text-slate-700 font-thin p-3 rounded-lg focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary mb-1 text-sm' />
            <Link to={'/verification'} className='block text-secondary text-xs md:text-sm text-right mb-6 hover:font-medium'>Forgot your password?</Link>
            <Link to={'/listed-properties'}>
              <button type='submit' className='w-full rounded-lg shadow-md bg-gradient-to-r from-primary to-[#846BE4] text-white text-sm font-medium tracking-wide uppercase p-3 mb-4 hover:shadow-lg hover:scale-101 active:opacity-90 transition'>
                Sign in
              </button>
            </Link>
            <p className='mb-14 text-center text-slate-700 text-xs md:text-sm lg:text-md'>
              Don't have an account? <Link to={'/register'} className='text-secondary hover:font-medium'>Sign up here!</Link>
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

export default Login