import React, {useEffect, Fragment} from 'react';
import { useParams } from 'react-router-dom';

import '../assets/css/common.css';
import '../assets/css/mystyles.css';
import Directory from '../components/Directory';
import Navbar from '../components/Navbar';
import ProductDetailDescription from '../components/ProductDetailDescription';
import ProductDetailImage from '../components/ProductDetailImage';
import ProductDetailInformation from '../components/ProductDetailInformation';
import ProductDetailRating from '../components/ProductDetailRating';
import ProductRecommendation from '../components/ProductRecommendation';
import getProductDetailAction from '../config/redux/actions/getDetailProductAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetail = () => {
  const{id} = useParams();
  const dispatch = useDispatch();
  const {productDetail} = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductDetailAction(id));
  }, [])
  
  return (
    <Fragment>
      <Navbar />
      <Directory category={productDetail.category}/>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <ProductDetailImage image={productDetail.photo}/>
          </div>
          <div className="col-8">
            <ProductDetailInformation title={productDetail.name} price={productDetail.price} sellerName={productDetail.seller_name} rating={productDetail.rating}/>
          </div>
        </div>
      </div>
      <ProductDetailDescription description={productDetail.description} />
      <ProductDetailRating rating={productDetail.rating}/>
      <ProductRecommendation />
    </Fragment>
  )
}

export default ProductDetail