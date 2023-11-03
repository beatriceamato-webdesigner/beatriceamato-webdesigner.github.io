/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Anchor from '../../components/Anchor/Anchor';
import cv from '../../assets/CV.pdf';
import './AboutMe.scss';

const AboutMe = () => (
  <div id="aboutMe" className="about-container">
    <div className="wrap-about">
      <div className="about-title">About me</div>
      <div className="about-subtitle">
        <span>
          Hello, I`m Beatrice. My hometown is Caltagirone, located in the inland of Sicily. I`ve
          always studied in Caltagirone at the "Steve Jobs" Academy, where I delved into{' '}
          <b>Digital Marketing</b> and <b>visual communication.</b> Later, I moved to Milan for
          work, specializing in <b>Digital Art Direction</b> and <b>UI/UX Design.</b>
          <br />
          <br />
          <b>If you`d like to learn more,</b> I encourage you to download my Curriculum Vitae below
          ⬇️
        </span>
      </div>
      <div className="about-actions">
        <Anchor
          href={cv}
          text="Download CV"
          icon="bi bi-arrow-down"
          nameDownload="CV-BeatriceAmato"
        />
      </div>
    </div>
    <div className="about-image"></div>
  </div>
);

export default AboutMe;
