import React from 'react'
import { Link } from 'react-router-dom'
import InputField from '../../components/auth/InputField'
import IconButton from '../../components/auth/IconButton'

const Login = () => {
  return (
    <section>
      <img src="/img/shapes/pattern-lines-primary.svg" alt="pattern-lines" className="position-absolute opacity-1 start-0" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
      <div className="page-header min-vh-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-12 d-flex flex-column ms-xl-5">
              <div className="card card-plain">
                <div className="card-header pb-0 text-start" style={{ backgroundColor: 'transparent' }}>
                  <h4 className="font-weight-bold">Sign In</h4>
                  <p className="mb-0">Enter your email and password to start your journey</p>
                </div>
                <div className="card-body">
                  <form>
                    <InputField type={'email'} nameId={'email '} placeholder={'Email'} />
                    <InputField type={'password'} nameId={'password'} placeholder={'Password'} />
                    <div className='d-flex justify-content-between'>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="rememberMe" />
                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                      </div>
                      <Link to={'/forgot-password'} className="text-sm text-primary text-gradient font-weight-bold">Forgot password?</Link>
                    </div>
                    <div className="text-center">
                      <Link to={'/dashboard'}>
                        <button type="button" className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Sign in</button>
                      </Link>
                    </div>
                  </form>
                </div>
                <div className="row px-xl-5 px-sm-4 px-3 mb-4">
                  <div className="mb-3 position-relative text-center">
                    <p className="text-sm font-weight-bold text-secondary text-border d-inline z-index-2 bg-white px-3">
                      or sign in with
                    </p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <IconButton href={'#'} path={'img/icons/google.png'} alt={'Google'} />
                    <IconButton href={'#'} path={'img/icons/apple.png'} alt={'Apple ID'} />
                    <IconButton href={'#'} path={'img/icons/facebook.png'} alt={'Facebook'} />
                  </div>
                </div>
                <div className="card-footer text-center pt-0 px-lg-2 px-1">
                  <p className="mb-4 text-sm mx-auto">
                    Don't have an account?
                    <Link to={'/register'} className="text-primary text-gradient font-weight-bold"> Sign up</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-7 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
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

export default Login