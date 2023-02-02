import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCircle, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const ProductDetailRating = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
            <span className="fs-1 fw-bolder">
              5.0
            </span>
            <span>
              /{props.rating}
            </span>
            <div className="col-12 text-warning">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            </div>
        </div>
        <div className="col-3">
          <div className="row">
            {/* <div className="col-12">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailRating