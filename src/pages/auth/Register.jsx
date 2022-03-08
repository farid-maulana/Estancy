import React from 'react';
import Illustration from '../../components/Illustration';
import Image from '../../components/Image';
import InputField from '../../components/InputField';

const Register = () => {
  return (
    <main class="main-content  mt-0">
      <section>
        <div class="page-header min-vh-100">
          <div class="container">
            <div class="row">
              <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                <div class="card card-plain">
                  <div class="card-header pb-0 text-left">
                    <h4 class="font-weight-bolder">Sign Up</h4>
                    <p class="mb-0">Enter your email and password to register</p>
                  </div>
                  <div class="card-body pb-3">
                    <form role="form">
                      <label>Name</label>
                      <InputField type="text" placeholder="Name" ariaLabel="Name"/>
                      <label>Email</label>
                      <InputField type="email" placeholder="Email" ariaLabel="Email"/>
                      <label>Password</label>
                      <InputField type="password" placeholder="Password" ariaLabel="Password"/>
                      <label>Confirm Password</label>
                      <InputField type="password" placeholder="Confirm Password" ariaLabel="Confirm Password"/>
                      <div class="form-check form-check-info text-left">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked/>
                          <label class="form-check-label" for="flexCheckDefault">
                            I agree the <a href="../../../pages/privacy.html" class="text-dark font-weight-bolder">Terms and Conditions</a>
                          </label>
                      </div>
                      <div class="text-center">
                        <button type="button" class="btn bg-gradient-info w-100 mt-4 mb-0">Sign up</button>
                      </div>
                    </form>
                  </div>
                  <div class="card-footer text-center pt-0 px-sm-4 px-1">
                    <p class="mb-4 mx-auto">
                      Already have an account?
                      <a href="#" class="text-info text-gradient font-weight-bold">Sign in</a>
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

export default Register;