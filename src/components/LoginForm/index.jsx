import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmitSeller = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/sellers/login`,{
        email, password
      });
      localStorage.setItem("token", response.data.data.token);
      if(localStorage.getItem("token")){
        navigate('/home');
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div class="row justify-content-center mt-4">
      <div class="col-lg-4 col-md-6 col-sm-8">
        <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="selector-customer active" id="pills-Customer-tab" data-bs-toggle="pill" data-bs-target="#pills-Customer" type="button" role="tab" aria-controls="pills-Customer" aria-selected="true">Customer</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="selector-seller" id="pills-Seller-tab" data-bs-toggle="pill" data-bs-target="#pills-Seller" type="button" role="tab" aria-controls="pills-Seller" aria-selected="false">Seller</button>
          </li>
        </ul>

        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-Customer" role="tabpanel" aria-labelledby="pills-Customer-tab" tabindex="0">
            <form class="pt-4">
              <div class="mb-3">
                <input type="email" class="form-control py-2 px-3" id="email" name="email" placeholder="Email" />
              </div>
              <div class="mb-3">
                <input type="password" class="form-control py-2 px-3" id="password" name="password" placeholder="Password" />
              </div>
              <button type="submit" class="button w-100 p-2 rounded-pill bg-dark-orange text-soft-white mt-4">Login</button>
            </form>
          </div>
          <div class="tab-pane fade" id="pills-Seller" role="tabpanel" aria-labelledby="pills-Seller-tab" tabindex="0">
            <form class="pt-4" onSubmit={handleSubmitSeller}>
              <div class="mb-3">
                <input type="email" class="form-control py-2 px-3" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div class="mb-3">
                <input type="password" class="form-control py-2 px-3" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>

              <button type="submit" class="button w-100 p-2 rounded-pill bg-dark-orange text-soft-white mt-4">Login</button>
            </form>
          </div>
        </div>
        <div>
          <p class="mt-5">Don't have a Blanja account? <Link to={"/register"}>Register</Link></p>
        </div>
      </div>
    </div>
  )
}

export default LoginForm