import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCircle, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const ProductDetailInformation = (props) => {
  return (
    <div className="row">
    <div className="col-12">
      <h3 className="fw-semibold">{ props.title }</h3>
    </div>
    <div className="col-12">
      <h6 className="fw-light text-secondary">{ props.sellerName }</h6>
    </div>
    <div className="col-12 text text-warning">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      <span className="text-dark-orange">({props.rating})</span>
    </div>
    <div className="col-12 mt-3">
      <span className="fw-light text-secondary">Price</span>
      <h3 className="fw-bold">Rp { props.price }</h3>
    </div>
    <div className="col-12 fs-1 mt-3">
      <h6 className="fw-light">Color</h6>
      <FontAwesomeIcon icon={faCircle} className="text-dark" />
      <FontAwesomeIcon icon={faCircle} className="text-danger ms-2" />
      <FontAwesomeIcon icon={faCircle} className="text-primary ms-2" />
      <FontAwesomeIcon icon={faCircle} className="text-success ms-2" />
    </div>
    <div className="col-12 mt-3">
      <div className="row">
        <div className="col-3">
          <div className="row">
            <h6 className="fw-light">Size</h6>
          </div>
          <div className="row align-items-center text-center">
            <div className="col-3">
              <FontAwesomeIcon icon={faMinus} className="border border-1 border-trinary p-2 rounded-circle bg-secondary text-light" />
            </div>
            <div className="col-3">
              1
            </div>
            <div className="col-3">
              <FontAwesomeIcon icon={faPlus} className="border border-1 border-trinary p-2 rounded-circle" />
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row">
            <h6 className="fw-light">Qty</h6>
          </div>
          <div className="row align-items-center text-center">
            <div className="col-3">
            <FontAwesomeIcon icon={faMinus} className="border border-1 border-trinary p-2 rounded-circle bg-secondary text-light" />
            </div>
            <div className="col-3">
              1
            </div>
            <div className="col-3">
            <FontAwesomeIcon icon={faPlus} className="border border-1 border-trinary p-2 rounded-circle" />
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