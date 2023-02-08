import React, {useEffect} from 'react';

import Product from '../Product';
import { useDispatch, useSelector } from 'react-redux';
import getAllProductsAction from '../../config/redux/actions/getAllProductsAction';

const PopularProduct = () => {
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getAllProductsAction());
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