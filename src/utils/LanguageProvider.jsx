import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import translationMessages from '../translations/index';

export function LanguageProvider({ locale, children }) {
  return (
    <IntlProvider locale={locale} key={locale} messages={translationMessages[locale]}>
      {React.Children.only(children)}
    </IntlProvider>
  );
}

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  children: PropTypes.element.isRequired
};

LanguageProvider.defaultProps = {
  locale: 'en'
};

export default LanguageProvider;
