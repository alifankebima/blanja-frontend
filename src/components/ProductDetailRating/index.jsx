import React from 'react'

const ProductDetailRating = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <div className="row">
            <div className="col-12 fs-1 fw-bolder">
              5.0
            </div>
            <div className="col-12">
              /10
            </div>
            <div className="col-12 text-warning">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row">
            <div className="col-12">
              <i className="fa-solid fa-star text-warning"></i> 5
            </div>
            <div className="col-12">
              <i className="fa-solid fa-star text-warning"></i> 4
            </div>
            <div className="col-12">
              <i className="fa-solid fa-star text-warning"></i> 3
            </div>
            <div className="col-12">
              <i className="fa-solid fa-star text-warning"></i> 2
            </div>
            <div className="col-12">
              <i className="fa-solid fa-star text-warning"></i> 1
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailRating