import React from 'react'
import { Link } from 'react-router-dom'

const ProfileButton = () => {
  const isLogin = localStorage.getItem('token');
  if (isLogin) {
    return (
      // Profile & Logout Button
      <div className="d-flex">
        <Link to={"/seller/profile"} className="navbar-brand">
          <button className="button mx-1 px-4  rounded-pill bg-dark-orange text-white">
            <span className='fs-6'>Profile</span>
          </button>
        </Link>
        <Link to={"/logout"} className="navbar-brand">
          <button className="button mx-1 px-4 rounded-pill bg-dark-orange text-white">
            <span className='fs-6'>Logout</span>
          </button>
        </Link>
      </div>
    )
  } else {
    return (
      // Login & Register Button
      <div className="d-flex">
        <Link to={"/login"} className="navbar-brand">
          <button className="button mx-1 px-4  rounded-pill bg-dark-orange text-white">
            <span className='fs-6'>Login</span>
          </button>
        </Link>
        <Link to={"/register"} className="navbar-brand">
          <button className="button mx-1 px-4 rounded-pill bg-dark-orange text-white">
            <span className='fs-6'>Register</span>
          </button>
        </Link>
      </div>
    )
  }
}

const Navbar = () => {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-light shadow">
        <div className="container d-flex">
          <Link to={"/"} className="navbar-brand">
            <img src="../assets/svg/logo.svg" alt="Blanja" className="d-inline-block align-text-middle blanja-logo" />
            <div className="d-inline-block text-dark-orange fw-bolder">Blanja</div>
          </Link>

          <div className="d-none d-md-flex ms-auto w-75 mt-2">
            <div className="w-75 d-flex">
              <div className="search-input position-relative w-75 d-flex">
                <input className="form-control me-2 rounded-pill w-100" type="text" placeholder="Search" aria-label="Search" />
                <button className="btn search-button" type="submit"><img src="../assets/svg/search.svg" alt="search" /></button>
              </div>
              <div className="filter">
                <button className="btn border-trinary" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-filter text-trinary"></i></button>
              </div>
            </div>
          </div>

          <ProfileButton />

        </div>
      </nav>
    </div>
  )
}

export default Navbar