import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { setLanguageLocale } from '../../store/reducers/language';
import formattedMessage from './languageModule';
import './Header.scss';

const Header = (props) => {
  const locale = useSelector((state) => state.language.locale);
  const dispatch = useDispatch();

  const handleChangeLang = (value) => {
    dispatch(setLanguageLocale(value));
  };
  return (
    <div className="header-container">
      <div className="profile-name">{formattedMessage.profileName}</div>
      <div className="nav-menu">
        <Button onClick={() => props.handleClick('aboutMe')} text="About me" secondary />
        <Button text="Portfolio" secondary />
        <Button onClick={() => props.handleClick('contact')} text="Contract" secondary />
      </div>
      <div className="header-lang">
        <Button
          onClick={() => handleChangeLang('en')}
          text="EN"
          secondary
          active={locale === 'en'}
        />
        <Button
          onClick={() => handleChangeLang('it')}
          text="IT"
          secondary
          active={locale === 'it'}
        />
      </div>
    </div>
  );
};

Header.propTypes = {
  // Add here some propTypes
  handleClick: PropTypes.func
};

Header.defaultProps = {
  // Add here some default propTypes values
  handleClick: () => {}
};

export default Header;
