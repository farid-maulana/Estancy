import React from "react";
import Button from "./Button";
import InputField from "./InputField";

const Card = (props) => {
  return (
    <div class="card card-plain">
      <div class="card-header pb-0 text-start">
        <h4 class="font-weight-bolder">{props.headerTitle}</h4>
        <p class="mb-0">{props.headerDesc}</p>
      </div>
      <div class="card-body">
        <form role="form">
          <InputField type="email" placeholder="Email" label="Email" />
          <InputField type="password" placeholder="Password" label="Password" />
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="rememberMe"/>
            <label class="form-check-label" for="rememberMe">Remember me</label>
          </div>
          <div class="text-center">
            <Button label="Sign In"/>
          </div>
        </form>
      </div>
      <div class="card-footer text-center pt-0 px-lg-2 px-1">
        <p class="mb-4 text-sm mx-auto">
          Don't have an account?
          <a href="#" class="text-primary text-gradient font-weight-bold">Sign up</a>
        </p>
      </div>
    </div>
  )
}

export default Card;