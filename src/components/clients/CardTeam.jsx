import React from 'react'

const CardTeam = ({ photo, name, role, description }) => {
  return (
    <div class="col-lg-4 col-md-6 mt-md-0 mt-5">
      <div class="card card-profile card-plain">
        <div class="text-start mt-n5 z-index-1">
          <div class="position-relative w-25">
            <div class="blur-shadow-avatar">
              <img class="avatar avatar-xxl shadow-lg" src={photo} alt='avatar' />
            </div>
          </div>
        </div>
        <div class="card-body ps-0">
          <h5 class="mb-0">{name}</h5>
          <p class="text-muted">{role}</p>
          <p>
            {description}
          </p>
          <button type="button" class="btn-icon-only btn-simple btn btn-lg btn-twitter" data-toggle="tooltip" data-placement="bottom" title="Follow me!">
            <span class="btn-inner--icon"><i class="fab fa-twitter"></i></span>
          </button>
          <button type="button" class="btn-icon-only btn-simple btn btn-lg btn-facebook" data-toggle="tooltip" data-placement="bottom" title="Follow me!">
            <span class="btn-inner--icon"><i class="fab fa-facebook"></i></span>
          </button>
          <button type="button" class="btn-icon-only btn-simple btn btn-lg btn-linkedin" data-toggle="tooltip" data-placement="bottom" title="Follow me!">
            <span class="btn-inner--icon"><i class="fab fa-linkedin"></i></span>
          </button>
          <button type="button" class="btn-icon-only btn-simple btn btn-lg btn-instagram" data-toggle="tooltip" data-placement="bottom" title="Follow me!">
            <span class="btn-inner--icon"><i class="fab fa-instagram"></i></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardTeam