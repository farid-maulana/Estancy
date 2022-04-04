import React from 'react'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import IconButton from '../../components/IconButton'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-start items-center h-screen'>
        <div className='w-3/5'>
          <img srcSet='img/Illustration.png' className='w-5/6 mx-auto mb-5'/>
          <h1 className='text-6xl font-semibold text-center mb-5'>Estancy</h1>
          <p className='text-base text-center'>The shortest distance between paradise and the place you call home</p>
        </div>
        <div className='w-2/5 my-auto pr-32 pl-8'>
          <h4 className='text-2xl font-semibold mb-3'>Sign In</h4>
          <p className='text-base mb-3'>Enter your credentials to start your journey.</p>
          <InputField type={'email'} id={'email'} name={'email'} placeholder={'Enter your email'}/>
          <InputField type={'password'} id={'password'} name={'password'} placeholder={'Enter your password'}/>
          <div className='flex justify-end mb-3'>
            <Link to={'/verification'} className='text-secondary font-medium'>Forgot your password?</Link>
          </div>
          <Link to={'/'}>
            <Button value={'Sign In'}/>
          </Link>
          <p className='text-center'>Don't have an account? <Link to={'/register'} className='text-secondary'>Sign up here!</Link></p>
          <p className='text-center mt-8 mb-3'> or sign in with </p>
          <div className='flex justify-evenly mx-16'>
            <IconButton img={'img/icons/google.png'}/>
            <IconButton img={'img/icons/apple.png'}/>
            <IconButton img={'img/icons/facebook.png'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login