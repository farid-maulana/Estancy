import React from 'react'
import InputField from '../../components/auth/InputField'

const ResetPassword = () => {
  return (
    <section>
      <img src="/img/shapes/pattern-lines-primary.svg" alt="pattern-lines" className="position-absolute opacity-1 start-0" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
      <div className="page-header min-vh-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-12 d-flex flex-column ms-xl-5">
              <div className="card card-plain">
                <div className="card-header pb-0 text-start" style={{ backgroundColor: 'transparent' }}>
                  <h4 className="font-weight-bold">Reset Password</h4>
                  <p className="mb-0">Create a new password</p>
                </div>
                <div className="card-body">
                  <form>
                    <InputField type={'password'} nameId={'password'} placeholder={'New Password'} />
                    <InputField type={'password'} nameId={'password_confirmation'} placeholder={'Confirm New Password'} />
                    <div className="text-center">
                      <button type="button" className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Reset Password</button>
                    </div>
                  </form>
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

export default ResetPassword