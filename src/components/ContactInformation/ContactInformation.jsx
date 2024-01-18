import React from 'react';
// import figmaLogo from '../../assets/svg/FIGMA.svg';
import './ContactInformation.scss';

const ContactInformation = () => {
  const social = [
    {
      icon: 'bi bi-telephone-fill',
      text: '+39 334 7199 813'
    },
    {
      icon: 'bi bi-geo-alt-fill',
      text: 'Milano, Italia'
    },
    {
      icon: 'bi bi-envelope-fill',
      text: 'beatrice.amato20@gmail.com'
    },
    {
      icon: 'bi bi-linkedin',
      text: 'beatrice-amato'
    }
  ];

  return (
    <div id="contact" className="contact-container">
      <div className="contact-image"></div>
      <div className="wrap-contact">
        <div className="contact-title">Contact Information</div>
        <div className="contact-subtitle">Say something to start a live chat</div>
        {social.map(({ icon, text }, index) => (
          <div key={index} className="contact-social">
            <i className={icon}></i>
            <p>{text}</p>
          </div>
        ))}
        <div className="contact-social--link">
          <a href="https://www.linkedin.com/in/beatrice-amato/" target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="mailto:beatrice.amato20@gmail.com?subject=Info&body=Hi Beatrice,%0D%0D%0DSignature:">
            <i className="bi bi-envelope-fill"></i>
          </a>
          {/* <a href="" target="_blank" rel="noreferrer">
            <img src={figmaLogo} />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
