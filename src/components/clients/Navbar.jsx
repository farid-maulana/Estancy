import { getAuth, signOut } from 'firebase/auth'
import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const auth = getAuth()
  const user = auth.currentUser
  const navigate = useNavigate()

  const logOut = () => {
    signOut(auth).then(() => {
      navigate('/')
    })
  }

  return (
    <nav
      className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none p-0 bg-white">
      <div className="container">
        <Link className="navbar-brand py-1" to={'/'} rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom">
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
              <NavLink to={'/listed-properties'} className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center text-dark" role="button">
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
            {
              user === null ?
                <li className="nav-item">
                  <Link to={'/login'} className="btn bg-gradient-primary btn-round-sm mb-0 me-1" role="button">Get Started</Link>
                </li>
                :
                <li className="nav-item dropdown d-flex align-items-center">
                  <Link to={'#'} className="nav-link text-body font-weight-bold px-0" id="dropdownUserButton" data-bs-toggle="dropdown" aria-expanded="false">
                    <img alt="Profile" class="avatar avatar-sm rounded-circle border" src={user.photoURL}></img> <span className='ms-2'>{user.displayName}</span>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4" aria-labelledby="dropdownUserButton">
                    <li style={{ cursor: 'auto' }}>
                      <div className="d-flex px-3">
                        <div className="d-flex flex-column justify-content-center">
                          Signed in as
                          <h6 className="text-sm font-weight-bold ">
                            {user.displayName}
                          </h6>
                        </div>
                      </div>
                    </li>
                    <hr className="horizontal dark mt-2" />
                    <li className="my-1">
                      <Link to={'/dashboard'} className="dropdown-item border-radius-md">
                        <div className="d-flex py-1">
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              Your Dashboard
                            </h6>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="my-1">
                      <Link to={'#'} onClick={logOut} className="dropdown-item border-radius-md">
                        <div className="d-flex py-1">
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              Sign Out
                            </h6>
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar