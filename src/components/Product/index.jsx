import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Product = (props) => {
  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <Link to={"/products/" + props.id}>
        <div className="border rounded">
          <img className="w-100" crossOrigin='anonymous' src={props.photo} alt="product" />
          <div className="p-2">
            <h6 className="card-title text-dark">{props.title}</h6>
            <h5 className="text-dark-orange">Rp {props.price}</h5>
            <div className="d-flex gap-1 align-items-center text-warning">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <span className="text-dark-orange">{'(' + props.rating + ')'}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Product;