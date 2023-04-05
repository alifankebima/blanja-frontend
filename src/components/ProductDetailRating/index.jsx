import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaStar } from 'react-icons/fa';

const ProductDetailRating = (props) => {
  return (
    <div className='container mt-2'>
      <span className="fs-5 fw-semibold">Product Review</span><br />
      <div className="d-flex">
        <div className="d-flex flex-column justify-content-center">
          <div className="d-flex">
            <div className="fw-semibold fs-1 align-self-end">5.0</div>
            <div className="fw-semibold fs-5 text-secondary align-self-center ms-1 mt-2">/{props.rating}</div>
          </div>
          <div className="d-flex">
            <FaStar className='text-warning me-1' />
            <FaStar className='text-warning me-1' />
            <FaStar className='text-warning me-1' />
            <FaStar className='text-warning me-1' />
            <FaStar className='text-warning me-1' />
          </div>
        </div>
        <div className="d-flex flex-column ms-4" style={{ width: "200px" }}>
          <div className="d-flex align-items-center">
            <FaStar className='text-warning me-1' />
            <div className="text-secondary mt-1 ms-1">5</div>
            <div className="progress ms-3" role="progressbar" style={{ width: "120px", height: "6px" }} aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-warning" style={{ width: "100%" }}></div>
            </div>
            <div className="text-secondary mt-1 ms-3">{props.rating}</div>
          </div>
          <div className="d-flex align-items-center">
            <FaStar className='text-warning me-1' />
            <div className="text-secondary mt-1 ms-1">4</div>
            <div className="progress ms-3" role="progressbar" style={{ width: "120px", height: "6px" }} aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-warning" style={{ width: "0%" }}></div>
            </div>
            <div className="text-secondary mt-1 ms-3">0</div>
          </div>
          <div className="d-flex align-items-center">
            <FaStar className='text-warning me-1' />
            <div className="text-secondary mt-1 ms-1">3</div>
            <div className="progress ms-3" role="progressbar" style={{ width: "120px", height: "6px" }} aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-warning" style={{ width: "0%" }}></div>
            </div>
            <div className="text-secondary mt-1 ms-3">0</div>
          </div>
          <div className="d-flex align-items-center">
            <FaStar className='text-warning me-1' />
            <div className="text-secondary mt-1 ms-1">2</div>
            <div className="progress ms-3" role="progressbar" style={{ width: "120px", height: "6px" }} aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-warning" style={{ width: "0%" }}></div>
            </div>
            <div className="text-secondary mt-1 ms-3">0</div>
          </div>
          <div className="d-flex align-items-center">
            <FaStar className='text-warning me-1' />
            <div className="text-secondary mt-1" style={{marginLeft:"7px"}}>1</div>
            <div className="progress ms-3" role="progressbar" style={{ width: "120px", height: "6px" }} aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar bg-warning" style={{ width: "0%" }}></div>
            </div>
            <div className="text-secondary mt-1 ms-3">0</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailRating