import React from 'react'

const ProductDetailInformation = () => {
  return (
    <div className="row">
    <div className="col-12">
      <h3 className="fw-semibold">Men's muslim shirt</h3>
    </div>
    <div className="col-12">
      <h6 className="fw-light text-secondary">Zalora Cloth</h6>
    </div>
    <div className="col-12 text text-warning">
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <span className="text-dark-orange">(10)</span>
    </div>
    <div className="col-12 mt-3">
      <span className="fw-light text-secondary">Price</span>
      <h3 className="fw-bold">$ 20.0</h3>
    </div>
    <div className="col-12 fs-1 mt-3">
      <h6 className="fw-light">Color</h6>
      <i className="fa-solid fa-circle text-dark"></i>
      <i className="fa-solid fa-circle text-danger"></i>
      <i className="fa-solid fa-circle text-primary"></i>
      <i className="fa-solid fa-circle text-success"></i>
    </div>
    <div className="col-12 mt-3">
      <div className="row">
        <div className="col-3">
          <div className="row">
            <h6 className="fw-light">Size</h6>
          </div>
          <div className="row align-items-center text-center">
            <div className="col-3">
              <i className="fa-solid fa-minus border border-1 border-trinary p-2 rounded-circle bg-secondary text-light"></i>
            </div>
            <div className="col-3">
              1
            </div>
            <div className="col-3">
              <i className="fa-solid fa-plus border border-1 border-trinary p-2 rounded-circle"></i>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row">
            <h6 className="fw-light">Qty</h6>
          </div>
          <div className="row align-items-center text-center">
            <div className="col-3">
              <i className="fa-solid fa-minus border border-1 border-trinary p-2 rounded-circle bg-secondary text-light"></i>
            </div>
            <div className="col-3">
              1
            </div>
            <div className="col-3">
              <i className="fa-solid fa-plus border border-1 border-trinary p-2 rounded-circle"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 mt-3">
      <div className="row">
        <div className="col-4">
          <button className="btn py-2 border border-2 border-dark text-dark w-100 rounded-pill">Chat</button>
        </div>
        <div className="col-4">
          <button className="btn py-2 border border-2 border-dark text-dark w-100 rounded-pill">Add Bag</button>
        </div>
        <div className="col-4">
          <button className="btn rounded-pill py-2 w-100 bg-danger text-light">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductDetailInformation;