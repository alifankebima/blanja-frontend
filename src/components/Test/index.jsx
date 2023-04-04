import React, { Fragment, useState } from 'react';
import Product from '../Product';

const Test = () => {
  const [product, setProduct] = useState("");

  setProduct()
  return (
    <div ClassName="container">
      <Product title={product.title} />
    </div>
  )
}

export default Test
