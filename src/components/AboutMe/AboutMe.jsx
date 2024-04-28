/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { aboutMeId, nameDownloadCV } from '../../utils/globals';
import Anchor from '../../components/Anchor/Anchor';
import cv from '../../assets/CV.pdf';
import formattedMessage from './languageModule';
import './AboutMe.scss';

const AboutMe = () => (
  <div id={aboutMeId} className="about-container">
    <div className="wrap-about">
      <div className="about-title">{formattedMessage.title}</div>
      <div className="about-subtitle">
        <span>
          {formattedMessage.subtitle1}
          <br />
          <br />
          {formattedMessage.subtitle2}
          ⬇️
        </span>
      </div>
      <div className="about-actions">
        <Anchor
          href={cv}
          text={formattedMessage.downloadCV}
          icon="bi bi-arrow-down"
          nameDownload={nameDownloadCV}
        />
      </div>
    </div>
    <div className="about-image"></div>
  </div>
);

export default AboutMe;
