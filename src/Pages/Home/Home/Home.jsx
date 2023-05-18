import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Subscribe from '../Subscribe/Subscribe';
import Review from '../Review/Review';


const Home = () => {
    return (
       <div>
       <Banner></Banner>
       <Gallery></Gallery>
 <Review></Review>
  <Subscribe></Subscribe>
 
       </div>
    );
};

export default Home;