import React from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
  
  return (
    <div class="row justify-content-center mt-4">
      <div class="col-lg-4 col-md-6 col-sm-8">
        <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="selector-customer active" id="pills-Customer-tab" data-bs-toggle="pill"
              data-bs-target="#pills-Customer" type="button" role="tab" aria-controls="pills-Customer"
              aria-selected="true">Customer</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="selector-seller" id="pills-Seller-tab" data-bs-toggle="pill"
              data-bs-target="#pills-Seller" type="button" role="tab" aria-controls="pills-Seller"
              aria-selected="false">Seller</button>
          </li>
        </ul>

        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-Customer" role="tabpanel"
            aria-labelledby="pills-Customer-tab" tabindex="0">
            <form class="pt-4">
              <div class="mb-3">
                <input type="text" class="form-control py-2 px-3" id="name" name="name" placeholder="Name" />
              </div>

              <div class="mb-3">
                <input type="email" class="form-control py-2 px-3" id="email" name="email" placeholder="Email" />
              </div>

              <div class="mb-3">
                <input type="password" class="form-control py-2 px-3" id="password" name="password"
                  placeholder="Password" />
              </div>

              <button type="submit" class="button w-100 p-2 rounded-pill bg-dark-orange text-soft-white mt-4">Create Account</button>
            </form>
          </div>
          <div class="tab-pane fade" id="pills-Seller" role="tabpanel" aria-labelledby="pills-Seller-tab" tabindex="0">
            <form class="pt-4">
              <div class="mb-3">
                <input type="text" class="form-control py-2 px-3" id="name" name="name" placeholder="Name" />
              </div>
              <div class="mb-3">
                <input type="email" class="form-control py-2 px-3" id="email" name="email" placeholder="Email" />
              </div>
              <div class="mb-3">
                <input type="text" class="form-control py-2 px-3" id="phone" name="phone"
                  placeholder="Phone number" />
              </div>
              <div class="mb-3">
                <input type="text" class="form-control py-2 px-3" id="store-name" name="store-name" placeholder="Store Name" />
              </div>
              <div class="mb-3">
                <input type="password" class="form-control py-2 px-3" id="password" name="password"
                  placeholder="Password" />
              </div>
              <button type="submit" class="button w-100 p-2 rounded-pill bg-dark-orange text-soft-white mt-4">Create Account</button>
            </form>
          </div>
        </div>
        <div>
          <p class="mt-5">Already have a Blanja account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm