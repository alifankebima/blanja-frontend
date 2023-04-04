import React from 'react'
import { Link } from 'react-router-dom'
import { BiHomeAlt } from 'react-icons/bi'
import { BsBoxSeam, BsCart2 } from 'react-icons/bs'
import styles from './ProfileSidebar.module.css'

const ProfileSidebar = (props) => {
  return (
    <div className="sidebar bg-white">
      <div className="row">
        <div className="col-8 offset-4 my-5">
          <div className="row align-items-center">
            <div className="col-4">
              <img src="/assets/img/profile/profile-picture.png" className="img-fluid rounded-circle" alt="Profile" />
            </div>
            <div className="col-8">
              <span className="fw-semibold">{props.fullname}</span><br />
              <i className="fa-solid fa-pen fs-7 text-secondary"></i>
              <span className="fw-light fs-7 text-secondary">Edit Profile</span>
            </div>
          </div>
        </div>
        <div className="col-8 offset-4 mt-4 d-flex flex-row">
          <Link to={"/seller/profile"} className="text-dark">
            <div className="row align-items-center g-2">
              <div className="col-auto">

              </div>

              <div className="col-auto">
                <Link to="/seller/profile">
                  <div className="d-flex align-items-center">
                    <div className={styles.sidebarIcon + ' d-flex align-items-center justify-content-center bg-primary rounded-circle'}>
                      <BiHomeAlt className='fs-5 text-white' />
                    </div>
                    <span className='ms-2'>Store Profile</span>
                  </div>
                </Link>
              </div>

            </div>
          </Link>
        </div>
        <div className="col-8 offset-4 mt-4">
          <div className="row align-items-center g-2">
            <div className="col-auto">
            </div>
            <div className="col-auto">
              <Link to="/seller/my-product">
                <div className="d-flex align-items-center">
                  <div className={styles.sidebarIcon + ' d-flex align-items-center justify-content-center bg-orange rounded-circle'}>
                    <BsBoxSeam className='fs-6 text-white' />
                  </div>
                  <span className='ms-2'>My Products</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-8 offset-4 mt-4">
          <div className="row align-items-center g-2">
            <div className="col-auto">
            </div>
            <div className="col-auto">
              <div className="d-flex align-items-center">
                <div className={styles.sidebarIcon + ' d-flex align-items-center justify-content-center bg-pink rounded-circle'}>
                  <BsCart2 className='fs-6 text-white' />
                </div>
                <span className='ms-2'>Orders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSidebar