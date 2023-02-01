import React from 'react'

import Product from '../Product';

const PopularProduct = () => {
  return (
    <section className="container mt-5">
    <h2 className="ml-2">Popular</h2>
    <p className="ml-2">Find clothes that are trending recently</p>
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

export default PopularProduct