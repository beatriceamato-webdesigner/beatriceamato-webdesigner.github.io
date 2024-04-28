import React from 'react';
// import PropTypes from 'prop-types';
import { clientsId } from '../../utils/globals';
import { logos } from './utility';
import Button from '../../components/Button/Button';
import formattedMessage from './languageModule';
import './Clients.scss';

const Clients = () => (
  <div id={clientsId} className="clients-container">
    <div className="clients-title">
      <span>
        {formattedMessage.title1}
        <span className="clients-beauty">&nbsp;{formattedMessage.titleBeauty}&nbsp;</span>
        {formattedMessage.title2}
      </span>
    </div>
    <div className="client-list">
      {logos.map((logo, index) => (
        <img key={index} className={`client-item ${logo.src}`} alt={logo.alt} />
      ))}
    </div>
    <div className="btn-more_clients">
      <Button text={formattedMessage.findOutMore} primary />
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
