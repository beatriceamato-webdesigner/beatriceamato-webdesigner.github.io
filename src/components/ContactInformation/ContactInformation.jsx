import React from 'react';
import { contactId, social, linkedIn, emailTo } from '../../utils/globals';
// import figmaLogo from '../../assets/svg/FIGMA.svg';
import formattedMessage from './languageModule';
import './ContactInformation.scss';

const ContactInformation = () => (
  <div id={contactId} className="contact-container">
    <div className="contact-image"></div>
    <div className="wrap-contact">
      <div className="contact-title">{formattedMessage.title}</div>
      <div className="contact-subtitle">{formattedMessage.subtitle}</div>
      {social.map(({ icon, text }, index) => (
        <div key={index} className="contact-social">
          <i className={icon}></i>
          <p>{text}</p>
        </div>
      ))}
      <div className="contact-social--link">
        <a href={linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <i className="bi bi-linkedin" aria-label="LinkedIn"></i>
        </a>
        <a href={emailTo} aria-label="Email">
          <i className="bi bi-envelope-fill" aria-label="Email"></i>
        </a>
        {/* <a href="" target="_blank" rel="noreferrer" aria-label="Figma">
            <img src={figmaLogo} aria-label="Figma" />
          </a> */}
      </div>
    </div>
  </div>
);

export default ContactInformation;
