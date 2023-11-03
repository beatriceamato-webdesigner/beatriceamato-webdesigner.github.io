import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './Header.scss';

const Header = (props) => (
  <div className="header-container">
    <div className="profile-name">Beatrice Amato</div>
    <div className="nav-menu">
      <Button onClick={() => props.handleClick('aboutMe')} text="About me" secondary />
      <Button text="Portfolio" secondary />
      <Button onClick={() => props.handleClick('contact')} text="Contract" secondary />
    </div>
    <div>IT</div>
  </div>
);

Header.propTypes = {
  // Add here some propTypes
  handleClick: PropTypes.func
};

Header.defaultProps = {
  // Add here some default propTypes values
  handleClick: () => {}
};

export default Header;
