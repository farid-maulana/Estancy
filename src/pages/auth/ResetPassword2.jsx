import React from 'react'
import InputField from '../../components/InputField'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const ResetPassword2 = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-start items-center h-screen'>
                <div className='w-3/5'>
                    <img srcSet='img/Illustration.png' className='w-5/6 mx-auto mb-5' />
                    <h1 className='text-6xl font-semibold text-center mb-5'>Estancy</h1>
                    <p className='text-base text-center'>The shortest distance between paradise and the place you call home</p>
                </div>
                <div className='w-2/5 my-auto pr-32 pl-8'>
                    <h4 className='text-2xl font-semibold mb-3'>Reset Password</h4>
                    <p className='text-base mb-3 font-normal text-base'>Create a new password</p>
                    <InputField type={'password'} id={'password'} name={'password'} placeholder={'Password'} />
                    <InputField type={'password'} id={'password'} name={'password'} placeholder={'Confirm Password'} />
                    <Link to={'/'}>
                        <Button value={'Reset Password'} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword2