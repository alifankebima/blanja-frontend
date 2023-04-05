import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { FiFilter } from "react-icons/fi";
import { BsSearch, BsCart2 } from "react-icons/bs";
import styles from "./Navbar.module.css";

const ProfileButton = () => {
  const isLogin = localStorage.getItem('token');
  if (isLogin) {
    return (
      // Profile & Logout Button
      <div className="d-flex ms-auto">
        <Link to={"/"} className="me-3">
          <button className={styles.cartButton}><BsCart2 className='fs-5'/></button>
        </Link>
        <Link to={"/seller/profile"} className="me-3">
          <button className="button px-4 py-1 rounded-pill bg-dark-orange text-white">
            <span className='fs-6'>Profile</span>
          </button>
        </Link>
        <Link to={"/logout"}>
          <button className="button px-4 py-1 rounded-pill bg-soft-white text-white border border-1">
            <span className='fs-6 text-secondary'>Logout</span>
          </button>
        </Link>
      </div>
    )
  } else {
    return (
      // Login & Register Button
      <div className="d-flex ms-auto">
        <Link to={"/"} className="me-3">
          <button className={styles.cartButton}><BsCart2 className='fs-5'/></button>
        </Link>
        <Link to={"/login"} className="me-3">
          <button className="button px-4 py-1 rounded-pill bg-dark-orange text-white">
            <span className='fs-6'>Login</span>
          </button>
        </Link>
        <Link to={"/register"}>
          <button className="button px-4 py-1 rounded-pill bg-soft-white text-white border border-1">
            <span className='fs-6 text-secondary'>Register</span>
          </button>
        </Link>
      </div>
    )
  }
}

const FilterModal = () => {
  return (<div className="modal fade" id="filterModal" tabindex="-1" aria-labelledby="filterModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="filterModalLabel">Filter Pencarian</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          ...
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
          <button type="button" className="btn btn-primary">Reset</button>
          <button type="button" className="btn btn-primary">Terapkan Filter</button>
        </div>
      </div>
    </div>
  </div>
  )
}

const Navbar = () => {
  return (
    <Fragment>
      <FilterModal />

      <div className="sticky-top">
        <nav className="navbar navbar-expand-lg bg-light shadow-sm">
          <div className="container d-flex py-1">
            {/* Logo & brand name */}
            <Link to={"/"} className="d-flex flex-nowrap me-5">
              <img src="../assets/svg/logo.svg" alt="Blanja" className={styles.blanjaLogo} />
              <div className="ms-2 align-self-center mt-1 fs-5 text-dark-orange fw-bolder">Blanja</div>
            </Link>

            {/* Search bar */}
            <div className="d-none d-md-flex w-50">
              <div className="search-input position-relative w-75 d-flex me-3">
                <input className="form-control me-2 rounded-pill w-100" type="text" placeholder="Search" aria-label="Search" />
                <button className={styles.searchButton} type="submit"><BsSearch /></button>
              </div>
              {/* <button className={styles.filterButton} data-bs-toggle="modal" data-bs-target="#filterModal"><FiFilter /></button> */}
              <button className={styles.filterButton}><FiFilter /></button>
            </div>

            <ProfileButton />

          </div>
        </nav>
      </div>
    </Fragment>
  )
}

export default Navbar