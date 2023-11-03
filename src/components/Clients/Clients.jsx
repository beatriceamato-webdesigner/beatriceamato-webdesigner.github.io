import React from 'react';
// import PropTypes from 'prop-types';
import { logos } from './utility';
import Button from '../../components/Button/Button';
import './Clients.scss';

const Clients = () => (
  <div id="clients" className="clients-container">
    <div className="clients-title">
      <span>
        Some of the<span className="clients-beauty">clients</span>I have designed for
      </span>
    </div>
    <div className="client-list">
      {logos.map((logo, index) => (
        <img key={index} className="client-item" src={logo.src} alt={logo.alt} />
      ))}
    </div>
    <div className="btn-more_clients">
      <Button text="Find out more" primary />
    </div>
  </div>
);

Clients.propTypes = {
  // Add here some propTypes
};

Clients.defaultProps = {
  // Add here some default propTypes values
};

export default Clients;
