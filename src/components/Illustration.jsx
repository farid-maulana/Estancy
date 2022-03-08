import React from 'react';
import Image from './Image';

const Illustration = (props) => {
  return (
    <div class="position-relative bg-gradient-info h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center">
      <Image path="img/shapes/pattern-lines.svg" alt="pattern-lines" class="position-absolute opacity-4 start-0" />
      <div class="position-relative">
        <Image class="max-width-500 w-100 position-relative z-index-2" path="img/illustrations/info-rocket-white.png" alt="rocket" />
      </div>
      <h4 class="mt-5 text-white font-weight-bolder">{props.appName}</h4>
      <p class="text-white">{props.tagline}</p>
    </div>
  )
}

export default Illustration