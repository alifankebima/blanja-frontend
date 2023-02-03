import React from 'react'
import { Link } from 'react-router-dom'

const ProfileSidebar = (props) => {
  return (
    <div className="sidebar bg-white">
      <div className="row">
        <div className="col-8 offset-4 my-5">
          <div className="row align-items-center">
            <div className="col-4">
              <img src="/assets/img/profile/profile-picture.png" className="img-fluid rounded-circle" />
            </div>
            <div className="col-8">
              <span className="fw-semibold">{props.fullname}</span><br />
              <i className="fa-solid fa-pen fs-7 text-secondary"></i>
              <span className="fw-light fs-7 text-secondary">Ubah profil</span>
            </div>
          </div>
        </div>
        <div className="col-8 offset-4 mt-4 d-flex flex-row">
          <a href="#" className="text-dark">
            <div className="row align-items-center g-2">
              <div className="col-auto">
                <div className="bg-primary rounded-circle text-center" style={{ height: "30px;width:30px" }}>
                  <i className="fa-solid fa-user align-middle text-white"></i>
                </div>
              </div>
              
              <div className="col-auto">
              <Link to="/seller/profile">
                <span>Akun Saya</span>
                </Link>
              </div>
              
            </div>
          </a>
        </div>
        <div className="col-8 offset-4 mt-4">
          <div className="row align-items-center g-2">
            <div className="col-auto">
              <div className="bg-orange rounded-circle text-center" style={{ height: "30px;width:30px" }}>
                <i className="fa-solid fa-location-dot align-middle text-white"></i>
              </div>
            </div>
            <div className="col-auto">
              <Link to="/seller/my-product">
              <span>My Product</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-8 offset-4 mt-4">
          <div className="row align-items-center g-2">
            <div className="col-auto">
              <div className="bg-pink rounded-circle text-center" style={{ height: "30px;width:30px" }}>
                <i className="fa-solid fa-clipboard-list align-middle text-white"></i>
              </div>
            </div>
            <div className="col-auto">
              <span>Pesanan Saya</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSidebar