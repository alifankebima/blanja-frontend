import React, {useState, useEffect, Fragment} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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

  const [product, setProduct] = useState([{}]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/products/${id}`)
    .then(function (response){
      setProduct(response.data.data);
      console.log(response.data.data);
    })
    .catch(function (error){
      console.log(error);
    });
  }, [])
  
  return (
    <Fragment>
      {/* {product.color} */}
      <Navbar />
      <Directory category={product.category}/>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <ProductDetailImage image={product.photo}/>
          </div>
          <div className="col-8">
            <ProductDetailInformation title={product.name} price={product.price} sellerName={product.seller_name} rating={product.rating}/>
          </div>
        </div>
      </div>
      <ProductDetailDescription description={product.description} />
      <ProductDetailRating rating={product.rating}/>
      <ProductRecommendation />
    </Fragment>
  )
}

export default ProductDetail