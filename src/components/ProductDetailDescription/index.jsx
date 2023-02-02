import React from 'react'

const ProductDetailDescription = (props) => {
  return (
    <div className="container mt-4">
    <div className="row">
      <div className="col-12">
        <span className="fs-3">Product Information</span>
        <div className="mt-4">
          <span className="fs-5 fw-semibold">Condition</span><br/>
          <span className="fs-6 fw-semibold text-dark-orange">New</span>
        </div>
        <div className="mt-4">
        <span className="fs-5 fw-semibold">Description</span>
        <p className="text-secondary">{props.description}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductDetailDescription