import React from 'react';
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

const ProductDetail = () => {
  const{id} = useParams();

  return (
    <body>
      <Navbar />
      <Directory /> <div>{id}</div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <ProductDetailImage />
          </div>
          <div className="col-8">
            <ProductDetailInformation />
          </div>
        </div>
      </div>
      <ProductDetailDescription />
      <ProductDetailRating />
      <ProductRecommendation />
    </body>
  )
}

export default ProductDetail