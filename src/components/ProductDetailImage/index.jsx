import React from 'react'

const ProductDetailImage = (props) => {
  return (
    <div className="row">
            <div className="col-12">
              <img className="img-fluid rounded" src={props.image} alt="Main product" />
            </div>
            <div className="col-12 mt-2">
              <div className="row">
                <div className="col">
                  <img className="img-fluid rounded" src={props.image} alt="Chooser 1" />
                </div>
                <div className="col">
                  <img className="img-fluid rounded"  src={props.image} alt="Chooser 2" />
                </div>
                <div className="col">
                  <img className="img-fluid rounded" src={props.image} alt="Chooser 3" />
                </div>
                <div className="col">
                  <img className="img-fluid rounded" src={props.image} alt="Chooser 4" />
                </div>
                <div className="col">
                  <img className="img-fluid rounded" src={props.image} alt="Chooser 5" />
                </div>
              </div>
            </div>
          </div>
    )
}

export default ProductDetailImage