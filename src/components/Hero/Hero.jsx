import React from 'react';
import PropTypes from 'prop-types';
import { clientsId, nameDownloadCV } from '../../utils/globals';
import Button from '../../components/Button/Button';
import Anchor from '../../components/Anchor/Anchor';
import cv from '../../assets/CV.pdf';
import formattedMessage from './languageModule';
import './Hero.scss';

const Hero = (props) => (
  <div className="hero-container">
    <div className="wrap-hero">
      <div className="hero-title">
        {formattedMessage.title}
        <span className="hero-title__job1">{formattedMessage.titleJob1}</span>
        &nbsp;{formattedMessage.and}&nbsp;
        <span className="hero-title__job2">{formattedMessage.titleJob2}</span>
      </div>
      <div className="hero-subtitle">{formattedMessage.subtitle}</div>
      <div className="hero-actions">
        <Button
          text={formattedMessage.findOutMore}
          primary
          onClick={() => props.handleClick(clientsId)}
        />
        <Anchor
          href={cv}
          text={formattedMessage.downloadCV}
          icon="bi bi-arrow-down"
          nameDownload={nameDownloadCV}
        />
      </div>
    </div>
    <div className="hero-image"></div>
  </div>
);

Hero.propTypes = {
  // Add here some propTypes
  handleClick: PropTypes.func
};

Hero.defaultProps = {
  // Add here some default propTypes values
  handleClick: null
};

export default Hero;
