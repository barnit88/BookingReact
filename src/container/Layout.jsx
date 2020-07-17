import React from 'react';
import NavBar from './NavBar'
import ImageCarousel from './Carousel';
import Footer from './Footer';


function StartingLayout() {
  return (
    <div>
      <NavBar />
      <ImageCarousel />
      <Footer /> 
    </div>     
  );
}

export default StartingLayout;

