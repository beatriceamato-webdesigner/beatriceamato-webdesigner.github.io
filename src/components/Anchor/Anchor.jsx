import React from 'react';
import PropTypes from 'prop-types';
import './Anchor.scss';

const Anchor = ({ href, text, nameDownload, icon, onClick }) => (
  <a
    href={href}
    download={nameDownload ? nameDownload : ''}
    onClick={onClick ? (e) => onClick(e) : null}
    className="wrap-anchor">
    {text}
    {icon && <i className={icon}></i>}
  </a>
);

Anchor.propTypes = {
  // Add here some propTypes
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  nameDownload: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func
};

Anchor.defaultProps = {
  // Add here some default propTypes values
  text: '',
  nameDownload: '',
  href: '',
  icon: '',
  onClick: () => {}
};

export default Anchor;
