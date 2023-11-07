import React from 'react';
import Anchor from '../../components/Anchor/Anchor';
import cv from '../../assets/CV.pdf';
import './ServicePage.scss';

function ServicePage() {
  return (
    <div className="service-backgroung">
      <div className="service-container">
        <div className="service-content">
          <span className="service-title">WORK IN PROGRESS</span>
          <span className="service-subtitle">
            Ciao, al momento stiamo lavorando per migliorare il nostro sito. Vi invitiamo a rimanere
            sintonizzati per ulteriori aggiornamenti.
          </span>
          <Anchor
            href={cv}
            text="Download CV"
            icon="bi bi-arrow-down"
            nameDownload="CV-BeatriceAmato"
          />
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
