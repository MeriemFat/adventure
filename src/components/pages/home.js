import React from 'react';
import '../../App.css';
import Cards from '../cards';
import HeroSection from '../heroSection';
import Footer from '../footer';
function Home() {
  return (
    <>
      <HeroSection/>
      <Cards />
      <Footer/>
    </>
  );
}

export default Home;
