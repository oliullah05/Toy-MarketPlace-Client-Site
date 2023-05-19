import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Subscribe from '../Subscribe/Subscribe';
import Review from '../Review/Review';
import Products from '../Products/Products';


const Home = () => {
    return (
       <div>
       <Banner></Banner>
       <Gallery></Gallery>
       <Products></Products>
    <Review></Review>
  <Subscribe></Subscribe>
 
       </div>
    );
};

export default Home;