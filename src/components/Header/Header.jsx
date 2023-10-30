import React from 'react';
import './Header.scss';

const Header = () => (
  <div className="container">
    <div className="profile-name">Beatrice Amato</div>
    <div className="navbar">
      <a className="nav-link">About me</a>
      <a className="nav-link">Portfolio</a>
      <a className="nav-link">Contract</a>
    </div>
    <div>IT</div>
  </div>
);

export default Header;
