import React, {useEffect, useState} from 'react';

import Product from '../Product';
import { useDispatch, useSelector } from 'react-redux';
import getAllProductsAction from '../../config/redux/actions/getAllProductsAction';
import axios from 'axios';

const PopularProduct = () => {
  // const dispatch = useDispatch();
  // const {products} = useSelector((state) => state.product);
  // useEffect(() => {
  //   dispatch(getAllProductsAction());
  // }, [])
  
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/products?sortBy&limit=8`)
    .then((result) => setProducts(result.data.data))
    .catch(error => console.log(error))
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
    <section className="container mt-5">
    <h2 className="ml-2 fw-semibold">Popular</h2>
    <p className="ml-2">Find clothes that are trending recently</p>
    <div className="mt-5">
      <div className="row">
      {products && products.map((item) =>
          <Product id={item.id} title={item.name} photo={item.photo} price={currencyFormat(item.price)} rating={item.rating}/>
        )}
      </div>
    </div>
  </section>
  )
}

export default PopularProduct