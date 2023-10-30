import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Clients from '../../components/Clients/Clients';
import AboutMe from '../../components/AboutMe/AboutMe';
import './Home.scss';

const Home = () => (
  <div className="background-image">
    <Header />
    <Hero />
    <Clients />
    <AboutMe />
  </div>
);

export default Home;
