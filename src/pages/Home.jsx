import React, { Fragment } from 'react';

import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Category from '../components/Category';
import NewProduct from '../components/NewProduct';
import PopularProduct from '../components/PopularProduct';

const Home = () => {

  return (
    <Fragment>
      <Navbar />
      <main>
        <Carousel />
        <Category />
        <NewProduct />
        <PopularProduct />
      </main>
    </Fragment>
  )
}

export default Home;