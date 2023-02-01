import React from 'react'

const Category = () => {
  return (
    <section>
    <div className="container mt-4">
      <h2 className="fw-bolder">Category</h2>
    <p>What are you currently looking for?</p>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-auto">
          <div className="category">
            <img src="../assets/img/category-2/category-1.png" className="img-category" alt="..."></img>
          </div>
        </div>
        <div className="col-auto">
          <div className="category">
            <img src="../assets/img/category-2/category-2.png" className="img-category" alt="..."></img>
          </div>
        </div>
        <div className="col-auto">
          <div className="category">
            <img src="../assets/img/category-2/category-3.png" className="img-category" alt="..."></img>
          </div>
        </div>
        <div className="col-auto">
          <div className="category">
            <img src="../assets/img/category-2/category-4.png" className="img-category" alt="..."></img>
          </div>
        </div>
        <div className="col-auto">
          <div className="category">
            <img src="../assets/img/category-2/category-5.png" className="card-img-top img-category" alt="..."></img>
          </div>
        </div>
      </div>
    </div>
  </section>  )
}

export default Category