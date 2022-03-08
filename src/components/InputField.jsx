import React from "react";

const InputField = (props) => {
  return (
    <div class="mb-3">
      <input type={props.type} class="form-control form-control-lg" placeholder={props.placeholder} aria-label={props.label}></input>
    </div>
  )
}

export default InputField;