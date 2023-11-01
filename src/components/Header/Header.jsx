import React from 'react';
import './Header.scss';

const Header = () => (
  <div className="header-container">
    <div className="profile-name">Beatrice Amato</div>
    <div className="nav-menu">
      <a className="nav-link">About me</a>
      <a className="nav-link">Portfolio</a>
      <a className="nav-link">Contract</a>
    </div>
    <div>IT</div>
  </div>
);

export default Header;
