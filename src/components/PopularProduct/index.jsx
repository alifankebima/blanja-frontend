import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';

import Product from '../Product';

const PopularProduct = () => {
  const [products, setProducts] = useState([{}]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/products`).then(function (response){
      setProducts(response.data.data);
    }).catch(function (error){
      console.log(error);
    });
    console.log(products);
  }, [])

  return (
    <section className="container mt-5">
    <h2 className="ml-2">Popular</h2>
    <p className="ml-2">Find clothes that are trending recently</p>
    <div className="mt-5">
      <div className="row">
      {products.map((item) =>
          <Product id={item.id} title={item.name} photo={item.photo} price={item.price} rating={item.rating}/>
        )}
      </div>
    </div>
  </section>
  )
}

export default PopularProduct