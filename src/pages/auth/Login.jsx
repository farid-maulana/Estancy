import React from 'react';
import Illustration from '../../components/Illustration';
import Image from '../../components/Image';
import InputField from '../../components/InputField';

const Login = () => {
  return (
    <main class="main-content  mt-0">
      <section>
        <div class="page-header min-vh-100">
          <div class="container">
            <div class="row">
              <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                <div class="card card-plain">
                  <div class="card-header pb-0 text-start">
                    <h4 class="font-weight-bolder">Sign In</h4>
                    <p class="mb-0">Enter your email and password to sign in</p>
                  </div>
                  <div class="card-body">
                    <form role="form">
                      <InputField type="email" placeholder="Email" ariaLabel="Email"/>
                      <InputField type="password" placeholder="Password" ariaLabel="Password"/>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="rememberMe"/>
                          <label class="form-check-label" for="rememberMe">Remember me</label>
                      </div>
                      <div class="text-center">
                        <button type="button" class="btn btn-lg bg-gradient-info btn-lg w-100 mt-4 mb-0">Sign in</button>
                      </div>
                    </form>
                  </div>
                  <div class="card-footer text-center pt-0 px-lg-2 px-1">
                    <p class="mb-4 text-sm mx-auto">
                      Don't have an account?
                      <a href="#" class="text-info text-gradient font-weight-bold">Sign up</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                <Illustration appName="RentProp" tagline="Temukan dan Jual Properti Anda dengan Mudah"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Login;