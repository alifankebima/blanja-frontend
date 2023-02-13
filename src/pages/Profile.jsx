import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar'
import ProfileSidebar from '../components/ProfileSidebar';
import getProfileAction from '../config/redux/actions/getProfileAction';

const Profile = () => {
  const dispatch = useDispatch();
  const {sellerProfile} = useSelector((state) => state.seller);

  useEffect(() => {
    dispatch(getProfileAction())
  }, [])


  return (
    <div className='bg-soft-white' style={{height:"100vh"}}>
      <Navbar />
      <ProfileSidebar fullname={sellerProfile.fullname} />
      <div style={{ margin: "5vh 5vw 5vh 30vw" }}>
        <div className="container border rounded bg-white p-4">
          <div className="row">
            <div className="col">
              <h5 className="fw-semibold">Profil Saya</h5>
              <h6 className="fw-light text-secondary">Kelola informasi profil anda</h6>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-8">
              <div className="row align-items-center">
                <div className="col-4 mt-3 text-end">
                  <span className="text-secondary">Nama</span>
                </div>
                <div className="col-8 mt-3">
                  <input type="name" className="form-control py-2 px-3" id="email" name="name" value={sellerProfile.fullname} />
                </div>
                <div className="col-4 mt-3 text-end">
                  <span className="text-secondary">Email</span>
                </div>
                <div className="col-8 mt-3">
                  <input type="email" className="form-control py-2 px-3" id="email" name="email" value={sellerProfile.email} />
                </div>
                <div className="col-4 mt-3 text-end">
                  <span className="text-secondary">Nomor HP</span>
                </div>
                <div className="col-8 mt-3">
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">+62</span>
                    <input type="text" className="form-control" value={sellerProfile.phone_number} />
                  </div>
                </div>
                <div className="col-4 mt-3 text-end">
                  <span className="text-secondary">Jenis Kelamin</span>
                </div>
                <div className="col-8 mt-3 d-flex gap-4">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                    <label className="form-check-label" for="flexRadioDefault1">
                      Laki-laki
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" for="flexRadioDefault2">
                      Perempuan
                    </label>
                  </div>
                </div>
                <div className="col-4 mt-3 text-end">
                  <span className="text-secondary">Tanggal Lahir</span>
                </div>
                <div className="col-8 mt-3">
                  <input type="date" className="form-control py-2 px-3" id="email" name="name" value={sellerProfile.date_of_birth} />
                </div>
                <div className="col-4 mt-3">

                </div>
                <div className="col-8 my-3 mt-4">
                  <button className="button mx-2 px-4 py-1 bg-dark-orange rounded-pill">
                    <span className="text-white">Simpan</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row text-center">
                <div className="col-10 offset-2 border-start">
                  <img src="/assets/img/sellerProfile/sellerProfile-picture.png" className="img-fluid rounded-circle" alt="sellerProfile"/>
                </div>
                <div className="col-10 offset-2 border-start pt-4">
                  <button className="button bg-soft-white border rounded-pill mx-2 px-4 py-1">
                    <span className="text-secondary">Pilih Foto</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile