import React, { Fragment } from 'react';

import PopularProduct from '../components/PopularProduct';
import NewProduct from '../components/NewProduct';
import Carousel from '../components/Carousel';
import Category from '../components/Category';
import Navbar from '../components/Navbar';

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