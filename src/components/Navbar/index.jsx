import React from 'react'

const Navbar = () => {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-light shadow">
        <div className="container d-flex">
          <a className="navbar-brand" href="index.html">
            <img src="../assets/svg/logo.svg" alt="Blanja" className="d-inline-block align-text-middle blanja-logo"/>
            <div className="d-inline-block text-dark-orange fw-bolder">Blanja</div>
          </a>

          <div className="d-none d-md-flex ms-auto w-75 mt-2">
            <div className="w-100 d-flex">
              <div className="search-input position-relative w-100 d-flex">
                <input className="form-control me-2 rounded-pill w-100" type="text" placeholder="Search" aria-label="Search" />
                <button className="btn search-button" type="submit"><img src="../assets/svg/search.svg" alt="search"/></button>
              </div>
              <div className="filter">
                <button className="btn border-trinary" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-filter text-trinary"></i></button>
              </div>
            </div>
          </div>

          <div className="d-flex">
            <button className="button mx-2 px-4 py-1">
              <a className="text-white" href="/pages/login.html">Login</a>
            </button>
            <button className="button mx-2 px-4 py-1">
              <a className="text-white" href="/pages/register.html">Signup</a>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar