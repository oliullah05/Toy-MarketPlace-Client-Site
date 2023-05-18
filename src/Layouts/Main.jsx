import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../Pages/Home/Banner/Banner.jsx';

const Main = () => {
    return (
        <>
      <Navbar></Navbar>
      {/* <Banner></Banner> */}
      <Outlet></Outlet>
        </>
    );
};

export default Main;