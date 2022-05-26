import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputFieldWithLabel from '../../components/auth/InputFieldWithLabel'
import AlternativeAuth from '../../components/auth/AlternativeAuth'
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'

const Register = () => {
  const auth = getAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const handleForm = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      const user = auth.currentUser
      updateProfile(user, {
        displayName: name,
        photoURL: 'https://www.jobstreet.co.id/en/cms/employer/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'
      })
      navigate('/')
      console.log(user)
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  return (
    <section>
      <img src="/img/shapes/pattern-lines-primary.svg" alt="pattern-lines" className="position-absolute opacity-1 start-0" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
      <div className="page-header min-vh-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 d-flex flex-column">
              <div className="card card-plain">
                <div className="card-header pb-0 text-left" style={{ backgroundColor: 'transparent' }}>
                  <h4 className="font-weight-bold">Sign Up</h4>
                  <p className="mb-0">Fill out this form to be a part of us</p>
                </div>
                <div className="card-body pb-3">
                  <form>
                    <div className='row'>
                      <div className='col-lg-6 col-md-6 col-sm-12'>
                        <InputFieldWithLabel type={'text'} nameId={'name'} label={'Full Name'} onChangeHandler={(e) => setName(e.target.value)} />
                      </div>
                      <div className='col-lg-6 col-md-6 col-sm-12'>
                        <InputFieldWithLabel type={'email'} nameId={'email'} label={'Email'} onChangeHandler={(e) => setEmail(e.target.value)} />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-lg-6 col-md-6 col-sm-12'>
                        <InputFieldWithLabel type={'password'} nameId={'password'} label={'Password'} onChangeHandler={(e) => setPassword(e.target.value)} />
                      </div>
                      <div className='col-lg-6 col-md-6 col-sm-12'>
                        <InputFieldWithLabel type={'password'} nameId={'password_confirmation'} label={'Confirm Password'} />
                      </div>
                    </div>
                    <div className="form-check form-check-info text-left">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" defaultChecked />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        I agree the <Link to={'#'} className="text-primary text-gradient font-weight-bolder">Terms and Conditions</Link>
                      </label>
                    </div>
                    <div className="text-center">
                      <button type="button" onClick={handleForm} className="btn bg-gradient-primary w-100 mt-4 mb-0">Sign up</button>
                    </div>
                  </form>
                </div>
                <AlternativeAuth />
                <div className="card-footer text-center pt-0 px-sm-4 px-1">
                  <p className="mb-4 text-sm mx-auto">
                    Already have an account?
                    <Link to={'/login'} className="text-primary text-gradient font-weight-bold"> Sign in</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
              <div className="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center">
                <div className="position-relative">
                  <img className="w-100 position-relative z-index-2" src="/img/illustrations/illustration.png" alt="chat-img" />
                </div>
                <h2 className="mt-5 font-weight-bold">ESTANCY</h2>
                <p>The shortest distance between paradise and the place you call home</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register