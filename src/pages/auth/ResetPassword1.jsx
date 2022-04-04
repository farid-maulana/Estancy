import React from 'react'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const ResetPassword1 = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-start items-center h-screen'>
                <div className='w-3/5'>
                    <img srcSet="img/illustration.png" className='w-5/6 mx-auto' />
                    <h1 className='text-6xl font-semibold text-center mb-5'>Estancy</h1>
                    <p className='text-base text-center'>The shortest distance between paradise and the place you call home</p>
                </div>
                <div className='w-2/5 my-auto pr-32 pl-8'>
                    <h1 className='text-2xl font-semibold mb-3'>Reset Password</h1>
                    <p className='text-base mb-3'>You will receive an e-mail in maximum 60 seconds</p>
                    <InputField type={'text'} id={'email'} name={'email'} placeholder={'Email'} />
                    <InputField type={'text'} id={'verification_code'} name={'verification_code'} placeholder={'Verification Code'} />
                    <div className='py-3.5'>
                        <Link to={'reset-password'}>
                            <Button value={'Next'} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword1