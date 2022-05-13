import React from 'react'
import { Link } from 'react-router-dom'
import InputFieldWithLabel from '../../components/auth/InputFieldWithLabel'
import IconButton from '../../components/auth/IconButton'

const Register = () => {
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
                        <InputFieldWithLabel type={'text'} nameId={'name'} label={'Full Name'} />
                      </div>
                      <div className='col-lg-6 col-md-6 col-sm-12'>
                        <InputFieldWithLabel type={'email'} nameId={'email'} label={'Email'} />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-lg-6 col-md-6 col-sm-12'>
                        <InputFieldWithLabel type={'password'} nameId={'password'} label={'Password'} />
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
                      <button type="button" className="btn bg-gradient-primary w-100 mt-4 mb-0">Sign up</button>
                    </div>
                  </form>
                </div>
                <div className="row px-xl-5 px-sm-4 px-3 mb-4 mt-3">
                  <div className="mb-3 position-relative text-center">
                    <p className="text-sm font-weight-bold text-secondary text-border d-inline z-index-2 bg-white px-3">
                      or sign up with
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <IconButton href={'#'} path={'img/icons/google.png'} alt={'Google'} />
                    <IconButton href={'#'} path={'img/icons/apple.png'} alt={'Apple ID'} />
                    <IconButton href={'#'} path={'img/icons/facebook.png'} alt={'Facebook'} />
                  </div>
                </div>
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