import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitSeller = async (e) => {
    e.preventDefault();
    try {
      if (!email) throw "Email must not be empty!"
      if (!password) throw "Password must not be empty!"
      
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/sellers/login`, {
        email, password
      });
      console.log(response)
      if(response.data.data) localStorage.setItem("token", response.data.data.token);
      if (localStorage.getItem("token")) {
        navigate('/home');
        window.location.reload();
      }
    } catch (error) {
      error = error.response ? error.response.data.message : error
      Swal.fire({
        title: 'Login failed',
        text: `${error || 'Something went wrong'}`,
        icon: 'error'
      })
    }
  }

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-lg-4 col-md-6 col-sm-8">
        <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="selector-customer active" id="pills-Customer-tab" data-bs-toggle="pill" data-bs-target="#pills-Customer" type="button" role="tab" aria-controls="pills-Customer" aria-selected="true">Customer</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="selector-seller" id="pills-Seller-tab" data-bs-toggle="pill" data-bs-target="#pills-Seller" type="button" role="tab" aria-controls="pills-Seller" aria-selected="false">Seller</button>
          </li>
        </ul>

        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-Customer" role="tabpanel" aria-labelledby="pills-Customer-tab" tabindex="0">
            <form className="pt-4">
              <div className="mb-3">
                <input type="email" className="form-control py-2 px-3" id="email" name="email" placeholder="Email" />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control py-2 px-3" id="password" name="password" placeholder="Password" />
              </div>
              <button type="submit" className="button w-100 p-2 rounded-pill bg-dark-orange text-soft-white mt-4">Login</button>
            </form>
          </div>
          <div className="tab-pane fade" id="pills-Seller" role="tabpanel" aria-labelledby="pills-Seller-tab" tabindex="0">
            <form className="pt-4" onSubmit={handleSubmitSeller}>
              <div className="mb-3">
                <input type="email" className="form-control py-2 px-3" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control py-2 px-3" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>

              <button type="submit" className="button w-100 p-2 rounded-pill bg-dark-orange text-soft-white mt-4">Login</button>
            </form>
          </div>
        </div>
        <div>
          <p className="mt-5">Don't have a Blanja account? <Link to={"/register"}>Register</Link></p>
        </div>
      </div>
    </div>
  )
}

export default LoginForm