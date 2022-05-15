import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav
        className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none p-0 bg-white">
        <div className="container">
          <Link className="navbar-brand py-1" to={"https://demos.creative-tim.com/soft-ui-design-system-pro/presentation.html"} rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" target="_blank">
            <img src="/img/logo-sm.png" className="w-70" alt="Logo" />
          </Link>
          <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon mt-2">
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </span>
          </button>
          <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
            <ul className="navbar-nav navbar-nav-hover mx-auto">
              <li className="nav-item mx-4">
                <NavLink to={'/'} className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center text-dark" role="button">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink to={'/properties'} className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center text-dark" role="button">
                  Properties
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink to={'/about-us'} className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center text-dark" role="button">
                  About Us
                </NavLink>
              </li>

              <li className="nav-item mx-4">
                <NavLink to={'/contact-us'} className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center text-dark" role="button">
                  Contact Us
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-nav d-lg-block d-none">
              <li className="nav-item">
                <Link to={'/login'} className="btn bg-gradient-primary btn-round-sm mb-0 me-1" role="button">Get Started</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar