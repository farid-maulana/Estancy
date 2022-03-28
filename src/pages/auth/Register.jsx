import React from 'react'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import IconButton from '../../components/IconButton'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-start items-center h-screen'>
        <div className='w-3/5'>
          <img srcSet='img/Illustration.png' className='w-5/6 mx-auto mb-5' />
          <h1 className='text-6xl font-semibold text-center mb-5'>Estancy</h1>
          <p className='text-base text-center'>The shortest distance between paradise and the place you call home</p>
        </div>
        <div className='w-2/5 my-auto pr-32 pl-8'>
          <h4 className='text-2xl font-semibold mb-3'>Sign Up</h4>
          <p className='text-base mb-3 font-normal text-base'>Fill out this form to be a part of us</p>
          <InputField type={'name'} id={'name'} name={'name'} placeholder={'Full Name'} />
          <InputField type={'email'} id={'email'} name={'email'} placeholder={'Email'} />
          <InputField type={'password'} id={'password'} name={'password'} placeholder={'Password'} />
          <InputField type={'confirm_password'} id={'confirm_password'} name={'confirm_password'} placeholder={'Confirm Password'} />
          <div className='flex justify-start mb-3'>
            <p>I agree the <a href="#" className='text-secondary font-medium'>Term and Conditions</a></p>
          </div>
          <Button value={'Sign Up'} />
          <p className='text-center font-normal'>Already have an account? <Link to={'/login'} className='text-secondary font-medium'>Sign in here</Link></p>
          <p className='text-center mt-8 mb-3 font-normal text-xl'> or sign up with </p>
          <div className='flex justify-evenly mx-16'>
            <IconButton img={'img/icons/google.png'} />
            <IconButton img={'img/icons/apple.png'} />
            <IconButton img={'img/icons/facebook.png'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register