import React from "react";
import Image from "./Image";

const Illustration = () => {
  return (
    <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
      <div class="position-relative bg-gradient-info h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center">
        <Image path="img/shapes/pattern-lines.svg" alt="pattern-lines" className="position-absolute opacity-4 start-0"/>
        <div class="position-relative">
          <Image className="max-width-500 w-100 position-relative z-index-2" path="img/illustrations/chat.png" alt="chat-img"/>
        </div>
        <h4 class="mt-5 text-white font-weight-bolder">"Attention is the new currency"</h4>
        <p class="text-white">The more effortless the writing looks, the more effort the writer actually put into the process.</p>
      </div>
    </div>
  )
}

export default Illustration;