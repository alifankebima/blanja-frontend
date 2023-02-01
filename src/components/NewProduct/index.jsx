import React from 'react';

import Product from '../Product';

const NewProduct = () => {
  return (
    <section className="container mt-5">
    <h2 className="ml-2 fw-bolder">New</h2>
    <p className="ml-2">You've never seen it before!</p>
    <div className="mt-5">
      <div className="row">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  </section>
  )
}

export default NewProduct;