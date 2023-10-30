import React from 'react';
import Button from '../../components/Button/Button';
import Anchor from '../../components/Anchor/Anchor';
import cv from '../../assets/CV.pdf';
import './Hero.scss';

const Hero = () => (
  <div className="hero-container">
    <div className="wrap-hero">
      <div className="hero-title">
        Hi! I am Beatrice Amato <span className="hero-title__job1">Digital Art Director</span> and{' '}
        <span className="hero-title__job2">UI/UX Designer</span>
      </div>
      <div className="hero-subtitle">
        On this website, you will have access to a comprehensive list of clients I have collaborated
        with over time, as well as a selection of projects I have undertaken throughout the years.
      </div>
      <div className="hero-actions">
        <Button text="Find out more" primary />
        <Anchor
          href={cv}
          text="Download CV"
          icon="bi bi-arrow-down"
          nameDownload="CV-BeatriceAmato"
        />
      </div>
    </div>
    <div className="hero-image"></div>
  </div>
);

export default Hero;
