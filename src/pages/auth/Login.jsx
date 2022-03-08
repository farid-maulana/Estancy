import React from "react";
import Card from "../../components/Card";
import Illustration from "../../components/Illustration";

const Login = () => {
  return(
    <main class="main-content  mt-0">
      <section>
        <div class="page-header min-vh-100">
          <div class="container">
            <div class="row">
              <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                <Card headerTitle="Sign In" headerDesc="Enter your email and password to sign in"/>
              </div>
              <Illustration/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Login;