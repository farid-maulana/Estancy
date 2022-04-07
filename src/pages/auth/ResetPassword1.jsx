import React from 'react'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const ResetPassword1 = () => {
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
                    <h2 className='font-medium text-xl text-slate-700 mb-2 md:text-2xl'>Reset Password</h2>
                    <p className='font-thin text-slate-500 mb-6 text-sm md:text-md'>You will receive an e-mail in maximum 60 seconds</p>
                    <form action="">
                        <input type="email" id='email' name='email' placeholder='Enter your email' className='w-full bg-primary-100 text-slate-700 font-thin p-3 rounded-lg focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary mb-4 text-sm' />
                        <input type="verification_code" id='verification_code' name='verification_code' placeholder='Verification Code' className='w-full bg-primary-100 text-slate-700 font-thin p-3 rounded-lg focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary mb-1 text-sm' />
                        <div className='py-3.5'>
                        <Link to={'/reset-password'}>
                        <button type='submit' className='w-full rounded-lg shadow-md bg-gradient-to-r from-primary to-[#846BE4] text-white text-sm font-medium tracking-wide uppercase p-3 mb-4 hover:shadow-lg hover:scale-101 active:opacity-90 transition'>
                                Next
                            </button>
                        </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default ResetPassword1