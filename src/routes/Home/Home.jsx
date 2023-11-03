import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Clients from '../../components/Clients/Clients';
import AboutMe from '../../components/AboutMe/AboutMe';
import Carousel from '../../components/Carousel/Carousel';
import './Home.scss';

const Home = () => {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="background-image">
      <Header handleClick={handleClick} />
      <Hero handleClick={handleClick} />
      <Clients />
      <AboutMe />
      <Carousel />
    </div>
  );
};

export default Home;
