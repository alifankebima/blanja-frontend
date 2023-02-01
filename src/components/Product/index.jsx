import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Product = () => {
  return (
    <div className="col-md-3 col-sm-6 mb-5">
    <div className="border rounded">
    <img className="w-100" src="../assets/img/product/mens-formal-suit.png" alt="formal suit"/>
    <div className="p-2">
      <h6 className="card-title">Men's formal suit - Black & White</h6>
      <h5 className="text-dark-orange">$ 40.0</h5>
        <div className="d-flex gap-1 align-items-center text-warning">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <span className="text-dark-orange">(10)</span>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Product;