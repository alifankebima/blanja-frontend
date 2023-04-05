import React, {useEffect} from 'react';

import Product from '../Product';
import { useDispatch, useSelector } from 'react-redux';
import getAllProductsAction from '../../config/redux/actions/getAllProductsAction';

const NewProduct = () => {
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getAllProductsAction());
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
    <h2 className="ml-2">New</h2>
    <p className="ml-2">You've never seen it before!</p>
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

export default NewProduct;