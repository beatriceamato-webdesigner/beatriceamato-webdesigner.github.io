import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ text, onClick, primary, secondary, icon }) => (
  <button
    type="button"
    onClick={(e) => onClick(e)}
    className={`wrap-button ${primary ? 'primary' : ''}${secondary ? 'secondary' : ''}`}>
    {text}
    {icon && <i className={icon}></i>}
  </button>
);

Button.propTypes = {
  // Add here some propTypes
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  icon: PropTypes.string
};

Button.defaultProps = {
  // Add here some default propTypes values
  text: '',
  onClick: () => {},
  primary: false,
  secondary: false,
  icon: ''
};

export default Button;
