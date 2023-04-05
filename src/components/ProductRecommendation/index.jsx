import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Product from '../Product';

const ProductRecommendation = () => {
  const [products, setProducts] = useState([{}]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/products?limit=8`).then(function (response){
      setProducts(response.data.data);
    }).catch(function (error){
      console.log(error);
    });
  }, [])

  const currencyFormat = (num) => {
    return (
      'Rp. ' +
      Number(num)
        .toFixed(0)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    );
  };

  return (
    <div className="container mt-4">
    <span className="fs-5 fw-semibold">You may also like this</span>
    <section className="container">
      <div className="mt-3">
        <div className="row">
        {products.map((item) =>
          <Product id={item.id} title={item.name} photo={item.photo} price={currencyFormat(item.price)} rating={item.rating}/>
        )}
        </div>
      </div>
    </section>
  </div>
  )
}

export default ProductRecommendation;